#!/usr/bin/env bash
# Assemble les scènes d'une leçon en une vidéo finale (son normalisé à -16 LUFS, 48 kHz).
# Usage : ./assembler.sh N [dossier-scenes]   (scènes : v-intro.mp4 et w-00.mp4… ou v-00.mp4…)
set -euo pipefail
N=${1:?numéro de leçon}
D=${2:-out/lecon-$N}
PREF=${PREFIXE:-w}
: > "$D/liste.txt"
echo "file '$PWD/$D/v-intro.mp4'" >> "$D/liste.txt"
for f in "$D"/$PREF-[0-9][0-9].mp4; do echo "file '$PWD/$f'" >> "$D/liste.txt"; done
# IMPORTANT : « -ar 48000 » après loudnorm, sinon la piste son sort en 96 kHz et beaucoup de lecteurs
# (téléphones, navigateurs) restent muets.
ffmpeg -y -v error -f concat -safe 0 -i "$D/liste.txt" -c:v copy \
  -af "highpass=f=70,alimiter=limit=0.95,loudnorm=I=-16:TP=-1.5:LRA=11" -ar 48000 -ac 2 -c:a aac -b:a 160k -movflags +faststart "$D/lecon-$N-1080p.mp4"
ffmpeg -y -v error -i "$D/lecon-$N-1080p.mp4" -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -c:a copy -movflags +faststart "$D/lecon-$N-site.mp4"
ffprobe -v error -show_entries stream=codec_name,sample_rate,channels -of csv=p=0 "$D/lecon-$N-site.mp4"
