import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Dónde vive el taller publicado. Por defecto, la Page del repo:
// https://nylaworkshop.github.io/nylas-workshop
//
// Si algún día pasa a dominio propio o a la página de usuario
// (repo renombrado a nylaworkshop.github.io), basta con cambiar estas dos
// constantes: el resto del sitio ya calcula sus rutas a partir del `base`.
const SITE = process.env.SITE ?? 'https://nylaworkshop.github.io';
const BASE = process.env.BASE_PATH ?? '/nylas-workshop';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Obsidian reescribe workspace.json en bucle y dispara recargas infinitas.
        ignored: ['**/.obsidian/**'],
      },
    },
  },
});
