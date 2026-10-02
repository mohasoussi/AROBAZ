"""Logo AROBAZ retenu : piste « Le O cible », en bleu avec un point violet."""
import generer as g
BLEU, VIOLET, VIOLET_CLAIR = "#1E40AF", "#7C3AED", "#A78BFA"

def o_special(couleur, point):
    def f(x, y, size):
        r = g.cap * size / 2
        cx, cy = x + r + size * 0.03, y - r
        sw = size * 0.17
        return (f'<circle cx="{cx}" cy="{cy}" r="{r - sw/2}" fill="none" stroke="{couleur}" stroke-width="{sw}"/>'
                f'<circle cx="{cx}" cy="{cy}" r="{r*0.28}" fill="{point}"/>'), 2 * r + size * 0.06
    return f

def mot(couleur, point, suffixe, fond=None):
    s, l = g.mot("AROBAZ", 0, 110/2 + g.cap*80/2 - 6, 80, couleur, suivi=0.02, special={"O": o_special(couleur, point)})
    open(f"final/arobaz-logo-{suffixe}.svg", "w").write(g.svg(round(l) + 4, 110, s, fond).replace('viewBox="0 0', 'viewBox="-2 0'))

mot(BLEU, VIOLET, "bleu")                  # fond clair
mot("#FFFFFF", VIOLET_CLAIR, "blanc")      # fond sombre ou bleu
mot("#111827", VIOLET, "noir")             # secours monochrome-ish

# marque (favicon, avatar) : carré bleu, anneau blanc, point violet clair
open("final/arobaz-marque.svg", "w").write(g.svg(100, 100,
    f'<rect width="100" height="100" rx="24" fill="{BLEU}"/>'
    f'<circle cx="50" cy="50" r="27" fill="none" stroke="#fff" stroke-width="12"/>'
    f'<circle cx="50" cy="50" r="9" fill="#C4B5FD"/>'))
print("ok")
