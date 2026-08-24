# Cómo meter un relato en el grimorio

## La forma fácil

Doble clic en **`historias.command`**, en la carpeta principal del taller.

Se abre un menú que hace el trabajo sucio: crea el archivo del relato con su
cabecera, prepara la carpeta de imágenes, copia las fotos que le arrastres y las
deja puestas como folios. No hace falta tocar código ni acordarse de rutas.

```
1) Escribir un relato nuevo
2) Añadir imágenes a un relato
3) Abrir un relato para editarlo
4) Ver los relatos que hay
5) Ver el grimorio en la web
```

Para las imágenes, arrástralas desde el Finder a la ventana del menú y pulsa
Enter. Puedes soltar varias de golpe. Te pide un texto alternativo (lo que lee
quien no puede ver la imagen) y luego te ofrece añadirlas al final del relato.

Después escribe el texto con calma en el archivo que te abre.

## Lo que conviene saber igual

**Los folios se separan** con esta línea a solas:

```
<!-- page -->
```

Ya no son páginas de un libro que se hojea: el relato se lee de un tirón, en
columna, y cada marca es un **respiro** entre bloques (sale una filigrana
dorada entre dos trozos de prosa seguidos).

**Si un folio solo lleva una imagen**, se muestra como lámina: más ancha que la
columna de texto y sin recortar. Si la imagen va acompañada de prosa, se queda
al ancho de la columna.

**El texto ya no se encoge ni se recorta**: escribe lo largo que quieras. Los
folios sirven para dar ritmo, no porque haya que hacer caber nada.

**Markdown que entiende el grimorio:** párrafos, **negrita**, *cursiva*,
títulos `# ## ###` e imágenes. Nada más; no hay listas ni tablas.

## La cabecera del relato

```
---
title: La puerta abierta
kicker: Relato del taller     ← sale encima del título
blurb: Una calle que ayer no estaba.   ← la línea del índice
cover: /stories/mi-relato/portada.jpg
order: 1                      ← orden dentro del grimorio
---
```

## A mano, si lo prefieres

Copia `_plantilla.es.md` a `src/stories/mi-relato.es.md` (minúsculas, números y
guiones). Añade `mi-relato.en.md` para la versión inglesa. Las imágenes van en
`public/stories/mi-relato/` y se enlazan con `/stories/mi-relato/01.jpg`.

El servidor local recarga solo: abre Historias, elige el tomo en el estante
y léelo.
