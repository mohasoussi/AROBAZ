"""Fonctions partagées : découpage en phrases et aide à la prononciation."""
import re


def prononcer(t: str) -> str:
    """Texte « épelé » pour une voix de synthèse : sigles et noms de marque."""
    t = t.replace("AROBAZ", "Arobaz")
    t = re.sub(r"\bIA\b", "I.A.", t)
    t = t.replace("C.O.C.C.F.", "C. O. C. C. F.")
    t = t.replace("ChatGPT", "Chat G.P.T.")
    t = t.replace("OpenAI", "Open I.A.")
    t = t.replace("≠", " n'est pas ")
    return t


def phrases(texte: str):
    morceaux = re.split(r"(?<=[.!?…])\s+(?=[A-ZÀÂÉÈÊÎÔÛÇ«\"“])", texte.strip())
    return [m for m in morceaux if m.strip()]
