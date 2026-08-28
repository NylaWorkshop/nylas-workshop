#!/usr/bin/env bash
# Gestor de relatos del grimorio de Nyla's Workshop.
# Doble clic para abrirlo. No hace falta saber programar.
cd "$(dirname "$0")" || exit 1

STORIES_DIR="src/stories"
MEDIA_DIR="public/stories"

if [ -t 1 ]; then
  GOLD=$'\033[38;5;179m'
  CREAM=$'\033[38;5;223m'
  DIM=$'\033[2m'
  BOLD=$'\033[1m'
  RED=$'\033[38;5;174m'
  OFF=$'\033[0m'
else
  GOLD=''; CREAM=''; DIM=''; BOLD=''; RED=''; OFF=''
fi

if [ ! -d "$STORIES_DIR" ]; then
  printf '%sNo encuentro %s. ¿Está este archivo dentro de la carpeta del taller?%s\n' \
    "$RED" "$STORIES_DIR" "$OFF"
  read -r _ 2>/dev/null
  exit 1
fi

# ---------------------------------------------------------------- utilidades

say()  { printf '%s\n' "$*"; }
rule() { printf '%s────────────────────────────────────────────%s\n' "$DIM" "$OFF"; }

title_bar() {
  printf '\n%s%s  ✦  El grimorio de Nyla  ✦%s\n' "$BOLD" "$GOLD" "$OFF"
  rule
}

ask() { # ask <variable> <pregunta> [valor por defecto]
  local __var="$1" __q="$2" __def="${3-}" __ans=''
  if [ -n "$__def" ]; then
    printf '%s%s%s %s(%s)%s: ' "$CREAM" "$__q" "$OFF" "$DIM" "$__def" "$OFF"
  else
    printf '%s%s%s: ' "$CREAM" "$__q" "$OFF"
  fi
  IFS= read -r __ans
  [ -z "$__ans" ] && __ans="$__def"
  eval "$__var=\$__ans"
}

confirm() { # confirm <pregunta>  -> 0 si sí
  local __ans=''
  printf '%s%s%s %s[S/n]%s: ' "$CREAM" "$1" "$OFF" "$DIM" "$OFF"
  IFS= read -r __ans
  case "$__ans" in
    [nN]|[nN][oO]) return 1 ;;
    *) return 0 ;;
  esac
}

pause() {
  printf '\n%sPulsa Enter para volver al menú.%s' "$DIM" "$OFF"
  IFS= read -r _
}

# Convierte "El Café de las Tres" en "el-cafe-de-las-tres".
# Las tildes se mapean una a una: iconv //TRANSLIT en macOS las pasa a 'e,
# y el apóstrofo acababa convertido en guión.
slugify() {
  printf '%s' "$1" \
    | sed -e 's/á/a/g' -e 's/à/a/g' -e 's/â/a/g' -e 's/ä/a/g' \
          -e 's/é/e/g' -e 's/è/e/g' -e 's/ê/e/g' -e 's/ë/e/g' \
          -e 's/í/i/g' -e 's/ì/i/g' -e 's/î/i/g' -e 's/ï/i/g' \
          -e 's/ó/o/g' -e 's/ò/o/g' -e 's/ô/o/g' -e 's/ö/o/g' \
          -e 's/ú/u/g' -e 's/ù/u/g' -e 's/û/u/g' -e 's/ü/u/g' \
          -e 's/ñ/n/g' -e 's/ç/c/g' \
          -e 's/Á/a/g' -e 's/É/e/g' -e 's/Í/i/g' -e 's/Ó/o/g' \
          -e 's/Ú/u/g' -e 's/Ü/u/g' -e 's/Ñ/n/g' -e 's/Ç/c/g' \
    | tr '[:upper:]' '[:lower:]' \
    | sed -e 's/[^a-z0-9]\{1,\}/-/g' -e 's/^-//' -e 's/-$//'
}

# Siguiente número libre (01, 02…) dentro de una carpeta de imágenes.
next_index() {
  local dir="$1" max=0 f base num
  [ -d "$dir" ] || { printf '01'; return; }
  for f in "$dir"/*; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    num=${base%%.*}
    case "$num" in ''|*[!0-9]*) continue ;; esac
    num=$((10#$num))
    [ "$num" -gt "$max" ] && max=$num
  done
  printf '%02d' $((max + 1))
}

# Lee un valor del frontmatter de un .md
meta_of() { # meta_of <archivo> <clave>
  sed -n "/^---$/,/^---$/p" "$1" 2>/dev/null \
    | sed -n "s/^$2:[[:space:]]*//p" \
    | head -1 \
    | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//"
}

slugs() {
  local f base
  for f in "$STORIES_DIR"/*.es.md; do
    [ -e "$f" ] || continue
    base=$(basename "$f")
    case "$base" in _*) continue ;; esac
    printf '%s\n' "${base%.es.md}"
  done
}

# Añade un folio nuevo al final de un relato.
append_folio() { # append_folio <archivo> <markdown>
  if [ -s "$1" ] && [ "$(tail -c1 "$1" | wc -l)" -eq 0 ]; then
    printf '\n' >>"$1"
  fi
  printf '\n<!-- page -->\n\n%s\n' "$2" >>"$1"
}

# ------------------------------------------------------------------ acciones

listar() {
  title_bar
  local any=0 s f folios imgs
  for s in $(slugs); do
    any=1
    f="$STORIES_DIR/$s.es.md"
    folios=$(grep -c '<!-- *page *-->' "$f" 2>/dev/null)
    folios=$((folios + 1))
    imgs=0
    [ -d "$MEDIA_DIR/$s" ] && imgs=$(ls -1 "$MEDIA_DIR/$s" 2>/dev/null | wc -l | tr -d ' ')
    printf '  %s%s%s\n' "$BOLD$GOLD" "$(meta_of "$f" title)" "$OFF"
    printf '    %scarpeta: %s · %s folios · %s imágenes' "$DIM" "$s" "$folios" "$imgs"
    if [ -f "$STORIES_DIR/$s.en.md" ]; then
      printf ' · con inglés%s\n' "$OFF"
    else
      printf ' · %ssin inglés%s\n' "$RED" "$OFF"
    fi
  done
  [ "$any" -eq 0 ] && say "  (Todavía no hay ningún relato.)"
  pause
}

nueva() {
  title_bar
  say "${BOLD}Un relato nuevo${OFF}"
  say "${DIM}Deja en blanco y pulsa Enter para aceptar lo que va entre paréntesis.${OFF}"
  echo

  local titulo slug kicker blurb orden max f
  ask titulo "Título del relato"
  if [ -z "$titulo" ]; then
    say "${RED}Sin título no hay relato.${OFF}"; pause; return
  fi

  ask slug "Nombre de carpeta" "$(slugify "$titulo")"
  slug=$(slugify "$slug")
  if [ -z "$slug" ]; then
    say "${RED}Ese nombre no vale. Usa letras y números.${OFF}"; pause; return
  fi
  if [ -f "$STORIES_DIR/$slug.es.md" ]; then
    say "${RED}Ya existe un relato llamado '$slug'.${OFF}"; pause; return
  fi

  ask kicker "Epígrafe (sale encima del título)" "Relato del taller"
  ask blurb  "Una línea para el índice"

  max=0
  for f in "$STORIES_DIR"/*.es.md; do
    [ -e "$f" ] || continue
    case "$(basename "$f")" in _*) continue ;; esac
    local o; o=$(meta_of "$f" order)
    case "$o" in ''|*[!0-9]*) o=0 ;; esac
    [ "$o" -gt "$max" ] && max=$o
  done
  ask orden "Orden en el grimorio" "$((max + 1))"

  mkdir -p "$MEDIA_DIR/$slug"

  {
    printf -- '---\n'
    printf 'title: %s\n' "$titulo"
    printf 'kicker: %s\n' "$kicker"
    printf 'blurb: %s\n' "$blurb"
    printf 'cover: /stories/%s/portada.jpg\n' "$slug"
    printf 'order: %s\n' "$orden"
    printf -- '---\n\n'
    printf 'Primer folio. Escribe con calma.\n\n'
    printf 'Para pasar de página, deja una línea con <!-- page --> y sigue debajo.\n'
  } >"$STORIES_DIR/$slug.es.md"

  say ""
  say "  ${GOLD}✓${OFF} $STORIES_DIR/$slug.es.md"
  say "  ${GOLD}✓${OFF} $MEDIA_DIR/$slug/   ${DIM}(aquí van las imágenes)${OFF}"

  if confirm "¿Creo también la versión en inglés?"; then
    local t_en k_en b_en
    ask t_en "Title (inglés)" "$titulo"
    ask k_en "Kicker (inglés)" "A workshop tale"
    ask b_en "Blurb (inglés)" "$blurb"
    {
      printf -- '---\n'
      printf 'title: %s\n' "$t_en"
      printf 'kicker: %s\n' "$k_en"
      printf 'blurb: %s\n' "$b_en"
      printf 'cover: /stories/%s/portada.jpg\n' "$slug"
      printf 'order: %s\n' "$orden"
      printf -- '---\n\n'
      printf 'First folio. Write at your own pace.\n\n'
      printf 'To turn the page, leave a line with <!-- page --> and carry on below.\n'
    } >"$STORIES_DIR/$slug.en.md"
    say "  ${GOLD}✓${OFF} $STORIES_DIR/$slug.en.md"
  fi

  if confirm "¿Lo abro para escribir?"; then
    open "$STORIES_DIR/$slug.es.md" 2>/dev/null || true
  fi
  pause
}

elegir_relato() { # deja el slug en la variable ELEGIDO
  ELEGIDO=''
  local list i s n
  list=$(slugs)
  if [ -z "$list" ]; then
    say "${RED}Todavía no hay ningún relato. Crea uno primero.${OFF}"
    return 1
  fi
  say "${BOLD}¿Cuál?${OFF}"
  i=1
  for s in $list; do
    printf '  %s%s)%s %s %s(%s)%s\n' "$GOLD" "$i" "$OFF" \
      "$(meta_of "$STORIES_DIR/$s.es.md" title)" "$DIM" "$s" "$OFF"
    i=$((i + 1))
  done
  echo
  ask n "Número"
  case "$n" in ''|*[!0-9]*) say "${RED}Eso no es un número.${OFF}"; return 1 ;; esac
  i=1
  for s in $list; do
    if [ "$i" -eq "$n" ]; then ELEGIDO="$s"; return 0; fi
    i=$((i + 1))
  done
  say "${RED}No hay ninguna opción con ese número.${OFF}"
  return 1
}

imagenes() {
  title_bar
  elegir_relato || { pause; return; }
  local slug="$ELEGIDO"
  local dir="$MEDIA_DIR/$slug"
  mkdir -p "$dir"

  echo
  say "${BOLD}Imágenes para «$(meta_of "$STORIES_DIR/$slug.es.md" title)»${OFF}"
  say "${DIM}Arrastra aquí una imagen (o varias de golpe) y pulsa Enter."
  say "Cuando termines, pulsa Enter con la línea vacía.${OFF}"
  echo

  local nuevas_es='' nuevas_en='' linea rutas ruta ext num destino alt
  while :; do
    printf '%s📎 %s' "$CREAM" "$OFF"
    IFS= read -r linea
    [ -z "$linea" ] && break

    rutas=$(printf '%s' "$linea" | xargs -n1 2>/dev/null)
    [ -z "$rutas" ] && rutas="$linea"

    while IFS= read -r ruta; do
      [ -z "$ruta" ] && continue
      if [ ! -f "$ruta" ]; then
        say "  ${RED}✗${OFF} No encuentro: $ruta"
        continue
      fi
      ext=$(printf '%s' "${ruta##*.}" | tr '[:upper:]' '[:lower:]')
      case "$ext" in
        jpg|jpeg|png|webp|gif|avif) ;;
        *) say "  ${RED}✗${OFF} No parece una imagen: $(basename "$ruta")"; continue ;;
      esac

      num=$(next_index "$dir")
      destino="$dir/$num.$ext"
      if cp "$ruta" "$destino"; then
        say "  ${GOLD}✓${OFF} $(basename "$ruta") → /stories/$slug/$num.$ext"
        # stdin lo ocupa la lista de rutas, así que la pregunta va por la terminal.
        alt=''
        if [ -r /dev/tty ]; then
          printf '%sTexto alternativo (para quien no ve la imagen)%s: ' "$CREAM" "$OFF"
          IFS= read -r alt </dev/tty
        fi
        [ -z "$alt" ] && alt="Ilustración del relato"
        nuevas_es="$nuevas_es![$alt](/stories/$slug/$num.$ext)
"
        nuevas_en="$nuevas_en![$alt](/stories/$slug/$num.$ext)
"
      else
        say "  ${RED}✗${OFF} No he podido copiar $(basename "$ruta")"
      fi
    done <<EOF
$rutas
EOF
  done

  if [ -z "$nuevas_es" ]; then
    say "\n${DIM}No se ha copiado nada.${OFF}"
    pause
    return
  fi

  echo
  if confirm "¿Las añado como folios nuevos al final del relato?"; then
    printf '%s' "$nuevas_es" | while IFS= read -r linea; do
      [ -n "$linea" ] && append_folio "$STORIES_DIR/$slug.es.md" "$linea"
    done
    say "  ${GOLD}✓${OFF} Folios añadidos a $slug.es.md"
    if [ -f "$STORIES_DIR/$slug.en.md" ] && confirm "¿También a la versión en inglés?"; then
      printf '%s' "$nuevas_en" | while IFS= read -r linea; do
        [ -n "$linea" ] && append_folio "$STORIES_DIR/$slug.en.md" "$linea"
      done
      say "  ${GOLD}✓${OFF} Folios añadidos a $slug.en.md"
    fi
  else
    echo
    say "${DIM}Pega esto donde quieras dentro del relato:${OFF}"
    printf '%s' "$nuevas_es" | while IFS= read -r linea; do
      [ -n "$linea" ] && printf '  %s%s%s\n' "$GOLD" "$linea" "$OFF"
    done
  fi
  pause
}

abrir() {
  title_bar
  elegir_relato || { pause; return; }
  local slug="$ELEGIDO"
  open "$STORIES_DIR/$slug.es.md" 2>/dev/null || \
    say "${RED}No he podido abrirlo. Está en $STORIES_DIR/$slug.es.md${OFF}"
  if [ -f "$STORIES_DIR/$slug.en.md" ] && confirm "¿Abro también la versión en inglés?"; then
    open "$STORIES_DIR/$slug.en.md" 2>/dev/null || true
  fi
  if confirm "¿Abro la carpeta de sus imágenes?"; then
    mkdir -p "$MEDIA_DIR/$slug"
    open "$MEDIA_DIR/$slug" 2>/dev/null || true
  fi
  pause
}

ver_web() {
  # El sitio se sirve dentro de una subcarpeta (la misma que en GitHub Pages),
  # así que la dirección se saca de astro.config.mjs en vez de escribirla aquí.
  local base url
  base="$(node -e "import('./astro.config.mjs').then(m => console.log(m.default.base || '/'))" 2>/dev/null || true)"
  [ -z "$base" ] && base="/"
  case "$base" in */) ;; *) base="$base/" ;; esac
  url="http://localhost:4321${base}stories/"

  if lsof -iTCP:4321 -sTCP:LISTEN >/dev/null 2>&1; then
    open "$url" 2>/dev/null || true
    say "\n${GOLD}✓${OFF} Abriendo $url"
  else
    say "\n${DIM}El servidor no está en marcha. Lánzalo con start.command.${OFF}"
    if confirm "¿Lo arranco yo ahora?"; then
      open -a Terminal "$PWD/start.command" 2>/dev/null || ./start.command &
      say "${DIM}Dale unos segundos y vuelve a esta opción.${OFF}"
    fi
  fi
  pause
}

# --------------------------------------------------------------------- menú

while :; do
  clear 2>/dev/null
  title_bar
  say "  ${GOLD}1)${OFF} Escribir un relato nuevo"
  say "  ${GOLD}2)${OFF} Añadir imágenes a un relato"
  say "  ${GOLD}3)${OFF} Abrir un relato para editarlo"
  say "  ${GOLD}4)${OFF} Ver los relatos que hay"
  say "  ${GOLD}5)${OFF} Ver el grimorio en la web"
  say "  ${GOLD}0)${OFF} Salir"
  echo
  printf '%sElige%s: ' "$CREAM" "$OFF"
  IFS= read -r opcion
  case "$opcion" in
    1) nueva ;;
    2) imagenes ;;
    3) abrir ;;
    4) listar ;;
    5) ver_web ;;
    0|q|Q|'') clear 2>/dev/null; say "${GOLD}Hasta la próxima página.${OFF}"; exit 0 ;;
    *) : ;;
  esac
done
