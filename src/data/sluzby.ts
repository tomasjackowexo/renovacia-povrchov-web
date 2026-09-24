export type Sluzba = {
  slug: string;            // POZOR: slugy zodpovedajú starým URL, nemeniť
  nazov: string;
  nazovKratky: string;
  skupina: 'cistenie' | 'malovanie' | 'kamenarstvo';
  vNavigacii: boolean;
  perex: string;
  cenaOd: string | null;   // null = cena po obhliadke
  ikona: 'strecha' | 'fasada' | 'dlazba' | 'hrob' | 'graffiti' | 'stetec' | 'kamen';
  h1: string;
  metaTitle: string;
  metaDescription: string;
  obsah: { nadpis: string; text: string; variant?: 'cena' }[];
};

export const sluzby: Sluzba[] = [
  {
    slug: 'cistenie-fasady',
    nazov: 'Čistenie fasád',
    nazovKratky: 'Čistenie fasád',
    skupina: 'cistenie',
    vNavigacii: true,
    perex:
      'Nízkotlakový oplach horúcou vodou a profesionálna chémia. Riasy, plesne a tmavé stekance idú dole bez zásahu do omietky.',
    cenaOd: 'od 2,50 €/m²',
    ikona: 'fasada',
    h1: 'Čistenie fasád od 2,50 €/m²',
    metaTitle: 'Čistenie fasád od 2,50 €/m² | Renovácia Povrchov',
    metaDescription:
      'Vyčistíme fasádu bez maľovania a bez lešenia. Úspora približne 70 % oproti novému náteru. Skúšobná vzorka na mieste, impregnácia so zárukou 5 rokov.',
    obsah: [
      {
        nadpis: 'Dá sa fasáda vyčistiť, alebo ju treba premaľovať?',
        text: 'Ak je omietka celistvá a problémom sú riasy, plesne, prach alebo tmavé stekance, čistenie vráti fasáde pôvodný vzhľad za približne 30 % ceny nového náteru. Premaľovanie má zmysel až vtedy, keď je podklad popraskaný alebo farba odchádza.',
      },
      {
        nadpis: 'Ako čistenie prebieha',
        text: 'Najprv na malej ploche urobíme skúšobnú vzorku, aby ste videli výsledok pred objednávkou. Potom fasádu opláchneme nízkym tlakom horúcou vodou a chémiou, ktorá riasy a usadeniny uvoľní. Nízky tlak ostáva na povrchu omietky a neotvorí ju. Vysoký tlak, ktorého sa pri fasádach ľudia právom boja, nepoužívame. Na záver povrch opláchneme a necháme uschnúť.',
      },
      {
        nadpis: 'Impregnácia po čistení',
        text: 'Po vyschnutí nanesieme hydrofóbnu impregnáciu. Voda po fasáde stečie a riasy nemajú na vlhkom podklade na čom rásť, takže povrch zostane čistý dlhšie než po samotnom umytí. Záruka na impregnáciu je 5 rokov, za príplatok až 10. Impregnácia nie je náter: farbu omietky nemení, len zníži nasiakavosť.',
      },
      {
        nadpis: 'Čo z fasády reálne odstránime',
        text: 'Dole idú riasy, machy, lišajníky a plesne, ďalej smog, tmavé stekance pod parapetmi, pavučiny a zvyšky po lastovičkách. Čistenie neopraví praskliny, odlupujúcu sa omietku ani vyblednutú farbu. Ak je podklad poškodený, povieme vám to pri vzorke a čistenie neodporučíme.',
      },
      {
        nadpis: 'Aké typy fasád čistíme',
        // TODO overiť u klienta
        text: 'Čistíme zateplenú silikónovú a akrylátovú omietku, brizolit, štuk, kameň, tehlu a obklad. Postup volíme podľa nasiakavosti povrchu: na mäkký štuk ide nižší tlak a dlhšie pôsobenie chémie, na kameň a tehlu iný prostriedok. Ak si nie ste istí, z čoho fasáda je, stačí fotka zblízka — podľa štruktúry to spoznáme.',
      },
      {
        nadpis: 'Čo môže cenu zvýšiť',
        variant: 'cena',
        text: 'Základná sadzba platí pre bežne dostupnú fasádu s jedným priechodom. Vopred, nie až na mieste, vám povieme, ak cenu zdvihne niečo z tohto: ťažká dostupnosť bez plošiny, extrémne znečistenie, ktoré potrebuje druhý priechod, veľmi členitá fasáda, alebo dlhá dojazdová vzdialenosť. Rozdiel uvidíte v cenovej ponuke skôr, než sa dohodneme na termíne.',
      },
    ],
  },
  {
    slug: 'cistenie-striech',
    nazov: 'Čistenie striech',
    nazovKratky: 'Čistenie striech',
    skupina: 'cistenie',
    vNavigacii: true,
    perex:
      'Odstránenie machu, lišajníkov a smogu zo škridly, plechu aj eternitu. Impregnácia spomalí opätovné zarastanie.',
    cenaOd: null,
    ikona: 'strecha',
    h1: 'Čistenie striech',
    metaTitle: 'Čistenie striech od machu a lišajníkov | Renovácia Povrchov',
    metaDescription:
      'Vyčistíme strechu od machu, lišajníkov a smogu bez poškodenia krytiny. Následná impregnácia predĺži životnosť strechy a zlepší odtok vody.',
    obsah: [
      {
        nadpis: 'Prečo mach na streche vadí',
        text: 'Mach zadržiava vodu priamo na krytine a v zime ju rozpína mráz. Zanesené drážky a žľaby navyše zhoršujú odtok, takže voda hľadá cestu tam, kde nemá.',
      },
      {
        nadpis: 'Ako to prebieha',
        text: 'Strechu čistíme z lana alebo z plošiny, bez stavby lešenia. Po vyčistení odporúčame impregnáciu, ktorá zarastanie výrazne spomalí.',
      },
    ],
  },
  {
    slug: 'cistenie-dlazby',
    nazov: 'Čistenie zámkovej dlažby',
    nazovKratky: 'Čistenie dlažby',
    skupina: 'cistenie',
    vNavigacii: true,
    perex:
      'Zámková dlažba, terasy aj chodníky. Po vyčistení doplníme škárovací piesok a povrch zaimpregnujeme.',
    cenaOd: null,
    ikona: 'dlazba',
    h1: 'Čistenie zámkovej dlažby',
    metaTitle: 'Čistenie zámkovej dlažby a terás | Renovácia Povrchov',
    metaDescription:
      'Vyčistíme zámkovú dlažbu, terasy a chodníky od rias, machu a olejových škvŕn. Doplníme škárovací piesok a povrch zaimpregnujeme.',
    obsah: [
      {
        nadpis: 'Nie vždy treba dlažbu vymieňať',
        text: 'Väčšinu zámkovej dlažby, ktorá vyzerá dožito, stačí vyčistiť. Farba sa vráti, škáry doplníme pieskom a povrch dostane ochranu.',
      },
    ],
  },
  {
    slug: 'cistenie-hrobov',
    nazov: 'Čistenie a renovácia hrobov',
    nazovKratky: 'Čistenie hrobov',
    skupina: 'cistenie',
    vNavigacii: true,
    perex:
      'Šetrné čistenie náhrobných kameňov, zlátenie písma, betonárske práce. Predávame a osádzame aj nové pomníky.',
    cenaOd: null,
    ikona: 'hrob',
    h1: 'Čistenie a renovácia hrobov',
    metaTitle: 'Čistenie a renovácia hrobov a pomníkov | Renovácia Povrchov',
    metaDescription:
      'Šetrné čistenie náhrobných kameňov bez poškodenia povrchu, zlátenie písma a betonárske práce. Predaj a montáž nových pomníkov.',
    obsah: [
      {
        nadpis: 'Šetrne ku kameňu',
        text: 'Žula, mramor aj teraso znesú iný postup. Čistíme tak, aby zostala pôvodná štruktúra a leštenie — nie tlakom nahrubo.',
      },
    ],
  },
  {
    slug: 'odstranenie-grafiti',
    nazov: 'Odstraňovanie graffiti',
    nazovKratky: 'Graffiti',
    skupina: 'cistenie',
    vNavigacii: true,
    perex:
      'Rýchle odstránenie sprejov z fasád a múrov. Voliteľne aplikujeme antigraffiti náter, ktorý ďalšie čistenie zjednoduší.',
    cenaOd: null,
    ikona: 'graffiti',
    h1: 'Odstraňovanie graffiti',
    metaTitle: 'Odstraňovanie graffiti z fasád a múrov | Renovácia Povrchov',
    metaDescription:
      'Odstránime spreje a tagy z fasád, múrov aj dlažby bez poškodenia podkladu. Voliteľne aplikujeme antigraffiti ochranný náter.',
    obsah: [
      {
        nadpis: 'Čím skôr, tým lepšie',
        text: 'Čerstvý sprej ide dole ľahšie než ten, ktorý sa mesiace vpaľoval do omietky slnkom. A posprejovaná stena priťahuje ďalších.',
      },
    ],
  },
  {
    slug: 'malovanie-fasad',
    nazov: 'Maľovanie fasád',
    nazovKratky: 'Maľovanie fasád',
    skupina: 'malovanie',
    vNavigacii: true,
    perex: 'Keď už čistenie nestačí. Vrátane prípravy podkladu a opravy prasklín.',
    cenaOd: 'od 6,00 €/m²',
    ikona: 'stetec',
    h1: 'Maľovanie fasád',
    metaTitle: 'Maľovanie fasád od 6,00 €/m² | Renovácia Povrchov',
    metaDescription:
      'Náter fasády vrátane prípravy podkladu a opravy prasklín. Cena práce od 6,00 €/m² bez materiálu. Poradíme, či stačí čistenie.',
    obsah: [
      {
        nadpis: 'Najprv poradíme, potom maľujeme',
        text: 'Robíme oboje, takže nemáme dôvod tlačiť vás do drahšieho riešenia. Ak fasáde stačí čistenie, povieme vám to.',
      },
    ],
  },
  {
    slug: 'malovanie-striech',
    nazov: 'Maľovanie striech',
    nazovKratky: 'Maľovanie striech',
    skupina: 'malovanie',
    vNavigacii: false,
    perex: 'Náter plechovej aj škridlovej strechy po dôkladnom vyčistení podkladu.',
    cenaOd: null,
    ikona: 'stetec',
    h1: 'Maľovanie striech',
    metaTitle: 'Maľovanie a náter striech | Renovácia Povrchov',
    metaDescription:
      'Náter plechovej aj škridlovej strechy vrátane vyčistenia podkladu a neutralizácie hrdze. Poradíme s výberom náteru.',
    obsah: [
      {
        nadpis: 'Bez čistého podkladu to nedrží',
        text: 'Náter nanesený na mach a usadeniny sa odlúpne v priebehu jednej sezóny. Preto strechu najprv dôkladne vyčistíme.',
      },
    ],
  },
  {
    slug: 'malovanie-interieru',
    nazov: 'Maľovanie interiéru',
    nazovKratky: 'Maľovanie interiéru',
    skupina: 'malovanie',
    vNavigacii: false,
    perex: 'Byty, domy aj prevádzky. Vrátane zakrytia a upratania po sebe.',
    cenaOd: null,
    ikona: 'stetec',
    h1: 'Maľovanie interiéru',
    metaTitle: 'Maľovanie interiéru bytov a domov | Renovácia Povrchov',
    metaDescription:
      'Vymaľujeme byt, dom aj prevádzku. Zakryjeme nábytok, po sebe upraceme. Cena podľa plochy a stavu podkladu.',
    obsah: [
      { nadpis: 'Po sebe upraceme', text: 'Zakrytie, maľovanie aj upratanie je súčasťou ceny.' },
    ],
  },
  {
    slug: 'kamenarske-prace',
    nazov: 'Kamenárske práce',
    nazovKratky: 'Kamenárske práce',
    skupina: 'kamenarstvo',
    vNavigacii: false,
    perex: 'Predaj a montáž pomníkov, zlátenie písma, betonárske práce na cintoríne.',
    cenaOd: null,
    ikona: 'kamen',
    h1: 'Kamenárske práce',
    metaTitle: 'Kamenárske práce, pomníky a zlátenie písma | Renovácia Povrchov',
    metaDescription:
      'Predaj a montáž pomníkov, zlátenie písma, betonárske práce na cintoríne. Kompletná renovácia hrobového miesta.',
    obsah: [
      { nadpis: 'Celé hrobové miesto', text: 'Od základov cez pomník až po zlátenie písma.' },
    ],
  },
  {
    slug: 'jednohroby',
    nazov: 'Jednohroby',
    nazovKratky: 'Jednohroby',
    skupina: 'kamenarstvo',
    vNavigacii: false,
    perex: 'Ponuka jednohrobov vrátane osadenia a písma.',
    cenaOd: null,
    ikona: 'kamen',
    h1: 'Jednohroby',
    metaTitle: 'Jednohroby — predaj a montáž | Renovácia Povrchov',
    metaDescription:
      'Jednohroby vrátane osadenia, písma a betonárskych prác. Poradíme s výberom kameňa aj tvaru.',
    obsah: [{ nadpis: 'Vrátane osadenia', text: 'Cena zahŕňa dopravu, osadenie aj písmo.' }],
  },
  {
    slug: 'dvojhroby',
    nazov: 'Dvojhroby',
    nazovKratky: 'Dvojhroby',
    skupina: 'kamenarstvo',
    vNavigacii: false,
    perex: 'Ponuka dvojhrobov vrátane osadenia a písma.',
    cenaOd: null,
    ikona: 'kamen',
    h1: 'Dvojhroby',
    metaTitle: 'Dvojhroby — predaj a montáž | Renovácia Povrchov',
    metaDescription:
      'Dvojhroby vrátane osadenia, písma a betonárskych prác. Poradíme s výberom kameňa aj tvaru.',
    obsah: [{ nadpis: 'Vrátane osadenia', text: 'Cena zahŕňa dopravu, osadenie aj písmo.' }],
  },
  {
    slug: 'pomniky',
    nazov: 'Pomníky',
    nazovKratky: 'Pomníky',
    skupina: 'kamenarstvo',
    vNavigacii: false,
    perex: 'Výber pomníkov, doplnkov a príslušenstva.',
    cenaOd: null,
    ikona: 'kamen',
    h1: 'Pomníky',
    metaTitle: 'Pomníky — predaj, montáž a renovácia | Renovácia Povrchov',
    metaDescription:
      'Predaj a montáž pomníkov, renovácia starších hrobov, zlátenie písma. Poradíme s výberom materiálu.',
    obsah: [{ nadpis: 'Nový aj renovovaný', text: 'Starší pomník sa často oplatí renovovať.' }],
  },
];

export const sluzbyVNavigacii = sluzby.filter((s) => s.vNavigacii);
export const najdiSluzbu = (slug: string) => sluzby.find((s) => s.slug === slug);
