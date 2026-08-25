import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://elmico.gr',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/elmico' : '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
