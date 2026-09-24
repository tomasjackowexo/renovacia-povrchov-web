import { readFileSync } from 'node:fs';

const css = readFileSync('src/styles/tokens.css', 'utf8');
const t = Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2]]));

const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const kontrast = (a, b) => {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

const dvojice = [
  ['text', 'paper'], ['text', 'surface'], ['text', 'sand'],
  ['muted', 'paper'], ['muted', 'surface'], ['muted', 'sand'],
  ['navy', 'paper'], ['navy', 'surface'], ['navy', 'sand'],
  ['navy-600', 'paper'], ['navy-600', 'surface'], ['navy-600', 'sand'],
];
let chyby = 0;
for (const [f, b] of dvojice) {
  if (!t[f] || !t[b]) { console.error(`chýba token: ${f} alebo ${b}`); chyby++; continue; }
  const k = kontrast(t[f], t[b]);
  const ok = k >= 4.5;
  console.log(`${ok ? 'OK ' : 'ZLE'}  ${f.padEnd(10)} na ${b.padEnd(8)} = ${k.toFixed(2)}`);
  if (!ok) chyby++;
}
// biely text na tmavých plochách
for (const b of ['navy', 'navy-800', 'navy-900']) {
  const k = kontrast('#ffffff', t[b]);
  const ok = k >= 4.5;
  console.log(`${ok ? 'OK ' : 'ZLE'}  biela      na ${b.padEnd(8)} = ${k.toFixed(2)}`);
  if (!ok) chyby++;
}
if (chyby) { console.error(`\n${chyby} dvojíc pod 4.5:1`); process.exit(1); }
console.log('\ncheck-contrast: OK, všetko nad 4.5:1');
