export type Recenzia = {
  meno: string;
  text: string;
  hviezdy: number;
  datum: string;
  sluzba: ('fasada' | 'strecha' | 'dlazba' | 'hroby')[];
};

// Prepísané VERBATIM z Google profilu vrátane preklepov a chýbajúcej diakritiky.
// Neupravovať — presne to ich odlišuje od vymyslených recenzií.
//
// Dátum je vždy len rok. Google pri starších recenziách mesiac neuvádza,
// preto ho neuvádzame ani pri novších.
//
// Prázdne pole = sekcia recenzií sa nezobrazí.

export const recenzie: Recenzia[] = [
  {
    meno: 'Anna Pálová',
    text: 'Oslovili sme firmu za účelom čistenia strechy domu, fasády a zámkovej dlažby. Od prvého kontaktu všetko prebehlo rýchlo, od nacenenia po realizáciu. S výsledkom práce sme veľmi spokojný, náš 20-ročný dom vyzerá ako nový. Ďakujeme a určite odporúčame.',
    hviezdy: 5,
    datum: '2025',
    sluzba: ['strecha', 'fasada', 'dlazba'],
  },
  {
    meno: 'Róbert Jančovič',
    text: 'Čistenie strechy prebehlo podľa vopred dojednaných podmienok počas obhliadky. Výsledok po čistení je veľmi dobrý, určite odporúčam každému. Netreba to odkladať, o rok môže byť už nenávratne znečistená.',
    hviezdy: 5,
    datum: '2025',
    sluzba: ['strecha'],
  },
  {
    meno: 'Renata Krajčíková',
    text: 'Veľmi pekne vyčistili hrob. Už druhý krát. Sme veľmi spokojní s ich prácou. Hrob vydrží až 2 roky čistý. Niečím to napustili a krásne to vydrží.Určite odporúčam',
    hviezdy: 5,
    datum: '2026',
    sluzba: ['hroby'],
  },
  {
    meno: 'Marek Dubec',
    text: 'Strecha a chodníky okolo domu vyzerajú po čistení ako nové.',
    hviezdy: 5,
    datum: '2026',
    sluzba: ['strecha', 'dlazba'],
  },
  {
    meno: 'Petra Kisova',
    text: 'Dobrý deň prajem, rada by som sa podakovala za ochotu a vyčistenie nášho hrobového miesta po mojich starých rodičov. Hrob bol veľmi znečistený, čo by som sama nikdy nezvládla. Profesionálne čistenie ukázalo, že pomník máme opäť čistý. Ďakujem Silvia K.',
    hviezdy: 4,
    datum: '2024',
    sluzba: ['hroby'],
  },
  {
    meno: 'Komar Jan',
    text: 'S prácou sme veľmi spokojní. Prácu vykonal Roman,neskutočne precízne a kvalitne. Firmu odporúčame. Aj cena je prijateľná. Ďakujeme.',
    hviezdy: 5,
    datum: '2024',
    sluzba: ['fasada'],
  },
  {
    meno: 'jana mesarosova',
    text: 'Dohovor rýchly, pán milý ústretový, fasáda čistá, všetko ok, ďakujem',
    hviezdy: 5,
    datum: '2026',
    sluzba: ['fasada'],
  },
];

// ČAKÁ NA DOPLNENIE — na profile sú orezané cez "… Viac".
// Obe stoja za tie dve kliknutia, sú obsahovo silné:
//
// Dagmar Pullmannova, 5/5, pred rokom, fasáda rodinného domu:
//   "Vyjadrujem veľkú spokojnosť s realizáciou čistenia fasády na RD. Komunikácia
//    od objednania až po ukončenie prác bola veľmi férová, p. P. Romanko vykonával …"
//
// Robert Bencz, 5/5, pred 2 rokmi, fasáda + strecha:
//   "Excelentná práca a profesionálny prístup! Tím RenovaciaPovrchov mi čistil fasádu
//    a strechu a bol som veľmi spokojný s výsledkom. Pracovali rýchlo, boli veľmi …"
