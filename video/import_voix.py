"""Importe une voix enregistrée (humaine ou service) et retrouve le minutage des phrases.

Deux modes :
  python import_voix.py N dossier/     un fichier par scène : scene-00.mp3, scene-01.wav…
  python import_voix.py N lecon.mp3    un seul fichier pour toute la leçon

Le minutage se déduit des silences : on connaît le nombre de phrases de chaque scène, donc on
retient les silences les plus longs comme frontières entre phrases. Les silences entre scènes
sont les plus longs. Sortie identique à tts.py : out/lecon-N/scene-XX.wav + timing.json.
"""
import json, subprocess, sys
from pathlib import Path
import numpy as np
import soundfile as sf
from common import phrases

SR = 24000
LEAD, TAIL = 0.5, 1.0
HOP = 0.01
MIN_GAP = 0.12


def charger(chemin: str) -> np.ndarray:
    brut = subprocess.run(["ffmpeg", "-v", "error", "-i", chemin, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                          capture_output=True, check=True).stdout
    return np.frombuffer(brut, dtype=np.float32).copy()


def silences(y: np.ndarray, decalage_db: float):
    """Renvoie (parole_debut, parole_fin, [(debut, fin) des silences internes]) en secondes."""
    n = int(SR * HOP)
    m = len(y) // n
    rms = np.sqrt(np.mean(y[: m * n].reshape(m, n) ** 2, axis=1) + 1e-12)
    db = 20 * np.log10(rms)
    parole = db > (np.percentile(db, 90) - decalage_db)
    idx = np.where(parole)[0]
    if len(idx) == 0:
        raise SystemExit("aucune parole détectée dans l'audio")
    d, f = idx[0], idx[-1]
    trous, i = [], d
    while i <= f:
        if not parole[i]:
            j = i
            while j <= f and not parole[j]:
                j += 1
            if (j - i) * HOP >= MIN_GAP:
                trous.append((i * HOP, j * HOP))
            i = j
        else:
            i += 1
    return d * HOP, (f + 1) * HOP, trous


def frontieres(y, n_phrases_total):
    """Choisit n_phrases_total-1 silences : les plus longs. Renvoie debuts/fins de chaque phrase."""
    for decal in (32, 28, 24, 20, 16):
        deb, fin, trous = silences(y, decal)
        if len(trous) >= n_phrases_total - 1:
            break
    if len(trous) < n_phrases_total - 1:
        return deb, fin, None, len(trous)
    choisis = sorted(sorted(trous, key=lambda t: t[1] - t[0], reverse=True)[: n_phrases_total - 1])
    starts = [deb] + [t[1] for t in choisis]
    ends = [t[0] for t in choisis] + [fin]
    return deb, fin, list(zip(starts, ends)), len(trous)


def proportionnel(deb, fin, textes):
    tot = sum(len(t) for t in textes)
    out, t = [], deb
    for x in textes:
        d = (fin - deb) * len(x) / tot
        out.append((t, t + d)); t += d
    return out


def main(num: int, chemin: str):
    lecon = next(l for l in json.load(open("build/lecons.json")) if l["numero"] == num)
    scenes = [phrases(s["voix"]) for s in lecon["scenes"]]
    comptes = [len(p) for p in scenes]
    sortie = Path(f"out/lecon-{num}")
    sortie.mkdir(parents=True, exist_ok=True)
    p = Path(chemin)

    # 1) phrases (début, fin) absolues dans un audio par scène
    morceaux = []   # (audio, [(debut, fin) par phrase])
    if p.is_dir():
        for i, tx in enumerate(scenes):
            f = next(iter(sorted(p.glob(f"scene-{i:02d}.*"))), None) or next(iter(sorted(p.glob(f"scene-{i + 1:02d}.*"))), None)
            if f is None:
                raise SystemExit(f"fichier manquant pour la scène {i} (scene-{i:02d}.mp3/wav/m4a)")
            y = charger(str(f))
            deb, fin, pos, nb = frontieres(y, len(tx))
            if pos is None:
                print(f"  ⚠ scène {i}: seulement {nb} silences pour {len(tx)} phrases, minutage estimé")
                pos = proportionnel(deb, fin, tx)
            morceaux.append((y, pos))
    else:
        y = charger(str(p))
        total = sum(comptes)
        deb, fin, pos, nb = frontieres(y, total)
        if pos is None:
            raise SystemExit(f"{nb} silences trouvés pour {total} phrases : enregistrement trop continu. "
                             "Marquez davantage les pauses entre phrases, ou envoyez un fichier par scène.")
        k = 0
        for c in comptes:
            morceaux.append((y, pos[k:k + c])); k += c

    # 2) découpe par scène, avec silence avant/après, et contrôle de plausibilité
    meta = {"numero": num, "titre": lecon["titre"], "scenes": []}
    for i, ((y, pos), tx) in enumerate(zip(morceaux, scenes)):
        d0, f0 = pos[0][0], pos[-1][1]
        a, b = max(0, int((d0 - 0.04) * SR)), min(len(y), int((f0 + 0.06) * SR))
        voix = y[a:b].copy()
        rampe = int(0.01 * SR)
        voix[:rampe] *= np.linspace(0, 1, rampe); voix[-rampe:] *= np.linspace(1, 0, rampe)
        wav = np.concatenate([np.zeros(int(LEAD * SR), np.float32), voix, np.zeros(int(TAIL * SR), np.float32)])
        base = LEAD - (d0 - 0.04)
        ph = [{"texte": t, "debut": round(s + base, 3), "fin": round(e + base, 3)} for t, (s, e) in zip(tx, pos)]
        sf.write(sortie / f"scene-{i:02d}.wav", wav, SR)
        meta["scenes"].append({"i": i, "partie": lecon["scenes"][i]["partie"], "duree": round(len(wav) / SR, 3), "phrases": ph})
        tot = sum(len(t) for t in tx); dur = sum(x["fin"] - x["debut"] for x in ph)
        for x in ph:
            att = dur * len(x["texte"]) / tot; r = (x["fin"] - x["debut"]) / att
            if r > 2.2 or r < 0.4:
                print(f"  ⚠ scène {i}: phrase « {x['texte'][:40]}… » dure {x['fin'] - x['debut']:.1f}s (attendu ≈ {att:.1f}s) : vérifier le découpage")
        print(f"scène {i:02d} {lecon['scenes'][i]['partie'][:18]:18} {len(wav) / SR:6.1f}s ({len(ph)} phrases)")
    json.dump(meta, open(sortie / "timing.json", "w"), ensure_ascii=False, indent=1)
    print(f"TOTAL leçon {num} : {sum(s['duree'] for s in meta['scenes']) / 60:.1f} min")


if __name__ == "__main__":
    main(int(sys.argv[1]), sys.argv[2])
