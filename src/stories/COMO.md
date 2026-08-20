# Cómo meter un relato en el grimorio

No hace falta tocar código. Solo archivos de texto e imágenes.

## 1. Crea el texto

Copia `_plantilla.es.md` y renuébralo así:

```
src/stories/mi-relato.es.md
src/stories/mi-relato.en.md   ← si hay versión en inglés
```

El nombre del archivo (`mi-relato`) es el identificador. Usa minúsculas, números y guiones.

## 2. Separa los folios

Cada vez que quieras pasar página, deja esto en una línea a solas:

```
<!-- page -->
```

## 3. Pon las imágenes

Guárdalas en:

```
public/stories/mi-relato/portada.jpg
public/stories/mi-relato/01.jpg
```

Y enlázalas en el markdown:

```
![La librería de noche](/stories/mi-relato/01.jpg)
```

Si un folio **solo** tiene una imagen, el grimorio la enseña a página completa.

En la cabecera del archivo puedes poner `cover:` con la imagen del índice.

## 4. Recarga

El servidor local recarga solo. Abre Historias y hojéalo.

Markdown que entiende el grimorio: párrafos, **negrita**, *cursiva*, títulos `# ## ###` e imágenes.
