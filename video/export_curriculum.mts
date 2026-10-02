// Exporte les scripts de voix off de toute la formation vers build/curriculum.json
// Usage : npx tsx video/export_curriculum.mts   (depuis la racine du dépôt)
import fs from "node:fs";
import { MODULES } from "../src/data/curriculum.ts";
const out = MODULES.map((m) => ({
  module: m.numero, titre: m.titre,
  lecons: m.lecons.map((l) => ({ numero: l.numero, slug: l.slug, titre: l.titre, scenes: l.script.map((s) => ({ partie: s.partie, ecran: s.ecran, voix: s.voix })) })),
}));
fs.mkdirSync("build", { recursive: true });
fs.writeFileSync("build/curriculum.json", JSON.stringify(out, null, 1));
console.log("ok", out.length, "modules");
