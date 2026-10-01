"""Prépare le « pack voix » d'une leçon : les textes à faire lire par une vraie voix.

Sortie : out/lecon-N/pack-voix/
  LISEZ-MOI.txt            mode d'emploi
  lecon-N-service.txt      toute la leçon, pour un service de voix (pauses entre scènes)
  lecon-N-lecture.txt      version à lire soi-même (titres de scènes, indications)
  scenes/scene-XX.txt      un fichier par scène (si le service limite la longueur)
Usage : python pack_voix.py 1
"""
import json, sys
from pathlib import Path
from common import prononcer, phrases

PAUSE_SCENE = '<break time="2.0s" />'


def main(num: int):
    lecon = next(l for l in json.load(open("build/lecons.json")) if l["numero"] == num)
    d = Path(f"out/lecon-{num}/pack-voix")
    (d / "scenes").mkdir(parents=True, exist_ok=True)
    n = len(lecon["scenes"])
    blocs_service, blocs_lecture = [], []
    nb_phrases = 0
    for i, sc in enumerate(lecon["scenes"]):
        texte = prononcer(sc["voix"])
        nb_phrases += len(phrases(sc["voix"]))
        (d / "scenes" / f"scene-{i:02d}.txt").write_text(texte + "\n", encoding="utf-8")
        blocs_service.append(texte)
        blocs_lecture.append(f"=== SCÈNE {i + 1}/{n} · {sc['partie']} ===\n{sc['voix']}\n")
    (d / f"lecon-{num}-service.txt").write_text(f"\n{PAUSE_SCENE}\n".join(blocs_service) + "\n", encoding="utf-8")
    (d / f"lecon-{num}-lecture.txt").write_text(
        f"AROBAZ · Module 1 · Leçon {num} : {lecon['titre']}\n"
        "Ton : chaleureux, posé, comme à une personne qu'on accompagne. Laisser une vraie pause\n"
        "(2 secondes) entre deux scènes, et une respiration entre deux phrases.\n\n" + "\n".join(blocs_lecture),
        encoding="utf-8")
    (d / "LISEZ-MOI.txt").write_text(f"""PACK VOIX · Leçon {num} : {lecon['titre']}
{n} scènes · {nb_phrases} phrases

DEUX FAÇONS DE FAIRE

A) Avec un service de voix (ElevenLabs, Azure, Google, OpenAI…)
   1. Choisissez UNE voix française et gardez-la pour tout le parcours.
   2. Collez le contenu de « lecon-{num}-service.txt » dans le service.
      Les sigles y sont déjà épelés (I.A., Chat G.P.T.) pour être bien prononcés.
      La balise <break time="2.0s" /> marque la pause entre deux scènes : si le service
      ne la comprend pas, utilisez plutôt les fichiers du dossier « scenes » (un clip par scène).
   3. Réglages utiles : vitesse un peu lente, voix posée et chaleureuse.
   4. Téléchargez l'audio (mp3 ou wav) et envoyez-le moi.

B) Avec votre propre voix (le plus humain, et c'est VOTRE marque)
   1. Lisez « lecon-{num}-lecture.txt » à voix haute, dans un endroit calme, téléphone à 20 cm.
   2. Faites une vraie pause de 2 secondes entre deux scènes, et respirez entre les phrases.
   3. Si vous vous trompez, reprenez la phrase depuis son début, sans couper l'enregistrement :
      je retirerai les reprises. (Indiquez-moi lesquelles.)
   4. Envoyez-moi l'enregistrement (m4a, mp3 ou wav). Un fichier unique ou un fichier par scène :
      les deux fonctionnent.

CE QUI COMPTE : les phrases doivent être lues dans l'ordre et en entier, sans ajout ni suppression.
Le montage (animations, sous-titres) se cale ensuite automatiquement sur les pauses entre phrases.
""", encoding="utf-8")
    print(f"pack voix → {d} ({n} scènes, {nb_phrases} phrases)")


if __name__ == "__main__":
    main(int(sys.argv[1]))
