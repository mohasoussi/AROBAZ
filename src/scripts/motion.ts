// Animations du site : en-tête, progression de lecture, effet d'onde des boutons,
// apparition au défilement, compteurs. Aucun effet si « réduire les animations » est activé.
const calme = matchMedia("(prefers-reduced-motion: reduce)").matches;
const html = document.documentElement;
const enEspace = /^\/(espace|production)\//.test(location.pathname);

// ---- En-tête + barre de progression + léger parallaxe du hero
const entete = document.querySelector<HTMLElement>(".site-header");
const barre = document.createElement("div");
barre.id = "scroll-progress";
barre.setAttribute("aria-hidden", "true");
document.body.prepend(barre);
const visuel = document.querySelector<HTMLElement>(".hero-visual");
let attente = false;
function surDefilement() {
  attente = false;
  const y = scrollY;
  entete?.classList.toggle("scrolled", y > 8);
  const max = html.scrollHeight - innerHeight;
  barre.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  if (visuel && !calme && y < 900) visuel.style.setProperty("--py", `${(y * -0.05).toFixed(1)}px`);
}
addEventListener("scroll", () => { if (!attente) { attente = true; requestAnimationFrame(surDefilement); } }, { passive: true });
surDefilement();

// ---- Effet d'onde au clic sur les boutons
if (!calme) {
  document.addEventListener("pointerdown", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>(".btn");
    if (!b || b.matches(":disabled, [aria-disabled='true']")) return;
    const r = b.getBoundingClientRect();
    const d = Math.max(r.width, r.height) * 2;
    const o = document.createElement("span");
    o.className = "ripple";
    o.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.append(o);
    o.addEventListener("animationend", () => o.remove());
  });
}

// ---- Apparition au défilement (pages vitrine seulement)
if (!calme && !enEspace && "IntersectionObserver" in window) {
  const cibles = [
    ".hero .eyebrow", ".hero .lead", ".hero .actions", ".hero .small", ".hero-visual",
    ".head", "section h2", "section > .wrap > .eyebrow", ".grid > *", ".methode > li", ".stats > div", ".how > div",
    ".modules > *", ".cta", ".band-inner", ".checks > li", ".needs > li", ".prose > *", "details", ".steps > li",
  ];
  const tous = new Set<HTMLElement>(cibles.flatMap((s) => [...document.querySelectorAll<HTMLElement>(`main ${s}`)]));
  // on garde l'élément le plus externe de chaque groupe
  const retenus = [...tous].filter((el) => ![...tous].some((o) => o !== el && o.contains(el)));
  const rang = new Map<Element, number>();
  retenus.forEach((el) => {
    const n = rang.get(el.parentElement!) ?? 0;
    rang.set(el.parentElement!, n + 1);
    el.dataset.reveal = "";
    el.style.setProperty("--d", `${Math.min(n, 6) * 80}ms`);
  });
  const io = new IntersectionObserver((vues) => {
    vues.forEach((v) => {
      if (!v.isIntersecting) return;
      const el = v.target as HTMLElement;
      el.classList.add("in");
      io.unobserve(el);
      // une fois affiché, on retire l'état d'animation pour que les survols reprennent la main
      setTimeout(() => { el.removeAttribute("data-reveal"); el.style.removeProperty("--d"); }, 1400);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  retenus.forEach((el) => io.observe(el));
  setTimeout(() => html.classList.add("reveal-all"), 6000); // filet de sécurité
}

// ---- Compteurs animés (chiffres de la bande sombre)
if (!calme && "IntersectionObserver" in window) {
  const cpt = new IntersectionObserver((vues) => {
    vues.forEach((v) => {
      if (!v.isIntersecting) return;
      const el = v.target as HTMLElement;
      cpt.unobserve(el);
      const cible = Number(el.dataset.cible);
      const t0 = performance.now();
      const pas = (t: number) => {
        const p = Math.min(1, (t - t0) / 1300);
        el.textContent = String(Math.round(cible * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(pas);
      };
      requestAnimationFrame(pas);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll<HTMLElement>(".stats strong").forEach((el) => {
    const t = el.textContent?.trim() ?? "";
    if (/^\d+$/.test(t)) { el.dataset.cible = t; cpt.observe(el); }
  });
}

// ---- Démo animée du hero : la demande se construit ligne par ligne, puis le résultat, puis la vérification
const demo = document.querySelector<HTMLElement>("[data-demo]");
if (demo) {
  const lignes = [...demo.querySelectorAll<HTMLElement>(".demo-lines li")];
  const envoi = demo.querySelector<HTMLElement>(".demo-send")!;
  const res = demo.querySelector<HTMLElement>(".demo-result")!;
  const verif = demo.querySelector<HTMLElement>(".demo-verif")!;
  const etapes = [...verif.querySelectorAll<HTMLElement>("span")];
  let minuteurs: number[] = [];
  const at = (ms: number, f: () => void) => minuteurs.push(window.setTimeout(f, ms));
  const tout = () => {
    lignes.forEach((l) => l.classList.add("on")); res.classList.add("on"); verif.classList.add("on");
    etapes.forEach((e) => e.classList.add("ok")); demo.classList.add("fin");
  };
  const reinit = () => {
    minuteurs.forEach(clearTimeout); minuteurs = [];
    demo.classList.remove("fin");
    [...lignes, envoi, res, verif].forEach((e) => e.classList.remove("on", "press"));
    etapes.forEach((e) => e.classList.remove("ok"));
  };
  const cycle = () => {
    reinit();
    lignes.forEach((l, i) => at(500 + i * 650, () => l.classList.add("on")));
    at(4000, () => envoi.classList.add("on"));
    at(4900, () => envoi.classList.add("press"));
    at(5300, () => { envoi.classList.remove("press"); demo.classList.add("fin"); });
    at(5600, () => res.classList.add("on"));
    at(7000, () => verif.classList.add("on"));
    etapes.forEach((e, i) => at(7400 + i * 650, () => e.classList.add("ok")));
    at(12000, () => { res.classList.remove("on"); verif.classList.remove("on"); });
    at(12900, cycle);
  };
  if (calme || !("IntersectionObserver" in window)) tout();
  else {
    let actif = false;
    new IntersectionObserver((v) => {
      const vu = v[0].isIntersecting;
      if (vu && !actif) { actif = true; cycle(); }
      else if (!vu && actif) { actif = false; reinit(); tout(); }
    }, { threshold: 0.35 }).observe(demo);
  }
}

// ---- Titres de page : les mots montent un à un (titres sans balise interne seulement)
if (!calme && !enEspace) {
  document.querySelectorAll<HTMLElement>("main h1:not(.titre-hero)").forEach((h) => {
    if (h.children.length) return;
    const mots = (h.textContent ?? "").trim().split(/\s+/);
    h.setAttribute("aria-label", mots.join(" "));
    h.replaceChildren(...mots.flatMap((m, i) => {
      const o = document.createElement("span");
      o.className = "mot"; o.setAttribute("aria-hidden", "true"); o.style.setProperty("--i", String(i));
      const s = document.createElement("span"); s.textContent = m; o.append(s);
      return i < mots.length - 1 ? [o, document.createTextNode(" ")] : [o];
    }));
  });
}

// ---- Page « Comment ça marche » : la ligne se remplit, l'étape courante s'allume
const etapes = document.querySelector<HTMLElement>(".steps");
if (etapes) {
  const lis = [...etapes.querySelectorAll<HTMLElement>("li")];
  const maj = () => {
    const r = etapes.getBoundingClientRect();
    const ligne = innerHeight * 0.55;
    etapes.style.setProperty("--fill", String(Math.max(0, Math.min(1, (ligne - r.top) / r.height))));
    lis.forEach((li) => li.classList.toggle("actif", li.getBoundingClientRect().top < ligne));
  };
  addEventListener("scroll", () => requestAnimationFrame(maj), { passive: true });
  maj();
}

// ---- FAQ : ouverture et fermeture en douceur
document.querySelectorAll<HTMLDetailsElement>("details").forEach((d) => {
  const s = d.querySelector("summary");
  if (!s || calme) return;
  s.addEventListener("click", (e) => {
    e.preventDefault();
    const fin = () => { d.style.height = ""; d.dataset.anim = ""; };
    if (d.dataset.anim) return;
    d.dataset.anim = "1";
    const h0 = d.offsetHeight;
    if (d.open) {
      const h1 = s.offsetHeight + parseFloat(getComputedStyle(d).paddingTop) + parseFloat(getComputedStyle(d).paddingBottom);
      d.animate({ height: [`${h0}px`, `${h1}px`] }, { duration: 320, easing: "cubic-bezier(0.22,1,0.36,1)" }).onfinish = () => { d.open = false; fin(); };
    } else {
      d.open = true;
      const h1 = d.offsetHeight;
      d.animate({ height: [`${h0}px`, `${h1}px`] }, { duration: 380, easing: "cubic-bezier(0.22,1,0.36,1)" }).onfinish = fin;
    }
  });
});
