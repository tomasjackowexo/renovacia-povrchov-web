// Staré URL z WordPressu. Všetko 301, nič nesmie skončiť na 404.
const mestskeUrl = [
  'nitra', 'zlate-moravce', 'topolcany', 'levice', 'nove-zamky', 'hlohovec',
  'galanta', 'piestany', 'trnava', 'senec', 'dunajska-streda', 'prievidza',
  'trencin', 'zilina', 'banska-bystrica', 'zvolen',
];

export const redirects = {
  // mestské podstránky sme zrušili — lokál riešime reklamou
  ...Object.fromEntries(
    mestskeUrl.map((m) => [`/cistenie-fasady-${m}/`, '/cistenie-fasady/'])
  ),
  '/cistenie-dlazby-2/': '/cistenie-dlazby/',
  '/stavebne-prace/': '/kamenarske-prace/',
  '/blog/': '/poradna/',
  '/cistenie-fasady-cena/': '/poradna/cistenie-fasady-cena/',
};

// Zoznam všetkých URL zo starej sitemapy — kontroluje check-redirects.mjs
export const stareUrl = [
  '/', '/malovanie-striech/', '/malovanie-interieru/', '/malovanie-fasad/',
  '/cistenie-striech/', '/cistenie-dlazby-2/', '/kontakt/', '/cistenie-fasady/',
  '/odstranenie-grafiti/', '/cistenie-hrobov/', '/jednohroby/', '/pomniky/',
  '/dvojhroby/', '/kamenarske-prace/', '/stavebne-prace/',
  ...mestskeUrl.map((m) => `/cistenie-fasady-${m}/`),
];
