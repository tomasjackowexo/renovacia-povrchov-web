export type Polozka = {
  sluzba: string;
  rozsah: string;
  cena: string | null;   // null = treba doplniť
  zaruka: string;
};

export const cennik: Polozka[] = [
  { sluzba: 'Čistenie fasády', rozsah: 'prízemná budova', cena: 'od 2,50 €/m²', zaruka: '—' },
  { sluzba: 'Čistenie fasády', rozsah: 'viacpodlažná budova', cena: 'od 3,00 €/m²', zaruka: '—' },
  { sluzba: 'Impregnácia fasády', rozsah: 'po vyčistení', cena: 'od 1,00 €/m²', zaruka: '5 rokov, za príplatok 10' },
  { sluzba: 'Maľovanie fasády', rozsah: 'práca bez materiálu', cena: 'od 6,00 €/m²', zaruka: 'podľa materiálu' },
  { sluzba: 'Čistenie strechy', rozsah: 'škridla, plech, eternit', cena: null, zaruka: '—' },
  { sluzba: 'Čistenie zámkovej dlažby', rozsah: 'vrátane škárovania', cena: null, zaruka: '—' },
  { sluzba: 'Čistenie hrobu', rozsah: 'jednohrob / dvojhrob', cena: null, zaruka: '—' },
];

// Sadzby pre kalkulačku (€/m², dolná a horná hranica)
export const sadzby = [
  { id: 'fasada-prizemna', nazov: 'Čistenie fasády — prízemná budova', od: 2.5, do: 3.0 },
  { id: 'fasada-viacpodlazna', nazov: 'Čistenie fasády — viacpodlažná budova', od: 3.0, do: 3.6 },
  { id: 'impregnacia', nazov: 'Impregnácia fasády', od: 1.0, do: 1.4 },
  { id: 'malovanie', nazov: 'Maľovanie fasády (bez materiálu)', od: 6.0, do: 8.5 },
];

// Modelový prepočet — ľudia nevedia, koľko má ich fasáda m².
export const modelovePriklady = [
  { popis: 'Bežný prízemný rodinný dom', plocha: 120, cena: 'od 300 €' },
  { popis: 'Poschodový rodinný dom', plocha: 180, cena: 'od 540 €' },
  { popis: 'Dom s impregnáciou', plocha: 120, cena: 'od 420 €' },
];

// TODO doplniť od Andreja
export const doprava: string | null = null;      // sadzba €/km
export const minimalnaObjednavka: string | null = null;
