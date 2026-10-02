// Catalogue AROBAZ : les deux parcours et leurs 12 modules.
// `disponible` = module jouable dans l'espace élève.

export type Module = {
  numero: number;
  titre: string;
  resume: string;
  points: string[];
  livrable: string;
  disponible?: boolean;
};

export type Formation = {
  slug: string;
  titre: string;
  titreCourt: string;
  accroche: string;
  promesse: string;
  pourQui: string[];
  couleur: "blue" | "mint" | "coral";
  projetFinal: string[];
  modules: Module[];
  faq: { q: string; r: string }[];
};

export const METHODE = [
  { etape: "Apprendre", texte: "Une notion à la fois, expliquée simplement, avec des exemples tirés de vrais projets." },
  { etape: "Observer", texte: "Vous regardez la démonstration : l'outil réel, à l'écran, avec chaque choix expliqué." },
  { etape: "Faire", texte: "Vous reproduisez sur votre propre projet, avec le prompt ou la fiche fournis." },
  { etape: "Vérifier", texte: "Une grille de contrôle et un quiz vous disent si le résultat tient la route." },
  { etape: "Améliorer", texte: "Vous corrigez, vous itérez, et vous gardez la version qui fonctionne." },
];

export const FORMATIONS: Formation[] = [
  {
    slug: "ia-business",
    titre: "Créer son projet avec l'IA",
    titreCourt: "IA & Business",
    accroche: "De l'idée au lancement : site, boutique en ligne, application et automatisations, sans être développeur.",
    promesse:
      "Apprenez à transformer une idée en projet concret avec l'IA et les outils numériques modernes, même si vous n'êtes ni développeur, ni designer, ni expert en marketing.",
    pourQui: [
      "Vous avez une idée d'activité et vous voulez la lancer seul, sans agence.",
      "Vous êtes indépendant ou commerçant et vous voulez votre site ou votre boutique en ligne.",
      "Vous voulez gagner du temps en automatisant les tâches répétitives.",
      "Vous partez de zéro : aucune connaissance technique n'est demandée.",
    ],
    couleur: "blue",
    projetFinal: [
      "Une idée clarifiée et un positionnement",
      "Une identité de marque (nom, logo, couleurs)",
      "Un site en ligne sur votre propre nom de domaine",
      "Une offre et un système de vente",
      "Des automatisations qui tournent seules",
      "Une checklist de lancement complète",
    ],
    modules: [
      {
        numero: 1,
        titre: "Comprendre l'IA",
        resume: "Ce qu'est vraiment l'IA, comment lui parler, ses limites, et votre premier assistant personnalisé.",
        points: ["IA et IA générative", "ChatGPT, Claude, Gemini", "La méthode de prompt C.O.C.C.F.", "Limites et vérification"],
        livrable: "Votre premier assistant IA, configuré et testé",
        disponible: true,
      },
      {
        numero: 2,
        titre: "Transformer une idée en projet",
        resume: "Clarifier l'idée, le problème, le client, le marché et l'offre, avec l'IA comme partenaire de réflexion.",
        points: ["Problème et client", "Étude de marché avec l'IA", "Concurrence", "Proposition de valeur", "Modèle économique"],
        livrable: "La fiche projet d'une page",
        disponible: true,
      },
      {
        numero: 3,
        titre: "Construire son identité",
        resume: "Nom, slogan, positionnement et identité visuelle cohérente, générés puis affinés avec l'IA.",
        points: ["Nom et slogan", "Positionnement", "Logo", "Couleurs et typographies", "Présentation commerciale"],
        livrable: "Votre mini-charte de marque",
        disponible: true,
      },
      {
        numero: 4,
        titre: "Comprendre Internet",
        resume: "Domaine, hébergement, DNS, front, back, API : comprendre sans devenir développeur.",
        points: ["Site, domaine, hébergement", "Frontend et backend", "Base de données et API", "DNS et HTTPS"],
        livrable: "Le schéma de votre futur site",
        disponible: true,
      },
      {
        numero: 5,
        titre: "Créer son premier site avec l'IA",
        resume: "Du brief au site responsive : générer, comprendre et modifier le code avec l'IA.",
        points: ["Rédiger le brief", "Générer le design et le code", "Comprendre les fichiers", "Formulaires, images, mobile"],
        livrable: "Votre site, fonctionnel en local",
        disponible: true,
      },
      {
        numero: 6,
        titre: "GitHub, Netlify & Cloudflare",
        resume: "Mettre le site en ligne sur votre nom de domaine, proprement et en sécurité.",
        points: ["Compte et dépôt GitHub", "Déploiement Netlify", "Nom de domaine et DNS", "Sécurité Cloudflare"],
        livrable: "Votre site en ligne sur votre domaine",
        disponible: true,
      },
      {
        numero: 7,
        titre: "E-commerce",
        resume: "Catalogue, prix, panier, paiement, commandes, livraison et obligations légales.",
        points: ["Modèle e-commerce", "Fiches produits", "Paiement et commandes", "Livraison", "Mentions légales et RGPD"],
        livrable: "Une boutique prête à encaisser",
        disponible: true,
      },
      {
        numero: 8,
        titre: "Créer une application avec l'IA",
        resume: "De l'idée de fonctionnalité au prototype déployé, avec base de données et connexion.",
        points: ["Fonctionnalités et UX", "Prototype", "Développement assisté par IA", "Authentification", "Tests et déploiement"],
        livrable: "Une application web en ligne",
        disponible: true,
      },
      {
        numero: 9,
        titre: "Connecter les outils",
        resume: "API, webhooks, CRM, connecteurs et agents : faire travailler vos outils ensemble.",
        points: ["API et webhooks", "Formulaires et emails", "Paiements et CRM", "Connecteurs et agents"],
        livrable: "La carte de vos outils connectés",
        disponible: true,
      },
      {
        numero: 10,
        titre: "Automatiser son activité",
        resume: "Des scénarios concrets qui tournent seuls, de la demande client à la facture.",
        points: ["Formulaire → IA → email → CRM", "Commande → paiement → facture", "Idée → contenu → publication"],
        livrable: "Trois automatisations actives",
        disponible: true,
      },
      {
        numero: 11,
        titre: "Faire connaître son activité",
        resume: "Landing page, SEO, réseaux, email, prospection et publicité : un tunnel simple et mesurable.",
        points: ["Landing page", "SEO", "Email et prospection", "Publicité", "Tunnel de vente"],
        livrable: "Votre plan d'acquisition sur 30 jours",
        disponible: true,
      },
      {
        numero: 12,
        titre: "Projet final",
        resume: "Vous assemblez tout et vous lancez : de l'idée au premier client.",
        points: ["Assemblage du projet", "Revue complète", "Checklist de lancement"],
        livrable: "Votre projet lancé",
        disponible: true,
      },
    ],
    faq: [
      { q: "Faut-il savoir coder ?", r: "Non. Vous apprenez à faire écrire le code par l'IA, à le comprendre suffisamment pour le modifier, et à le mettre en ligne. Le module 4 vous donne les bases d'Internet sans jargon." },
      { q: "Quels outils faut-il payer ?", r: "Le parcours est conçu pour démarrer avec les versions gratuites (ChatGPT, Claude ou Gemini, GitHub, Netlify, Cloudflare). Un nom de domaine coûte en général une dizaine d'euros par an. Chaque module indique clairement ce qui est gratuit et ce qui ne l'est pas." },
      { q: "Combien de temps faut-il prévoir ?", r: "Comptez 1 h 30 à 2 h de vidéo par module, plus le temps de pratique sur votre projet. À raison de quelques heures par semaine, le parcours complet se fait en 2 à 3 mois." },
      { q: "Y a-t-il un formateur en direct ?", r: "Non. AROBAZ est conçu pour être suivi en autonomie, à votre rythme. Chaque leçon contient tout ce qu'il faut : vidéo, démonstration, prompt prêt à l'emploi, exercice et grille de vérification." },
    ],
  },
  {
    slug: "contenu-reseaux-sociaux",
    titre: "Créer son contenu & gérer ses réseaux sociaux",
    titreCourt: "Contenu & Réseaux sociaux",
    accroche: "Devenez le community manager de votre propre activité : stratégie, visuels, vidéos, publication et clients.",
    promesse:
      "Apprenez à gérer seul la présence de votre activité sur les réseaux sociaux : une stratégie claire, des contenus qui vous ressemblent, des vidéos tournées au téléphone, et des abonnés qui deviennent des clients.",
    pourQui: [
      "Vous avez une activité et vous ne savez pas quoi publier, ni où.",
      "Vous publiez déjà, mais sans résultat visible.",
      "Vous voulez faire vos vidéos et vos visuels vous-même, avec votre téléphone et l'IA.",
      "Vous voulez y passer quelques heures par semaine, pas vos soirées.",
    ],
    couleur: "coral",
    projetFinal: [
      "Une stratégie éditoriale sur 30 jours",
      "Un calendrier de publication",
      "Une identité visuelle et des templates",
      "Des scripts et des vidéos prêtes à publier",
      "Un parcours de conversion de l'abonné au client",
    ],
    modules: [
      { numero: 1, titre: "Comprendre les plateformes", resume: "Instagram, TikTok, Facebook, LinkedIn, YouTube : formats, audiences et fonctionnement des algorithmes.", points: ["Formats et audiences", "Algorithmes", "Portée et engagement", "Conversion"], livrable: "Le choix argumenté de vos 2 plateformes" },
      { numero: 2, titre: "Construire sa stratégie", resume: "Cible, positionnement, objectifs, ligne éditoriale et piliers de contenu.", points: ["Cible et positionnement", "Objectifs", "Ligne éditoriale", "Piliers de contenu"], livrable: "Votre calendrier éditorial de 30 jours" },
      { numero: 3, titre: "Trouver des idées avec l'IA", resume: "Ne plus jamais manquer d'idées : angles, accroches, scripts, légendes et carrousels.", points: ["Idées et angles", "Hooks", "Scripts", "Légendes et carrousels"], livrable: "Une banque de 50 idées de contenus" },
      { numero: 4, titre: "Créer ses visuels", resume: "Canva et génération d'images pour des posts, stories et carrousels cohérents.", points: ["Canva", "Génération et retouche d'images", "Stories et carrousels", "Identité visuelle"], livrable: "Vos templates de marque" },
      { numero: 5, titre: "Faire des vidéos avec son téléphone", resume: "Cadrage, lumière, son, prise de parole, plans de coupe et storytelling.", points: ["Cadrage et lumière", "Son", "Prise de parole", "B-roll", "Hook et storytelling"], livrable: "Vos premiers rushs" },
      { numero: 6, titre: "Monter avec CapCut", resume: "Découpe, rythme, musique, sous-titres, zooms et export, pas à pas.", points: ["Découpe et assemblage", "Musique et effets", "Sous-titres", "Rythme et export"], livrable: "Votre premier Reel / TikTok / Short" },
      { numero: 7, titre: "Créer de la vidéo avec l'IA", resume: "Image vers vidéo, avatars, voix, narration et montage assisté.", points: ["Génération vidéo", "Avatars et voix", "Narration", "Montage assisté"], livrable: "Une vidéo produite avec l'IA" },
      { numero: 8, titre: "Instagram & TikTok", resume: "Reels, stories, carrousels, lives et séries : les formats qui marchent.", points: ["Reels et Stories", "Carrousels", "TikTok", "Lives et séries"], livrable: "Une série de 5 contenus" },
      { numero: 9, titre: "Transformer les vues en clients", resume: "Contenu → attention → confiance → contact → vente : bio, CTA, DM et page d'atterrissage.", points: ["Appels à l'action", "Bio et DM", "Landing page", "Offre"], livrable: "Votre parcours de conversion" },
      { numero: 10, titre: "Organiser son community management", resume: "Programmation, batching, bibliothèque de contenus, réponses et modération.", points: ["Programmation", "Batching", "Bibliothèque", "Réponses et modération"], livrable: "Votre routine hebdomadaire" },
      { numero: 11, titre: "Mesurer ses résultats", resume: "Les bons indicateurs, et comment les lire pour améliorer vos contenus.", points: ["Portée et vues", "Engagement", "Clics et leads", "Optimisation"], livrable: "Votre tableau de bord mensuel" },
      { numero: 12, titre: "Projet final", resume: "Votre stratégie complète, vos contenus produits et votre système de conversion.", points: ["Stratégie 30 jours", "Contenus produits", "Conversion"], livrable: "30 jours de contenu prêts à publier" },
    ],
    faq: [
      { q: "Faut-il du matériel ?", r: "Un smartphone récent suffit. Le module 5 vous montre comment obtenir un bon son et une bonne lumière avec moins de 30 € d'accessoires, ou sans rien acheter." },
      { q: "Quels outils sont utilisés ?", r: "Principalement Canva, CapCut et un assistant IA (ChatGPT, Claude ou Gemini). Leurs versions gratuites permettent de suivre tout le parcours." },
      { q: "Je suis timide face à la caméra, est-ce un problème ?", r: "Non. Le module 5 traite de la prise de parole, et le module 7 montre comment produire des vidéos sans apparaître à l'écran." },
      { q: "Combien de temps faut-il par semaine ?", r: "Le module 10 vous apprend à tout préparer en un bloc de 2 à 3 heures par semaine." },
    ],
  },
];

export const getFormation = (slug: string) => FORMATIONS.find((f) => f.slug === slug)!;
