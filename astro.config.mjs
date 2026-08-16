import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Si publicas en GitHub Pages como repo (user.github.io/nylas-workshop),
// descomenta `site` y `base` y pon tu usuario:
// site: 'https://TU_USUARIO.github.io',
// base: '/nylas-workshop',
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
