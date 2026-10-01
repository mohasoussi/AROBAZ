# Production des vidéos AroBaz

Chaîne qui transforme les scripts du site (`src/data/module1-*.ts`) en vidéo 1920×1080 :
voix off française synthétique, animations calées sur chaque phrase, sous-titres incrustés.

**Limites à connaître.** `tts.py` produit une voix de synthèse libre (Kokoro, une seule voix
française) : elle sert à tester, pas à publier. Pour une voix humaine, utiliser `pack_voix.py`
puis `import_voix.py` (voix enregistrée par vous, ou générée par un service de voix). Les scènes de « démonstration » sont des illustrations : elles ne remplacent
pas une vraie capture d'écran d'un outil. Voir `specs/` pour les scènes concernées.

## Utilisation (leçon N)

```bash
cd video
npm install
python3 -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt
mkdir -p models && cd models
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
curl -LO https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
cd ..
npm run extraire              # scripts du site → build/lecons.json
python tts.py N               # voix de synthèse (essai) → out/lecon-N/
python pack_voix.py N         # textes à faire lire par une vraie voix → out/lecon-N/pack-voix/
python import_voix.py N fichier-ou-dossier   # importe la voix enregistrée et retrouve le minutage
node render.mjs N intro 0 1 2 …   # enregistre chaque scène (une par argument)
```

Puis assemblage (voir l'historique du projet) : concaténer `v-intro.mp4`, `v-00.mp4`… avec ffmpeg
et normaliser le son à -16 LUFS.

## Ajouter une leçon

Créer `specs/leconN.mjs` : une scène par entrée du script, avec le type de visuel (`taches`, `objectifs`,
`avantApres`, `grille`, `echange`, `etapes`, `erreurs`, `programme`, `appel`, `titre`) et, pour chaque élément,
un extrait de la voix off (`cue`) : l'élément apparaît au moment où ces mots sont prononcés.
