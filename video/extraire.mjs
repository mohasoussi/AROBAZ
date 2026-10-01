// Extrait les scripts des leçons (voix off) du site vers build/lecons.json
import fs from "node:fs";
const m = await import("./build/module1.mjs");
const out = m.MODULE1.lecons.map((l) => ({ numero: l.numero, slug: l.slug, titre: l.titre, dureeCible: l.dureeCible, scenes: l.script.map((s) => ({ partie: s.partie, ecran: s.ecran, voix: s.voix })) }));
fs.writeFileSync("build/lecons.json", JSON.stringify(out, null, 1));
console.log(out.map((l) => `${l.numero}: ${l.scenes.length} scènes`).join(" | "));
