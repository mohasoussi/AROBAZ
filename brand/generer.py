"""Génère les pistes de logo AROBAZ (v2) : lettres Manrope ExtraBold converties en tracés."""
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

BLUE, MINT, CORAL, INK = "#2457E6", "#1AA982", "#F16B5B", "#111827"
f = instantiateVariableFont(TTFont("../video/fonts/manrope.woff2"), {"wght": 800})
gs, cmap, UPM = f.getGlyphSet(), f.getBestCmap(), f["head"].unitsPerEm

def glyph(ch, x, y, size, fill):
    """Tracé SVG d'une lettre dont l'origine est en (x, y) (ligne de base), taille = hauteur d'em."""
    s = size / UPM
    name = cmap[ord(ch)]
    pen = SVGPathPen(gs)
    gs[name].draw(TransformPen(pen, (s, 0, 0, -s, x, y)))
    return f'<path d="{pen.getCommands()}" fill="{fill}"/>', gs[name].width * s

def mot(txt, x, y, size, fill, suivi=0.0, special=None):
    out, cx = [], x
    for ch in txt:
        if special and ch in special:
            svg, w = special[ch](cx, y, size)
        else:
            svg, w = glyph(ch, cx, y, size, fill)
        out.append(svg); cx += w + suivi * size
    return "".join(out), cx - x - suivi * size

def svg(w, h, body, fond=None):
    bg = f'<rect width="{w}" height="{h}" fill="{fond}"/>' if fond else ""
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">{bg}{body}</svg>'

cap = f["OS/2"].sCapHeight / UPM  # hauteur des capitales / em

# ---------- Piste 1 : « De A à Z » — monogramme AZ relié par un trait
def piste1():
    # marque : carré bleu, A blanc + Z menthe qui se touchent
    size = 62
    a, wa = glyph("A", 0, 0, size, "#fff")
    z, wz = glyph("Z", 0, 0, size, "#7BE0C3")
    tot = wa + wz - 4
    x0 = (100 - tot) / 2; base = 50 + cap * size / 2
    a, wa = glyph("A", x0, base, size, "#fff")
    z, wz = glyph("Z", x0 + wa - 4, base, size, "#7BE0C3")
    marque = svg(100, 100, f'<rect width="100" height="100" rx="24" fill="{BLUE}"/>{a}{z}')
    return marque

# ---------- Piste 2 : « Le O cible » — le O du mot devient un anneau avec un point
def piste2():
    def o_special(x, y, size):
        r = cap * size / 2
        cx, cy = x + r * 1.0 + size * 0.03, y - r
        sw = size * 0.17
        w = 2 * r + size * 0.06
        return (f'<circle cx="{cx}" cy="{cy}" r="{r - sw/2}" fill="none" stroke="{INK}" stroke-width="{sw}"/>'
                f'<circle cx="{cx}" cy="{cy}" r="{r*0.28}" fill="{MINT}"/>'), w
    return o_special

def marque2():
    return svg(100, 100, f'<rect width="100" height="100" rx="24" fill="{INK}" stroke="#4B5563" stroke-width="2"/>'
        f'<circle cx="50" cy="50" r="27" fill="none" stroke="#fff" stroke-width="12"/>'
        f'<circle cx="50" cy="50" r="9" fill="{MINT}"/>')

# ---------- Piste 3 : « Le parcours » — de A à Z en trois étapes
def marque3():
    return svg(100, 100, f'<rect width="100" height="100" rx="24" fill="{BLUE}"/>'
        f'<path d="M 24 72 C 24 46, 50 62, 50 46 C 50 30, 76 40, 76 26" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>'
        f'<circle cx="24" cy="72" r="9" fill="#fff"/>'
        f'<circle cx="50" cy="48" r="6.5" fill="#7BE0C3"/>'
        f'<path d="M 66 22 L 80 22 L 80 36" fill="none" stroke="{CORAL}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" transform="translate(0,0)"/>')

def wordmark(couleur, special=None, w=520, h=110, suivi=0.02):
    base = h/2 + cap*80/2 - 6
    s, largeur = mot("AROBAZ", 0, base, 80, couleur, suivi=suivi, special=special)
    return s, largeur

if __name__ == "__main__":
    open("v2-1-marque.svg", "w").write(piste1())
    open("v2-2-marque.svg", "w").write(marque2())
    open("v2-3-marque.svg", "w").write(marque3())
    for nom, special in (("1", None), ("2", {"O": piste2()}), ("3", None)):
        for coul, suf in ((INK, "clair"), ("#FFFFFF", "sombre")):
            sp = special
            if nom == "2" and suf == "sombre":
                def sombre(x, y, size, _s=piste2()):
                    r = _s(x, y, size); return r[0].replace(INK, "#fff"), r[1]
                sp = {"O": sombre}
            s, l = wordmark(coul, sp)
            open(f"v2-{nom}-mot-{suf}.svg", "w").write(svg(round(l) + 4, 110, s).replace('viewBox="0 0', 'viewBox="-2 0'))
    print("ok")
