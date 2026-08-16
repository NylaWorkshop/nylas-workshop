import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, ui, type Lang, type UiKey } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return value === "es" || value === "en";
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.replace(/\/+$/, "").split("/");
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

export function stripLocale(pathname: string) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) {
    const rest = clean.slice(3);
    return rest.startsWith("/") ? rest : `/${rest}`;
  }
  return clean;
}
