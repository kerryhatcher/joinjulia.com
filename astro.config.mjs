import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.joinjulia.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !['/404', '/404/', '/404.html'].includes(new URL(page).pathname) })],
  devToolbar: { enabled: false },
});
