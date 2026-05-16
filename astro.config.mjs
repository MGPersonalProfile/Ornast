// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkChapterCleanup } from './src/lib/remark-chapter-cleanup.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://ornast.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false, // tenemos nuestro propio reset/tipografía
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    smartypants: false, // no convertir las comillas — la prosa ya las trae bien
    remarkPlugins: [remarkChapterCleanup],
  },
  vite: {
    server: {
      fs: {
        // Permite a Astro leer archivos fuera de /src (los .md están en /Libros)
        allow: ['..'],
      },
    },
  },
});
