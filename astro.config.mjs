import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://shanemasoncpa.github.io',
  base: '/shanemason.com/',
  integrations: [tailwind()],
  output: 'static',
});

