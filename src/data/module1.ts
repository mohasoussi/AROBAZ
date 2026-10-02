import type { Lecon, Question } from "./types";
import { LECONS_A } from "./module1-a";
import { LECONS_B } from "./module1-b";

/**
 * Répartit la bonne réponse sur toutes les positions, de façon stable d'une
 * construction à l'autre (le choix dépend du texte de la question), pour que
 * « toujours B » ne soit pas une stratégie gagnante.
 */
function positionCible(texte: string, n: number) {
  let h = 2166136261;
  for (const c of texte) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return (h >>> 0) % n;
}
export function melanger(q: Question): Question {
  const cible = positionCible(q.question, q.choix.length);
  const autres = q.choix.filter((_, i) => i !== q.bonne);
  const choix = [...autres.slice(0, cible), q.choix[q.bonne], ...autres.slice(cible)];
  return { ...q, choix, bonne: cible };
}

export const MODULE1 = {
  formation: "ia-business",
  numero: 1,
  titre: "Comprendre l'intelligence artificielle",
  niveau: "Débutant",
  prerequis: "Aucun",
  objectif: "Comprendre l'IA, savoir dialoguer efficacement avec elle et créer son premier assistant.",
  lecons: [...LECONS_A, ...LECONS_B].map((l) => ({ ...l, quiz: l.quiz.map(melanger) })) as Lecon[],
  competences: [
    "Définir l'intelligence artificielle",
    "Définir l'IA générative",
    "Expliquer ce qu'est un modèle",
    "Distinguer un outil (application) d'un modèle",
    "Rédiger un prompt structuré",
    "Donner contexte, objectif, cible, contraintes et format",
    "Comprendre les limites de l'IA",
    "Savoir quand vérifier une information",
    "Créer et tester son propre assistant IA",
  ],
  /** Score minimal au quiz final pour valider le module */
  seuil: 0.8,
};

/** Quiz de validation du module (les 7 questions du programme). */
const QUIZ_BRUT: Question[] = [
  {
    question: "Qu'est-ce que l'intelligence artificielle ?",
    choix: [
      "Un ordinateur qui pense et ressent comme un humain",
      "Un ensemble de technologies qui analysent des informations, reconnaissent des modèles et produisent des résultats à partir de données",
      "Un synonyme de ChatGPT",
      "Un moteur de recherche amélioré",
    ],
    bonne: 1,
    explication: "C'est la définition de la leçon 2.",
  },
  {
    question: "Qu'est-ce qu'une IA générative ?",
    choix: [
      "Une IA qui classe les mails en spam",
      "Une IA qui produit du contenu nouveau (texte, image, vidéo, audio, code) à partir d'une demande",
      "Une IA qui fonctionne uniquement sur téléphone",
      "Une IA qui génère de l'électricité",
    ],
    bonne: 1,
    explication: "Voir la leçon 3 : elle fabrique un contenu au lieu de reconnaître ou de classer.",
  },
  {
    question: "Quelle est la différence entre un modèle et une application ?",
    choix: [
      "Il n'y en a aucune",
      "Le modèle est l'interface, l'application est le moteur",
      "Le modèle est le moteur qui génère les réponses ; l'application est l'interface et les fonctions autour",
      "Le modèle est payant, l'application est gratuite",
    ],
    bonne: 2,
    explication: "Le moteur et la voiture : voir la leçon 4.",
  },
  {
    question: "Qu'est-ce qu'un prompt ?",
    choix: ["Une instruction donnée à l'IA", "Un abonnement à un outil d'IA", "Une erreur de l'IA", "Le nom d'un modèle"],
    bonne: 0,
    explication: "Voir la leçon 6.",
  },
  {
    question: "Quels sont les 5 éléments de la méthode AROBAZ pour écrire un prompt ?",
    choix: [
      "Contexte, Objectif, Cible, Contraintes, Format",
      "Clarté, Ordre, Couleur, Code, Fichier",
      "Question, Réponse, Correction, Validation, Publication",
      "Apprendre, Observer, Faire, Vérifier, Améliorer",
    ],
    bonne: 0,
    explication: "C.O.C.C.F. Attention à ne pas confondre avec la méthode pédagogique AROBAZ (Apprendre → Améliorer).",
  },
  {
    question: "Une réponse bien écrite est-elle forcément exacte ?",
    choix: [
      "Oui, toujours",
      "Oui, si elle contient des chiffres précis",
      "Non : la qualité rédactionnelle ne garantit pas l'exactitude",
      "Non, l'IA se trompe à chaque fois",
    ],
    bonne: 2,
    explication: "Voir la leçon 7 : l'IA peut se tromper avec assurance.",
  },
  {
    question: "Quelle est la règle AROBAZ avant de prendre une décision importante ?",
    choix: ["Demander → Copier → Publier", "Utiliser → Vérifier → Décider", "Décider → Utiliser → Oublier", "Chercher → Comparer → Payer"],
    bonne: 1,
    explication: "L'IA prépare, vous vérifiez, vous décidez.",
  },
  {
    question: "Votre assistant vous donne un taux de TVA pour votre activité. Que faites-vous ?",
    choix: [
      "Je l'utilise directement, l'assistant est configuré pour ne pas inventer",
      "Je le vérifie sur une source officielle avant de l'utiliser",
      "Je pose la même question une deuxième fois pour confirmer",
      "J'abandonne l'idée d'utiliser l'IA pour ce sujet",
    ],
    bonne: 1,
    explication: "Fiscalité = vigilance maximale. Une deuxième réponse de l'IA n'est pas une vérification.",
  },
];

export const QUIZ_MODULE1: Question[] = QUIZ_BRUT.map(melanger);

const MOTS_PAR_MINUTE = 140;

export function dureeNarration(lecon: Lecon) {
  const mots = lecon.script.reduce((n, s) => n + s.voix.split(/\s+/).filter(Boolean).length, 0);
  return { mots, minutes: Math.round(mots / MOTS_PAR_MINUTE) };
}

export const leconUrl = (l: Lecon) => `/espace/ia-business/module-1/${l.slug}/`;
