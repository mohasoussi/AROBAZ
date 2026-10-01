// Usage : node render.mjs <leçon> <intro|0|1|2...> ...
import { createRequire } from "node:module";
import { execSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync("npm root -g").toString().trim(), "playwright"));

const [num, ...which] = process.argv.slice(2);
const FPS = 25;
const dir = `out/lecon-${num}`;
const timing = JSON.parse(fs.readFileSync(`${dir}/timing.json`, "utf8"));
const { intro, scenes } = await import(`./specs/lecon${num}.mjs`);

const DEFAUT = ["x", "check", "arrow-right", "sparkles", "target", "bot", "user", "clock", "triangle-alert"];
const noms = new Set(DEFAUT);
for (const m of JSON.stringify([intro, ...scenes]).matchAll(/"icon":"([a-z0-9-]+)"/g)) noms.add(m[1]);
const icons = {};
for (const n of noms) {
  const f = `node_modules/lucide-static/icons/${n}.svg`;
  if (!fs.existsSync(f)) throw new Error("icône inconnue : " + n);
  icons[n] = fs.readFileSync(f, "utf8").replace(/<!--.*?-->/gs, "");
}

const introDur = intro.duree;
const total = introDur + timing.scenes.reduce((n, s) => n + s.duree, 0);
if (!fs.existsSync(`${dir}/intro.wav`))
  execSync(`ffmpeg -y -v error -f lavfi -i anullsrc=r=24000:cl=mono -t ${introDur} ${dir}/intro.wav`);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(pathToFileURL(path.resolve("player.html")).href);
await page.evaluate(() => document.fonts.ready);

for (const w of which) {
  const isIntro = w === "intro";
  const i = isIntro ? -1 : Number(w);
  const dur = isIntro ? introDur : timing.scenes[i].duree;
  const offset = isIntro ? 0 : introDur + timing.scenes.slice(0, i).reduce((n, s) => n + s.duree, 0);
  const def = isIntro ? intro : scenes[i];
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  const warns = await page.evaluate((a) => window.build(a), {
    kind: def.kind, spec: def.spec, icons, offset, total, num: Number(num), titreModule: "Module 1 · Comprendre l'IA",
    timing: isIntro ? { duree: dur } : timing.scenes[i] && { duree: dur, phrases: timing.scenes[i].phrases },
  });
  if (warns.length) console.log(`  ⚠ scène ${w}:`, warns.join(" | "));
  const wav = isIntro ? `${dir}/intro.wav` : `${dir}/scene-${String(i).padStart(2, "0")}.wav`;
  const out = isIntro ? `${dir}/v-intro.mp4` : `${dir}/v-${String(i).padStart(2, "0")}.mp4`;
  const ff = spawn("ffmpeg", ["-y", "-v", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-", "-i", wav, "-t", String(dur),
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "19", "-pix_fmt", "yuv420p", "-r", String(FPS), "-c:a", "aac", "-b:a", "160k", "-ar", "48000", "-ac", "1", out], { stdio: ["pipe", "inherit", "inherit"] });
  const n = Math.round(dur * FPS);
  for (let f = 0; f < n; f++) {
    await page.evaluate((t) => window.seek(t), f / FPS);
    const buf = await page.screenshot({ type: "jpeg", quality: 90 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (process.env.APERCU && [Math.round(n * 0.25), Math.round(n * 0.6), n - 20].includes(f)) fs.writeFileSync(`${dir}/apercu-${w}-${f}.jpg`, buf);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  console.log(`scène ${w} : ${n} images → ${out}`);
}
await browser.close();
