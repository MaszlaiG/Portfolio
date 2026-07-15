# Portfolio — Gábor Mászlai

**Language / Nyelv:** [English](#english) · [Magyar](#magyar)

---

## English

> Freelance web developer portfolio: **"from the foundations to the frontend."**

A single-page, bilingual (HU/EN) portfolio built around a construction concept: "I used to build with concrete, now I build websites." The design follows an **architect's-blueprint** aesthetic — warm paper background, engineering grid, hi-vis orange accent and steel-blue details. It includes an animated "this is how a website is built" scroll section, a project gallery with a lightbox, and a built-in **order form** that writes straight to Firebase and notifies via EmailJS.

### Key features

- **Bilingual (HU/EN)** UI with a language switch and a full i18n dictionary.
- **Scrollytelling section** — an animated SVG "construction" that builds from 0% to 100% as you scroll (foundation → structure → surface).
- **Sections:** About, What I build (services), My work (selected projects).
- **Project detail pages** with their own gallery and a **lightbox** (keyboard + arrow navigation, counter).
- **Multi-step order form** — client type (individual/company), project type, details and message; with validation and a success screen.
- **Responsive**, mobile-friendly, with `prefers-reduced-motion` support (reduced animation for motion-sensitive users).
- Subtle drafting-style details: 48px grid, dimension lines, mono micro-labels.

### How the order form works

A submitted order lands in the Firestore **`portfolio_leads`** collection, and an **EmailJS** notification is also sent. From there the **StruckWebMentor** admin pulls the leads in automatically — so a request left on the portfolio shows up in the project manager without manual entry.

### Tech stack

- **Vanilla HTML / CSS / JavaScript** — no framework, no build step.
- **Firebase Firestore** — storage for incoming leads.
- **EmailJS** — e-mail notification for new orders.
- **Google Fonts:** Bricolage Grotesque (headings), Hanken Grotesk (body), Space Mono (mono labels).
- Static hosting (GitHub Pages).

### Project structure

```
Portfolio/
├── index.html   # full single-page UI + order view
├── style.css    # paper/blueprint design system
└── script.js    # i18n, animations, gallery, form → Firebase + EmailJS
```

### Setup

1. **Firebase:** create a project, enable Cloud Firestore, and fill in the `firebaseConfig` object in `script.js`. Allow `create` on the `portfolio_leads` collection in your security rules.
2. **EmailJS:** set your own `serviceID`, `templateID` and public key in the form-submit code.
3. Deploy to a static host — no server-side code required.

### Design

This repo provides the shared design language for the **StruckWebMentor** admin as well (same palette and typography), so the public site and the internal tool look consistent.

---

## Magyar

> Szabadúszó webfejlesztő portfólió: **„az alapoktól a frontendig".**

Egyoldalas, kétnyelvű (HU/EN) portfólió építőipari koncepcióval: „régen betonból építettem, ma weboldalakból". A dizájn egy **építész-rajzlap / kékvázlat** esztétikát követ — meleg papír háttér, mérnöki rács, hi-vis narancs akcentus és acélkék részletek. Tartalmaz egy animált „így épül egy weboldal" scroll-szekciót, projektgalériát lightboxszal és egy beépített **rendelési űrlapot**, ami közvetlenül Firebase-be ír és EmailJS-en értesít.

### Főbb funkciók

- **Kétnyelvű (HU/EN)** felület nyelvváltóval, teljes i18n szótárral.
- **Scrollytelling szekció** — animált SVG „építkezés", ami görgetésre 0%-ról 100%-ra épül fel (alap → szerkezet → felület).
- **Szekciók:** Rólam, Mit építek (szolgáltatások), Munkáim (kiválasztott projektek).
- **Projekt-részletoldalak** saját galériával és **lightboxszal** (billentyűzet- és nyíl-navigáció, számláló).
- **Többlépéses rendelési űrlap** — ügyféltípus (magánszemély/vállalkozás), projekt típusa, részletek és üzenet; validációval és sikeres visszajelző képernyővel.
- **Reszponzív**, mobilbarát, `prefers-reduced-motion` támogatással (mozgásérzékeny felhasználóknak lecsökkentett animáció).
- Diszkrét, „drafting"-stílusú részletek: 48px-es rács, dimenzióvonalak, mono mikro-címkék.

### A rendelési űrlap működése

A leadott megrendelés a Firestore **`portfolio_leads`** gyűjteményébe kerül, és egy **EmailJS** értesítés is kimegy. Innen a **StruckWebMentor** admin automatikusan behúzza a megkereséseket — így a portfólión leadott igény kézi rögzítés nélkül megjelenik a projektkezelőben.

### Technológia

- **Vanilla HTML / CSS / JavaScript** — keretrendszer és build lépés nélkül.
- **Firebase Firestore** — a beérkező megkeresések tárolása.
- **EmailJS** — e-mail értesítés új megrendelésről.
- **Google Fonts:** Bricolage Grotesque (címsorok), Hanken Grotesk (szöveg), Space Mono (mono címkék).
- Statikus hosting (GitHub Pages).

### Fájlszerkezet

```
Portfolio/
├── index.html   # teljes egyoldalas felület + rendelési nézet
├── style.css    # papír/kékvázlat dizájnrendszer
└── script.js    # i18n, animációk, galéria, űrlap → Firebase + EmailJS
```

### Beüzemelés

1. **Firebase:** hozz létre egy projektet, kapcsold be a Cloud Firestore-t, és töltsd ki a `script.js`-ben a `firebaseConfig` objektumot. A `portfolio_leads` gyűjteménybe engedélyezd a létrehozást (create) a biztonsági szabályokban.
2. **EmailJS:** add meg a saját `serviceID`, `templateID` és publikus kulcs értékeidet az űrlap-küldő részben.
3. Töltsd fel statikus tárhelyre — nincs szükség szerveroldali kódra.

### Dizájn

Ez a repó adja a közös dizájnnyelvet a **StruckWebMentor** admin felülethez is (azonos paletta és tipográfia), hogy a nyilvános oldal és a belső eszköz egységes képet mutasson.
