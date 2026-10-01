import type { Lecon } from "./types";

export const LECONS_A: Lecon[] = [
  // ─────────────────────────────────────────────── LEÇON 1
  {
    slug: "bienvenue",
    numero: 1,
    titre: "Bienvenue dans l'univers de l'IA",
    sousTitre: "Ce que l'IA change pour vous, et comment ce parcours va fonctionner.",
    dureeCible: "6 à 8 min",
    objectifs: [
      "Comprendre pourquoi l'IA est devenue accessible à tous",
      "Découvrir ce que vous pourrez réellement faire avec",
      "Connaître la méthode AroBaz et l'organisation du module",
    ],
    essentiel: [
      {
        titre: "L'IA n'est plus réservée aux experts",
        texte:
          "Il y a quelques années, utiliser l'intelligence artificielle demandait de savoir programmer. Aujourd'hui, on lui parle en français, dans une fenêtre de discussion. Ce qui compte n'est plus la technique, c'est la capacité à formuler clairement ce que l'on veut et à juger le résultat.",
      },
      {
        titre: "Ce que vous pourrez faire",
        texte:
          "Écrire et reformuler des textes, créer des images, analyser un document, structurer un projet, créer un site, écrire du code, préparer des vidéos, produire du contenu marketing et automatiser des tâches répétitives. Ce parcours couvre chacun de ces usages, sur votre propre projet.",
      },
      {
        titre: "La méthode AroBaz",
        texte:
          "Apprendre → Observer → Faire → Vérifier → Améliorer. Chaque leçon suit ce rythme : une notion, une démonstration, une mise en pratique sur votre projet, une vérification, puis une amélioration.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Plein écran, fond clair. Trois phrases tapées une à une dans une vraie fenêtre de discussion IA : « Écris la page d'accueil de ma boulangerie », « Résume ce contrat en 5 points », « Propose 10 idées de vidéos pour mon salon de coiffure ». Les réponses apparaissent en accéléré.",
        voix:
          "Écrire la page d'accueil d'un site. Résumer un contrat de douze pages. Trouver dix idées de vidéos pour son commerce. Il y a encore quelques années, chacune de ces tâches demandait du temps, un prestataire, ou des compétences que la plupart d'entre nous n'avaient pas. Aujourd'hui, elles prennent quelques minutes. Et la personne qui les fait, ce n'est pas forcément un expert. Ça peut être vous.",
      },
      {
        partie: "Objectif",
        ecran: "Logo AroBaz, puis titre de la leçon. À droite, les trois objectifs apparaissent en liste.",
        voix:
          "Bienvenue dans AroBaz. C'est un plaisir de vous accompagner dans cette formation. Dans cette première leçon, on va faire trois choses : comprendre pourquoi l'intelligence artificielle est devenue accessible à tout le monde, voir concrètement ce que vous allez pouvoir en faire, et découvrir comment ce parcours est construit, pour que vous sachiez exactement où vous allez.",
      },
      {
        partie: "Explication",
        ecran: "Frise simple en deux temps. À gauche « Avant » : écran de code, pictogramme d'ingénieur. À droite « Aujourd'hui » : une fenêtre de discussion, une personne avec un téléphone.",
        voix:
          "Pendant longtemps, l'intelligence artificielle était une affaire de spécialistes. Pour s'en servir, il fallait écrire du code, préparer des données, configurer des serveurs. Ce qui a changé, c'est la manière d'y accéder. Aujourd'hui, on parle à l'IA comme on écrirait à un collègue : en français, avec des phrases normales. Vous écrivez votre demande, l'IA vous répond, et vous pouvez lui demander de corriger, de préciser ou de recommencer. Concrètement, ça veut dire une chose importante : la compétence qui fait la différence n'est plus technique. C'est savoir expliquer clairement ce que l'on veut, et savoir juger si le résultat est bon. Et ça, ça s'apprend. C'est exactement l'objet de ce parcours.",
      },
      {
        partie: "Exemple concret",
        ecran: "Mosaïque de neuf tuiles qui s'allument une à une : Écrire, Images, Analyser un document, Construire un projet, Créer un site, Coder, Vidéo, Marketing, Automatiser.",
        voix:
          "Alors, que peut-on faire avec l'IA aujourd'hui ? Écrire : un mail difficile, une fiche produit, un article. Créer des images : un visuel pour un post, une illustration, une maquette. Analyser un document : un devis, un contrat, un tableau de chiffres. Construire un projet : clarifier une idée, définir un client, préparer une offre. Créer un site internet, et même écrire le code qui va avec. Préparer des vidéos, du script au montage. Produire votre communication. Et enfin, automatiser : faire en sorte que certaines tâches se fassent toutes seules. Tout ce que vous voyez à l'écran, vous allez le pratiquer dans ce parcours. Pas en théorie : sur votre propre projet.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture d'écran réelle d'un assistant IA. On tape : « Je veux ouvrir un atelier de réparation de vélos à Lyon. Quelles sont les 5 premières questions que je dois me poser ? » La réponse s'affiche, on surligne deux questions pertinentes.",
        voix:
          "Regardez. Je donne une situation simple à un assistant IA : je veux ouvrir un atelier de réparation de vélos à Lyon, quelles sont les cinq premières questions que je dois me poser ? En quelques secondes, j'obtiens une liste structurée : qui sont mes clients, où m'installer, quel budget de départ, quels concurrents, quelles démarches. Est-ce que c'est parfait ? Non. Certaines questions sont génériques, et il faudra vérifier les démarches. Mais en trente secondes, j'ai un point de départ pour réfléchir. C'est exactement la bonne façon de voir l'IA : un partenaire de travail rapide, à qui vous gardez toujours le dernier mot.",
      },
      {
        partie: "Méthode",
        ecran: "Les cinq étapes de la méthode s'affichent en ligne, reliées par des flèches : Apprendre, Observer, Faire, Vérifier, Améliorer. Chaque étape s'illumine quand elle est citée.",
        voix:
          "Dans AroBaz, chaque leçon suit la même méthode, en cinq temps. Apprendre : on découvre une notion, simplement. Observer : vous me regardez faire, sur de vrais outils. Faire : vous reproduisez sur votre projet à vous, avec un prompt ou une fiche prête à l'emploi. Vérifier : une grille de contrôle et un petit quiz vous disent si c'est solide. Améliorer : vous corrigez et vous gardez la meilleure version. Ce rythme est volontaire. On ne retient vraiment que ce qu'on a fait soi-même.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Deux cartes barrées en rouge corail : « Tout croire » et « Tout rejeter ». Une carte verte : « Utiliser, vérifier, décider ».",
        voix:
          "Avant d'aller plus loin, deux pièges à éviter dès maintenant. Le premier : tout croire. L'IA écrit bien, avec assurance, mais elle peut se tromper. On en parlera en détail dans la leçon sept. Le second piège, c'est l'inverse : tout rejeter après une première réponse décevante. Une première réponse moyenne, c'est souvent le signe que la demande était trop vague. On apprendra à corriger ça dans la leçon six.",
      },
      {
        partie: "Parcours du module",
        ecran: "Les huit leçons du module en liste verticale, avec leur durée. La leçon 8 est mise en avant : « Mission : votre premier assistant IA ».",
        voix:
          "Voici le programme de ce premier module. On va définir ce qu'est l'intelligence artificielle, puis l'IA générative. On va comprendre la différence entre ChatGPT, Claude, Gemini et les modèles qui sont derrière. On verra comment une IA fonctionne, sans entrer dans les mathématiques. Puis on attaque le plus important : apprendre à lui parler, et connaître ses limites. Et à la fin du module, vous créerez votre premier assistant IA personnalisé, qui vous servira pendant tout le reste du parcours.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » sur fond bleu clair : « Notez 3 choses que vous aimeriez réussir avec l'IA. » Trois lignes vides.",
        voix:
          "À vous maintenant. Sous cette vidéo, vous trouverez un premier exercice très simple : notez trois choses que vous aimeriez réussir grâce à l'IA. Soyez concret. Pas « gagner du temps », mais par exemple « écrire mes fiches produits en dix minutes au lieu d'une heure ». Gardez ces trois objectifs : on y reviendra à la fin du module, et vous verrez le chemin parcouru.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « Qu'est-ce que l'intelligence artificielle ? »",
        voix:
          "Dans la prochaine leçon, on répond à une question qui paraît simple, mais que peu de gens savent vraiment expliquer : qu'est-ce que l'intelligence artificielle ? À tout de suite.",
      },
    ],
    exercice: {
      titre: "Vos 3 objectifs avec l'IA",
      consigne:
        "Notez trois choses précises que vous aimeriez réussir grâce à l'IA. Évitez les objectifs vagues (« gagner du temps ») : décrivez une tâche réelle et le résultat attendu.",
      champs: [
        { label: "Objectif 1", aide: "Ex. : écrire mes fiches produits en 10 minutes au lieu d'une heure" },
        { label: "Objectif 2", aide: "Ex. : créer le site de mon activité sans passer par une agence" },
        { label: "Objectif 3", aide: "Ex. : publier 3 fois par semaine sur Instagram sans y passer mes soirées" },
      ],
    },
    verifier: [
      "Chaque objectif décrit une tâche concrète, pas une intention générale",
      "Chaque objectif a un résultat que vous pourrez constater",
      "Au moins un objectif concerne directement votre projet ou votre activité",
    ],
    quiz: [
      {
        question: "Qu'est-ce qui a rendu l'IA accessible au grand public ?",
        choix: [
          "Les ordinateurs sont devenus moins chers",
          "On peut maintenant lui parler en langage courant, sans programmer",
          "Elle ne fait plus d'erreurs",
        ],
        bonne: 1,
        explication: "Le grand changement, c'est l'interface : on écrit une demande en français, comme à un collègue. L'IA fait toujours des erreurs, on le verra en leçon 7.",
      },
      {
        question: "Quelle compétence fait la différence pour bien utiliser l'IA ?",
        choix: [
          "Savoir programmer",
          "Connaître les mathématiques des modèles",
          "Expliquer clairement ce que l'on veut et juger le résultat",
        ],
        bonne: 2,
        explication: "Formuler clairement et évaluer le résultat : c'est ce que vous allez travailler dans tout le parcours.",
      },
      {
        question: "Dans quel ordre se déroule la méthode AroBaz ?",
        choix: [
          "Faire → Apprendre → Vérifier → Observer → Améliorer",
          "Apprendre → Observer → Faire → Vérifier → Améliorer",
          "Observer → Faire → Améliorer → Apprendre → Vérifier",
        ],
        bonne: 1,
        explication: "On apprend une notion, on observe une démonstration, on fait sur son projet, on vérifie, puis on améliore.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 2
  {
    slug: "qu-est-ce-que-l-ia",
    numero: 2,
    titre: "Qu'est-ce que l'intelligence artificielle ?",
    sousTitre: "Une définition simple, des exemples que vous utilisez déjà, et ce que l'IA n'est pas.",
    dureeCible: "10 à 12 min",
    video: undefined,
    objectifs: [
      "Définir l'IA avec vos propres mots",
      "Reconnaître l'IA dans des outils que vous utilisez déjà",
      "Comprendre pourquoi l'IA n'est pas une intelligence humaine",
    ],
    essentiel: [
      {
        titre: "La définition à retenir",
        texte:
          "L'intelligence artificielle désigne un ensemble de technologies capables d'analyser des informations, de reconnaître des modèles et de produire des résultats à partir de données.",
      },
      {
        titre: "Vous l'utilisez déjà",
        texte:
          "Le déverrouillage de votre téléphone par le visage, les recommandations de films ou de produits, la traduction automatique, le filtre anti-spam de votre messagerie, la saisie prédictive de votre clavier : tout cela repose sur de l'IA.",
      },
      {
        titre: "IA ≠ intelligence humaine",
        texte:
          "Une IA ne comprend pas le monde comme nous. Elle n'a ni intention, ni expérience vécue, ni bon sens garanti. Elle repère des régularités dans des données, ce qui la rend très performante sur certaines tâches et étonnamment fragile sur d'autres.",
      },
      {
        titre: "Votre objectif",
        texte:
          "Ne pas devenir ingénieur en IA, mais apprendre à l'utiliser comme un outil de travail : savoir quoi lui demander, comment, et quand ne pas lui faire confiance.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Gros plan sur un téléphone qui se déverrouille par reconnaissance faciale. Puis une page de recommandations « Parce que vous avez regardé… ». Puis un mail rangé automatiquement dans « Spam ».",
        voix:
          "Ce matin, vous avez probablement déjà utilisé l'intelligence artificielle plusieurs fois, sans y penser. En déverrouillant votre téléphone avec votre visage. En regardant une série recommandée pour vous. Ou simplement parce qu'un mail douteux a été rangé tout seul dans vos indésirables. L'IA n'est pas une technologie du futur. Elle est déjà partout. La vraie question, c'est : qu'est-ce que c'est, exactement ?",
      },
      {
        partie: "Objectif",
        ecran: "Titre : « Qu'est-ce que l'intelligence artificielle ? ». Les trois objectifs de la leçon s'affichent.",
        voix:
          "À la fin de cette leçon, vous saurez expliquer ce qu'est l'IA avec vos propres mots, la reconnaître autour de vous, et surtout comprendre ce qu'elle n'est pas. Ce dernier point est essentiel pour bien l'utiliser.",
      },
      {
        partie: "Explication",
        ecran: "La définition s'écrit au centre de l'écran. Trois mots-clés se surlignent successivement : « analyser des informations », « reconnaître des modèles », « produire des résultats ».",
        voix:
          "Voici une définition simple, que je vous propose de retenir. L'intelligence artificielle désigne un ensemble de technologies capables d'analyser des informations, de reconnaître des modèles et de produire des résultats à partir de données. Prenons ces trois idées une par une. Analyser des informations : un texte, une image, un son, un tableau de chiffres. Reconnaître des modèles : repérer ce qui se répète, ce qui se ressemble, ce qui va souvent ensemble. Et produire un résultat : une réponse, une décision, une prédiction, un texte, une image. Remarquez le mot « ensemble ». L'IA n'est pas une seule machine ou un seul logiciel. C'est une famille de techniques, qui servent à des choses très différentes.",
      },
      {
        partie: "Explication",
        ecran: "Schéma en trois blocs : « Des données » (photos de chats et de chiens) → « Apprentissage » → « Un modèle ». Puis une nouvelle photo entre dans le modèle et ressort étiquetée « chat ».",
        voix:
          "Prenons un exemple classique. On veut qu'un programme reconnaisse les chats sur des photos. Avec la programmation traditionnelle, il faudrait écrire des règles : deux oreilles pointues, des moustaches, une certaine forme. Ça ne marche pas bien, parce qu'il y a trop de cas particuliers. Avec l'IA, on fait autrement. On montre au programme des milliers de photos, en lui indiquant lesquelles contiennent un chat. À force d'exemples, le système apprend lui-même les régularités qui distinguent un chat. Le résultat de cet apprentissage, on l'appelle un modèle. Et ensuite, quand on lui montre une photo qu'il n'a jamais vue, il est capable de dire s'il y a un chat dessus. Retenez bien ce mot, modèle. On va le retrouver dans toutes les leçons.",
      },
      {
        partie: "Exemple concret",
        ecran: "Sept cartes s'affichent avec un exemple réel chacune : Reconnaissance (visage), Recommandation (films), Traduction, Analyse (devis), Classification (spam), Prédiction (météo, stocks), Génération (texte, image).",
        voix:
          "Voyons les grandes familles d'usages. La reconnaissance : identifier un visage, une voix, un objet. La recommandation : vous proposer un film, une chanson, un produit. La traduction : passer d'une langue à l'autre. L'analyse : extraire l'essentiel d'un document ou d'un tableau. La classification : ranger automatiquement, comme le filtre anti-spam. La prédiction : estimer une demande, anticiper un stock. Et enfin la génération : produire du texte, des images, du son, de la vidéo ou du code. C'est cette dernière famille, l'IA générative, qui a tout changé ces dernières années. Et c'est celle qu'on va le plus utiliser dans AroBaz. On lui consacre toute la prochaine leçon.",
      },
      {
        partie: "Point clé",
        ecran: "Grand titre : « IA ≠ intelligence humaine ». Deux colonnes : « Ce que l'IA fait très bien » (vitesse, volume, régularités, reformulation) et « Ce qu'elle ne fait pas » (intention, expérience vécue, responsabilité, bon sens garanti).",
        voix:
          "Maintenant, un point très important. Le mot « intelligence » est trompeur. Une IA n'est pas intelligente comme vous et moi. Elle n'a pas d'intention. Elle n'a pas vécu d'expérience. Elle ne sait pas ce qu'est un client mécontent ou une fin de mois difficile. Elle repère des régularités dans des données, avec une vitesse et un volume qu'aucun humain ne peut égaler. C'est pour ça qu'elle peut être brillante sur une tâche, et faire une erreur grossière sur la suivante. Gardez cette image : l'IA est un outil extrêmement puissant, mais c'est un outil. La responsabilité de la décision, elle, reste toujours chez vous.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture d'écran réelle d'un assistant IA. On lui colle un court devis fictif d'artisan et on demande : « Résume ce devis en 3 points et signale ce qui manque. » La réponse s'affiche ; on surligne un point manquant pertinent (date de validité, conditions de paiement).",
        voix:
          "Voyons ce que ça donne concrètement. Je copie un devis d'artisan dans un assistant IA, et je lui demande de le résumer en trois points et de signaler ce qui manque. En quelques secondes, j'ai le résumé : la nature des travaux, le montant, le délai. Et il me signale que la durée de validité du devis et les conditions de paiement ne sont pas précisées. C'est exactement le type de tâche où l'IA est excellente : lire vite, structurer, repérer. Par contre, est-ce que ce devis est un bon prix pour ma région ? Ça, l'IA ne peut pas vraiment le savoir. C'est à moi de comparer.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Trois idées reçues barrées : « L'IA pense comme un humain », « L'IA sait tout », « L'IA va tout faire à ma place ».",
        voix:
          "Trois idées reçues à oublier. Non, l'IA ne pense pas comme un humain. Non, elle ne sait pas tout : elle ne connaît que ce qui ressemble aux données sur lesquelles elle a appris, et ses connaissances ont une date limite. Et non, elle ne va pas tout faire à votre place. Elle va faire beaucoup de choses plus vite avec vous, à condition que vous sachiez la guider.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Repérez 3 usages de l'IA dans votre journée, puis écrivez votre propre définition. »",
        voix:
          "Votre exercice pour cette leçon : repérez trois moments de votre journée où vous utilisez déjà de l'IA sans le savoir. Puis écrivez votre propre définition de l'intelligence artificielle, en une ou deux phrases, comme si vous l'expliquiez à un ami. Si vous arrivez à l'expliquer simplement, c'est que vous l'avez compris.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « L'IA générative ».",
        voix:
          "Dans la prochaine leçon, on se concentre sur la famille qui a tout changé : l'IA générative. Celle qui écrit, dessine, parle et code. On y va.",
      },
    ],
    exercice: {
      titre: "L'IA autour de vous",
      consigne:
        "Repérez trois usages de l'IA dans votre quotidien, puis rédigez votre propre définition de l'intelligence artificielle, comme si vous l'expliquiez à un ami.",
      champs: [
        { label: "Trois usages de l'IA dans ma journée", aide: "Ex. : déverrouillage du téléphone, suggestions de mon clavier, recommandations de ma plateforme vidéo" },
        { label: "Ma définition de l'IA en une ou deux phrases" },
      ],
    },
    verifier: [
      "Votre définition parle de données, de régularités (modèles) et de résultats produits",
      "Vos trois exemples sont des usages réels que vous avez constatés",
      "Vous savez expliquer pourquoi l'IA n'est pas une intelligence humaine",
    ],
    quiz: [
      {
        question: "Quelle définition correspond le mieux à l'intelligence artificielle ?",
        choix: [
          "Un robot capable de penser comme un humain",
          "Un ensemble de technologies qui analysent des informations, reconnaissent des modèles et produisent des résultats à partir de données",
          "Un moteur de recherche plus rapide",
        ],
        bonne: 1,
        explication: "C'est la définition de référence du module. L'IA n'est ni un robot pensant, ni un simple moteur de recherche.",
      },
      {
        question: "Qu'appelle-t-on un « modèle » ?",
        choix: [
          "Le résultat de l'apprentissage d'un système sur des données",
          "Un modèle de document à remplir",
          "La marque de l'ordinateur utilisé",
        ],
        bonne: 0,
        explication: "Le modèle, c'est ce que le système a appris à partir des exemples. C'est lui qui produit ensuite les réponses.",
      },
      {
        question: "Lequel de ces exemples n'utilise PAS forcément de l'IA ?",
        choix: ["Le filtre anti-spam", "La recommandation de films", "Une calculatrice qui fait une addition"],
        bonne: 2,
        explication: "Une addition suit une règle fixe, écrite à l'avance. Il n'y a rien à apprendre à partir de données.",
      },
      {
        question: "Pourquoi dit-on que l'IA n'est pas une intelligence humaine ?",
        choix: [
          "Parce qu'elle est toujours moins rapide",
          "Parce qu'elle repère des régularités sans intention, sans expérience vécue ni bon sens garanti",
          "Parce qu'elle ne fonctionne qu'en anglais",
        ],
        bonne: 1,
        explication: "Elle est souvent bien plus rapide que nous, mais elle ne comprend pas le monde comme nous. D'où la nécessité de vérifier.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 3
  {
    slug: "ia-generative",
    numero: 3,
    titre: "L'IA générative",
    sousTitre: "L'IA qui écrit, dessine, parle et code, et comment on travaille avec elle.",
    dureeCible: "8 à 10 min",
    objectifs: [
      "Comprendre ce qui distingue l'IA générative",
      "Connaître les cinq grands types de contenus générés",
      "Adopter le cycle demander → observer → affiner",
    ],
    essentiel: [
      {
        titre: "Ce qu'elle fait",
        texte:
          "L'IA générative produit du contenu nouveau à partir d'une demande : du texte, des images, de la vidéo, de l'audio et du code. Elle ne va pas chercher une réponse toute faite : elle la fabrique.",
      },
      {
        titre: "Le principe de travail",
        texte:
          "On formule une demande (le prompt) → le modèle produit un résultat → on affine. La première réponse est un brouillon, rarement la version finale.",
      },
      {
        titre: "La multimodalité",
        texte:
          "Certains outils travaillent avec plusieurs types de données à la fois : vous pouvez leur envoyer une photo et poser une question écrite, ou leur parler à voix haute. Les possibilités varient d'un outil à l'autre et évoluent vite.",
      },
      {
        titre: "Une réponse différente à chaque fois",
        texte:
          "Posez deux fois la même question, vous n'obtiendrez pas exactement la même réponse. C'est normal : le modèle génère, il ne recopie pas. Cela permet aussi de demander plusieurs propositions et de choisir.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Écran divisé en quatre : un texte de présentation qui s'écrit, une image de vitrine de boutique générée, une courte voix off synthétique (forme d'onde), quelques lignes de code HTML. Tous à partir de la même phrase : « Une boutique de thé artisanal à Marseille ».",
        voix:
          "Une seule phrase : « une boutique de thé artisanal à Marseille ». À partir de cette phrase, une IA peut écrire le texte de présentation de la boutique, imaginer une image de vitrine, produire une voix qui lit ce texte, et même écrire le code de la page d'accueil. C'est ça, l'IA générative. Et c'est l'outil principal de tout ce parcours.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la leçon et les trois objectifs.",
        voix:
          "Dans cette leçon, on va voir ce qui rend l'IA générative différente des autres IA, ce qu'elle peut produire, et surtout comment on travaille avec elle au quotidien.",
      },
      {
        partie: "Explication",
        ecran: "Comparaison en deux colonnes. « IA classique » : une photo entre, l'étiquette « chat » sort. « IA générative » : la phrase « un chat qui lit le journal » entre, une image nouvelle sort.",
        voix:
          "Dans la leçon précédente, on a vu des IA qui reconnaissent, classent ou prédisent. Elles répondent à une question fermée : est-ce un chat ? Est-ce un spam ? L'IA générative, elle, fait autre chose. Elle produit un contenu qui n'existait pas avant. Vous lui demandez « un chat qui lit le journal », et elle fabrique une image nouvelle. Vous lui demandez un mail de relance poli pour un client qui n'a pas payé, et elle l'écrit. Elle ne va pas chercher ce mail quelque part. Elle le génère, à partir de tout ce qu'elle a appris.",
      },
      {
        partie: "Explication",
        ecran: "Cinq icônes en ligne avec un exemple sous chacune. Texte : mail, article, fiche produit. Image : logo, visuel, illustration. Vidéo : plan d'illustration, animation. Audio : voix off, musique. Code : page web, formule de tableur.",
        voix:
          "L'IA générative produit cinq grands types de contenus. Du texte : un mail, un article, une fiche produit, un script de vidéo. Des images : un visuel pour les réseaux sociaux, une illustration, une proposition de logo. De la vidéo : des plans d'illustration, des animations courtes. De l'audio : une voix off, une musique d'ambiance. Et du code : une page web, une formule de tableur, un petit programme. Dans ce parcours, vous allez utiliser les cinq. Le texte et le code pour votre projet et votre site. Les images et la vidéo pour votre communication.",
      },
      {
        partie: "Explication",
        ecran: "Schéma circulaire en trois étapes : « Je demande » → « J'observe » → « J'affine », avec une flèche qui revient au début.",
        voix:
          "Maintenant, le point le plus important de cette leçon : comment on travaille avec une IA générative. Ça se passe toujours en boucle. Vous formulez une demande. Le modèle produit un résultat. Vous l'observez, et vous affinez : « plus court », « plus chaleureux », « ajoute les horaires », « refais en trois versions ». La première réponse est un brouillon. Les personnes qui obtiennent d'excellents résultats ne sont pas celles qui écrivent une demande parfaite du premier coup. Ce sont celles qui savent itérer.",
      },
      {
        partie: "Démonstration",
        ecran: "Capture d'écran réelle d'un assistant IA. Demande 1 : « Écris une description pour ma boutique de thé. » Réponse générique. Demande 2 : « Plus courte, 3 phrases, ton chaleureux, mentionne que les thés sont choisis chez de petits producteurs et qu'on est près du Vieux-Port. » Réponse nettement meilleure. Les deux réponses côte à côte.",
        voix:
          "Regardez la différence. Première demande : écris une description pour ma boutique de thé. Le résultat est correct, mais il pourrait s'appliquer à n'importe quelle boutique. Je ne m'arrête pas là. J'affine : plus court, trois phrases, ton chaleureux, précise que les thés viennent de petits producteurs et qu'on est près du Vieux-Port. Et là, le texte devient vraiment le mien. Même outil, même modèle. La seule chose qui a changé, c'est l'information que j'ai donnée.",
      },
      {
        partie: "Explication",
        ecran: "Une photo d'une étiquette de produit est glissée dans l'assistant IA, avec la question « Rédige une fiche produit à partir de cette étiquette ». Mention à l'écran : « Fonction disponible selon l'outil et la formule ».",
        voix:
          "Un dernier mot sur la multimodalité. Certains outils peuvent travailler avec plusieurs types de données à la fois. Vous pouvez par exemple leur envoyer la photo d'une étiquette et leur demander de rédiger la fiche produit correspondante. Ou leur parler à voix haute au lieu d'écrire. Ces fonctions dépendent de l'outil et de la formule choisie, et elles évoluent très vite. On les utilisera quand elles seront utiles, sans en faire une obsession.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Trois erreurs en cartes corail : « S'arrêter à la première réponse », « Copier-coller sans relire », « Croire qu'il existe une seule bonne réponse ».",
        voix:
          "Les erreurs les plus fréquentes avec l'IA générative : s'arrêter à la première réponse, copier-coller sans relire, et croire qu'il existe une seule bonne réponse. Posez deux fois la même question, vous n'aurez pas exactement le même texte. C'est normal. Utilisez-le à votre avantage : demandez trois propositions, et choisissez.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Demandez une description de votre projet, puis améliorez-la en 3 itérations. »",
        voix:
          "Votre exercice : ouvrez l'assistant IA de votre choix. Demandez-lui une description de votre projet ou de votre activité, en une phrase. Puis améliorez le résultat en trois itérations, en ajoutant à chaque fois une précision. Notez la version de départ et la version finale. Vous allez voir le chemin parcouru en seulement trois échanges.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « ChatGPT, Claude, Gemini : comprendre les outils ».",
        voix:
          "Vous avez sans doute entendu parler de ChatGPT, de Claude ou de Gemini. Mais quelle est la différence ? Et faut-il choisir ? C'est ce qu'on voit dans la prochaine leçon.",
      },
    ],
    exercice: {
      titre: "Trois itérations",
      consigne:
        "Dans l'assistant IA de votre choix, demandez une description de votre projet ou de votre activité. Puis améliorez-la en trois échanges, en ajoutant à chaque fois une précision (public, ton, longueur, détail concret…). Collez la première et la dernière version.",
      champs: [
        { label: "Ma première demande et la réponse obtenue" },
        { label: "Les 3 précisions que j'ai ajoutées", aide: "Ex. : « plus court », « pour des parents de jeunes enfants », « ajoute que c'est fait main »" },
        { label: "La version finale" },
      ],
    },
    prompt: {
      titre: "Point de départ",
      texte: "Écris une description de 3 phrases pour mon projet : [décrivez votre projet en une phrase].",
      conseil: "Puis enchaînez avec des demandes d'affinage : « plus chaleureux », « pour [votre public] », « ajoute [un détail concret] ».",
    },
    verifier: [
      "La version finale contient des informations qui viennent de vous, pas seulement de l'IA",
      "Vous voyez une différence nette entre la première et la dernière version",
      "Vous avez relu la version finale et corrigé ce qui ne vous ressemblait pas",
    ],
    quiz: [
      {
        question: "Qu'est-ce qui distingue l'IA générative ?",
        choix: [
          "Elle produit un contenu nouveau à partir d'une demande",
          "Elle cherche la réponse sur Internet et la recopie",
          "Elle ne sait traiter que des images",
        ],
        bonne: 0,
        explication: "Elle fabrique un contenu (texte, image, son, vidéo, code) au lieu de reconnaître ou de classer.",
      },
      {
        question: "Quel est le bon cycle de travail avec une IA générative ?",
        choix: ["Demander → copier → publier", "Demander → observer → affiner", "Observer → publier → corriger"],
        bonne: 1,
        explication: "La première réponse est un brouillon. On l'observe, puis on l'affine.",
      },
      {
        question: "Vous posez deux fois la même question et obtenez deux textes différents. Que faut-il en conclure ?",
        choix: [
          "L'outil est en panne",
          "Une des deux réponses est forcément fausse",
          "C'est normal : le modèle génère, il ne recopie pas",
        ],
        bonne: 2,
        explication: "La variation est normale. Profitez-en pour demander plusieurs propositions et choisir.",
      },
      {
        question: "Que signifie « multimodal » ?",
        choix: [
          "L'outil fonctionne sur mobile et sur ordinateur",
          "L'outil peut travailler avec plusieurs types de données (texte, image, voix…)",
          "L'outil propose plusieurs abonnements",
        ],
        bonne: 1,
        explication: "Un outil multimodal peut par exemple analyser une photo et répondre à une question écrite à son sujet.",
      },
    ],
  },

  // ─────────────────────────────────────────────── LEÇON 4
  {
    slug: "chatgpt-claude-gemini",
    numero: 4,
    titre: "ChatGPT, Claude, Gemini : comprendre les outils",
    sousTitre: "Modèle, application, entreprise : démêler les noms pour choisir sans dépendre d'un seul outil.",
    dureeCible: "8 à 10 min",
    objectifs: [
      "Distinguer un modèle, une application et l'entreprise qui les fabrique",
      "Savoir comparer des assistants IA sur une même tâche",
      "Raisonner en problème à résoudre plutôt qu'en outil à utiliser",
    ],
    essentiel: [
      {
        titre: "ChatGPT n'est pas « l'IA »",
        texte:
          "ChatGPT est un produit, un service. C'est une application parmi d'autres. Claude, Gemini, Copilot, Mistral (le Chat) ou Perplexity en sont d'autres. Toutes utilisent l'IA générative, mais ce sont des produits différents, fabriqués par des entreprises différentes.",
      },
      {
        titre: "Le moteur et la voiture",
        texte:
          "Le modèle, c'est le moteur : le système entraîné qui génère les réponses. L'application, c'est la voiture : l'interface, les boutons, l'historique, les fonctions ajoutées autour. Une même application peut proposer plusieurs modèles, et un même modèle peut être utilisé dans plusieurs applications.",
      },
      {
        titre: "Forces différentes, évolution rapide",
        texte:
          "Les outils ont des forces, des limites et des fonctionnalités différentes, et ces différences changent souvent, parfois en quelques semaines. Un classement fait aujourd'hui sera dépassé dans quelques mois.",
      },
      {
        titre: "La bonne posture",
        texte:
          "Partir du problème à résoudre, pas de l'outil. Si une méthode fonctionne, elle fonctionne dans n'importe quel assistant. C'est ce que vous apprenez dans AroBaz : une méthode, pas un bouton.",
      },
    ],
    script: [
      {
        partie: "Hook",
        ecran: "Montage rapide de logos neutres stylisés (pas de vrais logos) et de noms tapés : ChatGPT, Claude, Gemini, Copilot, Le Chat, Perplexity… Les noms s'empilent jusqu'à saturer l'écran.",
        voix:
          "ChatGPT, Claude, Gemini, Copilot, Le Chat, Perplexity… Chaque mois, un nouveau nom apparaît, et un article vous explique que celui-ci est désormais le meilleur. Résultat : beaucoup de gens ne savent plus lequel utiliser, et finissent par n'en utiliser aucun sérieusement. On va remettre de l'ordre dans tout ça.",
      },
      {
        partie: "Objectif",
        ecran: "Titre de la leçon et objectifs.",
        voix:
          "Dans cette leçon, vous allez comprendre la différence entre un modèle et une application, savoir comparer des outils par vous-même, et surtout adopter une posture qui vous rendra indépendant de n'importe quel outil.",
      },
      {
        partie: "Explication",
        ecran: "Phrase centrale : « ChatGPT est un produit, pas le nom de l'intelligence artificielle. » Puis trois étiquettes : « Entreprise », « Modèle », « Application ».",
        voix:
          "Première chose à clarifier. ChatGPT n'est pas le nom de l'intelligence artificielle. C'est un produit, une application, créée par une entreprise qui s'appelle OpenAI. De la même manière, Claude est une application créée par l'entreprise Anthropic, et Gemini est celle de Google. Il y en a d'autres, comme Le Chat de l'entreprise française Mistral, ou Copilot de Microsoft. Quand on parle de ces outils, il y a en fait trois choses différentes : l'entreprise qui les fabrique, le modèle, et l'application.",
      },
      {
        partie: "Explication",
        ecran: "Animation : un moteur (« Le modèle ») est installé dans une voiture (« L'application »). Puis le même moteur est installé dans une deuxième voiture différente. Puis une voiture affiche un sélecteur avec plusieurs moteurs.",
        voix:
          "Pour bien comprendre, utilisons une analogie. Le modèle, c'est le moteur. C'est le système qui a été entraîné et qui produit les réponses. L'application, c'est la voiture : le volant, le tableau de bord, les sièges. C'est l'interface dans laquelle vous tapez, l'historique de vos conversations, la possibilité d'envoyer un fichier ou de parler à voix haute. Et comme pour les voitures, un même moteur peut équiper plusieurs véhicules : un modèle peut être utilisé par plusieurs applications. À l'inverse, une même application vous propose souvent plusieurs modèles, plus rapides ou plus puissants. C'est pour ça qu'on voit des noms de versions qui changent tout le temps : ce sont souvent les moteurs qui changent, pas la voiture.",
      },
      {
        partie: "Exemple concret",
        ecran: "Tableau simple à trois colonnes : Application / Entreprise / Modèles. Lignes : ChatGPT · OpenAI · famille GPT ; Claude · Anthropic · famille Claude ; Gemini · Google · famille Gemini ; Le Chat · Mistral AI · modèles Mistral. Mention : « Les noms de versions changent régulièrement. »",
        voix:
          "Voici un tableau pour vous repérer. ChatGPT, de l'entreprise OpenAI, utilise les modèles de la famille GPT. Claude, d'Anthropic, utilise des modèles qui s'appellent aussi Claude. Gemini, de Google, utilise des modèles Gemini. Le Chat, de Mistral, utilise les modèles Mistral. Je ne vous donne volontairement pas de numéros de version : ils changent tellement souvent que ce tableau serait faux dans quelques mois. Ce qui compte, c'est la logique.",
      },
      {
        partie: "Démonstration",
        ecran: "Écran partagé en trois : la même demande envoyée dans trois assistants IA réels. Demande : « Je lance un service de repassage à domicile. Propose 3 noms et un slogan pour chacun. » Les trois réponses s'affichent côte à côte. On entoure les différences de style et de structure.",
        voix:
          "Faisons un test. J'envoie exactement la même demande à trois assistants différents : je lance un service de repassage à domicile, propose trois noms et un slogan pour chacun. Regardez les résultats. Les trois sont utilisables. Mais le style n'est pas le même, la mise en forme non plus, et certaines idées sont meilleures que d'autres. Lequel a gagné ? Ça dépend de la tâche, et ça peut changer la semaine prochaine. La vraie leçon, c'est que la méthode que j'ai utilisée pour formuler ma demande a fonctionné dans les trois.",
      },
      {
        partie: "Explication",
        ecran: "Deux personnages. Le premier : « Je sais utiliser ChatGPT. » Le second : « Je sais résoudre mon problème avec une IA. » Le second est mis en valeur.",
        voix:
          "C'est pour ça que, dans AroBaz, on ne vous apprend pas à cliquer sur les boutons d'un outil en particulier. Les boutons changent. On vous apprend à résoudre un problème avec une IA : rédiger une offre, créer un site, analyser un marché. Si vous savez faire ça, vous pourrez passer d'un outil à l'autre en quelques minutes, et profiter du meilleur de chacun. Pour suivre ce parcours, choisissez un assistant principal, celui avec lequel vous êtes le plus à l'aise. Sa version gratuite suffit pour commencer. Et n'hésitez pas à en essayer un deuxième quand un résultat ne vous convient pas.",
      },
      {
        partie: "Erreurs fréquentes",
        ecran: "Trois cartes corail : « Chercher LE meilleur outil », « Payer un abonnement trop tôt », « Mettre des données sensibles sans vérifier les réglages ».",
        voix:
          "Trois erreurs à éviter. Passer plus de temps à chercher le meilleur outil qu'à l'utiliser. Payer un abonnement avant d'avoir atteint les limites de la version gratuite. Et copier des informations sensibles, comme des données de clients ou des mots de passe, sans avoir regardé les réglages de confidentialité de l'outil. Chaque service a ses propres règles sur l'usage de vos conversations. Prenez cinq minutes pour les lire.",
      },
      {
        partie: "Mission",
        ecran: "Encart « À vous » : « Envoyez la même demande à 2 assistants et comparez. »",
        voix:
          "Votre exercice : choisissez une demande utile pour votre projet, et envoyez-la à deux assistants différents. Comparez les réponses selon trois critères : la pertinence, la clarté, et le ton. Puis notez lequel vous choisissez comme assistant principal, et pourquoi.",
      },
      {
        partie: "Transition",
        ecran: "Titre de la leçon suivante : « Comment fonctionne une IA ? »",
        voix:
          "Vous savez maintenant ce qu'est un modèle. Dans la prochaine leçon, on ouvre le capot : comment est-ce qu'un modèle produit une réponse ? Promis, sans une seule équation.",
      },
    ],
    exercice: {
      titre: "Comparer deux assistants",
      consigne:
        "Envoyez exactement la même demande, utile pour votre projet, à deux assistants IA différents. Comparez-les sur la pertinence, la clarté et le ton, puis choisissez votre assistant principal.",
      champs: [
        { label: "Ma demande" },
        { label: "Assistant A : nom et ce que j'ai retenu de sa réponse" },
        { label: "Assistant B : nom et ce que j'ai retenu de sa réponse" },
        { label: "Mon assistant principal et pourquoi" },
      ],
    },
    verifier: [
      "Vous avez utilisé exactement la même demande dans les deux outils",
      "Votre comparaison repose sur des critères (pertinence, clarté, ton) et pas sur une impression",
      "Vous savez dire quelle entreprise fabrique votre assistant principal",
      "Vous avez lu les réglages de confidentialité de votre assistant principal",
    ],
    quiz: [
      {
        question: "Qu'est-ce que ChatGPT ?",
        choix: [
          "Le nom général de l'intelligence artificielle",
          "Une application créée par l'entreprise OpenAI",
          "Un modèle créé par Google",
        ],
        bonne: 1,
        explication: "ChatGPT est un produit parmi d'autres. Claude (Anthropic) et Gemini (Google) en sont d'autres.",
      },
      {
        question: "Dans l'analogie AroBaz, le modèle est…",
        choix: ["La voiture", "Le moteur", "Le conducteur"],
        bonne: 1,
        explication: "Le modèle est le moteur qui génère les réponses ; l'application est la voiture autour : interface, historique, fonctions.",
      },
      {
        question: "Quelle est la meilleure posture face à la multiplication des outils ?",
        choix: [
          "Attendre que le meilleur outil soit clairement désigné",
          "Payer tous les abonnements pour ne rien rater",
          "Maîtriser une méthode qui fonctionne dans n'importe quel assistant",
        ],
        bonne: 2,
        explication: "Les outils changent vite. Une bonne méthode, elle, reste valable d'un outil à l'autre.",
      },
    ],
  },
];
