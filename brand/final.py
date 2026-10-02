"""Logo AROBAZ retenu : piste « Le O cible », en bleu avec un point violet."""
import generer as g
BLEU, VIOLET, VIOLET_CLAIR = "#1E40AF", "#8A1FFF", "#B45CFF"

def o_special(couleur, point, contour=None):
    """couleur = anneau, point = centre, contour = trait fin autour de l'anneau et du point"""
    def f(x, y, size):
        r = g.cap * size / 2
        cx, cy = x + r + size * 0.03, y - r
        sw = size * 0.17
        ri = r - sw
        tr = f' stroke="{contour}" stroke-width="{size*0.03:.2f}"' if contour else ""
        ring = (f'<path fill-rule="evenodd" fill="{couleur}"{tr} d="M {cx-r} {cy} a {r} {r} 0 1 0 {2*r} 0 a {r} {r} 0 1 0 {-2*r} 0 Z '
                f'M {cx-ri} {cy} a {ri} {ri} 0 1 0 {2*ri} 0 a {ri} {ri} 0 1 0 {-2*ri} 0 Z"/>')
        dot = f'<circle cx="{cx}" cy="{cy}" r="{r*0.28}" fill="{point}"{tr}/>'
        return ring + dot, 2 * r + size * 0.06
    return f

def mot(couleur, anneau, point, suffixe, contour=None):
    g.CONTOUR = contour
    s, l = g.mot("AROBAZ", 0, 110/2 + g.cap*80/2 - 6, 80, couleur, suivi=0.02, special={"O": o_special(anneau, point, contour)})
    open(f"final/arobaz-logo-{suffixe}.svg", "w").write(g.svg(round(l) + 8, 110, f'<g transform="translate(4,0)">{s}</g>'))

mot(BLEU, VIOLET, BLEU, "bleu")                   # fond clair
mot("#FFFFFF", VIOLET_CLAIR, "#FFFFFF", "blanc")     # fond sombre : sans contour (invisible)
mot("#111827", VIOLET, "#111827", "noir")

# marque (favicon, avatar) : carré bleu, anneau blanc, point violet clair
open("final/arobaz-marque.svg", "w").write(g.svg(100, 100,
    f'<rect width="100" height="100" rx="24" fill="{BLEU}"/>'
    f'<circle cx="50" cy="50" r="27" fill="none" stroke="#B45CFF" stroke-width="12"/>'
    f'<circle cx="50" cy="50" r="9" fill="#fff"/>'))
print("ok")
