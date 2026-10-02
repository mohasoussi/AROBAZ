# AROBAZ — HANDOFF COMPLET POUR CLAUDE

Date : 1 octobre 2026
Projet : AROBAZ — plateforme e-learning grand public
Signature envisagée : « Apprenez. Créez. Lancez-vous. »

## 1. OBJECTIF DU PROJET

AROBAZ est une plateforme de formations en ligne destinée au grand public.

Positionnement :
- apprendre à utiliser l’IA et les outils numériques de façon concrète ;
- permettre aux débutants de créer eux-mêmes leurs projets, sites, contenus, activités et automatisations ;
- éviter une approche trop technique ;
- les formations sont en autonomie : pas de cours en direct avec un formateur ;
- chaque formation doit être réellement exploitable et orientée action.

Promesse :
« AROBAZ vous apprend à utiliser l’IA et les outils numériques pour créer vous-même vos projets, votre activité et votre communication. »

Méthode :
APPRENDRE → OBSERVER → FAIRE → VÉRIFIER → AMÉLIORER

IMPORTANT :
Le propriétaire du projet ne veut PAS une plateforme constituée de simples PowerPoint ou de slides pauvres.
Les formations doivent être de vraies formations e-learning professionnelles : vidéo, narration, démonstrations réelles, visuels pédagogiques, exercices, prompts, missions, quiz et validation.

## 2. SITE ACTUEL

URL :
https://arobaz.higgsfield.app

Website ID :
4c10f03e-8c24-49f5-b676-5eeeedd414c7

Dépôt / checkout précédemment utilisé :
/home/user/website-53297260249474cd4723a7ee

Branche :
main

ATTENTION :
Le chemin local ci-dessus est une information provenant de l’environnement précédent. Il faut vérifier qu’il existe encore avant de l’utiliser.

## 3. DESIGN DU SITE

Direction actuelle :
SITE VITRINE CLASSIQUE, PREMIUM ET ÉDITORIAL.

Le projet avait initialement exploré beaucoup de motion design, mais cette direction a été abandonnée.
Ne pas revenir à une interface surchargée d’animations ou à des effets de scroll artificiels sans demande explicite.

Design brief :
Concept : « L’atelier numérique »
Delivery : Tier 1 editorial
Animation : non-animated / pas de caméra de scroll
Interaction : hover subtil

Palette :
- Background #F7F8FA
- Paper #FFFFFF
- Ink #111827
- Blue #2457E6
- Mint #1AA982
- Coral #F16B5B

Typographies :
- Titres : Manrope
- Corps : DM Sans

Sections prévues :
1. Hero éditorial
2. Bande de marque
3. Méthode
4. Formations
5. Chiffres
6. Comment ça marche
7. Catalogue
8. CTA
9. Footer

## 4. ARCHITECTURE PUBLIQUE

- Accueil
- Formations
  - IA & Business
  - Créer son contenu & ses réseaux sociaux
  - Futures formations
- Comment ça marche ?
- À propos d’AROBAZ
- Ressources
- Blog / Conseils
- FAQ
- Contact
- Connexion
- Mon espace

Espace étudiant :
- Tableau de bord
- Mes formations
- Ma progression
- Mes certificats
- Mes ressources
- Mon compte

Administration prévue :
- Utilisateurs
- Formations
- Modules
- Leçons
- Vidéos
- Quiz
- Exercices
- Ressources
- Progression
- Paiements
- Commandes
- Certificats
- Statistiques

## 5. ÉTAT TECHNIQUE CONNU

Le frontend contient notamment :
- src/routes/espace.tsx
- src/routes/espace.formation.ia-business.tsx
- src/routes/espace.formation.ia-business.lecon-2.tsx
- src/routes/formations/ia-business.tsx
- public/assets/course/module-01/

À ce stade, l’espace étudiant était principalement une interface/mock :
- authentification réelle : NON branchée
- base de données : NON branchée
- paiement : NON branché
- progression persistante : NON branchée
- stockage vidéo définitif : NON branché

Il faut donc considérer ces éléments comme une base frontend et non comme un LMS terminé.

## 6. FORMATION 1 — IA & BUSINESS

12 modules :

### Module 1 — Comprendre l’IA
- bienvenue
- définition de l’IA
- IA générative
- ChatGPT / Claude / Gemini
- fonctionnement général des modèles
- apprendre à parler à l’IA
- limites et erreurs
- mission : créer son premier assistant IA

### Module 2 — Transformer une idée en projet
- trouver / clarifier une idée
- identifier le problème
- définir le client
- étude de marché avec IA
- concurrence
- proposition de valeur
- offre
- modèle économique
- mission : créer son projet

### Module 3 — Construire son identité
- nom
- slogan
- positionnement
- cible
- identité visuelle
- logo
- couleurs
- typographies
- présentation commerciale

### Module 4 — Comprendre Internet
- Internet
- site web
- domaine
- hébergement
- serveur
- frontend / backend
- base de données
- API
- DNS
- HTTPS

Objectif : comprendre sans devenir développeur.

### Module 5 — Créer son premier site avec l’IA
- brief
- design avec IA
- génération de code
- comprendre les fichiers
- modifier avec IA
- pages
- formulaires
- images
- mobile responsive

### Module 6 — GitHub, Netlify & Cloudflare
- compte GitHub
- dépôt
- fichiers
- déploiement Netlify
- domaine
- DNS
- sécurité Cloudflare

### Module 7 — E-commerce
- modèle e-commerce
- catalogue
- produits
- prix
- pages produits
- panier
- paiement
- commandes
- emails
- livraison
- mentions légales
- RGPD

### Module 8 — Créer une application avec l’IA
- idée
- fonctionnalités
- brief
- UX
- interface
- prototype
- développement assisté par IA
- base de données
- authentification
- fonctionnalités
- tests
- corrections
- déploiement

Projet final : application web.

### Module 9 — Connecter les outils
- API
- automatisations
- formulaires
- emails
- paiements
- CRM
- base de données
- webhooks
- connecteurs
- agents

### Module 10 — Automatiser son activité
Exemples :
formulaire → IA → traitement → email → CRM
commande → paiement → confirmation → facture → email
idée → IA → contenu → validation → publication

### Module 11 — Faire connaître son activité
- offre
- landing page
- acquisition
- SEO
- réseaux sociaux
- email
- prospection
- publicité
- tunnel de vente

### Module 12 — Projet final
L’apprenant construit :
- idée
- positionnement
- identité
- site
- domaine
- présence digitale
- offre
- système de vente
- communication
- automatisations
- checklist de lancement

## 7. PAGE COMMERCIALE IA & BUSINESS

Route :
src/routes/formations/ia-business.tsx

URL :
https://arobaz.higgsfield.app/formations/ia-business

Hero :
« Créer son projet avec l’IA. »

Sous-titre :
« Parcours complet · 12 modules »

Promesse :
« Apprenez à transformer une idée en projet concret avec l’IA et les outils numériques modernes — même si vous n’êtes ni développeur, ni designer, ni expert en marketing. »

La page présente :
- les 12 modules
- la méthode « On apprend. On fait. »
- quatre composants de leçon :
  1. courte leçon
  2. démonstration
  3. prompt
  4. validation
- le projet final
- FAQ
- bloc de lancement actuellement prévu avec « Bientôt disponible »
- bouton « Être informé du lancement »

## 8. FORMATION 2 — CRÉER SON CONTENU & SES RÉSEAUX SOCIAUX

12 modules :

1. Comprendre les plateformes
   - Instagram, TikTok, Facebook, LinkedIn, YouTube
   - formats
   - audiences
   - algorithmes
   - portée
   - engagement
   - conversion

2. Construire sa stratégie
   - cible
   - positionnement
   - objectifs
   - ligne éditoriale
   - piliers de contenu
   - calendrier éditorial 30 jours

3. Trouver des idées avec l’IA
   - idées
   - angles
   - hooks
   - scripts
   - légendes
   - carrousels
   - calendrier

4. Créer ses visuels
   - Canva
   - génération d’images
   - modification d’images
   - affiches
   - stories
   - carrousels
   - posts
   - identité visuelle

5. Faire des vidéos avec son téléphone
   - cadrage
   - lumière
   - son
   - prise de parole
   - plans
   - B-roll
   - storytelling
   - hook

6. Monter avec CapCut
   - import
   - découpe
   - assemblage
   - musique
   - effets
   - transitions
   - sous-titres
   - texte
   - zoom
   - rythme
   - export

Mission : premier Reel/TikTok/Short.

7. Créer de la vidéo avec l’IA
   - génération
   - image-to-video
   - avatars
   - voix
   - narration
   - B-roll
   - montage assisté IA

8. Instagram & TikTok
   - Reels
   - Stories
   - carrousels
   - TikTok
   - lives
   - séries

9. Transformer les vues en clients
   - contenu → attention → confiance → intérêt → contact → vente
   - CTA
   - DM
   - bio
   - landing page
   - offre
   - contact
   - conversion

10. Organiser son community management
   - calendrier
   - programmation
   - bibliothèque de contenus
   - fichiers
   - batching
   - réponses
   - modération

11. Mesurer ses résultats
   - portée
   - vues
   - engagement
   - clics
   - abonnés
   - leads
   - ventes
   - optimisation des contenus

12. Projet final
   - stratégie 30 jours
   - calendrier
   - identité
   - templates
   - scripts
   - vidéos
   - posts
   - conversion

## 9. MODULE 1 — CONTENU PÉDAGOGIQUE

Titre :
AROBAZ — Formation IA & Business
MODULE 1 — Comprendre l’intelligence artificielle

Niveau :
Débutant

Prérequis :
Aucun

Objectif :
Comprendre l’IA, savoir dialoguer efficacement avec elle et créer son premier assistant.

### Leçon 1 — Bienvenue dans l’univers de l’IA

L’IA n’est plus réservée aux experts.

Cas d’usage :
- écrire
- créer des images
- analyser des documents
- construire des projets
- créer des sites
- coder
- produire des vidéos
- marketing
- automatisation

Méthode AROBAZ :
APPRENDRE → OBSERVER → FAIRE → VÉRIFIER → AMÉLIORER

Exercice :
Lister 3 choses que l’apprenant aimerait réussir avec l’IA.

### Leçon 2 — Qu’est-ce que l’intelligence artificielle ?

Définition simple :
L’intelligence artificielle désigne un ensemble de technologies capables d’analyser des informations, reconnaître des modèles et produire des résultats à partir de données.

Exemples :
- reconnaissance faciale
- recommandations
- traduction
- analyse
- classification
- prédiction
- génération

Point pédagogique :
IA ≠ intelligence humaine.

Objectif AROBAZ :
ne pas devenir ingénieur IA, mais apprendre à utiliser l’IA comme outil de travail.

### Leçon 3 — L’IA générative

L’IA générative produit :
- texte
- images
- vidéo
- audio
- code

Principe :
on formule une demande → le modèle produit un résultat → on affine.

Multimodalité :
certains outils peuvent travailler avec plusieurs types de données.

### Leçon 4 — ChatGPT, Claude, Gemini : comprendre les outils

Point central :
ChatGPT est un produit/service, pas le nom de toute l’intelligence artificielle.

Analogie :
modèle = moteur
application = voiture

Les outils et modèles ont des fonctionnalités, forces et limites différentes et évoluent rapidement.

Objectif :
apprendre à résoudre un problème plutôt qu’à devenir dépendant d’une seule application.

### Leçon 5 — Comment fonctionne une IA ?

Les modèles sont entraînés sur de grandes quantités de données afin d’apprendre des relations et des modèles.

Analogie :
comme quelqu’un qui a lu énormément de contenus et appris des régularités, sans pour autant « comprendre » comme un humain.

Le résultat dépend notamment :
- du modèle
- du contexte
- de l’instruction
- des informations fournies

Important :
plus de texte ne signifie pas automatiquement meilleur résultat.
La pertinence du contexte compte davantage.

### Leçon 6 — Apprendre à parler à l’IA

Définition :
un prompt est une instruction donnée à l’IA.

Méthode AROBAZ :
C — CONTEXTE
O — OBJECTIF
C — CIBLE
C — CONTRAINTES
F — FORMAT

Un bon prompt est :
- clair
- pertinent
- précis
- contextualisé

Le dialogue est itératif :
on demande → on observe → on corrige → on améliore.

Exercice :
faire comparer une demande vague et une demande contextualisée.

### Leçon 7 — Les limites et erreurs de l’IA

Une IA peut produire une réponse convaincante mais fausse.

Causes possibles :
- mauvaise compréhension
- contexte incomplet
- information ancienne
- erreur de raisonnement
- information inventée

Règle AROBAZ :
UTILISER → VÉRIFIER → DÉCIDER

Vigilance particulière :
- droit
- fiscalité
- santé
- finance
- informations d’actualité
- chiffres importants

Principe :
la qualité rédactionnelle d’une réponse ne garantit pas son exactitude.

### Leçon 8 — Mission : créer son premier assistant IA

Choisir un assistant :
- entrepreneur
- commercial
- marketing
- communication
- créateur de contenu
- administratif
- étudiant
- organisation
- autre

Prompt de départ :

« Tu es mon assistant spécialisé dans [DOMAINE].

Ton rôle est de m’aider à [OBJECTIF].

Voici mon projet : [DÉCRIVEZ VOTRE PROJET]

Mon public cible est : [DÉCRIVEZ VOTRE PUBLIC]

Mon niveau actuel est : [DÉBUTANT / INTERMÉDIAIRE / AVANCÉ]

Lorsque je te pose une question :
- commence par comprendre mon besoin ;
- réponds de manière claire et simple ;
- évite le jargon inutile ;
- donne-moi des exemples concrets ;
- propose-moi des actions réalisables ;
- indique clairement lorsque tu n’es pas certain ;
- n’invente pas d’informations.

Lorsque plusieurs solutions existent, présente leurs différences.

Lorsque ma demande manque d’informations importantes, pose-moi les questions nécessaires.

Ton objectif est de m’aider à progresser concrètement dans mon projet. »

Tests :
1. présenter le projet
2. demander quelles informations manquent
3. demander les 3 prochaines actions
4. demander comment l’assistant peut aider chaque semaine

Validation :
L’apprenant doit savoir :
- définir IA
- définir IA générative
- expliquer ce qu’est un modèle
- distinguer outil et modèle
- rédiger un prompt
- donner contexte/objectifs/cible/contraintes/format
- comprendre les limites
- savoir quand vérifier
- créer et tester son assistant

Quiz :
1. Qu’est-ce qu’une IA ?
2. Qu’est-ce qu’une IA générative ?
3. Quelle différence entre modèle et application ?
4. Qu’est-ce qu’un prompt ?
5. Quels sont les 5 éléments de la méthode AROBAZ ?
6. Une réponse bien écrite est-elle forcément exacte ?
7. Quelle est la règle AROBAZ avant de prendre une décision importante ?

## 10. FORMAT VIDÉO ATTENDU

IMPORTANT POUR CLAUDE :

Il ne faut PAS transformer le cours en simple PowerPoint.

Le produit final attendu est une vraie formation vidéo e-learning.

Pour une leçon conceptuelle :
- environ 8 à 12 minutes si le sujet le justifie ;
- narration française naturelle ;
- visuels animés ;
- textes à l’écran ;
- exemples ;
- illustrations / schémas ;
- captures d’écran réelles lorsqu’un outil est démontré ;
- transitions ;
- sous-titres ;
- exercices.

Pour les démonstrations :
- privilégier l’écran réel ;
- montrer réellement les actions ;
- ne pas fabriquer une fausse interface IA ;
- expliquer les choix faits à l’écran.

Structure vidéo type :
1. Hook
2. Objectif de la leçon
3. Explication
4. Exemple concret
5. Démonstration
6. Erreurs fréquentes
7. Mission
8. Quiz
9. Validation
10. Transition vers la suite

## 11. DURÉE INDICATIVE DU MODULE 1

Le module complet devrait être composé de plusieurs vidéos, pas d’une seule vidéo artificiellement longue.

Cibles précédemment définies :
- Leçon 1 : 6–8 min
- Leçon 2 : 10–12 min
- Leçon 3 : 8–10 min
- Leçon 4 : 8–10 min
- Leçon 5 : 10–12 min
- Leçon 6 : 12–15 min
- Leçon 7 : 8–10 min
- Leçon 8 : 15–20 min

Total indicatif :
environ 1h20 à 1h40 de vidéo pour le module 1.

Ne pas remplir artificiellement la durée.
La priorité est la valeur pédagogique.

## 12. VIDÉOS DÉJÀ CRÉÉES

Une première vidéo technique existe :
public/assets/course/module-01/lesson-01-bienvenue.mp4
1920×1080
environ 20 secondes.

Une deuxième :
public/assets/course/module-01/lesson-02-ia.mp4
1920×1080
environ 42 secondes.

Ces vidéos étaient des PROTOTYPES TECHNIQUES, PAS des versions finales.

La deuxième vidéo contient notamment :
- « Qu’est-ce que l’intelligence artificielle ? »
- « CE QUE L’IA PEUT FAIRE »
- « VOTRE OBJECTIF AVEC AROBAZ »

Ne pas considérer ces vidéos comme le niveau de qualité final attendu.

## 13. CANVA — TRAVAIL DÉJÀ RÉALISÉ

Un storyboard Canva avait été créé :
Design ID : DAHWxYdkSM4
Titre : « Bienvenue dans l’IA »

Il comportait 12 pages :
1. Bienvenue dans AROBAZ
2. L’IA n’est plus réservée aux experts
3. L’IA est aujourd’hui accessible
4. Ce que vous pouvez déjà faire
5. Vous n’avez pas besoin de savoir coder
6. Notre objectif
7. La méthode AROBAZ
8. Comprendre
9. Essayer et vérifier
10. Savoir quoi faire faire à l’IA
11. Le parcours du module
12. À vous de jouer

URL édition :
https://www.canva.com/d/hB0kuatps4f8cvB

URL vue :
https://www.canva.com/d/fAg0iOizQwd7CD8

IMPORTANT :
Ce storyboard a été jugé trop pauvre et ne doit PAS être pris comme livrable final.
Il doit être remplacé par une véritable production e-learning.

## 14. VOIX OFF

Une voix française avait été testée avec un ancien système Higgsfield.

Premier texte :
« Bienvenue dans AROBAZ. Dans cette formation, vous allez apprendre à utiliser l’intelligence artificielle pour créer vos propres projets, étape par étape, simplement et concrètement. »

Un deuxième texte de démonstration avait été produit pour la leçon 2 :
« L’intelligence artificielle, c’est un ensemble de technologies capables d’analyser des informations, de reconnaître des modèles et de produire des résultats à partir de données. Aujourd’hui, elle peut comprendre du texte, analyser des images, générer du contenu, traduire, résumer ou encore vous aider à résoudre un problème. Pour vous, l’objectif n’est pas de devenir ingénieur en intelligence artificielle. L’objectif est d’apprendre à vous en servir comme d’un véritable outil de travail. Dans AROBAZ, nous allons donc partir de cas concrets : une idée, un projet, un site internet, du contenu ou une tâche à automatiser. À chaque étape, vous allez essayer par vous-même, vérifier le résultat, puis l’améliorer. »

La génération audio actuelle Higgsfield était ensuite bloquée par l’absence de crédits.
Ne pas prétendre que l’audio final est disponible.

## 15. PRIORITÉS POUR LA SUITE

1. Récupérer le vrai code du site depuis le dépôt / environnement existant.
2. Vérifier l’état réel du frontend.
3. Préserver l’identité visuelle actuelle.
4. Finaliser l’espace étudiant.
5. Transformer le Module 1 en véritable expérience e-learning.
6. Créer les scripts voix off complets.
7. Produire les vidéos finales avec une chaîne vidéo réellement disponible.
8. Ajouter les exercices, prompts, quiz et validations.
9. Mettre en place authentification et persistance.
10. Mettre en place paiement.
11. Mettre en place stockage/lecture vidéo.
12. Mettre en place suivi de progression.
13. Mettre en place certificats.
14. Construire ensuite le Module 2.

## 16. RÈGLE DE TRAVAIL

Ne pas demander à l’utilisateur de répéter tout le contexte.

Ne pas transformer une demande de production en simple explication.

Ne pas livrer un storyboard vide à la place d’une formation.

Ne pas présenter un prototype technique comme une version finale.

Ne pas inventer une fonctionnalité ou un outil qui n’est pas réellement disponible.

Quand une limitation technique existe, la signaler clairement et proposer une solution réellement exécutable.

OBJECTIF FINAL :
AROBAZ doit devenir une vraie plateforme de formation professionnelle, simple pour l’utilisateur final, visuellement premium, mais surtout pédagogiquement riche et réellement exploitable.
