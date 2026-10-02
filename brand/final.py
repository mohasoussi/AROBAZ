"""Logo AROBAZ retenu : piste « Le O cible », en bleu avec un point violet."""
import generer as g
BLEU, VIOLET, VIOLET_CLAIR = "#1E40AF", "#8A1FFF", "#B45CFF"

def o_special(couleur, point):
    """couleur = anneau, point = centre"""
    def f(x, y, size):
        r = g.cap * size / 2
        cx, cy = x + r + size * 0.03, y - r
        sw = size * 0.17
        return (f'<circle cx="{cx}" cy="{cy}" r="{r - sw/2}" fill="none" stroke="{couleur}" stroke-width="{sw}"/>'
                f'<circle cx="{cx}" cy="{cy}" r="{r*0.28}" fill="{point}"/>'), 2 * r + size * 0.06
    return f

def mot(couleur, anneau, point, suffixe, fond=None):
    s, l = g.mot("AROBAZ", 0, 110/2 + g.cap*80/2 - 6, 80, couleur, suivi=0.02, special={"O": o_special(anneau, point)})
    PX, H = 34, 122
    trait = "#111827" if couleur != "#FFFFFF" else "#FFFFFF"
    cadre = f'<rect x="1.5" y="1.5" width="{round(l) + 2*PX - 3}" height="{H - 3}" rx="10" fill="none" stroke="{trait}" stroke-width="3"/>'
    corps = f'<g transform="translate({PX},4)">{s}</g>'
    open(f"final/arobaz-logo-{suffixe}.svg", "w").write(g.svg(round(l) + 2*PX, H, cadre + corps, fond))

mot(BLEU, VIOLET, BLEU, "bleu")                  # fond clair
mot("#FFFFFF", VIOLET_CLAIR, "#FFFFFF", "blanc")      # fond sombre ou bleu
mot("#111827", VIOLET, "#111827", "noir")             # secours monochrome-ish

# marque (favicon, avatar) : carré bleu, anneau blanc, point violet clair
open("final/arobaz-marque.svg", "w").write(g.svg(100, 100,
    f'<rect width="100" height="100" rx="24" fill="{BLEU}"/>'
    f'<circle cx="50" cy="50" r="27" fill="none" stroke="#B45CFF" stroke-width="12"/>'
    f'<circle cx="50" cy="50" r="9" fill="#fff"/>'))
print("ok")
