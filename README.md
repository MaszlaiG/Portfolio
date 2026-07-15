# Portfolio — Mászlai Gábor

> Szabadúszó webfejlesztő portfólió: **„az alapoktól a frontendig".**

Egyoldalas, kétnyelvű (HU/EN) portfólió építőipari koncepcióval: „régen betonból építettem, ma weboldalakból". A dizájn egy **építész-rajzlap / kékvázlat** esztétikát követ — meleg papír háttér, mérnöki rács, hi-vis narancs akcentus és acélkék részletek. Tartalmaz egy animált „így épül egy weboldal" scroll-szekciót, projektgalériát lightboxszal és egy beépített **rendelési űrlapot**, ami közvetlenül Firebase-be ír és EmailJS-en értesít.

---

## Főbb funkciók

- **Kétnyelvű (HU/EN)** felület nyelvváltóval, teljes i18n szótárral.
- **Scrollytelling szekció** — animált SVG „építkezés", ami görgetésre 0%-ról 100%-ra épül fel (alap → szerkezet → felület).
- **Szekciók:** Rólam, Mit építek (szolgáltatások), Munkáim (kiválasztott projektek).
- **Projekt-részletoldalak** saját galériával és **lightboxszal** (billentyűzet- és nyíl-navigáció, számláló).
- **Többlépéses rendelési űrlap** — ügyféltípus (magánszemély/vállalkozás), projekt típusa, részletek és üzenet; validációval és sikeres visszajelző képernyővel.
- **Reszponzív**, mobilbarát, `prefers-reduced-motion` támogatással (mozgásérzékeny felhasználóknak lecsökkentett animáció).
- Diszkrét, „drafting"-stílusú részletek: 48px-es rács, dimenzióvonalak, mono mikro-címkék.

## A rendelési űrlap működése

A leadott megrendelés a Firestore **`portfolio_leads`** gyűjteményébe kerül, és egy **EmailJS** értesítés is kimegy. Innen a **StruckWebMentor** admin automatikusan behúzza a megkereséseket — így a portfólión leadott igény kézi rögzítés nélkül megjelenik a projektkezelőben.

## Technológia

- **Vanilla HTML / CSS / JavaScript** — keretrendszer és build lépés nélkül.
- **Firebase Firestore** — a beérkező megkeresések tárolása.
- **EmailJS** — e-mail értesítés új megrendelésről.
- **Google Fonts:** Bricolage Grotesque (címsorok), Hanken Grotesk (szöveg), Space Mono (mono címkék).
- Statikus hosting (GitHub Pages).

## Fájlszerkezet

```
Portfolio/
├── index.html   # teljes egyoldalas felület + rendelési nézet
├── style.css    # papír/kékvázlat dizájnrendszer
└── script.js    # i18n, animációk, galéria, űrlap → Firebase + EmailJS
```

## Beüzemelés

1. **Firebase:** hozz létre egy projektet, kapcsold be a Cloud Firestore-t, és töltsd ki a `script.js`-ben a `firebaseConfig` objektumot. A `portfolio_leads` gyűjteménybe engedélyezd a létrehozást (create) a biztonsági szabályokban.
2. **EmailJS:** add meg a saját `serviceID`, `templateID` és publikus kulcs értékeidet az űrlap-küldő részben.
3. Töltsd fel statikus tárhelyre — nincs szükség szerveroldali kódra.

## Dizájn

Ez a repó adja a közös dizájnnyelvet a **StruckWebMentor** admin felülethez is (azonos paletta és tipográfia), hogy a nyilvános oldal és a belső eszköz egységes képet mutasson.
