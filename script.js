window.ADATOK_SZOVEG = `

# ---- SZEMÉLYES ADATOK ----
nev      = Mászlai Gábor
titulus  = Szabadúszó webfejlesztő @@ Freelance web developer
helyszin = Hajdúszoboszló, HU

# ---- KÖZÖSSÉGI MÉDIA ----
facebook  = https://www.facebook.com/profile.php?id=61587144531644
instagram = https://www.instagram.com/maszlaigabor/
tiktok    = https://www.tiktok.com/@gbor2430
linkedin  = https://linkedin.com/in/gábor-mászlai-9a036b3a3/

# ---- PROJEKTEK ----
# fooldal_projektek = hány projekt látszik a kezdőlapon (többi az Összes munkák nézetben)
fooldal_projektek = 4

# projekt = CÍM | ÉV | LEÍRÁS | TECHNOLÓGIÁK | LINK | KÉP | RÉSZLETEK
# Angol változat bármely mezőnél: @@ jellel elválasztva
# Bekezdések a RÉSZLETEK-ben: // jellel elválasztva

projekt = VagyonMentor | 2026 | Magán személy vagyonkezelő felület. @@ Personal asset management interface. | HTML · CSS · JS | https://maszlaig.github.io/vagyonmentor/ | kepek/vagyonmentor.png | A VagyonMentor egy egyszerű, áttekinthető felület, amivel egy magánszemély nyomon követheti a vagyonát: bankszámlák, megtakarítások és kiadások egy helyen. // A célom egy tiszta, gyorsan átlátható kezelőfelület volt, ami mobilon is jól használható. A hangsúlyt az olvashatóságra és a könnyű navigációra tettem. // Technológiák: tiszta HTML, CSS és JavaScript, külső keretrendszer nélkül. @@ VagyonMentor is a simple, clear interface that lets a private individual keep track of their assets: bank accounts, savings and expenses in one place. // My goal was a clean, easy-to-scan dashboard that also works well on mobile. I focused on readability and easy navigation. // Built with plain HTML, CSS and JavaScript, no external framework.
projekt = Betti barber | 2026 | Elszánt fodrásztanonc szárnyait bontogató weboldala | HTML · CSS · JS | https://maszlaig.github.io/betti_barber/ | kepek/betti_barber.png | A Betti barber egy pályakezdő fodrász bemutatkozó weboldala, ahol egy helyen láthatók a munkái, a szolgáltatásai és az elérhetőségei. // A célom egy meleg, hívogató hangulatú oldal volt, ami azonnal bizalmat épít és telefonon is kényelmesen használható. A hangsúlyt a tiszta megjelenésen és a könnyű időpontfoglaláson volt. // Technológiák: tiszta HTML, CSS és JavaScript, külső keretrendszer nélkül. @@ Betti barber is a portfolio website for an aspiring hairdresser, bringing her work, services and contact details together in one place. // My goal was a warm, inviting site that builds trust right away and works comfortably on mobile too. I focused on a clean look and easy appointment booking. // Built with plain HTML, CSS and JavaScript, no external framework.

`;

const FORD = {
  "nav.about":   { hu: "Rólam",           en: "About" },
  "nav.build":   { hu: "Mit építek",      en: "What I build" },
  "nav.work":    { hu: "Munkáim",         en: "Work" },
  "nav.cta":     { hu: "Dolgozzunk együtt", en: "Let's work together" },

  "hero.h1":     { hu: 'Régen <span class="strike">betonból</span> építettem. Ma <span class="swap">weboldalakból.</span>',
                   en: 'I used to build with <span class="strike">concrete</span>. Now I build <span class="swap">websites.</span>' },
  "hero.sub":    { hu: "Az építőiparban tanultam meg: minden, ami tartós, <b>jó alapon áll</b>. Ma ezt viszem a webre — gyors, mobilon is hibátlan oldalakat építek, amik hozzák az érdeklődőket. A munkáim magukért beszélnek.",
                   en: "Construction taught me one thing: everything that lasts <b>rests on a good foundation</b>. I bring that to the web — building fast, flawless sites that turn visitors into customers. My work speaks for itself." },
  "hero.btn1":   { hu: "Nézd meg a munkáimat", en: "See my work" },
  "hero.btn2":   { hu: "Vegyük fel a kapcsolatot", en: "Get in touch" },
  "hero.dimL":   { hu: "ÖTLET · 01",    en: "IDEA · 01" },
  "hero.dimR":   { hu: "KÉSZ OLDAL · 03", en: "LIVE SITE · 03" },
  "hero.scroll": { hu: "Görgess — épül a terv", en: "Scroll — the plan is building" },

  "build.eyebrow": { hu: "Így épül egy weboldal", en: "How a website is built" },
  "build.pct":     { hu: "Készültség",  en: "Progress" },
  "build.c1.no":   { hu: "01 — Alap",  en: "01 — Foundation" },
  "build.c1.h3":   { hu: "Minden a tervvel kezdődik", en: "Everything starts with the plan" },
  "build.c1.p":    { hu: "Mielőtt egy sor kód megszületne, felmérem az igényeket és megtervezem a szerkezetet — ahogy az építkezésen az alapot.",
                     en: "Before a single line of code, I survey the needs and plan the structure — the way you lay a foundation on site." },
  "build.c2.no":   { hu: "02 — Szerkezet", en: "02 — Structure" },
  "build.c2.h3":   { hu: "Tiszta, teherbíró váz", en: "A clean, load-bearing frame" },
  "build.c2.p":    { hu: "Szemantikus HTML és átgondolt CSS: olyan kód, ami évek múlva is karbantartható, és minden képernyőn megáll a lábán.",
                     en: "Semantic HTML and considered CSS: code that stays maintainable for years and stands firm on every screen." },
  "build.c3.no":   { hu: "03 — Felület", en: "03 — Surface" },
  "build.c3.h3":   { hu: "Ugyanaz a logika, új anyag", en: "Same logic, new material" },
  "build.c3.p":    { hu: "A vázra kerül a dizájn, az interakció és a tesztelés — a végén pedig egy weboldal áll, ami úgy működik, ahogy tervezve lett.",
                     en: "Design, interaction and testing go onto the frame — and in the end there's a website that works exactly as planned." },

  "about.eyebrow":  { hu: "Rólam",       en: "About" },
  "about.h2":       { hu: "Stabil alap a vállalkozásodnak", en: "A stable foundation for your business" },
  "about.lead":     { hu: "Az építőiparból hoztam a szemléletet: az alap dönt el mindent. Online a weboldalad ez az alap — ezen múlik, hogy az érdeklődőből ügyfél lesz-e.",
                      en: "I brought my mindset from construction: the foundation decides everything. Online, your website is that foundation — it decides whether a visitor becomes a customer." },
  "about.p2":       { hu: "Nálam nincs sablon és nincs mellébeszélés: meghallgatom, mit szeretnél elérni, és arra építek megoldást. Tiszta terv, pontos kivitelezés, betartott határidő — az építkezésen sem lehetett másképp.",
                      en: "No templates, no jargon: I listen to what you want to achieve and build the solution around it. A clean plan, precise execution, deadlines kept — construction taught me there's no other way." },
  "about.p3":       { hu: "A kész oldalt nem csak átadom: minden eszközön letesztelem, és utána sem hagylak magadra. Ha kérdésed van vagy frissítés kell, egy üzenetre vagyok.",
                      en: "I don't just hand over the finished site: I test it on every device, and I don't disappear afterwards. If you have a question or need an update, I'm one message away." },
  "about.r.loc":    { hu: "Helyszín",    en: "Location" },
  "about.r.focus":  { hu: "Fókusz",      en: "Focus" },
  "about.v.focus":  { hu: "Weboldalak, frontend", en: "Websites, frontend" },
  "about.r.coop":   { hu: "Együttműködés", en: "Collaboration" },
  "about.v.coop":   { hu: "Online, az egész országból", en: "Online, from anywhere" },
  "about.r.reply":  { hu: "Válaszidő",   en: "Response time" },
  "about.v.reply":  { hu: "24 órán belül", en: "Within 24 hours" },
  "about.r.status": { hu: "Státusz",     en: "Status" },
  "about.v.status": { hu: "Projektre nyitva", en: "Open to projects" },

  "svc.eyebrow": { hu: "Mit építek",    en: "What I build" },
  "svc.h2":      { hu: "Amiben segíteni tudok", en: "How I can help" },
  "svc1.h3":     { hu: "Reszponzív weboldalak", en: "Responsive websites" },
  "svc1.p":      { hu: "Bemutatkozó oldal, landing vagy portfólió, ami telefonon és gépen is hibátlan — és úgy mutatja be a vállalkozásod, hogy bizalmat építsen.",
                   en: "A presentation site, landing page or portfolio that's flawless on phone and desktop — and presents your business in a way that builds trust." },
  "svc1.t3":     { hu: "Reszponzív",   en: "Responsive" },
  "svc2.h3":     { hu: "Frontend fejlesztés", en: "Frontend development" },
  "svc2.p":      { hu: "Gyors, interaktív felületek tiszta kóddal — olyan oldal, amit az ügyfeleid szívesen használnak, és később könnyen bővíthető.",
                   en: "Fast, interactive interfaces with clean code — a site your customers enjoy using, and that's easy to extend later." },
  "svc2.t3":     { hu: "Animáció",     en: "Animation" },
  "svc3.h3":     { hu: "Tesztelés & minőség", en: "Testing & quality" },
  "svc3.p":      { hu: "Átadás előtt minden oldalt végigtesztelek böngészőkön és telefonokon. Nálad nem az ügyfeleid találják meg a hibákat.",
                   en: "Before handover I test every page across browsers and phones. Your customers won't be the ones finding the bugs." },
  "svc3.t1":     { hu: "Hibakeresés",  en: "Debugging" },
  "svc3.t3":     { hu: "Stabilitás",   en: "Stability" },

  "work.eyebrow": { hu: "Munkáim",     en: "Work" },
  "work.h2":      { hu: "Kiválasztott projektek", en: "Selected projects" },
  "work.more":    { hu: "Összes munka megtekintése", en: "View all work" },
  "allwork.h2":   { hu: "Összes munka", en: "All work" },
  "back.home":    { hu: "← Vissza a kezdőlapra", en: "← Back to home" },

  "contact.avail":   { hu: "Jelenleg projektre nyitva", en: "Currently open to projects" },
  "contact.eyebrow": { hu: "Kapcsolat", en: "Contact" },
  "contact.h2":      { hu: 'Van egy ötleted?<br>Építsük meg együtt — <a onclick="showView(\'order\')" style="cursor:pointer">írj nekem</a>.',
                        en: 'Got an idea?<br>Let\'s build it together — <a onclick="showView(\'order\')" style="cursor:pointer">contact me</a>.' },
  "contact.sub":     { hu: "Új weboldal, ráncfelvarrás vagy egy teljes projekt — írd meg pár mondatban, mire van szükséged, és 24 órán belül válaszolok egy reális tervvel. Az első konzultáció ingyenes, és semmire sem kötelez.",
                        en: "A new website, a refresh or a full project — tell me in a few sentences what you need, and I'll get back to you within 24 hours with a realistic plan. The first consultation is free, with no strings attached." },
  "contact.order":   { hu: "Rendelési űrlap kitöltése", en: "Fill in the order form" },

  "footer.role": { hu: "Webfejlesztő",  en: "Web developer" },
  "footer.tag":  { hu: "Az alapoktól a frontendig", en: "From the foundation to the frontend" },

  "detail.back":    { hu: "← Vissza a munkákhoz", en: "← Back to work" },
  "detail.live":    { hu: "Megnézem élőben",       en: "View live" },
  "detail.project": { hu: "Projekt",               en: "Project" },
  "detail.prev":    { hu: "Előző",                 en: "Previous" },
  "detail.next":    { hu: "Következő",             en: "Next" },
  "empty.none":     { hu: "Nincs megjeleníthető projekt.", en: "No projects to show." },
  "empty.back":     { hu: "Vissza a kezdőlapra",   en: "Back to home" },
  "count.unit":     { hu: "projekt",               en: "projects" },
  "count.one":      { hu: "projekt",               en: "project" },

  "order.nav-cta":        { hu: "Rendelés →",                            en: "Order →" },
  "order.badge":          { hu: "Ingyenes konzultáció · 24 órás válasz", en: "Free consultation · 24-hour reply" },
  "order.h1":             { hu: 'Indítsuk el <span class="swap">a projektedet.</span>', en: 'Let\'s kick off <span class="swap">your project.</span>' },
  "order.lead":           { hu: "Töltsd ki az alábbi űrlapot — 24 órán belül visszajelzek egy reális tervvel és árajánlattal. Az első konzultáció ingyenes és semmire sem kötelez.",
                            en: "Fill in the form below — I'll get back to you within 24 hours with a realistic plan and quote. The first consultation is free and non-binding." },
  "order.info1":          { hu: "Válasz 24 órán belül",    en: "Reply within 24 hours" },
  "order.info2":          { hu: "Ingyenes konzultáció",    en: "Free consultation" },
  "order.info3":          { hu: "Nincs kötelezettség",     en: "No obligation" },
  "order.success.h2":     { hu: "Köszönöm a megkeresést!", en: "Thanks for reaching out!" },
  "order.success.p":      { hu: "Az üzeneted megkaptam. 24 órán belül visszajelzek e-mailben egy reális tervvel és árajánlattal.",
                            en: "I've received your message. I'll reply within 24 hours with a realistic plan and quote." },
  "order.success.back":   { hu: "← Vissza a kezdőlapra",  en: "← Back to home" },
  "order.sec1":           { hu: "01 — Kapcsolat",          en: "01 — Contact" },
  "order.sec2":           { hu: "02 — Projekt típusa",     en: "02 — Project type" },
  "order.sec3":           { hu: "03 — Részletek",          en: "03 — Details" },
  "order.ct.personal":    { hu: "Magánszemély",            en: "Individual" },
  "order.ct.business":    { hu: "Vállalkozó",              en: "Business" },
  "order.label.companyName":  { hu: "Vállalkozás neve (nem kötelező)",   en: "Business name (optional)" },
  "order.label.companyType":  { hu: "Vállalkozás típusa (nem kötelező)", en: "Business type (optional)" },
  "order.label.taxNumber":    { hu: "Adószám (nem kötelező)",            en: "Tax number (optional)" },
  "order.hint.taxNumber":     { hu: "Magyar vagy külföldi adószám egyaránt megfelel.", en: "Hungarian or international VAT/tax number, any format." },
  "order.companyType.unknown":  { hu: "Nem adom meg",         en: "Prefer not to say" },
  "order.companyType.sole":     { hu: "Egyéni vállalkozó",    en: "Sole trader" },
  "order.companyType.bt":       { hu: "Bt.",                  en: "General partnership (Bt.)" },
  "order.companyType.kft":      { hu: "Kft.",                 en: "Limited company (Kft.)" },
  "order.companyType.zrt":      { hu: "Zrt.",                 en: "Private company (Zrt.)" },
  "order.companyType.nonprofit":{ hu: "Nonprofit / Egyesület",en: "Non-profit / Association" },
  "order.companyType.other":    { hu: "Egyéb",                en: "Other" },
  "order.label.lastname": { hu: "Vezetéknév *",            en: "Last name *" },
  "order.label.firstname":{ hu: "Keresztnév *",            en: "First name *" },
  "order.label.phone":    { hu: "Telefonszám (nem kötelező)", en: "Phone number (optional)" },
  "order.label.topic":    { hu: "Minek az oldala / mi a téma? *", en: "What's the site about / topic? *" },
  "order.label.budget":   { hu: "Tervezett keret (nem kötelező)", en: "Estimated budget (optional)" },
  "order.label.deadline": { hu: "Kívánt határidő (nem kötelező)", en: "Desired deadline (optional)" },
  "order.label.msg":      { hu: "Üzenet — mit szeretnél elérni? *", en: "Message — what's your goal? *" },
  "order.type.intro":     { hu: "Bemutatkozó oldal",       en: "Presentation site" },
  "order.type.landing":   { hu: "Landing oldal",           en: "Landing page" },
  "order.type.portfolio": { hu: "Portfólió",               en: "Portfolio" },
  "order.type.shop":      { hu: "Webshop",                 en: "Webshop" },
  "order.type.maint":     { hu: "Karbantartás",            en: "Maintenance" },
  "order.type.other":     { hu: "Egyéb",                   en: "Other" },
  "order.tooltip.intro":    { hu: "Cégedről vagy vállalkozásodról szól — szolgáltatások, elérhetőség, rövid bemutatkozás. Az ügyfelek itt tájékozódnak rólad.",
                              en: "All about you or your business — services, contact info, a short introduction. This is where potential clients learn who you are." },
  "order.tooltip.landing":  { hu: "Egyetlen célt szolgál: eladni, feliratkoztatni vagy érdeklődőt szerezni. Nincs menü, nincs elterelés — csak egy cselekvési felhívás.",
                              en: "Built for one goal: sell, capture leads, or get sign-ups. No menu, no distractions — just one clear call to action." },
  "order.tooltip.portfolio":{ hu: "Munkáidat, projektjeidet mutatja be. Ideális fotósoknak, tervezőknek, alkotóknak — ahol a vizuális anyag hozza az ügyfeleket.",
                              en: "Showcases your work and projects. Ideal for photographers, designers and creatives — where your visuals do the selling." },
  "order.tooltip.shop":     { hu: "Online bolt, ahol a látogatók közvetlenül vásárolhatnak. Termékek, kosár, fizetés — minden egy helyen.",
                              en: "An online store where visitors can buy directly. Products, cart, checkout — all in one place." },
  "order.tooltip.maint":    { hu: "Már van weboldalad, de megérett a megújításra? Tartalom frissítés, hibajavítás, sebesség- vagy mobiloptimalizálás.",
                              en: "Already have a site but it needs some love? Content updates, bug fixes, speed or mobile optimisation." },
  "order.tooltip.other":    { hu: "Valami egyedi projekted van? Írj néhány szót az ötletedről, és megbeszéljük a részleteket.",
                              en: "Got something unique in mind? Drop a few words about your idea and we'll work out the details together." },
  "order.budget.unknown": { hu: "Még nem tudom",           en: "Not sure yet" },
  "order.budget.1":       { hu: "50 000 Ft alatt",         en: "Under €130" },
  "order.budget.2":       { hu: "50 000 – 100 000 Ft",     en: "€130 – €260" },
  "order.budget.3":       { hu: "100 000 – 200 000 Ft",    en: "€260 – €520" },
  "order.budget.4":       { hu: "200 000 Ft felett",       en: "Over €520" },
  "order.submit":         { hu: "Elküldöm a megkeresést",  en: "Send my request" },
  "order.privacy":        { hu: "Az adataidat kizárólag a kapcsolatfelvételhez használom, harmadik félnek nem adom át.",
                            en: "Your data is used solely for this inquiry and will never be shared with third parties." },
  "order.err.lastname":   { hu: "Kérlek, add meg a vezetéknevedet!",           en: "Please enter your last name." },
  "order.err.firstname":  { hu: "Kérlek, add meg a keresztnevedet!",           en: "Please enter your first name." },
  "order.err.email":      { hu: "Kérlek, adj meg érvényes e-mail címet!",      en: "Please enter a valid email address." },
  "order.err.topic":      { hu: "Kérlek, írd le, miről szólna az oldal!",      en: "Please describe the site topic." },
  "order.err.msg":        { hu: "Kérlek, írj egy rövid üzenetet!",             en: "Please write a short message." },
  "order.err.sending":    { hu: "Küldés…",                                     en: "Sending…" },
  "order.err.network":    { hu: "⚠ Hálózati hiba — az automatikus küldés nem sikerült. Próbáld újra!",
                            en: "⚠ Network error — automatic sending failed. Please try again." },
  "order.ref.prefix":     { hu: "Referenciaszám: ",                            en: "Reference number: " },
};

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAL1NZZVZQWoAnMXFrl89DTYYjTJ1Boj-8",
  authDomain: "struckwebmentor.firebaseapp.com",
  projectId: "struckwebmentor",
  storageBucket: "struckwebmentor.firebasestorage.app",
  messagingSenderId: "807744258516",
  appId: "1:807744258516:web:a0dbe13de43dd32b209641",
  measurementId: "G-S4KV5FMN63"
};

const EMAILJS_SERVICE_ID  = "service_598rmjv";
const EMAILJS_TEMPLATE_ID = "template_ep1k324";
const EMAILJS_PUBLIC_KEY  = "eTf1OffvvcrBwZcAm";

let LANG = "hu";
let DATA = null;
let fbDb = null;
let fbReady = false;
let _lbEl = null;
const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function tr(key) {
  const e = FORD[key];
  if (!e) return null;
  return e[LANG] != null ? e[LANG] : e.hu;
}

function pick(text) {
  if (text == null) return "";
  const parts = String(text).split("@@");
  if (LANG === "en" && parts.length > 1) return parts[1].trim();
  return parts[0].trim();
}

function esc(s) {
  return (s || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function getLang() {
  try {
    const u = new URLSearchParams(location.search).get("lang");
    if (u === "hu" || u === "en") return u;
  } catch(e) {}
  try {
    const s = localStorage.getItem("portfolio_lang");
    if (s === "hu" || s === "en") return s;
  } catch(e) {}
  return "hu";
}

function setLang(l) {
  LANG = l;
  try { localStorage.setItem("portfolio_lang", l); } catch(e) {}
}

function parse(text) {
  const data = { munka: [], projekt: [] };
  text.split(/\r?\n/).forEach((line) => {
    const t = line.trim();
    if (!t || t.startsWith("#")) return;
    const i = t.indexOf("=");
    if (i === -1) return;
    const key = t.slice(0, i).trim();
    const val = t.slice(i + 1).trim();
    if (key === "munka")   data.munka.push(splitFields(val));
    else if (key === "projekt") data.projekt.push(splitFields(val));
    else data[key] = val;
  });
  return data;
}

function splitFields(val) { return val.split("|").map(s => s.trim()); }

function setFields(name, value) {
  if (value == null) return;
  document.querySelectorAll(`[data-field="${name}"]`).forEach(el => el.textContent = value);
}

function setLink(name, value, buildHref) {
  if (!value) return;
  document.querySelectorAll(`[data-link="${name}"]`).forEach(el => {
    el.setAttribute("href", buildHref(value));
    if (el.hasAttribute("data-text")) el.textContent = value;
  });
}

let _currentView = "home";

function showView(view, extra) {
  _currentView = view;
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const el = document.getElementById("view-" + view);
  if (el) el.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  document.querySelectorAll(".nav-links a[data-view]").forEach(a => {
    a.classList.toggle("active-nav", a.dataset.view === view);
  });

  const stateObj = { view, extra: extra ?? null };
  const hash = view === "home" ? location.pathname : "#" + view + (extra != null ? "/" + extra : "");
  try {
    if (!history.state) history.replaceState(stateObj, "", hash);
    else                history.pushState(stateObj, "", hash);
  } catch(e) {}

  if (view === "home")    renderHome();
  if (view === "allwork") renderAllWork();
  if (view === "project") renderProjectDetail(extra);
  if (view === "order")   renderOrderView();

  updatePageTitle(view, extra);
}

function updatePageTitle(view, extra) {
  const nev = (DATA && DATA.nev) ? DATA.nev : "Portfólió";
  const suffix = " — " + nev;
  const titles = {
    home:    nev + " — Webfejlesztő",
    allwork: (LANG === "en" ? "All work" : "Összes munka") + suffix,
    order:   (LANG === "en" ? "Order" : "Megrendelés") + suffix,
  };
  if (view === "project" && DATA && DATA.projekt) {
    const i = parseInt(extra ?? 0, 10);
    const p = DATA.projekt[i];
    if (p) { document.title = pick(p[0]) + suffix; return; }
  }
  document.title = titles[view] || titles.home;
}

function scrollToAnchor(id) {
  showView("home");
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, 60);
}

function toggleMobileNav() {
  const btn  = document.getElementById("nav-hamburger");
  const menu = document.getElementById("mobile-nav");
  if (!btn || !menu) return;
  const isOpen = menu.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  menu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const menu = document.getElementById("mobile-nav");
    if (menu && menu.classList.contains("open")) toggleMobileNav();
  }
});

window.addEventListener("popstate", e => {
  if (e.state && e.state.view) {
    _currentView = e.state.view;
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    const el = document.getElementById("view-" + e.state.view);
    if (el) el.classList.add("active");
    if (e.state.view === "home")    renderHome();
    if (e.state.view === "allwork") renderAllWork();
    if (e.state.view === "project") renderProjectDetail(e.state.extra);
    if (e.state.view === "order")   renderOrderView();
    updatePageTitle(e.state.view, e.state.extra);
    window.scrollTo({ top: 0 });
  }
});

function applyStatic() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = tr(el.getAttribute("data-i18n"));
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = tr(el.getAttribute("data-i18n-html"));
    if (v != null) el.innerHTML = v;
  });
  translateSelectOptions();
  translateTooltips();
}

function translateTooltips() {
  document.querySelectorAll("[data-tooltip-key]").forEach(el => {
    const v = tr(el.getAttribute("data-tooltip-key"));
    if (v != null) el.setAttribute("data-tooltip", v);
  });
}

function translateSelectOptions() {
  document.querySelectorAll("option[data-i18n]").forEach(opt => {
    const v = tr(opt.getAttribute("data-i18n"));
    if (v != null) opt.textContent = v;
  });
}

function setCommon(d) {
  setFields("nev", d.nev);
  setLink("linkedin",  d.linkedin,  v => v);
  setLink("facebook",  d.facebook,  v => v);
  setLink("instagram", d.instagram, v => v);
  setLink("tiktok",    d.tiktok,    v => v);

  const vals = { linkedin: d.linkedin, facebook: d.facebook, instagram: d.instagram, tiktok: d.tiktok };
  document.querySelectorAll(".links a[data-link]").forEach(a => {
    const k   = a.getAttribute("data-link");
    const url = vals[k] && vals[k].trim();
    if (!url) {
      a.remove();
    } else {
      a.setAttribute("href", url);
    }
  });
}

function render() {
  document.documentElement.lang = LANG;
  applyStatic();
  if (DATA) setCommon(DATA);
  updateLangUI();
  updatePageTitle(_currentView, _lastProjIdx);
  observeReveals();
}

function setupLangSwitch() {
  document.querySelectorAll(".lang-switch button[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const l = btn.getAttribute("data-lang");
      if (l === LANG) return;
      setLang(l);
      render();
      showView(_currentView, _lastProjIdx);
    });
  });
}

function updateLangUI() {
  document.querySelectorAll(".lang-switch button[data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === LANG);
  });
}

function projektKartya(p, idx) {
  const cim     = pick(p[0]), ev = pick(p[1]), tech = pick(p[3]);
  const kepMezo = (p[5] || "").trim();
  const kepek   = kepMezo ? kepMezo.split(";").map(s => s.trim()).filter(Boolean) : [];
  const borito  = kepek[0] || "";
  const hasKep  = borito !== "";
  const thumb   = "t" + ((idx % 4) + 1);
  const no      = String(idx + 1).padStart(2, "0");

  const reszletek = p[6] || "";
  const detailSrc = reszletek && reszletek.trim() ? reszletek : (p[2] || "");
  const teljes    = pick(detailSrc).split("//").map(s => s.trim()).filter(Boolean).join(" ");
  const rovid     = teljes.length > 280 ? teljes.slice(0, 277).replace(/\s\S*$/, "") + "\u2026" : teljes;

  const thumbInner = hasKep
    ? `<img src="${esc(borito)}" alt="${esc(cim)}" loading="lazy">`
    : `<span class="ph">${no}</span>`;
  const thumbClass = hasKep ? "thumb has-img" : "thumb " + thumb;

  return `
    <div class="proj reveal" role="button" tabindex="0"
         onclick="showView('project',${idx})"
         onkeydown="if(event.key==='Enter'||event.key===' ')showView('project',${idx})"
         style="cursor:pointer">
      <div class="${thumbClass}" data-no="${no}" data-fb="${thumb}">
        ${thumbInner}
        <span class="peek" aria-hidden="true">\u2192</span>
      </div>
      <div class="meta">
        <div class="top">
          <h3>${esc(cim)}</h3>
          <span class="yr">${esc(ev)}</span>
        </div>
        <p>${esc(rovid)}</p>
        <div class="stack">${esc(tech)}</div>
      </div>
    </div>`;
}

function kepHibakezeles(grid) {
  grid.querySelectorAll(".thumb.has-img img").forEach(img => {
    img.addEventListener("error", () => {
      const t = img.parentElement;
      t.classList.remove("has-img");
      t.classList.add(t.getAttribute("data-fb") || "t1");
      t.innerHTML = `<span class="ph">${t.getAttribute("data-no") || ""}</span>`;
    });
  });
}


function renderHome() {
  if (!DATA || !DATA.projekt.length) return;
  const grid = document.getElementById("work-grid");
  if (!grid) return;
  const n = parseInt(DATA.fooldal_projektek, 10);
  const limit = isNaN(n) || n < 1 ? 4 : n;
  grid.innerHTML = DATA.projekt.slice(0, limit).map((p, i) => projektKartya(p, i)).join("");
  kepHibakezeles(grid);

  const badge = document.getElementById("badge-text");
  if (badge && (DATA.titulus || DATA.helyszin)) {
    badge.textContent = [pick(DATA.titulus), pick(DATA.helyszin)].filter(Boolean).join(" · ");
  }
  setFields("helyszin", pick(DATA.helyszin));

  const more = document.getElementById("work-more");
  if (more) more.style.display = DATA.projekt.length > limit ? "" : "none";

  observeReveals();
  initTilt();
}

function renderAllWork() {
  const grid = document.getElementById("all-grid");
  if (!grid) return;
  if (!DATA || !DATA.projekt.length) {
    grid.innerHTML = `<p class="detail-empty">${tr("empty.none")} <button onclick="showView('home')">${tr("empty.back")}</button></p>`;
    return;
  }
  const count = document.getElementById("all-count");
  if (count) count.textContent = DATA.projekt.length + " " + tr(DATA.projekt.length === 1 ? "count.one" : "count.unit");
  grid.innerHTML = DATA.projekt.map((p, i) => projektKartya(p, i)).join("");
  kepHibakezeles(grid);
  observeReveals();
  initTilt();
}

let _lastProjIdx = 0;

function renderProjectDetail(idx) {
  if (idx != null) _lastProjIdx = idx;
  const wrap = document.getElementById("proj-detail");
  if (!wrap) return;
  if (!DATA || !DATA.projekt.length) {
    wrap.innerHTML = `<p class="detail-empty">${tr("empty.none")} <button onclick="showView('home')">${tr("empty.back")}</button></p>`;
    return;
  }

  let i = parseInt(_lastProjIdx, 10);
  if (isNaN(i) || i < 0 || i >= DATA.projekt.length) i = 0;

  const p         = DATA.projekt[i];
  const cim       = pick(p[0]), ev = pick(p[1]), leiras = pick(p[2]), tech = pick(p[3]);
  const link      = (p[4] || "").trim();
  const kepMezo   = (p[5] || "").trim();
  const reszletek = p[6] || "";
  const no        = String(i + 1).padStart(2, "0");
  const thumb     = "t" + ((i % 4) + 1);

  const kepek  = kepMezo ? kepMezo.split(";").map(s => s.trim()).filter(Boolean) : [];
  const borito = kepek[0] || "";
  const hasKep = borito !== "";

  const heroClass = hasKep ? "detail-hero has-img" : "detail-hero " + thumb;
  const heroInner = hasKep
    ? `<img src="${esc(borito)}" alt="${esc(cim)}">`
    : `<span class="ph">${no}</span>`;
  const galTitle  = LANG === "en" ? "Open gallery" : "Galória megnyitása";
  const heroAttrs = hasKep
    ? `onclick="openGallery(${i},0)" style="cursor:zoom-in" title="${galTitle}"`
    : "";

  const galeriaSav = kepek.length > 1
    ? `<div class="detail-gallery-strip">
        ${kepek.map((k, gi) => `<div class="detail-gallery-thumb${gi === 0 ? " active" : ""}"
             onclick="openGallery(${i},${gi})"
             style="background-image:url('${esc(k)}')" title="${LANG === "en" ? "View image" : "Kép megtekintése"} ${gi+1}"></div>`).join("")}
       </div>`
    : "";

  const detailSrc = reszletek && reszletek.trim() ? reszletek : leiras;
  const paras = pick(detailSrc).split("//").map(s => s.trim()).filter(Boolean)
    .map(s => `<p>${esc(s)}</p>`).join("");

  const liveBtn = link
    ? `<a class="btn btn-solid" href="${esc(link)}" target="_blank" rel="noopener">${tr("detail.live")} <span class="arr">\u2192</span></a>`
    : "";

  const prev = i > 0 ? i - 1 : null;
  const next = i < DATA.projekt.length - 1 ? i + 1 : null;
  const prevLink = prev !== null
    ? `<button onclick="showView('project',${prev})">\u2190 ${esc(pick(DATA.projekt[prev][0]) || tr("detail.prev"))}</button>`
    : "<span></span>";
  const nextLink = next !== null
    ? `<button onclick="showView('project',${next})">${esc(pick(DATA.projekt[next][0]) || tr("detail.next"))} \u2192</button>`
    : "<span></span>";

  wrap.innerHTML = `
    <button class="detail-back" onclick="showView('allwork')">${tr("detail.back")}</button>
    <div class="detail-grid">
      <div>
        <div class="${heroClass}" data-no="${no}" data-fb="${thumb}" ${heroAttrs}>
          ${heroInner}
        </div>
        ${galeriaSav}
      </div>
      <div class="detail-info">
        <div class="sheet-no">${tr("detail.project")} ${no}${ev ? " \u00b7 " + esc(ev) : ""}</div>
        <h1>${esc(cim)}</h1>
        ${leiras ? `<p class="detail-lead">${esc(leiras)}</p>` : ""}
        ${tech ? `<div class="stack">${esc(tech)}</div>` : ""}
        ${liveBtn ? `<div class="detail-actions">${liveBtn}</div>` : ""}
      </div>
    </div>
    <div class="detail-body">${paras}</div>
    <div class="proj-nav">${prevLink}${nextLink}</div>`;

  const heroImg = wrap.querySelector(".detail-hero.has-img img");
  if (heroImg) {
    heroImg.addEventListener("error", () => {
      const t = heroImg.parentElement;
      t.classList.remove("has-img");
      t.classList.add(t.getAttribute("data-fb") || "t1");
      t.removeAttribute("onclick");
      t.style.cursor = "";
      t.innerHTML = `<span class="ph">${t.getAttribute("data-no") || ""}</span>`;
      const strip = wrap.querySelector(".detail-gallery-strip");
      if (strip) strip.style.display = "none";
    });
  }
}

function openGallery(projIdx, startImg) {
  if (!DATA || !DATA.projekt[projIdx]) return;
  const kepMezo = (DATA.projekt[projIdx][5] || "").trim();
  const kepek   = kepMezo ? kepMezo.split(";").map(s => s.trim()).filter(Boolean) : [];
  if (!kepek.length) return;
  openLightboxGallery(kepek, startImg);
}


function renderOrderView() {
  applyStatic();
  translateSelectOptions();
  const sv = document.getElementById("success-view");
  const fv = document.getElementById("form-view");
  if (sv && sv.classList.contains("show")) {
    sv.classList.remove("show");
    if (fv) fv.classList.remove("hide");
    const btn = document.getElementById("submit-btn");
    if (btn) {
      btn.disabled = false;
      const sp = btn.querySelector("span");
      if (sp) sp.textContent = tr("order.submit") || "Elküldöm a megkeresést";
    }
  }
}

let _lbImages = [];
let _lbIdx    = 0;

function openLightboxGallery(kepek, startIdx) {
  _lbImages = kepek;
  _lbIdx    = startIdx || 0;
  _renderLightbox();
}

function openLightbox(src) {
  openLightboxGallery([src], 0);
}

function _renderLightbox() {
  if (_lbEl) _lbEl.remove();
  const src      = _lbImages[_lbIdx];
  const total    = _lbImages.length;
  const hasPrev  = _lbIdx > 0;
  const hasNext  = _lbIdx < total - 1;
  const counter  = total > 1 ? `<div id="lb-counter">${_lbIdx + 1} / ${total}</div>` : "";

  _lbEl = document.createElement("div");
  _lbEl.id = "lb-overlay";
  _lbEl.innerHTML = `
    <div id="lb-backdrop"></div>
    <div id="lb-box">
      <button id="lb-close" aria-label="Bezár">\u2715</button>
      ${counter}
      <img id="lb-img" src="${src}" alt="">
      ${hasPrev ? `<button id="lb-prev" class="lb-nav" aria-label="El\u0151z\u0151">\u2039</button>` : ""}
      ${hasNext ? `<button id="lb-next" class="lb-nav" aria-label="K\u00f6vetkez\u0151">\u203a</button>` : ""}
    </div>`;

  document.body.appendChild(_lbEl);
  document.body.style.overflow = "hidden";

  _lbEl.querySelector("#lb-backdrop").addEventListener("click", closeLightbox);
  _lbEl.querySelector("#lb-close").addEventListener("click", closeLightbox);
  if (hasPrev) _lbEl.querySelector("#lb-prev").addEventListener("click", e => { e.stopPropagation(); _lbStep(-1); });
  if (hasNext) _lbEl.querySelector("#lb-next").addEventListener("click", e => { e.stopPropagation(); _lbStep(1); });
  document.addEventListener("keydown", lbKey);
}

function _lbStep(dir) {
  _lbIdx = Math.max(0, Math.min(_lbImages.length - 1, _lbIdx + dir));
  _renderLightbox();
  document.addEventListener("keydown", lbKey); // újracsatoljuk
}

function closeLightbox() {
  if (_lbEl) { _lbEl.remove(); _lbEl = null; }
  document.body.style.overflow = "";
  document.removeEventListener("keydown", lbKey);
}

function lbKey(e) {
  if (e.key === "Escape")      closeLightbox();
  if (e.key === "ArrowLeft")   _lbStep(-1);
  if (e.key === "ArrowRight")  _lbStep(1);
}

let _io;
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not([data-seen])");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  if (!_io) {
    _io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); _io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }
  items.forEach(el => { el.setAttribute("data-seen", ""); _io.observe(el); });
}

function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

function initScrollEngine() {
  duplicateTape();
  if (REDUCED) return;

  const fill  = document.getElementById("scroll-fill");
  const nav   = document.getElementById("site-nav");
  const build = collectBuild();
  let lastY = window.scrollY, ticking = false;

  function update() {
    ticking = false;
    const y   = window.scrollY;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;

    if (fill && max > 0) fill.style.width = (clamp01(y / max) * 100).toFixed(2) + "%";

    if (nav) {
      if (y > 140 && y > lastY + 4) nav.classList.add("hidden");
      else if (y < lastY - 4 || y < 140) nav.classList.remove("hidden");
    }
    lastY = y;

    if (build && _currentView === "home") updateBuild(build);
  }

  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

function duplicateTape() {
  const row = document.getElementById("tape-row");
  if (row && !row.dataset.dup) { row.innerHTML += row.innerHTML; row.dataset.dup = "1"; }
}

function collectBuild() {
  const track = document.getElementById("build-track");
  if (!track) return null;
  const svg = document.getElementById("build-svg");
  const windows = { 1: [0.02, 0.30], 2: [0.30, 0.58], 3: [0.58, 0.90] };
  const phases  = { 1: [], 2: [], 3: [] };
  svg.querySelectorAll("[data-draw]").forEach(p => phases[p.dataset.phase].push(p));
  return {
    track, windows, phases,
    labels: svg.querySelectorAll(".lbl, .dotui"),
    haz:    svg.querySelector("#g-haz"),
    caps:   track.querySelectorAll(".build-cap"),
    pct:    document.getElementById("build-pct"),
  };
}

function updateBuild(b) {
  const r = b.track.getBoundingClientRect();
  const total = b.track.offsetHeight - window.innerHeight;
  if (total <= 0) return;
  const p = clamp01(-r.top / total);

  for (const ph of [1, 2, 3]) {
    const [a, z] = b.windows[ph];
    const local  = clamp01((p - a) / (z - a));
    const paths  = b.phases[ph];
    const n = paths.length;
    paths.forEach((path, i) => {
      const start = (i / n) * 0.7;
      const seg   = clamp01((local - start) / (1 - start));
      path.style.strokeDashoffset = String(1 - seg);
    });
  }
  b.labels.forEach(el => {
    const ph = parseInt(el.dataset.on, 10) || 1;
    const [, z] = b.windows[ph];
    el.classList.toggle("on", p >= z - 0.04);
  });

  const fade = clamp01((p - 0.62) / 0.22);
  b.haz.style.opacity = String(1 - fade * 0.8);

  const active = p < 0.32 ? 1 : p < 0.6 ? 2 : 3;
  b.caps.forEach(c => c.classList.toggle("on", parseInt(c.dataset.cap, 10) === active));

  if (b.pct) b.pct.textContent = Math.round(clamp01(p / 0.9) * 100) + "%";
}

function initTilt() {
  if (REDUCED) return;
  if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll(".proj:not([data-tilt])").forEach(card => {
    card.dataset.tilt = "1";
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `translateY(-5px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

function selectClientType(el) {
  document.querySelectorAll(".client-type-btn").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  const val = el.dataset.value;
  document.getElementById("r-client-type").value = val;
  const bf = document.getElementById("business-fields");
  if (bf) {
    if (val === "Vállalkozó") {
      bf.style.display = "block";
      bf.style.animation = "fadeSlideDown .25s ease";
    } else {
      bf.style.display = "none";
      const cn = document.getElementById("r-company-name");
      const ct = document.getElementById("r-company-type");
      const tn = document.getElementById("r-tax-number");
      if (cn) cn.value = "";
      if (ct) ct.value = "";
      if (tn) tn.value = "";
    }
  }
}

function selectType(el) {
  document.querySelectorAll(".type-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById("r-type").value = el.dataset.value;
}

function uid() {
  return "lead_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}

function showStatus(msg, type) {
  const el = document.getElementById("status-msg");
  if (!el) return;
  el.textContent = msg;
  el.className = "status-msg " + type;
}

async function submitOrder() {
  const lastname   = document.getElementById("r-lastname").value.trim();
  const firstname  = document.getElementById("r-firstname").value.trim();
  const email      = document.getElementById("r-email").value.trim();
  const phone      = document.getElementById("r-phone").value.trim();
  const clientType = document.getElementById("r-client-type").value;
  const type       = document.getElementById("r-type").value;
  const topic      = document.getElementById("r-topic").value.trim();
  const msg        = document.getElementById("r-msg").value.trim();
  const budget     = document.getElementById("r-budget").value;
  const deadline   = document.getElementById("r-deadline").value;
  const fullName   = lastname + " " + firstname;
  const companyName = (document.getElementById("r-company-name") || {value:""}).value.trim();
  const companyType = (document.getElementById("r-company-type") || {value:""}).value;
  const taxNumber   = (document.getElementById("r-tax-number")   || {value:""}).value.trim();

  if (!lastname)                    { showStatus(tr("order.err.lastname"),  "err"); document.getElementById("r-lastname").focus();  return; }
  if (!firstname)                   { showStatus(tr("order.err.firstname"), "err"); document.getElementById("r-firstname").focus(); return; }
  if (!email || !email.includes("@")){ showStatus(tr("order.err.email"),   "err"); document.getElementById("r-email").focus();     return; }
  if (!topic)                       { showStatus(tr("order.err.topic"),     "err"); document.getElementById("r-topic").focus();     return; }
  if (!msg)                         { showStatus(tr("order.err.msg"),       "err"); document.getElementById("r-msg").focus();       return; }

  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.querySelector("span").textContent = tr("order.err.sending") || "Küldés…";
  showStatus("", "");

  const now     = new Date().toISOString().slice(0, 10);
  const orderId = uid();
  const lead = {
    id: orderId, date: now, name: fullName, lastname, firstname,
    email, phone: phone || "", clientType, type, topic,
    budget: budget || "Nem megadott", deadline: deadline || "",
    message: msg, status: "uj", price: 0, source: "portfolio", createdAt: Date.now(),
    ...(clientType === "Vállalkozó" && {
      companyName: companyName || "",
      companyType: companyType || "",
      taxNumber:   taxNumber   || ""
    })
  };

  try {
    if (!fbReady || !fbDb) throw new Error("Firebase nem elérhető");
    await fbDb.collection("portfolio_leads").doc(orderId).set(lead);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        "template_kin80ip",
        {
          to_email:          email,
          nev:               fullName,
          ugyfel_tipus:      clientType,
          vallalkozas_neve:  companyName  || "—",
          vallalkozas_tipusa:companyType  || "—",
          adoszam:           taxNumber    || "—",
          telefon:           phone        || "Nem megadott",
          tipus:             type         || "Nem megadott",
          tema:              topic,
          keret:             budget       || "Nem megadott",
          hatarido:          deadline     || "Nem megadott",
          uzenet:            msg,
          referenciaID:      orderId.toUpperCase()
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch(mailErr) {
      console.warn("EmailJS hiba (értesítő):", mailErr);
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:      email,
          nev:           fullName,
          tipus:         type     || "Nem megadott",
          tema:          topic,
          keret:         budget   || "Nem megadott",
          hatarido:      deadline || "Nem megadott",
          uzenet:        msg,
          referenciaID:  orderId.toUpperCase()
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch(mailErr) {
      console.warn("EmailJS hiba (visszaigazoló):", mailErr);
    }

    document.getElementById("form-view").classList.add("hide");
    const sv = document.getElementById("success-view");
    sv.classList.add("show");

  } catch(e) {
    console.error("Firebase hiba:", e);
    const subject = encodeURIComponent("Weboldal megrendelés — " + fullName);
    const body    = encodeURIComponent(
      "Név: " + fullName + "\nÜgyfél típus: " + clientType +
      (clientType === "Vállalkozó" && companyName ? "\nVállalkozás neve: " + companyName : "") +
      (clientType === "Vállalkozó" && companyType ? "\nVállalkozás típusa: " + companyType : "") +
      (clientType === "Vállalkozó" && taxNumber ? "\nAdószám: " + taxNumber : "") +
      "\nE-mail: " + email +
      "\nTelefon: " + (phone || "Nem megadott") + "\nProjekt típus: " + type +
      "\nTéma: " + topic + "\nKeret: " + (budget || "Nem megadott") +
      "\nHatáridő: " + (deadline || "Nem megadott") + "\n\nÜzenet:\n" + msg
    );
    showStatus(tr("order.err.network") || "⚠ Hálózati hiba — próbáld újra!", "err");
    btn.disabled = false;
    btn.querySelector("span").textContent = tr("order.submit") || "Elküldöm a megkeresést";
    setTimeout(() => { window.location.href = "mailto:maszlaigabor@icloud.com?subject=" + subject + "&body=" + body; }, 1200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof window.ADATOK_SZOVEG === "string") DATA = parse(window.ADATOK_SZOVEG);
  } catch(err) {
    console.warn("Adatok betöltési hiba:", err);
  }

  LANG = getLang();
  setupLangSwitch();
  render();

  showView("home");

  initScrollEngine();

  try {
    if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && typeof firebase !== "undefined") {
      if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      fbDb = firebase.firestore();
      fbReady = true;
    }
  } catch(e) { console.warn("Firebase init hiba:", e); }

  try {
    if (typeof emailjs !== "undefined") {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
  } catch(e) { console.warn("EmailJS init hiba:", e); }
});
