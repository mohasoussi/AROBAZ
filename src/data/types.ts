export type Scene = {
  /** Étape de la structure vidéo : Hook, Objectif, Explication, Exemple, Démonstration, Erreurs fréquentes, Mission, Transition */
  partie: string;
  /** Ce qui est montré à l'écran (indications de réalisation) */
  ecran: string;
  /** Texte lu par la voix off */
  voix: string;
};

export type Question = {
  question: string;
  choix: string[];
  bonne: number;
  explication: string;
};

export type Lecon = {
  slug: string;
  numero: number;
  titre: string;
  sousTitre: string;
  dureeCible: string;
  /** Chemin d'une vidéo finale dans /public, quand elle existe */
  video?: string;
  objectifs: string[];
  essentiel: { titre: string; texte: string }[];
  script: Scene[];
  exercice: { titre: string; consigne: string; champs: { label: string; aide?: string }[] };
  prompt?: { titre: string; texte: string; conseil?: string };
  verifier: string[];
  quiz: Question[];
};
