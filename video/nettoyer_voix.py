"""Nettoie un enregistrement (respirations, déglutitions, bruits de bouche entre les phrases).

Usage : python nettoyer_voix.py N enregistrement.m4a transcription.json sortie.wav
La transcription (transcrire.py) sert à protéger les passages de parole douce.
"""
import json, subprocess, sys
import numpy as np
import soundfile as sf
import aligner
from common import phrases
from nettoyage import nettoyer, regions_coupees, SR


def passages_parole(num, f_trans):
    """Intervalles (s) des morceaux dont au moins la moitié des mots est retrouvée dans le script."""
    lecon = next(l for l in json.load(open("build/lecons.json")) if l["numero"] == num)
    sw = [w for sc in lecon["scenes"] for p in phrases(sc["voix"]) for w, _ in aligner.mots(p)]
    ch = json.load(open(f_trans))
    hyp, owner = [], []
    for k, c in enumerate(ch):
        for w, _ in aligner.mots(c["texte"]):
            hyp.append(w); owner.append(k)
    res = aligner.aligner(sw, hyp)
    trouves = {j for j in res if j is not None}
    out = []
    for k, c in enumerate(ch):
        idx = [i for i, o in enumerate(owner) if o == k]
        if idx and sum(i in trouves for i in idx) / len(idx) >= 0.5:
            out.append((c["debut"], c["fin"]))
    return out


def charger(chemin):
    brut = subprocess.run(["ffmpeg", "-v", "error", "-i", chemin, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"],
                          capture_output=True, check=True).stdout
    return np.frombuffer(brut, dtype=np.float32).copy()


if __name__ == "__main__":
    num, audio, trans, sortie = int(sys.argv[1]), sys.argv[2], sys.argv[3], sys.argv[4]
    y = charger(audio)
    out, garde, db, ref = nettoyer(y, protegees=passages_parole(num, trans))
    peak = float(np.abs(out).max())
    if peak > 0.95:
        out *= 0.95 / peak
    sf.write(sortie, out, SR)
    print("écrit", sortie)
