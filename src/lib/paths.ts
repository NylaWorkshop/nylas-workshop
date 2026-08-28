// GitHub Pages sirve el taller desde una subcarpeta (/nylas-workshop), así que
// una ruta absoluta como "/logo.png" apunta fuera del sitio. Todo lo que salga
// de public/ pasa por aquí para llevar delante el `base` que toque.
//
// Con base "/" (dominio propio o página de usuario) estas funciones no tocan
// nada: se pueden usar siempre sin pensar en dónde está publicado el sitio.

const BASE = import.meta.env.BASE_URL;

/** Prefijo del sitio, siempre con barra final: "/" o "/nylas-workshop/". */
export const base = BASE.endsWith("/") ? BASE : `${BASE}/`;

/** Ruta a un fichero de public/. Deja intactas las URL externas y los anclajes. */
export function asset(path: string): string {
  if (!path) return path;
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(path)) return path;
  return `${base}${path.replace(/^\/+/, "")}`;
}

/** Quita el prefijo del sitio de un pathname: "/nylas-workshop/en/x" → "/en/x". */
export function unbase(pathname: string): string {
  if (base === "/") return pathname;
  const prefix = base.slice(0, -1);
  if (pathname === prefix) return "/";
  if (pathname.startsWith(base)) return pathname.slice(prefix.length);
  return pathname;
}
