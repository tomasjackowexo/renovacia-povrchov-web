export const firma = {
  znacka: 'Renovácia Povrchov',
  pravnySubjekt: 'Všetko pod jednou strechou s.r.o.',
  ulica: 'Buková 253/8',
  psc: '951 01',
  mesto: 'Nitrianske Hrnčiarovce',
  krajina: 'SK',
  ico: '53073801',
  dic: '2121249768',
  // TODO doplniť: je firma platcom DPH? Mení celú cenovú komunikáciu.
  platcaDph: null as boolean | null,
  telefon: '0919 142 221',
  telefonHref: 'tel:+421919142221',
  email: 'info@renovaciapovrchov.sk',
  web: 'https://www.renovaciapovrchov.sk',
  // TODO doplniť od Andreja
  rokZalozenia: null as number | null,
  otvaracieHodiny: null as string | null,
  googleBusinessUrl: null as string | null,
  socialne: {
    facebook: 'https://m.facebook.com/renovaciapovrchovsk-104635021356745/',
    instagram: 'https://www.instagram.com/renovaciapovrchov.sk/',
    youtube: null as string | null,
    tiktok: null as string | null,
  },
  // Google profil má 119 hodnotení s priemerom 5,0 (overené 23. 9. 2026).
  // Na starom webe visel widget s 8 recenziami, najnovšia zo septembra 2023.
  google: { hodnotenie: 5.0, pocetRecenzii: 119, overeneDna: '2026-09-23' },
  referencie: ['Lidl Nitra', 'Red Oak Nitra', 'Autosalón BMW'],
  // null = fotka ešte nie je v public/img/. Keď príde, prepíš len cestu.
  fotky: {
    hero: null as string | null,
    praca: null as string | null,
    baPred: null as string | null,
    baPo: null as string | null,
  },
};
