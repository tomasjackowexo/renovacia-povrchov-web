import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { redirects, stareUrl } from '../src/data/redirects.ts';

let chyby = 0;
const chybajuce = [];

for (const url of stareUrl) {
  const cesta = join('dist', url.replace(/^\/|\/$/g, ''), 'index.html');
  const maStranku = existsSync(cesta) || (url === '/' && existsSync('dist/index.html'));
  const maRedirect = Boolean(redirects[url]);
  if (!maStranku && !maRedirect) { chybajuce.push(url); chyby++; }
}

// cieľ každého redirectu musí existovať
for (const [z, na] of Object.entries(redirects)) {
  const cesta = join('dist', String(na).replace(/^\/|\/$/g, ''), 'index.html');
  if (!existsSync(cesta)) { console.error(`REDIRECT DO PRÁZDNA: ${z} → ${na} (cieľ neexistuje)`); chyby++; }
}

console.log(`check-redirects: ${stareUrl.length} starých URL, ${Object.keys(redirects).length} redirectov`);
if (chybajuce.length) console.error(`KONČIA NA 404:\n  ${chybajuce.join('\n  ')}`);
if (chyby) { console.error(`\n${chyby} chýb.`); process.exit(1); }
console.log('check-redirects: OK, žiadna stará URL nekončí na 404');
