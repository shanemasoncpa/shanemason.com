import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://shanemason.com',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});

