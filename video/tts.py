"""Synthèse vocale d'une leçon : une phrase à la fois, avec silences naturels.

Sortie : out/lecon-N/scene-XX.wav + out/lecon-N/timing.json
(durée de chaque scène, début/fin de chaque phrase : sert aux sous-titres et aux animations).
Usage : python tts.py 1
"""
import json, re, sys
import numpy as np
import soundfile as sf
from pathlib import Path
from kokoro_onnx import Kokoro
from common import prononcer, phrases

VOIX = "ff_siwis"
VITESSE = 0.97          # légèrement posée : c'est une formation
PAUSE_PHRASE = 0.38     # s entre deux phrases
PAUSE_VIRGULE = 0.0
LEAD = 0.5              # s de silence avant la voix d'une scène
TAIL = 1.0              # s après


def main(num: int):
    lecons = json.load(open("build/lecons.json"))
    lecon = next(l for l in lecons if l["numero"] == num)
    sortie = Path(f"out/lecon-{num}")
    sortie.mkdir(parents=True, exist_ok=True)
    k = Kokoro("models/kokoro-v1.0.onnx", "models/voices-v1.0.bin")
    sr = 24000
    meta = {"numero": num, "titre": lecon["titre"], "scenes": []}
    for i, sc in enumerate(lecon["scenes"]):
        morceaux, t, ph = [np.zeros(int(LEAD * sr), dtype=np.float32)], LEAD, []
        for p in phrases(sc["voix"]):
            audio, rate = k.create(prononcer(p), voice=VOIX, speed=VITESSE, lang="fr-fr")
            assert rate == sr
            audio = audio.astype(np.float32)
            # coupe le silence de queue excessif produit par le modèle
            seuil = 0.004
            actifs = np.where(np.abs(audio) > seuil)[0]
            if len(actifs):
                audio = audio[max(0, actifs[0] - 400): actifs[-1] + 900]
            ph.append({"texte": p, "debut": round(t, 3), "fin": round(t + len(audio) / sr, 3)})
            morceaux += [audio, np.zeros(int(PAUSE_PHRASE * sr), dtype=np.float32)]
            t += len(audio) / sr + PAUSE_PHRASE
        morceaux[-1] = np.zeros(int(TAIL * sr), dtype=np.float32)
        t = t - PAUSE_PHRASE + TAIL
        wav = np.concatenate(morceaux)
        sf.write(sortie / f"scene-{i:02d}.wav", wav, sr)
        meta["scenes"].append({"i": i, "partie": sc["partie"], "duree": round(len(wav) / sr, 3), "phrases": ph})
        print(f"scène {i:02d} {sc['partie'][:18]:18} {len(wav)/sr:6.1f}s  ({len(ph)} phrases)", flush=True)
    json.dump(meta, open(sortie / "timing.json", "w"), ensure_ascii=False, indent=1)
    total = sum(s["duree"] for s in meta["scenes"])
    print(f"TOTAL leçon {num} : {total/60:.1f} min")


if __name__ == "__main__":
    main(int(sys.argv[1]))
