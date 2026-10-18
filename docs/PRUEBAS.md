# Estado de pruebas

Revisión realizada el 18/10/2026 sobre el sitio publicado en GitHub Pages.

## Comprobaciones de código y recursos

- 74 comprobaciones automáticas de estructura, recursos, enlaces internos, dimensiones y alternativas de imágenes, aislamiento de enlaces externos, número de WhatsApp y ausencia de entradas de datos clínicos: aprobadas en la revisión inicial de esta entrega.
- Sintaxis de los tres archivos JavaScript correcta; la modificación posterior de `app.js` también pasó `node --check`.
- Nueve SVG originales sin personas ni contenido activo externo.
- Sin formularios, llamadas a API, cookies propias, analítica ni almacenamiento en navegador en el sitio comercial.
- Rutas relativas compatibles con `/mundo-animal/`; CSS y JavaScript modificados llevan versión para renovar la caché.

## Pruebas en navegador sobre el despliegue

- Carga y presentación de la portada y de la galería; las imágenes de carga diferida se verificaron al navegar a su sección.
- Navegación por anclas y regreso al inicio.
- Filtros de alimentación, accesorios e higiene: una categoría visible por filtro; «Todo el petshop»: tres. Estados `aria-pressed` y anuncio accesible actualizados.
- Consejos desplegables: apertura y cierre nativos.
- Privacidad: apertura modal, foco dentro del diálogo, cierre con «Entendido», Escape y retorno del foco al botón inicial.
- Menú móvil: apertura con siete enlaces, cierre al navegar y cierre con Escape. Tras la corrección, Escape devuelve el foco al botón Menú incluso cuando se pulsa desde un enlace del menú.
- Diseños revisados en marcos de 390, 768 y 1440 px mediante `tests/responsive.html`. Anchos de contenido medidos con la barra de desplazamiento de escritorio: 375, 753 y 1425 px, respectivamente. En la versión corregida, `scrollWidth` y `clientWidth` coinciden en los tres tamaños.
- Se corrigió un desborde móvil inicial de cuatro píxeles, desplazando hacia dentro la etiqueta girada «Cada vida importa».
- No se observaron errores propios de la página entre los registros de consola capturados. Se excluyeron mensajes de la extensión del navegador, ajenos al sitio.
- Destinos de WhatsApp, Google Maps e Instagram revisados en los enlaces renderizados. WhatsApp usa `59892982008` y textos de consulta codificados.

## Límites de verificación

Las pruebas adaptables se hicieron en Chromium con marcos de distintos anchos; no sustituyen pruebas físicas en Android, iOS o Safari. Se intentó abrir WhatsApp, pero el navegador remoto bloqueó el salto al protocolo de la aplicación; no se verificó la apertura final en un teléfono ni se enviaron mensajes. Se comprobaron los destinos de Maps e Instagram sin afirmar resultados dentro de esas plataformas.

El sitio no recibe datos clínicos ni confirma turnos. Antes de cargar expedientes debe implementarse y revisarse la plataforma privada propuesta, fuera de GitHub Pages.
