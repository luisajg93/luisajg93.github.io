import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://luisajg93.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});