const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Footer, Header, PageNumber, BorderStyle, ShadingType, Table, TableRow, TableCell, WidthType } = require("docx");
const [MOD, NUM, SORTIE] = process.argv.slice(2);
const mod = JSON.parse(fs.readFileSync("build/curriculum.json", "utf8")).find((m) => m.module === Number(MOD));
const lecon = mod.lecons.find((l) => l.numero === Number(NUM));
const mots = lecon.scenes.reduce((n, s) => n + s.voix.trim().split(/\s+/).length, 0);
const minutes = Math.round(mots / 123);
const BLUE = "2457E6", INK = "111827", GREY = "6B7280";
const FONT = "Calibri";
const run = (text, o = {}) => new TextRun({ text, font: FONT, ...o });
const P = (children, o = {}) => new Paragraph({ children: Array.isArray(children) ? children : [children], ...o });

const conseils = [
  "Lisez à voix haute, posément, comme à une personne que vous accompagnez. Souriez : cela s'entend.",
  "Laissez une vraie pause de 2 secondes entre deux scènes (elle est indiquée dans le texte).",
  "Respirez entre les phrases. Ne cherchez pas à aller vite : le montage s'adapte à votre rythme.",
  "Si vous vous trompez, reprenez la phrase depuis son début, sans arrêter l'enregistrement, puis notez laquelle.",
  "Lisez le texte tel quel, sans ajout ni suppression. « IA » se lit « i-a ».",
];

const kids = [
  P(run("AROBAZ · Formation IA & Business", { color: BLUE, bold: true, size: 22 }), { spacing: { after: 60 } }),
  P(run(`Module ${mod.module} · ${mod.titre}`, { color: GREY, size: 24 }), { spacing: { after: 160 } }),
  new Paragraph({ heading: HeadingLevel.TITLE, children: [run(`Leçon ${lecon.numero} : ${lecon.titre}`, { bold: true, size: 48, color: INK })], spacing: { after: 120 } }),
  P(run(`Script de la voix off · ${lecon.scenes.length} scènes · environ ${minutes} minutes de lecture`, { color: GREY, size: 24 }), { spacing: { after: 320 } }),
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [run("Avant d'enregistrer", { bold: true, size: 30, color: BLUE })], spacing: { after: 120 } }),
  ...conseils.map((c) => new Paragraph({ numbering: { reference: "puces", level: 0 }, children: [run(c, { size: 24 })], spacing: { after: 80 } })),
];

lecon.scenes.forEach((s, i) => {
  kids.push(
    new Paragraph({ heading: HeadingLevel.HEADING_2, pageBreakBefore: i === 0, keepNext: true,
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BLUE, space: 4 } },
      children: [run(`Scène ${i + 1} sur ${lecon.scenes.length}`, { bold: true, size: 30, color: BLUE }), run(`   ${s.partie}`, { size: 24, color: GREY })],
      spacing: { before: i === 0 ? 0 : 440, after: 200 } }),
    new Paragraph({ children: [run(s.voix, { size: 30 })], spacing: { line: 400, after: 160 } }),
  );
  kids.push(i < lecon.scenes.length - 1
    ? new Paragraph({ alignment: AlignmentType.CENTER, children: [run("— pause de 2 secondes —", { italics: true, color: GREY, size: 22 })], spacing: { before: 120, after: 60 } })
    : new Paragraph({ alignment: AlignmentType.CENTER, children: [run("— fin de la leçon —", { italics: true, color: GREY, size: 22 })], spacing: { before: 200 } }));
});

const doc = new Document({
  creator: "AROBAZ", title: `Leçon ${lecon.numero} : ${lecon.titre}`,
  styles: {
    default: { document: { run: { font: FONT, size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal", run: { size: 48, bold: true, font: FONT } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 30, bold: true, font: FONT }, paragraph: { outlineLevel: 1 } },
    ],
  },
  numbering: { config: [{ reference: "puces", levels: [{ level: 0, format: "bullet", text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1300, right: 1300, bottom: 1200, left: 1300 } } },
    headers: { default: new Header({ children: [P(run(`AROBAZ · Module ${mod.module} · Leçon ${lecon.numero} · Script voix off`, { size: 18, color: GREY }), { alignment: AlignmentType.RIGHT })] }) },
    footers: { default: new Footer({ children: [P([run("Page ", { size: 18, color: GREY }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 18, color: GREY })], { alignment: AlignmentType.CENTER })] }) },
    children: kids,
  }],
});
Packer.toBuffer(doc).then((b) => { fs.writeFileSync(SORTIE, b); console.log("ok", b.length); });
