import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const subory = [];
(function prejdi(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    statSync(p).isDirectory() ? prejdi(p) : p.endsWith('.html') && subory.push(p);
  }
})(DIST);

const titles = new Map();
const descs = new Map();
let chyby = 0;

for (const f of subory) {
  const html = readFileSync(f, 'utf8');
  // Astro generuje pre kazdy 301 staticky stub s meta refresh — nie je to stranka
  if (/http-equiv="refresh"/i.test(html)) continue;
  const t = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
  const d = html.match(/<meta name="description" content="([\s\S]*?)"/)?.[1]?.trim();
  if (!t) { console.error(`CHÝBA title: ${f}`); chyby++; }
  if (!d) { console.error(`CHÝBA description: ${f}`); chyby++; }
  if (t) (titles.get(t) ?? titles.set(t, []).get(t)).push(f);
  if (d) (descs.get(d) ?? descs.set(d, []).get(d)).push(f);
}

for (const [t, f] of titles) if (f.length > 1) { console.error(`DUPLICITNÝ title "${t}":\n  ${f.join('\n  ')}`); chyby++; }
for (const [d, f] of descs) if (f.length > 1) { console.error(`DUPLICITNÁ description "${d.slice(0, 60)}…":\n  ${f.join('\n  ')}`); chyby++; }

console.log(`check-meta: ${subory.length} stránok, ${titles.size} unikátnych title, ${descs.size} unikátnych description`);
if (chyby) { console.error(`\n${chyby} chýb.`); process.exit(1); }
console.log('check-meta: OK');
