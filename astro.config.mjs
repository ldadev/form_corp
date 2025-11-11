// astro.config.js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ldadev.github.io', 
  base: '/form_corp/', 
  output: 'static', 
   vite: {
    build: {
      assetsDir: '.', // coloca los _astro directamente en dist/
    }
  }
});

