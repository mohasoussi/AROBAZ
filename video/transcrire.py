"""Transcrit un enregistrement en morceaux horodatés (Whisper, hors ligne).

Usage : python transcrire.py enregistrement.m4a sortie.json
Sortie : liste de {debut, fin, texte} : un morceau = une suite de parole entre deux silences.
"""
import json, subprocess, sys
import numpy as np
import sherpa_onnx

SR = 16000
HOP = 0.01
M = "models/stt/sherpa-onnx-whisper-small/small"


def charger(chemin):
    brut = subprocess.run(["ffmpeg", "-v", "error", "-i", chemin, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                          capture_output=True, check=True).stdout
    return np.frombuffer(brut, dtype=np.float32).copy()


def morceaux(y, silence_min=0.28, max_s=24.0):
    n = int(SR * HOP)
    m = len(y) // n
    rms = np.sqrt(np.mean(y[: m * n].reshape(m, n) ** 2, axis=1) + 1e-12)
    db = 20 * np.log10(rms)
    seuil = np.percentile(db, 90) - 30
    parole = db > seuil
    # suites de parole, fusionnées quand le silence qui les sépare est court
    runs, i = [], 0
    while i < m:
        if parole[i]:
            j = i
            while j < m and parole[j]:
                j += 1
            runs.append([i * HOP, j * HOP]); i = j
        else:
            i += 1
    out = []
    for r in runs:
        if out and r[0] - out[-1][1] < silence_min:
            out[-1][1] = r[1]
        else:
            out.append(r)
    out = [(a, b) for a, b in out if b - a >= 0.25]
    # découpe les morceaux trop longs au plus grand silence interne
    final = []
    for d, f in out:
        stack = [(d, f)]
        while stack:
            a, b = stack.pop()
            if b - a <= max_s:
                final.append((a, b)); continue
            ia, ib = int(a / HOP), int(b / HOP)
            seg = db[ia:ib] <= seuil + 6
            best, bl, i2 = None, 0, 0
            while i2 < len(seg):
                if seg[i2]:
                    j2 = i2
                    while j2 < len(seg) and seg[j2]:
                        j2 += 1
                    if j2 - i2 > bl and 0.15 * len(seg) < (i2 + j2) / 2 < 0.85 * len(seg):
                        best, bl = (i2 + j2) // 2, j2 - i2
                    i2 = j2
                else:
                    i2 += 1
            cut = (ia + best) * HOP if best else (a + b) / 2
            stack += [(cut, b), (a, cut)]
    return sorted(final)


def main(entree, sortie):
    y = charger(entree)
    reco = sherpa_onnx.OfflineRecognizer.from_whisper(
        encoder=f"{M}-encoder.int8.onnx", decoder=f"{M}-decoder.int8.onnx", tokens=f"{M}-tokens.txt",
        language="fr", task="transcribe", num_threads=4)
    res = []
    for k, (d, f) in enumerate(morceaux(y)):
        seg = y[int(max(0, d - 0.1) * SR): int((f + 0.1) * SR)]
        s = reco.create_stream()
        s.accept_waveform(SR, seg)
        reco.decode_stream(s)
        res.append({"debut": round(d, 2), "fin": round(f, 2), "texte": s.result.text.strip()})
        print(f"{k:3d} {d:6.1f}-{f:6.1f} {res[-1]['texte'][:110]}", flush=True)
    json.dump(res, open(sortie, "w"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
