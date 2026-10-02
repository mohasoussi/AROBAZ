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
    ".hero .eyebrow", ".hero h1", ".hero .lead", ".hero .actions", ".hero .small", ".hero-visual",
    ".head", "section h2", "section > .wrap > .eyebrow", ".grid > *", ".methode > li", ".stats > div", ".how > div",
    ".modules > *", ".cta", ".band-inner", ".checks", ".faq details", "article.prose > *",
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
