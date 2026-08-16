# Nyla's Workshop

Web del taller de Nyla: juegos, código y café. Hecha en [Astro](https://astro.build) con el estilo del logo.

## Arrancar en local

```bash
cd nylas-workshop
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — genera `dist/`
- `npm run preview` — previsualiza el build

## Publicar en GitHub Pages

1. Crea el repo y súbelo.
2. En `astro.config.mjs`, descomenta y rellena `site` y `base`.
3. En GitHub: **Settings → Pages → GitHub Actions**.
4. Genera el sitio con `npm run build` (la carpeta a publicar es `dist/`).
