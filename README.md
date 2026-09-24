# renovaciapovrchov.sk

Nový web namiesto WordPressu s Thrive Architectom. Astro, statický výstup,
jedna svetlá paleta, žiadny page builder.

## Spustenie

```
npm install
npm run dev        # http://localhost:4321
```

## Príkazy

| príkaz | čo robí |
|---|---|
| `npm run dev` | vývojový server |
| `npm run build` | zostaví do `dist/` |
| `npm run seo` | kontrola duplicitných meta tagov + redirectov (po builde) |
| `npm run contrast` | kontrola kontrastu farieb |
| `npm run overit` | build + všetky kontroly naraz |

## Ako je to postavené

Všetko, čo sa opakuje, je komponent. Footer aj formulár existujú **raz**
(`src/components/Footer.astro`, `src/components/LeadForm.astro`). Zmena
povinného poľa vo formulári = jedna úprava, nie dvadsať.

Obsah je oddelený od kódu v `src/data/`:

| súbor | čo obsahuje |
|---|---|
| `firma.ts` | údaje o firme, kontakty, sociálne siete, Google hodnotenie |
| `sluzby.ts` | všetky služby — z tohto poľa sa **generujú stránky služieb** |
| `cennik.ts` | cenník, sadzby pre kalkulačku, modelové prepočty |
| `porovnanie.ts` | tabuľka čistenie vs. nový náter |
| `faq.ts` | časté otázky (zobrazujú sa aj ako FAQPage schéma) |
| `realizacie.ts` | realizácie — **prázdne pole = sekcia sa nezobrazí** |
| `recenzie.ts` | recenzie — prázdne pole = sekcia sa nezobrazí |
| `posobnost.ts` | zoznam miest (len text a `areaServed`, negeneruje stránky) |
| `redirects.ts` | 301 zo starých WordPress URL |

### Pridanie novej služby
Jeden objekt do `src/data/sluzby.ts`. Stránka, položka v pätičke aj
v roletke formulára sa vytvoria samy.

## Mestské podstránky

**Zrušené zámerne.** Lokálne vyhľadávanie riešime platenou reklamou, nie
šablónovými stránkami s vymeneným názvom mesta. Všetkých 16 starých URL
(`/cistenie-fasady-nitra/` atď.) má 301 na `/cistenie-fasady/`.
Zoznam miest zostáva ako text v pätičke a ako `areaServed` v LocalBusiness
schéme — lokálny signál pre Google bez jedinej podstránky navyše.

## Dizajn

Jedna paleta v `src/styles/tokens.css`. **Žiadny tmavý režim** — pri
predchádzajúcom pokuse rozbil farby (piesková sa menila na hnedú, nadpisy
boli nečitateľné).

Pravidlo pre tlačidlá:
- svetlé pozadie → `.btn-primary` (modrá výplň, biely text)
- tmavé pozadie alebo fotka → `.btn-invert` (biela výplň, modrý text)

Na tmavom pozadí nikdy `.btn-primary` — splynie s podkladom. Presne to bola
chyba starého webu.

## Čo ešte treba doplniť

### Fotky — bez nich to nebude vyzerať dobre
Do `public/img/`:

| súbor | čo na ňom má byť |
|---|---|
| `hero.jpg` | technik pri práci na plošine alebo lane, na šírku, min. 1600×1000 |
| `ba-1.jpg` | pred/po celej fasády |
| `ba-2.jpg` | pred/po štítu alebo detailu |
| `praca-1.jpg` | človek pri práci, na šírku |

Kým tam nie sú, na stránke sa zobrazuje pieskový blok s popisom — nie
rozbitý obrázok.

### Údaje od Andreja
- [ ] originálne **SVG loga** (`public/img/logo.svg` je dočasný text)
- [ ] cenník **striech, dlažby a hrobov**
- [ ] sadzba za **dopravu** (€/km) a **minimálna objednávka**
- [ ] **otváracie hodiny**
- [ ] odkaz na **Google Business profil**
- [ ] je firma **platcom DPH**?
- [ ] **rok založenia**
- [ ] súhlas Lidl / Red Oak / autosalón s uvedením ako referencia
- [ ] 3–5 realizácií: mesto, m², počet dní, fotky pred a po

### 119 Google recenzií
Firma má na Google profile **119 hodnotení s priemerom 5,0**, ale na starom
webe visel widget s ôsmimi a najnovšia bola zo septembra 2023. Číslo už je
v `firma.ts` a ide do LocalBusiness schémy. Samotné texty recenzií treba
premigrovať do `recenzie.ts` alebo napojiť cez Google Places API.

### Formulár
Odosiela sa cez `PUBLIC_LEAD_ENDPOINT` (premenná v `.env`). Kým nie je
nastavená, formulár len presmeruje na `/dakujeme/`, aby sa dal odskúšať tok.
Po výbere hostingu (Vercel / Netlify) doplniť adaptér a API route.

### Meranie konverzií
`/dakujeme/` existuje práve preto, aby sa dala merať konverzia pre Google Ads
a GA4. Bez nej sa reklama nedá optimalizovať. Kód na vloženie je v komentári
priamo v `src/pages/dakujeme.astro`.

## Nasadenie

Web je napojený na Vercel. Každý `git push` do vetvy `master` spustí build
a nasadí výsledok.

  Framework preset:  Astro
  Build command:     npm run build
  Output directory:  dist

### vercel.json
Obsahuje 301 presmerovania zo starých WordPress URL a dočasnú hlavičku
`X-Robots-Tag: noindex`. Generuje sa zo `src/data/redirects.ts`:

    npm run vercel

Vercel číta `vercel.json` ešte pred buildom, takže sa nedá generovať počas
neho — po každej zmene redirectov treba skript spustiť ručne a commitnúť.

## Pred spustením naostro
0. **V `scripts/gen-vercel.mjs` prepnúť `NOINDEX` na `false`**, spustiť
   `npm run vercel` a commitnúť. Kým je `true`, celý web má hlavičku
   `noindex` a nedostane sa do Google vôbec.
1. `npm run overit` — musí prejsť bez chýb
2. Skontrolovať, že žiadna zo starých URL nekončí na 404
3. Po nasadení odoslať novú sitemapu v Google Search Console
4. Sledovať tie mestské URL — ak niektorá privádzala ľudí, uvidíš prepad
