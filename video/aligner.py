"""Aligne un enregistrement humain sur le script d'une leçon.

Usage : python aligner.py N transcription.json enregistrement.m4a
  1. python transcrire.py enregistrement.m4a transcription.json   (Whisper, hors ligne)
  2. python aligner.py N transcription.json enregistrement.m4a

On compare les mots du script aux mots reconnus (alignement tolérant aux erreurs de
reconnaissance, aux hésitations et aux petites variantes de lecture). Chaque mot du script reçoit
l'instant où il a été dit. Sortie : out/lecon-N/scene-XX.wav + timing.json, au même format que tts.py,
avec en plus « reperes » (instant de chaque mot) pour caler les animations au mot près.
"""
import json, re, subprocess, sys, unicodedata
from difflib import SequenceMatcher
from functools import lru_cache
from pathlib import Path
import numpy as np
import soundfile as sf
from common import phrases

SR = 24000
LEAD, TAIL = 0.5, 1.0


def norm(w: str) -> str:
    w = unicodedata.normalize("NFD", w.lower())
    return re.sub(r"[^a-z0-9]", "", "".join(c for c in w if unicodedata.category(c) != "Mn"))


def mots(texte: str):
    """[(mot normalisé, position du mot dans le texte)]"""
    return [(norm(m.group()), m.start()) for m in re.finditer(r"[^\s'’\-]+", texte) if norm(m.group())]


@lru_cache(maxsize=None)
def sim(a: str, b: str) -> float:
    if a == b:
        return 1.0
    if min(len(a), len(b)) < 3 and a != b:
        return 0.0
    return SequenceMatcher(None, a, b).ratio()


def aligner(script, hyp, bande=260):
    """Needleman-Wunsch tolérant. Renvoie pour chaque mot du script l'indice du mot reconnu (ou None)."""
    n, m = len(script), len(hyp)
    NEG = -10 ** 9
    G = -1.0
    S = np.full((n + 1, m + 1), NEG, dtype=np.float32)
    T = np.zeros((n + 1, m + 1), dtype=np.int8)  # 0 diag, 1 haut (mot script sans correspondance), 2 gauche
    S[0, 0] = 0
    for j in range(1, min(m, bande) + 1):
        S[0, j] = j * G; T[0, j] = 2
    for i in range(1, n + 1):
        centre = int(i * m / n)
        lo, hi = max(0, centre - bande), min(m, centre + bande)
        if lo == 0:
            S[i, 0] = i * G; T[i, 0] = 1
        for j in range(max(1, lo), hi + 1):
            s = sim(script[i - 1], hyp[j - 1])
            sc = 2.0 * s if s >= 0.75 else -1.0
            best, t = S[i - 1, j - 1] + sc, 0
            if S[i - 1, j] + G > best: best, t = S[i - 1, j] + G, 1
            if S[i, j - 1] + G > best: best, t = S[i, j - 1] + G, 2
            S[i, j] = best; T[i, j] = t
    res = [None] * n
    i, j = n, m
    while i > 0 or j > 0:
        t = T[i, j]
        if i > 0 and j > 0 and t == 0:
            if sim(script[i - 1], hyp[j - 1]) >= 0.75:
                res[i - 1] = j - 1
            i -= 1; j -= 1
        elif i > 0 and (t == 1 or j == 0):
            i -= 1
        else:
            j -= 1
    return res


def charger(chemin):
    brut = subprocess.run(["ffmpeg", "-v", "error", "-i", chemin, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                          capture_output=True, check=True).stdout
    return np.frombuffer(brut, dtype=np.float32).copy()


def main(num, f_trans, f_audio, f_net=None):
    lecon = next(l for l in json.load(open("build/lecons.json")) if l["numero"] == num)
    morceaux = json.load(open(f_trans))

    # mots reconnus avec leur instant (répartis dans leur morceau, au prorata des lettres)
    hyp, hdeb, hfin = [], [], []
    for c in morceaux:
        ws = mots(c["texte"])
        if not ws:
            continue
        tot = sum(len(w) + 1 for w, _ in ws); acc = 0
        for w, _ in ws:
            hyp.append(w)
            hdeb.append(c["debut"] + (c["fin"] - c["debut"]) * acc / tot)
            acc += len(w) + 1
            hfin.append(c["debut"] + (c["fin"] - c["debut"]) * acc / tot)
    bornes = [(c["debut"], c["fin"]) for c in morceaux]

    # mots du script
    flat = []   # (scène, phrase, mot, position)
    structure = []
    for si, sc in enumerate(lecon["scenes"]):
        phr = phrases(sc["voix"]); structure.append(phr)
        for pi, p in enumerate(phr):
            for w, pos in mots(p):
                flat.append((si, pi, w, pos))
    corresp = aligner([f[2] for f in flat], hyp)
    couverts = sum(c is not None for c in corresp)
    print(f"mots du script retrouvés dans l'enregistrement : {couverts}/{len(flat)} ({100 * couverts / len(flat):.0f} %)")

    # instant de chaque mot du script (interpolé quand le mot n'a pas été reconnu)
    t0 = [hdeb[c] if c is not None else None for c in corresp]
    t1 = [hfin[c] if c is not None else None for c in corresp]
    idx = [i for i, t in enumerate(t0) if t is not None]
    if not idx:
        raise SystemExit("aucun mot retrouvé : l'enregistrement ne correspond pas à ce script")
    xs = np.array(idx, dtype=float)
    t0 = list(np.interp(np.arange(len(flat)), xs, [t0[i] for i in idx]))
    t1 = list(np.interp(np.arange(len(flat)), xs, [t1[i] for i in idx]))

    def accroche(t, tol=0.4, debut=True):
        """Ramène t au bord du morceau de parole le plus proche s'il est tout près."""
        meilleur = min(((abs(t - (b[0] if debut else b[1])), b[0] if debut else b[1]) for b in bornes))
        return meilleur[1] if meilleur[0] <= tol else t

    y = charger(f_audio)
    yn = charger(f_net) if f_net else None   # voix nettoyée : sert au son, le minutage vient de l'original
    y *= min(1.0, 0.92 / float(np.abs(y).max()))   # évite l'écrêtage à l'écriture
    sortie = Path(f"out/lecon-{num}"); sortie.mkdir(parents=True, exist_ok=True)
    meta = {"numero": num, "titre": lecon["titre"], "scenes": []}
    k = 0
    for si, sc in enumerate(lecon["scenes"]):
        phr = structure[si]
        ph = []
        for pi, p in enumerate(phr):
            ids = [i for i, f in enumerate(flat) if f[0] == si and f[1] == pi]
            d = accroche(t0[ids[0]], debut=True); f = accroche(t1[ids[-1]], debut=False)
            ph.append({"texte": p, "debut": d, "fin": max(f, d + 0.3), "ids": ids})
        # frontières entre phrases : on les cale sur le point le plus calme tout près de l'estimation
        for p1, p2 in zip(ph, ph[1:]):
            if p2["debut"] - p1["fin"] >= 0.20:
                continue
            c = (p1["fin"] + p2["debut"]) / 2
            fen = int(0.03 * SR)
            cands = np.arange(int((c - 0.45) * SR), int((c + 0.45) * SR), fen // 3)
            nrj = [np.sqrt(np.mean(y[x:x + fen] ** 2)) for x in cands if 0 <= x and x + fen <= len(y)]
            cands = [x for x in cands if 0 <= x and x + fen <= len(y)]
            if nrj:
                m = (cands[int(np.argmin(nrj))] + fen / 2) / SR
                p1["fin"], p2["debut"] = m - 0.03, m + 0.03
        a, b = ph[0]["debut"] - 0.06, ph[-1]["fin"] + 0.10
        a = max(a, 0.0); b = min(b, len(y) / SR)
        voix = (yn if yn is not None else y)[int(a * SR): int(b * SR)].copy()
        r = int(0.012 * SR)
        voix[:r] *= np.linspace(0, 1, r); voix[-r:] *= np.linspace(1, 0, r)
        wav = np.concatenate([np.zeros(int(LEAD * SR), np.float32), voix, np.zeros(int(TAIL * SR), np.float32)])
        sf.write(sortie / f"scene-{si:02d}.wav", wav, SR)
        base = LEAD - a
        out_ph, faibles = [], 0
        for p in ph:
            rep = [[flat[i][3], round(t0[i] + base, 3)] for i in p["ids"]]
            reconnus = sum(corresp[i] is not None for i in p["ids"]) / len(p["ids"])
            if reconnus < 0.6:
                faibles += 1
                print(f"  ⚠ scène {si + 1} : « {p['texte'][:50]}… » reconnue à {reconnus * 100:.0f} % seulement")
            out_ph.append({"texte": p["texte"], "debut": round(p["debut"] + base, 3), "fin": round(p["fin"] + base, 3), "reperes": rep})
        meta["scenes"].append({"i": si, "partie": sc["partie"], "duree": round(len(wav) / SR, 3), "phrases": out_ph})
        print(f"scène {si:02d} {sc['partie'][:18]:18} {len(wav) / SR:6.1f}s  ({len(out_ph)} phrases, {faibles} douteuses)")
    json.dump(meta, open(sortie / "timing.json", "w"), ensure_ascii=False, indent=1)
    print(f"TOTAL leçon {num} : {sum(s['duree'] for s in meta['scenes']) / 60:.1f} min")


if __name__ == "__main__":
    main(int(sys.argv[1]), sys.argv[2], sys.argv[3], sys.argv[4] if len(sys.argv) > 4 else None)
