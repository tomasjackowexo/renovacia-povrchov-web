// Generuje vercel.json zo src/data/redirects.ts.
// Vercel číta vercel.json PRED buildom, takže sa nedá generovať počas neho —
// súbor musí byť commitnutý. Po každej zmene redirectov spusti: npm run vercel
import { writeFileSync } from 'node:fs';
import { redirects } from '../src/data/redirects.ts';

const NOINDEX = true; // ⚠️ pred prechodom na renovaciapovrchov.sk prepni na false

const pravidla = [];
for (const [z, na] of Object.entries(redirects)) {
  const bez = z.replace(/\/$/, '');
  // obe varianty, nech sa trafí bez ohľadu na normalizáciu lomky
  pravidla.push({ source: z, destination: na, permanent: true });
  if (bez && bez !== z) pravidla.push({ source: bez, destination: na, permanent: true });
}

const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  trailingSlash: true,
  redirects: pravidla,
  ...(NOINDEX && {
    headers: [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ],
  }),
};

writeFileSync('vercel.json', JSON.stringify(config, null, 2) + '\n');
console.log(`vercel.json: ${pravidla.length} pravidiel 301` + (NOINDEX ? ', noindex ZAPNUTÝ' : ', noindex vypnutý'));
