// Mapa fotiek na miesta vo webe.
// Všetky sú v public/img/. Cesta v kóde je vždy '/img/<súbor>'.
//
// POZOR na zdroj: väčšina fotiek je stiahnutá zo starého webu v šírke 768 px.
// Sú použiteľné v kartách a menších blokoch, NIE na celú šírku obrazovky.
// Pri každej je uvedená reálna šírka — nepoužívaj malú tam, kde sa roztiahne.

export type Fotka = { src: string; alt: string; sirka: number };

// ── HERO ────────────────────────────────────────────────────────────────
// Jediná dostatočne veľká fotka na šírku, kde je vidieť človeka pri práci.
// Je to strecha, nie fasáda — kým Andrej nedodá širokú fotku z čistenia
// fasády, toto je najlepšie, čo máme.
export const hero: Fotka = {
  src: '/img/hero-strecha.jpg',
  alt: 'Technik čistí strešnú krytinu rodinného domu',
  sirka: 2560,
};

// ── HERO NA STRÁNKACH SLUŽIEB ───────────────────────────────────────────
// Kľúč = slug služby. Čo tu nie je, nemá fotku a hero zostane bez nej.
export const heroSluzby: Record<string, Fotka> = {
  'cistenie-fasady': { src: '/img/fasada-predpo.jpg', alt: 'Fasáda rodinného domu pred čistením a po čistení', sirka: 2048 },
  'cistenie-striech': { src: '/img/hero-strecha.jpg', alt: 'Technik čistí strešnú krytinu', sirka: 2560 },
  'cistenie-hrobov': { src: '/img/hrob-predpo.jpg', alt: 'Hrobové miesto pred čistením a po čistení', sirka: 2410 },
};

// ── REALIZÁCIE NA ÚVODNEJ STRÁNKE ───────────────────────────────────────
// Dve najsilnejšie, obe dosť veľké a obe so zreteľným rozdielom.
export const realizacieUvod: Fotka[] = [
  { src: '/img/fasada-predpo.jpg', alt: 'Fasáda rodinného domu pred čistením a po čistení', sirka: 2048 },
  { src: '/img/hrob-predpo.jpg', alt: 'Hrobové miesto pred čistením a po čistení', sirka: 2410 },
];

// ── GALÉRIA PODĽA SLUŽBY ────────────────────────────────────────────────
export const galeria: Record<string, Fotka[]> = {
  'cistenie-fasady': [
    { src: '/img/fasada-predpo.jpg', alt: 'Fasáda rodinného domu pred a po', sirka: 2048 },
    { src: '/img/fasada-predpo-garaz.jpg', alt: 'Fasáda domu s garážou pred a po', sirka: 768 },
    { src: '/img/fasada-predpo-stena.jpg', alt: 'Stena pred čistením a po čistení', sirka: 768 },
    { src: '/img/fasada-predpo-okna.jpg', alt: 'Fasáda okolo okien pred a po', sirka: 768 },
    { src: '/img/fasada-predpo-bytovka.jpg', alt: 'Fasáda bytového domu pred a po', sirka: 768 },
  ],
  'cistenie-striech': [
    { src: '/img/strecha-predpo.jpg', alt: 'Strecha počas čistenia — polovica vyčistená', sirka: 768 },
    { src: '/img/strecha-po.jpg', alt: 'Vyčistená strešná krytina rodinného domu', sirka: 2560 },
  ],
  'cistenie-dlazby': [
    { src: '/img/dlazba-predpo.jpg', alt: 'Zámková dlažba pred čistením a po čistení', sirka: 768 },
    { src: '/img/dlazba-predpo-2.jpg', alt: 'Hĺbkové čistenie zámkovej dlažby, pred a po', sirka: 768 },
    { src: '/img/dlazba-detail.jpg', alt: 'Detail čistenia zámkovej dlažby rotačnou hlavicou', sirka: 768 },
    { src: '/img/dlazba-schody.jpg', alt: 'Kamenné schody pred čistením', sirka: 2016 },
  ],
  'cistenie-hrobov': [
    { src: '/img/hrob-predpo.jpg', alt: 'Hrobové miesto pred čistením a po čistení', sirka: 2410 },
  ],
  'odstranenie-grafiti': [
    { src: '/img/graffiti-predpo.jpg', alt: 'Posprejovaná stena pred odstránením graffiti a po ňom', sirka: 512 },
  ],
};

// ── PRAVÝ PÁR PRED / PO ─────────────────────────────────────────────────
// Jediné dve dvojice, kde máme samostatnú fotku pred a samostatnú po.
// Vhodné na posuvné porovnanie, nie na hotový zlepenec.
export const paryPredPo = [
  {
    nazov: 'Fasáda rodinného domu',
    pred: { src: '/img/fasada-pred.jpg', alt: 'Fasáda rodinného domu pred čistením', sirka: 1920 },
    po: { src: '/img/fasada-po.jpg', alt: 'Tá istá fasáda po vyčistení', sirka: 1920 },
  },
  {
    nazov: 'Detail fasády',
    pred: { src: '/img/fasada-detail-pred.jpg', alt: 'Znečistená fasáda zblízka', sirka: 1200 },
    po: { src: '/img/fasada-detail-po.jpg', alt: 'Tá istá fasáda po vyčistení', sirka: 1200 },
  },
];

// ── PÁS S CTA ───────────────────────────────────────────────────────────
export const ctaPas: Fotka = {
  src: '/img/praca-dlazba.jpg',
  alt: 'Pracovník čistí dlažbu vysokotlakovým zariadením',
  sirka: 1512,
};

export const plosina: Fotka = {
  src: '/img/praca-plosina.jpg',
  alt: 'Čistenie fasády budovy z pracovnej plošiny',
  sirka: 1200,
};
