import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { redirects } from './src/data/redirects.ts';

export default defineConfig({
  site: 'https://www.renovaciapovrchov.sk',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  redirects,
  build: { format: 'directory' },
  image: { formats: ['avif', 'webp'] },
});
