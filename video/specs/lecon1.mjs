// Visuels de la leçon 1 : chaque élément apparaît au moment où le mot (cue) est prononcé.
export const intro = { kind: "intro", duree: 3.8, spec: { ligne1: "Formation IA & Business · Module 1", ligne2: "Comprendre l'intelligence artificielle", ligne3: "Leçon 1 · Bienvenue dans l'univers de l'IA" } };

export const scenes = [
  { kind: "taches", spec: {
      items: [
        { icon: "globe", label: "La page d'accueil d'un site", cue: "Écrire la page" },
        { icon: "file-signature", label: "Un contrat de douze pages à résumer", cue: "Résumer un contrat" },
        { icon: "video", label: "Dix idées de vidéos pour son commerce", cue: "Trouver dix idées" }],
      bandeaux: [
        { text: "Avant : du temps, un prestataire, des compétences", tone: "grey", icon: "clock", cue: "Il y a encore quelques années" },
        { text: "Aujourd'hui : quelques minutes", tone: "mint", icon: "sparkles", cue: "elles prennent quelques minutes" },
        { text: "Et la personne qui le fait, ça peut être vous", tone: "blue", icon: "user", cue: "ce n'est pas forcément un expert" }] } },

  { kind: "objectifs", spec: {
      eyebrow: "Leçon 1", titre: "Bienvenue dans l'univers de l'IA",
      items: [
        { text: "Pourquoi l'IA est devenue accessible à tous", cue: "comprendre pourquoi" },
        { text: "Ce que vous allez pouvoir en faire", cue: "voir concrètement" },
        { text: "Comment ce parcours est construit", cue: "découvrir comment" }] } },

  { kind: "avantApres", spec: {
      gauche: { titre: "Avant", cue: "Pendant longtemps", chips: [
        { text: "Écrire du code", cue: "écrire du code" }, { text: "Préparer des données", cue: "préparer des données" }, { text: "Configurer des serveurs", cue: "configurer des serveurs" }] },
      droite: { titre: "Aujourd'hui", cue: "Aujourd'hui, on parle", demande: "Écris un mail de relance poli pour un client.", chips: [
        { text: "En français, avec des phrases normales", cue: "en français" }, { text: "Corriger, préciser, recommencer", cue: "de corriger, de préciser" }] },
      conclusion: [
        { text: "Ce qui compte : savoir dire ce que l'on veut, et juger le résultat", cue: "la compétence qui fait la différence" },
        { text: "Et ça s'apprend.", cue: "Et ça, ça s'apprend" }] } },

  { kind: "grille", spec: {
      tuiles: [
        { icon: "pencil-line", label: "Écrire", cue: "un mail difficile" },
        { icon: "image", label: "Créer des images", cue: "Créer des images" },
        { icon: "file-search", label: "Analyser un document", cue: "Analyser un document" },
        { icon: "briefcase", label: "Construire un projet", cue: "Construire un projet" },
        { icon: "globe", label: "Créer un site", cue: "Créer un site internet" },
        { icon: "code-xml", label: "Coder", cue: "écrire le code" },
        { icon: "video", label: "Préparer des vidéos", cue: "Préparer des vidéos" },
        { icon: "megaphone", label: "Communiquer", cue: "Produire votre communication" },
        { icon: "workflow", label: "Automatiser", cue: "Et enfin, automatiser" }],
      fin: { text: "Tout cela, sur votre propre projet.", cue: "Pas en théorie" } } },

  { kind: "echange", spec: {
      cueQuestion: "je veux ouvrir",
      question: "Je veux ouvrir un atelier de réparation de vélos à Lyon. Quelles sont les 5 premières questions à me poser ?",
      reponses: [
        { text: "Qui sont mes clients ?", cue: "qui sont mes clients" }, { text: "Où m'installer ?", cue: "où m'installer" },
        { text: "Quel budget de départ ?", cue: "quel budget" }, { text: "Quels concurrents ?", cue: "quels concurrents" }, { text: "Quelles démarches ?", cue: "quelles démarches" }],
      verdicts: [
        { icon: "triangle-alert", tone: "coral", titre: "À vérifier", texte: "Certaines questions sont génériques. Les démarches se vérifient.", cue: "Certaines questions sont génériques" },
        { icon: "check", tone: "mint", titre: "Un point de départ", texte: "En 30 secondes, de quoi commencer à réfléchir.", cue: "en trente secondes" }],
      conclusion: { text: "Un partenaire rapide. Le dernier mot reste le vôtre.", cue: "un partenaire de travail" } } },

  { kind: "etapes", spec: { etapes: [
      { nom: "Apprendre", icon: "book-open", texte: "Une notion, simplement", cue: "Apprendre : on" },
      { nom: "Observer", icon: "eye", texte: "Je vous montre, sur de vrais outils", cue: "Observer : vous" },
      { nom: "Faire", icon: "hammer", texte: "Sur votre propre projet", cue: "Faire : vous" },
      { nom: "Vérifier", icon: "list-checks", texte: "Grille de contrôle et quiz", cue: "Vérifier : une" },
      { nom: "Améliorer", icon: "refresh-cw", texte: "On corrige, on garde le meilleur", cue: "Améliorer : vous" }] } },

  { kind: "erreurs", spec: {
      pieges: [
        { titre: "Tout croire", texte: "L'IA écrit bien, avec assurance. Mais elle peut se tromper.", renvoi: "→ Leçon 7", cue: "tout croire" },
        { titre: "Tout rejeter", texte: "Une réponse moyenne : le plus souvent, une demande trop vague.", renvoi: "→ Leçon 6", cue: "tout rejeter" }],
      solution: "Utiliser · Vérifier · Décider", cueSolution: "On apprendra à corriger" } },

  { kind: "programme", spec: {
      cueFin: "vous créerez votre premier assistant",
      lecons: [
        { n: 1, titre: "Bienvenue dans l'univers de l'IA", duree: "6-8 min", cue: "Voici le programme" },
        { n: 2, titre: "Qu'est-ce que l'intelligence artificielle ?", duree: "10-12 min", cue: "On va définir" },
        { n: 3, titre: "L'IA générative", duree: "8-10 min", cue: "puis l'IA générative" },
        { n: 4, titre: "ChatGPT, Claude, Gemini : les outils", duree: "8-10 min", cue: "ChatGPT, Claude, Gemini" },
        { n: 5, titre: "Comment fonctionne une IA ?", duree: "10-12 min", cue: "comment une IA fonctionne" },
        { n: 6, titre: "Apprendre à parler à l'IA", duree: "12-15 min", cue: "apprendre à lui parler" },
        { n: 7, titre: "Les limites et les erreurs de l'IA", duree: "8-10 min", cue: "connaître ses limites" },
        { n: 8, titre: "Mission : votre premier assistant IA", duree: "15-20 min", cue: "vous créerez votre premier assistant" }] } },

  { kind: "appel", spec: {
      cueConsigne: "notez trois choses", consigne: "Notez 3 choses que vous aimeriez réussir avec l'IA.",
      mauvais: { text: "Gagner du temps", cue: "Pas « gagner du temps" },
      bon: { text: "Écrire mes fiches produits en 10 minutes", cue: "mais par exemple" },
      cueLignes: "Gardez ces trois", lignes: [1, 2, 3] } },

  { kind: "titre", spec: { eyebrow: "Prochaine leçon", icon: "brain", titre: "Qu'est-ce que l'intelligence artificielle ?", sous: "Leçon 2" } },
];
