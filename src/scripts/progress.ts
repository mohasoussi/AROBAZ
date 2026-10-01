// Progression de l'élève, enregistrée dans le navigateur (localStorage).
// Provisoire : sera remplacée par un compte élève et une base de données.

const CLE = "arobaz:progression:v1";

export type EtatLecon = {
  terminee?: boolean;
  quiz?: { score: number; total: number };
  exercice?: Record<string, string>;
  checks?: number[];
  maj?: string;
};

export type Etat = {
  prenom?: string;
  lecons: Record<string, EtatLecon>;
  modules: Record<string, { score: number; total: number; valide: boolean; date: string }>;
};

const vide = (): Etat => ({ lecons: {}, modules: {} });

export function lire(): Etat {
  try {
    const brut = localStorage.getItem(CLE);
    if (!brut) return vide();
    const e = JSON.parse(brut);
    return { ...vide(), ...e, lecons: e.lecons ?? {}, modules: e.modules ?? {} };
  } catch {
    return vide();
  }
}

export function ecrire(e: Etat) {
  try {
    localStorage.setItem(CLE, JSON.stringify(e));
  } catch {
    /* stockage indisponible (navigation privée…) : la page reste utilisable */
  }
}

export function majLecon(id: string, f: (l: EtatLecon) => void) {
  const e = lire();
  const l = (e.lecons[id] ??= {});
  f(l);
  l.maj = new Date().toISOString();
  ecrire(e);
  return e;
}

export function reinitialiser() {
  try {
    localStorage.removeItem(CLE);
  } catch {}
}

export const idLecon = (module: string, slug: string) => `${module}/${slug}`;
