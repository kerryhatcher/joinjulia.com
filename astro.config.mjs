import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.joinjulia.com',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  devToolbar: { enabled: false },
});
