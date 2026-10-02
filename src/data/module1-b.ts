import type { Lecon } from "./types";

export const PROMPT_ASSISTANT = `Tu es mon assistant spécialisé dans [DOMAINE].

Ton rôle est de m'aider à [OBJECTIF].

Voici mon projet : [DÉCRIVEZ VOTRE PROJET]

Mon public cible est : [DÉCRIVEZ VOTRE PUBLIC]

Mon niveau actuel est : [DÉBUTANT / INTERMÉDIAIRE / AVANCÉ]

Lorsque je te pose une question :
- commence par comprendre mon besoin ;
- réponds de manière claire et simple ;
- évite le jargon inutile ;
- donne-moi des exemples concrets ;
- propose-moi des actions réalisables ;
- indique clairement lorsque tu n'es pas certain ;
- n'invente pas d'informations.

Lorsque plusieurs solutions existent, présente leurs différences.

Lorsque ma demande manque d'informations importantes, pose-moi les questions nécessaires.

Ton objectif est de m'aider à progresser concrètement dans mon projet.`;

export const LECONS_B: Lecon[] = [
  // ─────────────────────────────────────────────── LEÇON 5
  {
    slug: "comment-fonctionne-une-ia",
    numero: 5,
    titre: "Comment fonctionne une IA ?",
    sousTitre: "Entraînement, prédiction, contexte : ce qui se passe quand vous appuyez sur « Envoyer ».",
    dureeCible: "10 à 12 min",
    objectifs: [
      "Comprendre l'entraînement d'un modèle avec une image simple",
      "Savoir de quoi dépend la qualité d'une réponse",
      "Comprendre pourquoi un contexte pertinent compte plus qu'un long texte",
    ],
    essentiel: [
      {
        titre: "L'entraînement",
        texte:
          "Un modèle de langage est entraîné sur de très grandes quantités de textes. Il y apprend des relations et des régularités : quels mots, quelles idées, quelles structures vont ensemble. Un peu comme quelqu'un qui aurait lu énormément et repéré des régularités, sans pour autant comprendre comme un humain.",
      },
      {
        titre: "La génération",
        texte:
          "Quand vous écrivez une demande, le modèle produit sa réponse morceau par morceau, en choisissant à chaque fois une suite plausible compte tenu de tout ce qui précède : votre demande, la conversation, les documents fournis. Il ne consulte pas une base de réponses toutes faites.",
      },
      {
        titre: "Ce qui fait la qualité d'une réponse",
        texte:
          "Le modèle utilisé, le contexte (ce que l'IA sait de votre situation), l'instruction (ce que vous demandez précisément) et les informations fournies (documents, exemples, chiffres). Vous contrôlez directement les trois derniers.",
      },
      {
        titre: "Pertinent plutôt que long",
        texte:
          "Plus de texte ne veut pas dire meilleur résultat. Une information hors sujet peut même détourner la réponse. Ce qui compte, c'est la pertinence du contexte : donner les bonnes informations, pas toutes les informations.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Une fenêtre de discussion. On tape « Le meilleur moment pour publier sur Instagram, c'est… » et on fige l'écran juste avant la réponse. Grand point d'interrogation.",
        voix:
          "Vous écrivez une question, vous appuyez sur « Envoyer », et deux secondes plus tard, une réponse bien rédigée apparaît. Mais que s'est-il passé pendant ces deux secondes ? Comprendre ça, même dans les grandes lignes, va changer votre façon d'utiliser l'IA. Et vous allez voir, c'est beaucoup moins compliqué qu'on ne le croit.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la leçon et les trois objectifs.",
        voix:
          "Dans cette leçon, on va voir comment un modèle apprend, comment il produit une réponse, et surtout quels sont les éléments qui font qu'une réponse est bonne ou mauvaise. Ce sont ces éléments que vous allez apprendre à maîtriser.",
      },
      {
        partie: "Explication",
        ecran: "Illustration : une immense bibliothèque, des livres qui défilent. Un personnage stylisé lit à toute vitesse. Bulle : « Après “Il était une…”, on trouve souvent “fois”. »",
        voix:
          "Tout commence par l'entraînement. Un modèle de langage, comme ceux qui se cachent derrière ChatGPT, Claude ou Gemini, est entraîné sur d'énormes quantités de textes. Des livres, des articles, des pages web, des documents de toutes sortes. Pendant cet entraînement, le modèle apprend des régularités. Quels mots vont souvent ensemble. Comment on construit une phrase, un argument, un mail, une recette. Imaginez quelqu'un qui aurait lu une quantité de textes impossible pour un humain, et qui aurait repéré toutes les régularités possibles. S'il lit « Il était une », il sait que « fois » vient très souvent ensuite. Mais attention : avoir repéré des régularités, ce n'est pas comprendre comme un humain. C'est très puissant, mais ce n'est pas la même chose.",
      },
      {
        partie: "Explication",
        ecran: "Une phrase se construit morceau par morceau. Au-dessus de l'emplacement suivant, trois propositions avec des barres de probabilité : « matin » (haute), « soir » (moyenne), « dimanche » (basse). Le mot choisi s'insère, et l'opération recommence.",
        voix:
          "Maintenant, que se passe-t-il quand vous posez une question ? Le modèle produit sa réponse petit à petit, morceau par morceau. À chaque étape, il évalue quelles suites sont les plus plausibles compte tenu de tout ce qui précède : votre question, la conversation, les documents que vous avez fournis. Il en choisit une, l'ajoute, et recommence. C'est pour ça qu'une réponse apparaît progressivement à l'écran. Et c'est aussi pour ça que deux réponses à la même question peuvent être différentes : il y a souvent plusieurs suites plausibles. Retenez l'idée principale : le modèle ne va pas chercher une réponse toute faite dans une base de données. Il la construit, en fonction de ce que vous lui avez donné.",
      },
      {
        partie: "Explication",
        ecran: "Quatre jauges : « Le modèle », « Le contexte », « L'instruction », « Les informations fournies ». Les trois dernières portent une étiquette bleue : « Vous les contrôlez ».",
        voix:
          "De quoi dépend la qualité d'une réponse ? De quatre choses. Le modèle, d'abord : certains sont plus puissants que d'autres. Mais vous n'avez pas beaucoup d'influence là-dessus. Ensuite, le contexte : ce que l'IA sait de votre situation. Qui vous êtes, ce que vous faites, pour qui. L'instruction : ce que vous demandez, précisément. Et enfin, les informations fournies : un document, des exemples, des chiffres. Ces trois-là, c'est vous qui les contrôlez, entièrement. Et c'est là que se joue la plus grosse différence entre une réponse moyenne et une excellente réponse.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture réelle. Demande A : « Quel est le meilleur moment pour publier sur Instagram ? » → réponse générale avec des précautions. Demande B : « Je tiens un salon de coiffure dans une petite ville. Mes clientes ont entre 30 et 55 ans et travaillent en semaine. Mes statistiques Instagram montrent que mon audience est la plus active le soir. Quand publier, et quoi ? » → réponse ciblée.",
        voix:
          "Regardez. Première question : quel est le meilleur moment pour publier sur Instagram ? La réponse est générale, et honnêtement, elle ne peut pas être autrement : l'IA ne sait rien de moi. Deuxième version : je tiens un salon de coiffure dans une petite ville, mes clientes ont entre trente et cinquante-cinq ans et travaillent en semaine, et mes statistiques montrent que mon audience est surtout active le soir. Quand publier, et quoi ? Cette fois, la réponse est construite pour moi. Même modèle. La différence, c'est le contexte et les informations que j'ai fournis.",
      },
      {
        partie: "Point clé",
        ecran: "Deux blocs de texte. À gauche, un très long paragraphe où la phrase utile est noyée. À droite, quatre lignes courtes et précises. Titre : « Pertinent > long ».",
        voix:
          "Attention à un piège fréquent : croire que plus on écrit, meilleure sera la réponse. Ce n'est pas vrai. Si vous collez trois pages d'informations dont la moitié n'a rien à voir avec votre question, vous risquez de détourner la réponse. Ce qui compte, c'est la pertinence. Donnez à l'IA les bonnes informations, pas toutes les informations. Quatre lignes précises valent souvent mieux qu'une page entière.",
      },
      {
        partie: "Explication",
        ecran: "Calendrier avec une date marquée « Fin des données d'entraînement ». Après cette date, zone grisée « ? ». Mention : « Certains outils peuvent faire des recherches web : vérifiez les sources citées. »",
        voix:
          "Une dernière conséquence de l'entraînement, très importante. Un modèle a appris sur des données qui s'arrêtent à une certaine date. Ce qui s'est passé après, il ne le sait pas, sauf si l'outil lui permet de faire une recherche sur Internet, ou si vous lui donnez l'information vous-même. Donc pour tout ce qui est récent, comme les prix, les lois, l'actualité ou les tarifs d'un outil, soyez prudent. On en reparle dans la leçon sur les limites.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Trois cartes corail : « Poser une question sans contexte », « Noyer l'IA sous des informations inutiles », « Croire que l'IA consulte une base de vérités ».",
        voix:
          "Pour résumer les erreurs à éviter : poser une question sans aucun contexte, noyer l'IA sous des informations inutiles, et croire qu'elle consulte une base de vérités. Elle produit des réponses plausibles. Plausible ne veut pas dire vrai.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Même question, deux versions : sans contexte, puis avec 4 lignes de contexte pertinent. »",
        voix:
          "Votre exercice : choisissez une question utile pour votre projet. Posez-la d'abord sans aucun contexte. Puis posez-la à nouveau, dans une nouvelle conversation, en ajoutant quatre lignes de contexte pertinent. Comparez, et notez ce qui a changé.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « Apprendre à parler à l'IA ».",
        voix:
          "Vous avez compris pourquoi le contexte compte autant. Dans la prochaine leçon, la plus importante du module, je vous donne une méthode simple pour écrire des demandes efficaces, à chaque fois.",
      },
    ],
    exercice: {
      titre: "L'effet du contexte",
      consigne:
        "Choisissez une question utile pour votre projet. Posez-la sans contexte, puis dans une nouvelle conversation avec quatre lignes de contexte pertinent. Comparez.",
      champs: [
        { label: "Ma question, sans contexte" },
        { label: "Les 4 lignes de contexte ajoutées", aide: "Qui vous êtes, votre activité, votre public, votre situation précise" },
        { label: "Ce qui a changé dans la réponse" },
      ],
    },
    verifier: [
      "Les deux essais ont été faits dans deux conversations séparées",
      "Votre contexte ne contient que des informations utiles à la question",
      "Vous savez citer les quatre facteurs qui font la qualité d'une réponse",
    ],
    quiz: [
      {
        question: "Comment un modèle de langage produit-il une réponse ?",
        choix: [
          "Il recopie une réponse stockée dans une base de données",
          "Il construit la réponse morceau par morceau, en choisissant des suites plausibles selon ce qui précède",
          "Une personne lui dicte la réponse en direct",
        ],
        bonne: 1,
        explication: "Le modèle génère sa réponse progressivement, en fonction de votre demande et du contexte disponible.",
      },
      {
        question: "Parmi ces éléments, lequel ne contrôlez-vous pas directement ?",
        choix: ["Le contexte", "Les informations fournies", "Les données sur lesquelles le modèle a été entraîné"],
        bonne: 2,
        explication: "L'entraînement a eu lieu avant. Vous contrôlez le contexte, l'instruction et les informations fournies.",
      },
      {
        question: "Vaut-il mieux donner beaucoup d'informations à l'IA ?",
        choix: [
          "Oui, plus il y a de texte, meilleure est la réponse",
          "Non, il faut des informations pertinentes ; le hors-sujet peut détourner la réponse",
          "Non, il vaut mieux ne rien donner du tout",
        ],
        bonne: 1,
        explication: "La pertinence du contexte compte davantage que sa longueur.",
      },
      {
        question: "Pourquoi faut-il être prudent avec les informations récentes ?",
        choix: [
          "Parce que les données d'entraînement s'arrêtent à une certaine date",
          "Parce que l'IA refuse de parler d'actualité",
          "Il n'y a pas de raison particulière",
        ],
        bonne: 0,
        explication: "Sans recherche web ni information fournie par vous, le modèle ignore ce qui s'est passé après son entraînement.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 6
  {
    slug: "parler-a-l-ia",
    numero: 6,
    titre: "Apprendre à parler à l'IA",
    sousTitre: "La méthode C.O.C.C.F. pour écrire des demandes claires, et l'art d'itérer.",
    dureeCible: "12 à 15 min",
    objectifs: [
      "Savoir ce qu'est un prompt et ce qui le rend efficace",
      "Maîtriser la méthode C.O.C.C.F. : Contexte, Objectif, Cible, Contraintes, Format",
      "Savoir améliorer une réponse par itérations",
    ],
    essentiel: [
      {
        titre: "Le prompt",
        texte: "Un prompt est une instruction donnée à l'IA. C'est votre demande, telle que vous l'écrivez. Sa qualité détermine en grande partie la qualité de la réponse.",
      },
      {
        titre: "La méthode C.O.C.C.F.",
        texte:
          "C — Contexte : qui vous êtes, votre situation. O — Objectif : ce que vous voulez obtenir. C — Cible : à qui s'adresse le résultat. C — Contraintes : longueur, ton, ce qu'il faut éviter, ce qu'il faut inclure. F — Format : liste, tableau, mail, script, plan…",
      },
      {
        titre: "Un bon prompt est…",
        texte: "Clair (une idée par phrase), pertinent (rien d'inutile), précis (des chiffres, des exemples, des noms) et contextualisé (l'IA sait qui vous êtes et pourquoi vous demandez).",
      },
      {
        titre: "Le dialogue est itératif",
        texte:
          "On demande → on observe → on corrige → on améliore. Les meilleures corrections sont précises : « raccourcis le deuxième paragraphe », « remplace le tutoiement par le vouvoiement », « donne trois autres options plus originales ».",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Deux réponses côte à côte, sur le même sujet : une publication pour annoncer l'ouverture d'un food truck. À gauche, un texte plat plein d'emojis génériques. À droite, un texte précis, au bon ton, avec horaires et emplacement. Question à l'écran : « Même outil. Qu'est-ce qui a changé ? »",
        voix:
          "Ces deux textes ont été écrits par la même IA, le même jour, pour le même food truck. Celui de gauche est générique, il pourrait parler de n'importe qui. Celui de droite est prêt à publier. Qu'est-ce qui a changé ? Uniquement la demande. Dans cette leçon, je vous donne une méthode pour écrire, à chaque fois, la demande de droite.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la leçon et les trois objectifs.",
        voix:
          "C'est la leçon la plus importante du module. À la fin, vous saurez ce qu'est un prompt, vous connaîtrez la méthode C.O.C.C.F., et vous saurez améliorer n'importe quelle réponse en quelques échanges.",
      },
      {
        partie: "Explication",
        ecran: "Définition : « Un prompt est une instruction donnée à l'IA. » Puis exemple de prompt vague : « Écris un post pour mon food truck. »",
        voix:
          "Commençons par le vocabulaire. Un prompt, c'est simplement une instruction donnée à l'IA. C'est ce que vous tapez dans la fenêtre. Le problème, c'est que la plupart des gens écrivent des prompts comme on tape une recherche Google : quelques mots, sans contexte. « Écris un post pour mon food truck. » L'IA va faire ce qu'elle peut, mais elle ne sait rien : ni ce que vous vendez, ni où vous êtes, ni à qui vous parlez, ni le ton que vous voulez. Alors elle comble les vides avec du générique.",
      },
      {
        partie: "Explication",
        ecran: "Les cinq lettres C, O, C, C, F apparaissent en colonne, chacune avec son mot et une question : Contexte (Qui suis-je ? Quelle situation ?), Objectif (Que dois-je obtenir ?), Cible (Pour qui ?), Contraintes (Quelles règles ?), Format (Sous quelle forme ?).",
        voix:
          "Pour éviter ça, voici la méthode AROBAZ, en cinq lettres : C, O, C, C, F. C comme Contexte : qui êtes-vous, quelle est votre situation ? O comme Objectif : que voulez-vous obtenir, exactement ? C comme Cible : à qui s'adresse le résultat ? Un client, un banquier, un enfant de dix ans ? C comme Contraintes : la longueur, le ton, ce qu'il faut absolument inclure, ce qu'il faut éviter. Et F comme Format : une liste, un tableau, un mail, un script de vidéo, un plan. Cinq questions. Si votre prompt y répond, l'IA a tout ce qu'il lui faut.",
      },
      {
        partie: "Exemple concret",
        ecran: "Le prompt se construit ligne par ligne, chaque ligne étiquetée par sa lettre. Contexte : « Je tiens un food truck de cuisine libanaise à Nantes, ouvert depuis 2 ans. » Objectif : « Je veux annoncer notre nouvel emplacement du jeudi midi. » Cible : « Salariés du quartier d'affaires, pause déjeuner courte. » Contraintes : « 80 mots max, ton chaleureux, vouvoiement, mentionner l'adresse et 11 h 45 – 14 h, 2 emojis maximum. » Format : « Une légende Instagram + 3 propositions de première phrase. »",
        voix:
          "Appliquons la méthode. Contexte : je tiens un food truck de cuisine libanaise à Nantes, ouvert depuis deux ans. Objectif : je veux annoncer notre nouvel emplacement du jeudi midi. Cible : des salariés du quartier d'affaires, qui ont une pause déjeuner courte. Contraintes : quatre-vingts mots maximum, ton chaleureux, vouvoiement, mentionner l'adresse et les horaires, deux emojis maximum. Format : une légende Instagram, plus trois propositions de première phrase. Regardez : chaque ligne enlève une part de devinette à l'IA. Et elle n'a plus besoin d'inventer.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture réelle : on envoie le prompt complet. La réponse s'affiche. On souligne l'adresse, l'horaire, le vouvoiement, les deux emojis et les trois accroches. Puis on compare avec la réponse au prompt vague.",
        voix:
          "J'envoie ce prompt. Et voilà le résultat : une légende courte, au vouvoiement, avec l'adresse et les horaires, deux emojis, et trois accroches au choix. Comparez avec ce qu'on avait obtenu avec la demande vague. Ce n'est pas l'IA qui est devenue plus intelligente. C'est la demande qui est devenue plus claire. Notez aussi que je n'ai pas écrit un roman : cinq lignes suffisent.",
      },
      {
        partie: "Explication",
        ecran: "Quatre adjectifs avec un mini-exemple chacun. Clair : une idée par phrase. Pertinent : rien d'inutile. Précis : « 80 mots » plutôt que « court ». Contextualisé : l'IA sait pourquoi vous demandez.",
        voix:
          "Un bon prompt a quatre qualités. Il est clair : une idée par phrase, pas de phrases à rallonge. Pertinent : tout ce qu'il contient sert la demande. Précis : on écrit « quatre-vingts mots » plutôt que « court », « vouvoiement » plutôt que « professionnel ». Et contextualisé : l'IA sait qui vous êtes et pourquoi vous demandez.",
      },
      {
        partie: "Explication",
        ecran: "Boucle : « Je demande → J'observe → Je corrige → J'améliore ». Exemples de corrections précises défilent : « Raccourcis la deuxième phrase », « Plus d'humour, mais sans jeu de mots », « Remplace “délicieux” par un mot moins banal », « Donne 3 versions plus audacieuses ».",
        voix:
          "Deuxième pilier de cette leçon : le dialogue. Même avec un excellent prompt, la première réponse n'est pas toujours parfaite. Et c'est normal. Le travail avec l'IA est itératif : on demande, on observe, on corrige, on améliore. La clé, c'est d'être précis dans vos corrections. « C'est pas terrible » n'aide pas l'IA. « Raccourcis la deuxième phrase », « enlève le jeu de mots », « remplace “délicieux” par un mot moins banal », ça, c'est exploitable. Et une astuce très efficace : demandez plusieurs versions. « Donne-moi trois versions plus audacieuses. » Vous choisissez, et vous affinez la meilleure.",
      },
      {
        partie: "Astuce",
        ecran: "Encart bleu : « Demandez à l'IA de vous poser des questions. » Exemple : « Avant de répondre, pose-moi les questions dont tu as besoin pour faire un excellent travail. »",
        voix:
          "Une dernière astuce, que vous allez utiliser très souvent. Quand vous ne savez pas quoi mettre dans votre contexte, demandez à l'IA de vous interroger. Écrivez simplement : « Avant de répondre, pose-moi les questions dont tu as besoin pour faire un excellent travail. » Elle va vous poser cinq ou six questions. Vous répondez, et elle a tout ce qu'il lui faut. C'est d'ailleurs un réflexe qu'on va intégrer à votre assistant personnel, en leçon huit.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Quatre cartes corail : « Le prompt mot-clé », « Les corrections vagues », « Tout demander en une fois », « Recommencer de zéro au lieu d'affiner ».",
        voix:
          "Les erreurs les plus courantes : le prompt mot-clé, comme une recherche Google. Les corrections vagues. Tout demander en une seule fois : le site, le logo, le slogan et la stratégie dans le même message. Mieux vaut découper. Et enfin, tout recommencer à zéro alors qu'il suffisait d'affiner. La conversation garde la mémoire de ce que vous avez dit : servez-vous-en.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Réécrivez une demande vague avec la méthode C.O.C.C.F., puis améliorez la réponse en 2 corrections précises. »",
        voix:
          "Votre exercice. Prenez une demande vague, du type « écris un texte pour mon activité ». Envoyez-la telle quelle. Puis réécrivez-la avec la méthode C.O.C.C.F., en remplissant les cinq champs sous cette vidéo. Envoyez-la, et améliorez la réponse avec deux corrections précises. Comparez le résultat final avec le premier. C'est le meilleur moyen de sentir la différence.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « Les limites et les erreurs de l'IA ».",
        voix:
          "Vous savez maintenant obtenir de très bonnes réponses. Mais une très bonne réponse peut être fausse. Dans la prochaine leçon, on apprend à repérer les erreurs de l'IA, et à savoir quand vérifier.",
      },
    ],
    exercice: {
      titre: "Votre premier prompt C.O.C.C.F.",
      consigne:
        "Envoyez d'abord une demande vague (ex. « écris un texte pour mon activité »). Puis réécrivez-la avec la méthode C.O.C.C.F., envoyez-la, et améliorez la réponse avec deux corrections précises.",
      champs: [
        { label: "C — Contexte", aide: "Qui êtes-vous ? Quelle est votre situation ?" },
        { label: "O — Objectif", aide: "Que voulez-vous obtenir exactement ?" },
        { label: "C — Cible", aide: "À qui s'adresse le résultat ?" },
        { label: "C — Contraintes", aide: "Longueur, ton, à inclure, à éviter" },
        { label: "F — Format", aide: "Liste, tableau, mail, légende, script…" },
        { label: "Mes 2 corrections et ce qu'elles ont changé" },
      ],
    },
    prompt: {
      titre: "Gabarit C.O.C.C.F.",
      texte: `Contexte : [qui je suis, ma situation]
Objectif : [ce que je veux obtenir]
Cible : [à qui s'adresse le résultat]
Contraintes : [longueur, ton, à inclure, à éviter]
Format : [liste, tableau, mail, légende, script…]

Avant de répondre, pose-moi les questions dont tu as besoin si une information importante manque.`,
      conseil: "Copiez ce gabarit dans un fichier ou dans vos notes : vous allez vous en servir dans tous les modules.",
    },
    verifier: [
      "Les cinq champs C.O.C.C.F. sont remplis, avec des informations précises (chiffres, noms, exemples)",
      "Votre prompt ne contient pas d'information hors sujet",
      "Vos deux corrections sont précises et actionnables, pas « c'est pas terrible »",
      "La réponse finale est utilisable telle quelle, ou presque",
    ],
    quiz: [
      {
        question: "Qu'est-ce qu'un prompt ?",
        choix: ["Un logiciel d'IA", "Une instruction donnée à l'IA", "Le résultat produit par l'IA"],
        bonne: 1,
        explication: "Le prompt, c'est votre demande. Sa qualité détermine en grande partie celle de la réponse.",
      },
      {
        question: "Que signifient les lettres C.O.C.C.F. ?",
        choix: [
          "Contexte, Objectif, Cible, Contraintes, Format",
          "Clarté, Originalité, Créativité, Cohérence, Fiabilité",
          "Contenu, Outil, Code, Copie, Fichier",
        ],
        bonne: 0,
        explication: "Contexte, Objectif, Cible, Contraintes, Format : les cinq informations qui évitent à l'IA de deviner.",
      },
      {
        question: "Quelle correction est la plus efficace ?",
        choix: ["« Ce n'est pas terrible, refais. »", "« Fais mieux. »", "« Raccourcis le 2e paragraphe et passe au vouvoiement. »"],
        bonne: 2,
        explication: "Une correction précise indique exactement quoi changer.",
      },
      {
        question: "Que faire quand vous ne savez pas quel contexte donner ?",
        choix: [
          "Envoyer la demande sans contexte",
          "Demander à l'IA de vous poser les questions dont elle a besoin",
          "Copier tous vos documents dans la conversation",
        ],
        bonne: 1,
        explication: "L'IA peut vous interroger : vous répondez, et elle dispose du contexte utile.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 7
  {
    slug: "limites-et-erreurs",
    numero: 7,
    titre: "Les limites et les erreurs de l'IA",
    sousTitre: "Une réponse bien écrite n'est pas forcément exacte. Savoir quand et comment vérifier.",
    dureeCible: "8 à 10 min",
    objectifs: [
      "Comprendre pourquoi une IA peut se tromper avec assurance",
      "Connaître les domaines où la vérification est indispensable",
      "Appliquer la règle Utiliser → Vérifier → Décider",
    ],
    essentiel: [
      {
        titre: "Convaincante mais fausse",
        texte:
          "Une IA peut produire une réponse très bien rédigée, sûre d'elle, et pourtant fausse. On parle souvent d'« hallucination » quand elle invente une information : un chiffre, une loi, une source, une citation.",
      },
      {
        titre: "Les causes",
        texte:
          "Une mauvaise compréhension de la demande, un contexte incomplet, une information ancienne (données d'entraînement datées), une erreur de raisonnement, ou une information tout simplement inventée.",
      },
      {
        titre: "Vigilance renforcée",
        texte:
          "Droit, fiscalité, santé, finance, actualité, et chiffres importants. Dans ces domaines, une erreur peut coûter cher : vérifiez auprès d'une source officielle ou d'un professionnel.",
      },
      {
        titre: "La règle AROBAZ",
        texte: "UTILISER → VÉRIFIER → DÉCIDER. L'IA vous fait gagner du temps sur le travail, mais la décision et la responsabilité restent les vôtres.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Une réponse d'IA très bien présentée, avec titres et chiffres précis, sur « les aides pour créer son entreprise ». Un tampon corail « À VÉRIFIER » se pose sur un chiffre et sur un nom de dispositif.",
        voix:
          "Cette réponse a l'air parfaite. Bien structurée, des chiffres précis, des noms de dispositifs. Le problème, c'est qu'une partie de ces informations pourrait être inexacte ou dépassée. Et rien, dans la façon dont c'est écrit, ne vous permet de le deviner. C'est le piège principal de l'IA : elle se trompe avec beaucoup d'assurance.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la leçon et les trois objectifs.",
        voix:
          "Dans cette leçon, on va comprendre pourquoi l'IA se trompe, dans quels domaines il faut être particulièrement vigilant, et quelle règle simple appliquer avant toute décision importante.",
      },
      {
        partie: "Explication",
        ecran: "Rappel visuel de la leçon 5 : la phrase qui se construit morceau par morceau, avec le mot « plausible » mis en avant. Puis : « Plausible ≠ vrai ».",
        voix:
          "Rappelez-vous la leçon cinq. Le modèle construit sa réponse en choisissant, à chaque étape, une suite plausible. Plausible, pas forcément vraie. La plupart du temps, ce qui est plausible est aussi vrai, et c'est pour ça que l'IA est si utile. Mais quand le modèle manque d'information, il ne s'arrête pas toujours. Il peut produire quelque chose qui ressemble à une bonne réponse. Un chiffre crédible. Un article de loi qui a l'air réel. Une source qui n'existe pas. C'est ce qu'on appelle souvent une hallucination.",
      },
      {
        partie: "Explication",
        ecran: "Cinq causes en cartes : Mauvaise compréhension · Contexte incomplet · Information ancienne · Erreur de raisonnement · Information inventée. Un exemple court sous chacune.",
        voix:
          "Les erreurs ont cinq causes principales. Une mauvaise compréhension : votre demande était ambiguë, et l'IA a répondu à une autre question. Un contexte incomplet : il lui manquait une information essentielle, par exemple votre pays ou votre statut. Une information ancienne : ses données s'arrêtent à une certaine date, et la règle a changé depuis. Une erreur de raisonnement : sur un calcul en plusieurs étapes, elle peut se tromper en chemin. Et enfin, l'information inventée : elle comble un vide avec quelque chose de plausible.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture réelle. On demande à un assistant : « Quel est le seuil de chiffre d'affaires de la micro-entreprise pour une activité de vente cette année ? » La réponse donne un chiffre. On ouvre ensuite la page officielle (service-public.fr / URSSAF) dans le navigateur et on compare. Mention : « Toujours vérifier sur la source officielle, à la date du jour. »",
        voix:
          "Faisons l'exercice sur un cas réel. Je demande à un assistant le seuil de chiffre d'affaires de la micro-entreprise pour une activité de vente. Il me donne un chiffre, avec assurance. Maintenant, je fais ce qu'il faut toujours faire pour ce type d'information : je vérifie sur le site officiel. Ces seuils sont révisés périodiquement, et l'IA peut avoir une valeur ancienne. Ici, le réflexe est simple : l'IA m'a fait gagner du temps pour savoir quoi chercher. La source officielle me donne le bon chiffre. Et c'est moi qui décide.",
      },
      {
        partie: "Explication",
        ecran: "Six pictogrammes avec un liseré corail : Droit · Fiscalité · Santé · Finance · Actualité · Chiffres importants. Sous chacun, la bonne source : texte officiel, administration, professionnel de santé, conseiller, média reconnu, source primaire.",
        voix:
          "Dans certains domaines, la vigilance doit être maximale. Le droit, la fiscalité, la santé, la finance, l'actualité, et plus généralement tous les chiffres importants : un prix, un taux, une date limite, une statistique. Dans ces domaines, une erreur peut avoir de vraies conséquences. Utilisez l'IA pour comprendre, pour préparer vos questions, pour résumer. Mais vérifiez auprès de la source officielle, ou d'un professionnel qualifié, avant de décider.",
      },
      {
        partie: "Méthode",
        ecran: "Trois grandes étapes : UTILISER (l'IA prépare, résume, propose) → VÉRIFIER (sources, cohérence, chiffres) → DÉCIDER (vous, en connaissance de cause).",
        voix:
          "D'où la règle AROBAZ, à appliquer avant toute décision importante : Utiliser, Vérifier, Décider. Utiliser : l'IA prépare, résume, propose. Elle vous fait gagner un temps énorme. Vérifier : les chiffres, les sources, la cohérence. Et Décider : c'est vous, en connaissance de cause. L'IA est un assistant. Elle n'est jamais responsable à votre place.",
      },
      {
        partie: "Astuce",
        ecran: "Trois prompts de vérification en encart bleu : « Sur quelles sources t'appuies-tu ? », « Quels points de ta réponse sont les moins sûrs ? », « Qu'est-ce qui a pu changer récemment sur ce sujet ? »",
        voix:
          "Quelques questions très utiles à poser à l'IA elle-même. « Quels points de ta réponse sont les moins sûrs ? » « Qu'est-ce qui a pu changer récemment sur ce sujet ? » « Où puis-je vérifier cette information ? » Ça ne remplace pas une vraie vérification, mais ça vous indique où regarder en priorité. Et si l'outil cite des sources, ouvrez-les : vérifiez qu'elles existent et qu'elles disent bien ce qu'on leur fait dire.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Trois cartes corail : « Confondre style et exactitude », « Publier un chiffre sans source », « Partager des données confidentielles ».",
        voix:
          "Retenez surtout ceci : la qualité rédactionnelle d'une réponse ne garantit pas son exactitude. Ne publiez jamais un chiffre sans l'avoir vérifié. Et n'oubliez pas l'autre limite, celle de la confidentialité : ne copiez pas de données personnelles de vos clients ou d'informations sensibles dans un outil sans savoir comment elles sont utilisées.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Posez une question factuelle liée à votre projet, puis vérifiez la réponse sur une source officielle. »",
        voix:
          "Votre exercice : posez à l'IA une question factuelle liée à votre projet, sur une règle, un tarif, une obligation ou un chiffre. Puis vérifiez la réponse sur une source officielle. Notez si c'était juste, partiellement juste ou faux, et quelle source vous a servi. Cet exercice vaut de l'or : il installe le bon réflexe pour toute la suite.",
      },
      {
        partie: "Transition",
        ecran: "Titre : « Mission : créer votre premier assistant IA ».",
        voix:
          "Vous avez maintenant toutes les bases : ce qu'est l'IA, comment elle fonctionne, comment lui parler, et quand vous méfier. Il est temps de passer à l'action. Dans la dernière leçon de ce module, vous allez créer votre premier assistant IA personnalisé.",
      },
    ],
    exercice: {
      titre: "Vérifier une réponse",
      consigne:
        "Posez à l'IA une question factuelle liée à votre projet (règle, tarif, obligation, chiffre). Vérifiez la réponse sur une source officielle ou fiable.",
      champs: [
        { label: "Ma question" },
        { label: "La réponse de l'IA (en résumé)" },
        { label: "La source utilisée pour vérifier", aide: "Ex. : service-public.fr, site de l'URSSAF, site officiel de l'outil…" },
        { label: "Verdict : juste, partiellement juste ou faux, et pourquoi" },
      ],
    },
    prompt: {
      titre: "Questions de vérification",
      texte: `Quels points de ta réponse sont les moins sûrs ?
Qu'est-ce qui a pu changer récemment sur ce sujet ?
Où puis-je vérifier ces informations auprès d'une source officielle ?`,
      conseil: "Ces questions ne remplacent pas la vérification : elles vous disent où regarder en priorité.",
    },
    verifier: [
      "Vous avez consulté une source officielle ou reconnue, pas seulement une autre IA",
      "Vous avez noté la date de la source",
      "Vous savez citer au moins quatre domaines où la vérification est indispensable",
    ],
    quiz: [
      {
        question: "Une réponse bien écrite et sûre d'elle est-elle forcément exacte ?",
        choix: ["Oui, l'IA ne répond que lorsqu'elle est sûre", "Non, la qualité rédactionnelle ne garantit pas l'exactitude", "Oui, si la réponse contient des chiffres"],
        bonne: 1,
        explication: "L'IA peut se tromper avec beaucoup d'assurance. Le style ne prouve rien.",
      },
      {
        question: "Quelle est la règle AROBAZ avant de prendre une décision importante ?",
        choix: ["Demander → Copier → Publier", "Utiliser → Vérifier → Décider", "Vérifier → Utiliser → Oublier"],
        bonne: 1,
        explication: "L'IA prépare, vous vérifiez, et c'est vous qui décidez.",
      },
      {
        question: "Dans quel cas la vérification est-elle la plus indispensable ?",
        choix: ["Trouver des idées de noms pour un projet", "Connaître un seuil fiscal ou une obligation légale", "Reformuler un mail pour le rendre plus poli"],
        bonne: 1,
        explication: "Droit, fiscalité, santé, finance, actualité et chiffres importants exigent une source officielle.",
      },
      {
        question: "Qu'appelle-t-on souvent une « hallucination » ?",
        choix: ["Une panne de l'outil", "Une information inventée mais présentée comme vraie", "Une image générée par l'IA"],
        bonne: 1,
        explication: "Le modèle comble un manque d'information avec quelque chose de plausible, mais faux.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 8
  {
    slug: "mission-premier-assistant",
    numero: 8,
    titre: "Mission : créer votre premier assistant IA",
    sousTitre: "Un assistant configuré pour votre projet, testé en quatre étapes, prêt pour tout le parcours.",
    dureeCible: "15 à 20 min",
    objectifs: [
      "Choisir le rôle de votre assistant",
      "Le configurer avec le prompt AROBAZ, adapté à votre projet",
      "Le tester en quatre étapes et l'améliorer",
    ],
    essentiel: [
      {
        titre: "Pourquoi un assistant ?",
        texte:
          "Au lieu de tout réexpliquer à chaque conversation, vous donnez une fois pour toutes à l'IA votre contexte, votre objectif, votre public, votre niveau et vos règles. Elle répond ensuite en tenant compte de tout ça.",
      },
      {
        titre: "Choisir un rôle",
        texte:
          "Entrepreneur, commercial, marketing, communication, créateur de contenu, administratif, étudiant, organisation… Choisissez celui qui vous fera gagner le plus de temps dans les semaines qui viennent.",
      },
      {
        titre: "Où l'enregistrer",
        texte:
          "Selon votre outil, vous pouvez enregistrer ces instructions de façon permanente : instructions personnalisées, projet, assistant personnalisé. Les noms et l'emplacement de ces fonctions varient selon l'outil et la formule. À défaut, collez simplement le prompt en début de conversation.",
      },
      {
        titre: "Les 4 tests",
        texte:
          "1. Présenter votre projet. 2. Demander quelles informations manquent. 3. Demander les 3 prochaines actions. 4. Demander comment l'assistant peut vous aider chaque semaine.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Une personne qui recopie, pour la dixième fois, « Je suis fleuriste à Bordeaux, mes clients sont… » dans une nouvelle conversation. Compteur : « 10 fois ». Puis la même personne qui ouvre son assistant, tape une question courte, et obtient une réponse adaptée.",
        voix:
          "Combien de fois allez-vous réexpliquer à l'IA qui vous êtes, ce que vous faites et pour qui ? Si vous l'utilisez tous les jours, la réponse est : des centaines. Il y a beaucoup plus simple. Aujourd'hui, vous allez créer un assistant qui connaît déjà votre projet, et qui travaille selon vos règles.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la mission. Trois étapes : Choisir → Configurer → Tester.",
        voix:
          "Cette leçon est une mission. On va la faire ensemble, étape par étape. Vous allez choisir le rôle de votre assistant, le configurer avec le prompt AROBAZ adapté à votre projet, puis le tester en quatre étapes. À la fin, vous aurez un véritable outil de travail, que vous utiliserez dans tous les modules suivants.",
      },
      {
        partie: "Étape 1 — Choisir",
        ecran: "Grille de neuf rôles : Entrepreneur, Commercial, Marketing, Communication, Créateur de contenu, Administratif, Étudiant, Organisation, Autre. Sous chaque rôle, un exemple de tâche.",
        voix:
          "Première étape : choisir le rôle. Voici quelques exemples. Un assistant entrepreneur, pour structurer votre projet et prendre des décisions. Un assistant commercial, pour préparer vos offres et vos relances. Un assistant marketing ou communication, pour vos textes et vos campagnes. Un assistant créateur de contenu, pour vos idées et vos scripts. Un assistant administratif, pour vos mails et vos documents. Ou encore un assistant d'organisation, pour planifier vos semaines. Ma recommandation : choisissez le rôle qui vous fera gagner le plus de temps dans le mois qui vient. Si vous suivez ce parcours pour lancer un projet, l'assistant entrepreneur est un excellent choix de départ.",
      },
      {
        partie: "Étape 2 — Configurer",
        ecran: "Le prompt AROBAZ s'affiche en entier. Les champs entre crochets clignotent en bleu : [DOMAINE], [OBJECTIF], [DÉCRIVEZ VOTRE PROJET], [DÉCRIVEZ VOTRE PUBLIC], [NIVEAU].",
        voix:
          "Deuxième étape : la configuration. Voici le prompt AROBAZ. Vous le trouverez sous cette vidéo, prêt à copier. Il commence par cinq informations à compléter : le domaine de spécialité de votre assistant, son rôle, votre projet, votre public cible et votre niveau. Vous reconnaissez la méthode de la leçon six : c'est du contexte, un objectif et une cible. Ensuite viennent les règles de travail. Commencer par comprendre votre besoin. Répondre simplement. Éviter le jargon. Donner des exemples concrets. Proposer des actions réalisables. Et deux règles essentielles, qui viennent directement de la leçon sept : indiquer clairement quand il n'est pas certain, et ne pas inventer d'informations. Enfin, deux réflexes : présenter les différences quand plusieurs solutions existent, et vous poser des questions quand il manque une information importante.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture réelle. On remplit le prompt pour un exemple : « Domaine : création et lancement d'une petite entreprise. Objectif : lancer mon activité de fleuriste événementielle. Projet : compositions florales pour mariages et événements d'entreprise, à Bordeaux, en solo, lancement prévu dans 3 mois. Public : futurs mariés de 28-40 ans et responsables d'événements en entreprise. Niveau : débutant. »",
        voix:
          "Je vous montre avec un exemple. Je suis fleuriste et je lance une activité de décoration florale pour les mariages et les événements d'entreprise, à Bordeaux. Domaine : création et lancement d'une petite entreprise. Objectif : lancer mon activité de fleuriste événementielle. Projet : compositions florales pour mariages et événements d'entreprise, en solo, lancement prévu dans trois mois. Public : futurs mariés de vingt-huit à quarante ans, et responsables d'événements en entreprise. Niveau : débutant. Remarquez le niveau de détail. Plus votre description est précise et pertinente, plus votre assistant sera utile.",
      },
      {
        partie: "Où l'enregistrer",
        ecran: "Trois vignettes génériques : « Instructions personnalisées », « Projet », « Assistant personnalisé ». Mention : « Les noms et emplacements varient selon l'outil et la formule. » Puis la solution universelle : « Coller le prompt en début de conversation ».",
        voix:
          "Où enregistrer ce prompt ? Beaucoup d'outils permettent de le garder de façon permanente, sous des noms différents : instructions personnalisées, projets, assistants personnalisés. Les noms et les menus changent selon l'outil et la formule. Je ne vais donc pas vous montrer un bouton qui aura peut-être déménagé dans trois mois. La solution qui marche partout : enregistrez votre prompt dans un document, et collez-le en début de conversation. Et si votre outil propose une fonction d'instructions ou de projet, utilisez-la : c'est encore plus pratique.",
      },
      {
        partie: "Étape 3 — Tester",
        ecran: "Quatre tests numérotés, chacun avec sa phrase type. 1. « Voici mon projet en détail : … » 2. « Quelles informations importantes te manquent pour bien m'aider ? » 3. « Quelles sont les 3 prochaines actions que je devrais faire cette semaine ? » 4. « Comment peux-tu m'aider chaque semaine ? Propose-moi une routine. »",
        voix:
          "Troisième étape, la plus importante : les tests. Un assistant qu'on n'a pas testé, on ne sait pas s'il fonctionne. Faites ces quatre tests, dans l'ordre. Un : présentez votre projet en détail. Observez si l'assistant reformule correctement votre besoin. Deux : demandez-lui quelles informations importantes lui manquent. S'il pose de bonnes questions, c'est très bon signe. Répondez-y. Trois : demandez-lui les trois prochaines actions à faire cette semaine. Elles doivent être concrètes et réalisables, pas des généralités. Quatre : demandez-lui comment il peut vous aider chaque semaine. Vous obtiendrez une routine de travail que vous pourrez adopter.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture réelle des tests 2 et 3 avec l'exemple de la fleuriste. L'assistant demande le budget de départ, la zone géographique couverte, les tarifs envisagés, le stockage des fleurs. Puis il propose 3 actions : lister 5 concurrents locaux et leurs prix, préparer 3 compositions types photographiées, créer une page de présentation simple.",
        voix:
          "Voyons le résultat avec notre fleuriste. Au test deux, l'assistant demande le budget de départ, la zone couverte, les tarifs envisagés et la façon de stocker les fleurs. Ce sont exactement les bonnes questions. Au test trois, après mes réponses, il propose trois actions : lister cinq concurrents locaux et leurs prix, préparer trois compositions types et les photographier, créer une page de présentation simple. Concret, faisable, utile. Notez au passage le premier conseil de la leçon sept : si l'assistant me donnait un chiffre réglementaire ou un prix de marché, je le vérifierais.",
      },
      {
        partie: "Étape 4 — Améliorer",
        ecran: "Avant / après sur le prompt : on ajoute une ligne « Réponds en 200 mots maximum, sauf si je demande plus de détails » et « Termine chaque réponse par une action concrète à faire aujourd'hui ».",
        voix:
          "Dernière étape : améliorer. Après les tests, vous aurez sans doute remarqué des choses à ajuster. Les réponses sont trop longues ? Ajoutez une règle : « réponds en deux cents mots maximum, sauf si je demande plus de détails ». Vous voulez plus d'action ? Ajoutez : « termine chaque réponse par une action concrète à faire aujourd'hui ». Votre assistant n'est pas figé. Vous allez l'enrichir tout au long du parcours, au fur et à mesure que votre projet avance.",
      },
      {
        partie: "Validation",
        ecran: "Checklist de validation du module, cochée ligne par ligne : définir l'IA, définir l'IA générative, expliquer un modèle, distinguer outil et modèle, rédiger un prompt C.O.C.C.F., comprendre les limites, savoir quand vérifier, avoir créé et testé son assistant.",
        voix:
          "Vous arrivez au bout du premier module. Avant de passer à la validation, faisons le point. Vous savez maintenant définir l'intelligence artificielle et l'IA générative. Vous savez ce qu'est un modèle, et la différence entre un modèle et une application. Vous savez rédiger un prompt avec la méthode C.O.C.C.F. Vous connaissez les limites de l'IA, et vous savez quand vérifier. Et vous avez créé votre premier assistant, testé et amélioré. Il vous reste une étape : le quiz de validation du module.",
      },
      {
        partie: "Transition",
        ecran: "Rappel des 3 objectifs notés en leçon 1. Puis titre du module 2 : « Transformer une idée en projet ».",
        voix:
          "Reprenez les trois objectifs que vous aviez notés dans la leçon une. Relisez-les : vous avez maintenant les outils pour commencer à les atteindre. Dans le module deux, votre assistant va devenir votre partenaire de réflexion pour transformer votre idée en un vrai projet : le problème, le client, le marché, l'offre. Bravo pour ce premier module. On se retrouve très vite.",
      },
    ],
    exercice: {
      titre: "Votre assistant, configuré et testé",
      consigne:
        "Complétez le prompt AROBAZ pour votre projet, utilisez-le dans votre assistant IA, puis réalisez les quatre tests. Notez ce que vous retenez de chaque test et les améliorations apportées au prompt.",
      champs: [
        { label: "Rôle choisi pour mon assistant", aide: "Entrepreneur, commercial, marketing, communication, créateur de contenu, administratif…" },
        { label: "Mon prompt complété (domaine, objectif, projet, public, niveau)" },
        { label: "Test 1 : l'assistant a-t-il bien reformulé mon projet ?" },
        { label: "Test 2 : les informations qu'il m'a demandées" },
        { label: "Test 3 : les 3 prochaines actions proposées" },
        { label: "Test 4 : la routine hebdomadaire proposée" },
        { label: "Les règles que j'ai ajoutées pour l'améliorer" },
      ],
    },
    prompt: {
      titre: "Le prompt AROBAZ de votre assistant",
      texte: PROMPT_ASSISTANT,
      conseil: "Remplacez chaque [CROCHET] par vos informations, puis enregistrez le prompt dans vos notes. Vous le réutiliserez dans tous les modules.",
    },
    verifier: [
      "Les cinq champs entre crochets sont remplis avec des informations précises",
      "Vous avez réalisé les quatre tests, dans l'ordre",
      "Les 3 actions proposées au test 3 sont concrètes et réalisables cette semaine",
      "Vous avez ajouté au moins une règle pour améliorer votre assistant",
      "Votre prompt est enregistré quelque part où vous le retrouverez",
    ],
    quiz: [
      {
        question: "Quel est l'intérêt principal d'un assistant IA configuré ?",
        choix: [
          "Il ne fait plus jamais d'erreurs",
          "Il connaît déjà votre contexte et vos règles, sans tout réexpliquer",
          "Il fonctionne sans connexion Internet",
        ],
        bonne: 1,
        explication: "Vous donnez une fois votre contexte et vos règles. Mais il peut toujours se tromper : la règle de vérification s'applique.",
      },
      {
        question: "Pourquoi le prompt demande-t-il à l'assistant d'indiquer quand il n'est pas certain ?",
        choix: [
          "Pour rendre les réponses plus longues",
          "Pour vous aider à repérer ce qu'il faut vérifier",
          "Parce que c'est obligatoire dans tous les outils",
        ],
        bonne: 1,
        explication: "C'est l'application directe de la leçon 7 : savoir où porter la vérification.",
      },
      {
        question: "Quel est le 2e test à faire avec votre assistant ?",
        choix: [
          "Lui demander quelles informations importantes lui manquent",
          "Lui demander d'écrire un poème",
          "Lui demander quel modèle il utilise",
        ],
        bonne: 0,
        explication: "S'il pose de bonnes questions, il a bien compris son rôle. Répondez-y pour enrichir son contexte.",
      },
    ],
  },
];
