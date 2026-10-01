# AroBaz · Apprenez. Créez. Lancez-vous.

Plateforme de formation en ligne : **IA & Business** et **Contenu & Réseaux sociaux**.
Site statique construit avec [Astro](https://astro.build), hébergeable gratuitement sur Netlify.

## Lancer le site sur son ordinateur

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans dist/
```

## Où modifier quoi

| Je veux modifier… | Fichier |
|---|---|
| Les formations, les 12 modules de chaque parcours, la FAQ | `src/data/formations.ts` |
| Le contenu du module 1 (leçons, scripts vidéo, exercices, prompts, quiz) | `src/data/module1-a.ts` (leçons 1 à 4), `src/data/module1-b.ts` (leçons 5 à 8) |
| Le quiz de validation du module 1 et le seuil de réussite | `src/data/module1.ts` |
| Les couleurs et typographies | `src/styles/global.css` (variables en haut du fichier) |

**Ajouter la vidéo d'une leçon :** déposez le fichier dans `public/videos/module-1/`, puis renseignez
`video: "/videos/module-1/nom-du-fichier.mp4"` dans la leçon concernée. Le lecteur remplace alors
automatiquement l'encart « Vidéo en production ». Pour des vidéos lourdes, préférez un hébergeur vidéo
(Bunny Stream, Vimeo, Cloudflare Stream).

## Pages

- Public : `/`, `/formations/`, `/formations/ia-business/`, `/formations/contenu-reseaux-sociaux/`,
  `/comment-ca-marche/`, `/a-propos/`, `/faq/`, `/contact/`, `/mentions-legales/`
- Espace élève : `/espace/` (tableau de bord), `/espace/ressources/`,
  `/espace/ia-business/module-1/` + 8 leçons + `/validation/` (quiz final et attestation imprimable)
- Production : `/production/module-1/`, tous les scripts vidéo (voix off + indications d'écran),
  imprimable en PDF. Non référencée.

## État actuel

| Élément | État |
|---|---|
| Site vitrine (charte « L'atelier numérique ») | ✅ |
| Module 1 complet en lecture : 8 leçons, scripts, exercices, prompts, quiz, validation, attestation | ✅ |
| Progression et exercices sauvegardés | ⚠️ dans le navigateur uniquement (localStorage) |
| Formulaires contact / « être informé du lancement » | ✅ via Netlify Forms (actifs une fois déployé sur Netlify) |
| Vidéos du module 1 | ❌ à produire (scripts prêts) |
| Comptes élèves, base de données | ❌ à faire (proposition : Supabase) |
| Paiement | ❌ à faire (proposition : Stripe) |
| Modules 2 à 12 et formation Réseaux sociaux | ❌ programme rédigé, contenu à écrire |
| Mentions légales | ⚠️ à compléter avec vos informations |

Le document de passation d'origine est conservé dans `docs/handoff-initial.md`.
