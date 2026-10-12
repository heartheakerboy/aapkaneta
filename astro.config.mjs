import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aapkaneta.org',
  output: 'static',
  integrations: [sitemap()],
});
