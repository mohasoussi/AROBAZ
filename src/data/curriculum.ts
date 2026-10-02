import type { Lecon, Question } from "./types";
import { melanger, MODULE1, QUIZ_MODULE1 } from "./module1";
import { FORMATIONS } from "./formations";
import { LECONS_M2 } from "./modules/m02";
import { LECONS_M3 } from "./modules/m03";
import { LECONS_M4 } from "./modules/m04";
import { LECONS_M5 } from "./modules/m05";
import { LECONS_M6 } from "./modules/m06";
import { LECONS_M7 } from "./modules/m07";
import { LECONS_M8 } from "./modules/m08";
import { LECONS_M9 } from "./modules/m09";
import { LECONS_M10 } from "./modules/m10";
import { LECONS_M11 } from "./modules/m11";
import { LECONS_M12 } from "./modules/m12";

export type LeconM = Lecon & { module: number };

export type ModuleCours = {
  numero: number;
  /** Segment d'URL : module-1, module-2… */
  slug: string;
  titre: string;
  niveau: string;
  prerequis: string;
  objectif: string;
  competences: string[];
  livrable: string;
  seuil: number;
  lecons: LeconM[];
  /** Quiz de validation du module */
  quiz: Question[];
};

export const FORMATION_IA = FORMATIONS.find((f) => f.slug === "ia-business")!;

const BRUTES: Record<number, Lecon[]> = {
  1: MODULE1.lecons,
  2: LECONS_M2, 3: LECONS_M3, 4: LECONS_M4, 5: LECONS_M5, 6: LECONS_M6, 7: LECONS_M7,
  8: LECONS_M8, 9: LECONS_M9, 10: LECONS_M10, 11: LECONS_M11, 12: LECONS_M12,
};

/** Quiz de validation des modules 2 à 12 : une question tirée de chaque leçon. */
function quizDuModule(lecons: Lecon[]): Question[] {
  return lecons.map((l, i) => l.quiz[i % l.quiz.length]).map(melanger);
}

export const MODULES: ModuleCours[] = FORMATION_IA.modules.map((m) => {
  const brutes = BRUTES[m.numero];
  const lecons = brutes.map((l) => ({ ...l, quiz: m.numero === 1 ? l.quiz : l.quiz.map(melanger), module: m.numero })) as LeconM[];
  return {
    numero: m.numero,
    slug: `module-${m.numero}`,
    titre: m.titre,
    niveau: m.numero === 1 ? MODULE1.niveau : m.numero <= 5 ? "Débutant" : "Débutant à intermédiaire",
    prerequis: m.numero === 1 ? MODULE1.prerequis : `Module ${m.numero - 1}`,
    objectif: m.resume,
    competences: m.numero === 1 ? MODULE1.competences : m.points,
    livrable: m.livrable,
    seuil: 0.8,
    lecons,
    quiz: m.numero === 1 ? QUIZ_MODULE1 : quizDuModule(brutes),
  };
});

export const moduleParNumero = (n: number) => MODULES.find((m) => m.numero === n)!;
export const TOUTES_LECONS: LeconM[] = MODULES.flatMap((m) => m.lecons);

export const leconUrl = (l: LeconM) => `/espace/ia-business/module-${l.module}/${l.slug}/`;
export const moduleUrl = (m: ModuleCours) => `/espace/ia-business/${m.slug}/`;
export const validationUrl = (m: ModuleCours) => `/espace/ia-business/${m.slug}/validation/`;
export const idLeconIA = (l: Lecon) => `ia-business/${l.slug}`;
export const idModuleIA = (m: ModuleCours) => `ia-business/${m.slug}`;
