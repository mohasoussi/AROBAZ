import type { Lecon } from "./types";
import { melanger, MODULE1 } from "./module1";
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

const m = (l: Lecon[]) => l.map((x) => ({ ...x, quiz: x.quiz.map(melanger) })) as Lecon[];

/** Formation IA & Business : leçons rédigées, modules 1 à 12. */
export const CURSUS_IA_BUSINESS: { numero: number; lecons: Lecon[] }[] = [
  { numero: 1, lecons: MODULE1.lecons },
  { numero: 2, lecons: m(LECONS_M2) },
  { numero: 3, lecons: m(LECONS_M3) },
  { numero: 4, lecons: m(LECONS_M4) },
  { numero: 5, lecons: m(LECONS_M5) },
  { numero: 6, lecons: m(LECONS_M6) },
  { numero: 7, lecons: m(LECONS_M7) },
  { numero: 8, lecons: m(LECONS_M8) },
  { numero: 9, lecons: m(LECONS_M9) },
  { numero: 10, lecons: m(LECONS_M10) },
  { numero: 11, lecons: m(LECONS_M11) },
  { numero: 12, lecons: m(LECONS_M12) },
];
