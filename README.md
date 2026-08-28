# Nyla's Workshop

Web del taller de Nyla: juegos, código y café. Hecha en [Astro](https://astro.build) con el estilo del logo.

## Arrancar en local

```bash
cd nylas-workshop
npm install
npm run dev
```

Abre `http://localhost:4321/nylas-workshop/` (o doble clic en `start.command`,
que lo abre solo). El servidor local usa la misma subcarpeta que el sitio
publicado para que se vea igual aquí que en GitHub Pages.

## Scripts

- `npm run dev` — servidor de desarrollo
- `npm run build` — genera `dist/`
- `npm run preview` — previsualiza el build

## Publicar en GitHub Pages

Ya está montado. Solo hay que hacerlo una vez:

1. En GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Empuja a `main`.

A partir de ahí, cada push a `main` construye y publica el taller solo
(`.github/workflows/deploy.yml`). También se puede lanzar a mano desde la
pestaña **Actions → Deploy to GitHub Pages → Run workflow**.

El sitio queda en `https://nylaworkshop.github.io/nylas-workshop`.

### Cambiar de dirección

La dirección vive en dos constantes al principio de `astro.config.mjs`. Todo lo
demás (imágenes, enlaces, cambio de idioma) se calcula a partir de ahí, así que
no hay que tocar nada más.

- **Dominio propio** (por ejemplo `nylasworkshop.com`): pon `SITE` con el
  dominio y `BASE` a `'/'`. Además, crea `public/CNAME` con el dominio dentro y
  configúralo en **Settings → Pages → Custom domain**.
- **Página de usuario** (`nylaworkshop.github.io`, sin subcarpeta): renombra el
  repo a `nylaworkshop.github.io` y pon `BASE` a `'/'`.

### Por qué las imágenes pasan por `asset()`

Al vivir el sitio en una subcarpeta, una ruta como `/logo.png` apunta fuera del
taller y la imagen no carga. Por eso las rutas a `public/` se escriben así:

```astro
import { asset } from "../lib/paths";
<img src={asset("/logo.png")} />
```

Con dominio propio la función no toca nada, así que se puede usar siempre. En
los relatos en markdown no hace falta: las portadas y las imágenes ya pasan por
ahí solas.
