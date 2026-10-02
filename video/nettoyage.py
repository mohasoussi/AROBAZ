"""Nettoyage d'une voix enregistrée : coupe les respirations, déglutitions et bruits de bouche entre les phrases.

Principe : seules les zones où l'on entend de la voix (sons « voisés », périodiques) ou de la parole forte
(consonnes sifflantes) sont conservées, avec une petite marge avant/après. Tout le reste est atténué.
Une respiration ou une déglutition est un bruit, pas une voix : elle n'est pas périodique.
"""
import numpy as np

SR = 24000
FRAME = int(0.025 * SR)
HOP = int(0.010 * SR)


def analyser(y):
    n = 1 + (len(y) - FRAME) // HOP
    idx = np.arange(FRAME)[None, :] + HOP * np.arange(n)[:, None]
    fr = y[idx] * np.hanning(FRAME)[None, :]
    rms = np.sqrt(np.mean(fr ** 2, axis=1) + 1e-12)
    db = 20 * np.log10(rms)
    # périodicité : autocorrélation normalisée entre 80 et 400 Hz
    F = np.fft.rfft(fr, n=2 * FRAME, axis=1)
    ac = np.fft.irfft(F * np.conj(F), axis=1)[:, :FRAME]
    lo, hi = int(SR / 400), int(SR / 80)
    r = ac[:, lo:hi].max(axis=1) / (ac[:, 0] + 1e-12)
    return db, r


def dilater(masque, avant, apres):
    out = masque.copy()
    for k in range(1, avant + 1):
        out[:-k] |= masque[k:]
    for k in range(1, apres + 1):
        out[k:] |= masque[:-k]
    return out


def nettoyer(y, protegees=None, verbose=True):
    """protegees : [(debut, fin)] en secondes : passages reconnus comme parole du script, à ne pas couper
    quand ils contiennent peu de voix détectable (fin de phrase dite doucement, chuchotée)."""
    y = y.astype(np.float32)
    db, r = analyser(y)
    ref = np.percentile(db, 90)
    voise = (db > ref - 26) & (r > 0.5)
    fort = db > ref - 12
    # une « voix » doit durer au moins 40 ms
    n = len(voise); i = 0
    while i < n:
        if voise[i]:
            j = i
            while j < n and voise[j]:
                j += 1
            if (j - i) < 4:
                voise[i:j] = False
            i = j
        else:
            i += 1
    garde = dilater(voise | fort, avant=10, apres=16)
    sauves = []
    for d, f in (protegees or []):
        a, b = int(d * 100), min(n, int(f * 100) + 1)
        if a < n and (voise[a:b] | fort[a:b]).sum() < 12:   # presque pas de voix franche : parole douce
            garde[a:b] = True
            sauves.append((d, f))
    # îlots isolés très courts (déglutition, claquement de langue) : retirés
    i = 0
    while i < n:
        if garde[i]:
            j = i
            while j < n and garde[j]:
                j += 1
            dur_voix = int((voise[i:j] | fort[i:j]).sum())
            gauche = i - (np.where(garde[:i])[0][-1] if garde[:i].any() else -10 ** 6)
            droite = (np.where(garde[j:])[0][0] if garde[j:].any() else 10 ** 6)
            sauve = any(i <= int(f * 100) and j >= int(d * 100) for d, f in sauves)
            if dur_voix < 10 and gauche > 50 and droite > 50 and not sauve:
                garde[i:j] = False
            i = j
        else:
            i += 1
    # courbe de gain lissée : attaque rapide, relâchement doux
    g = np.where(garde, 1.0, 0.0).astype(np.float32)
    gain = np.zeros(len(y), dtype=np.float32)
    centres = np.arange(len(g)) * HOP + FRAME // 2
    gain = np.interp(np.arange(len(y)), centres, g)
    # lissage (fenêtre ~30 ms) pour éviter les clics
    k = int(0.030 * SR)
    gain = np.convolve(gain, np.ones(k) / k, mode="same")
    plancher = 10 ** (-70 / 20)
    gain = np.maximum(gain, plancher)
    out = y * gain
    if verbose:
        coupe = 1 - garde.mean()
        print(f"nettoyage : {coupe * 100:.0f} % de l'enregistrement atténué ({coupe * len(y) / SR:.0f} s sur {len(y) / SR:.0f} s) ; {len(sauves)} passage(s) de parole douce protégé(s)")
    return out, garde, db, ref


def regions_coupees(garde, db, ref, min_s=0.12):
    """Régions atténuées qui contenaient un bruit audible (utile pour contrôle)."""
    res, i, n = [], 0, len(garde)
    while i < n:
        if not garde[i]:
            j = i
            while j < n and not garde[j]:
                j += 1
            seg = db[i:j]
            if (j - i) * 0.01 >= min_s and seg.max() > ref - 40:
                res.append((i * 0.01, j * 0.01, float(seg.max() - ref)))
            i = j
        else:
            i += 1
    return res
