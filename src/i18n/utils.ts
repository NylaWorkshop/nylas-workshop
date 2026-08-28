import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, ui, type Lang, type UiKey } from "./ui";
import { unbase } from "../lib/paths";

export function isLang(value: string | undefined): value is Lang {
  return value === "es" || value === "en";
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = unbase(url.pathname).replace(/\/+$/, "").split("/");
  return isLang(maybeLang) ? maybeLang : defaultLang;
}

export function useTranslations(lang: string | undefined) {
  const resolved: Lang = isLang(lang) ? lang : defaultLang;
  return function t(key: UiKey): string {
    return ui[resolved][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(lang: Lang, path: string) {
  return getRelativeLocaleUrl(lang, path);
}

// Devuelve la ruta de la página sin el idioma NI el prefijo del sitio, que es
// lo que espera localizePath() para volver a componer la URL.
export function stripLocale(pathname: string) {
  const clean = unbase(pathname).replace(/\/+$/, "") || "/";
  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) {
    const rest = clean.slice(3);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return clean;
}
