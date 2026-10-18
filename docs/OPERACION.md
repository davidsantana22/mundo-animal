# Operación y entrega

El repositorio y el alojamiento deben pertenecer a la cuenta de GitHub del usuario. El destino confirmado en esta conversación es `davidsantana22/mundo-animal`. No se deben transferir archivos ni publicar en otra cuenta.

## Cambios habituales

- Actualizar WhatsApp en `assets/js/config.js` con solo dígitos y prefijo internacional. El número confirmado es `59892982008`.
- Modificar también el número visible del contacto en `index.html` si cambia.
- Editar horarios y dirección en `index.html`; actualizar también el enlace de búsqueda del mapa si cambia el local.
- Mantener servicios en `assets/js/content.js`; confirmar disponibilidad y alcance con el equipo antes de añadir prestaciones.
- Subir imágenes optimizadas a `assets/images` y usar rutas relativas. Nunca subir imágenes con personas en esta versión.
- Probar en móvil, abrir los enlaces, revisar la consola y confirmar que la página pública recibió el nuevo cambio.

## Publicar con GitHub Pages

El repositorio `davidsantana22/mundo-animal` ya está creado y cargado. Mantené `index.html`, `assets` y `.nojekyll` en la raíz, y la documentación en `docs`. No agregues una carpeta `site` envolviendo la web.

En Settings → Pages seleccionar publicación desde rama `main`, carpeta `/ (root)`. GitHub construye y publica automáticamente. La URL publicada y verificada es `https://davidsantana22.github.io/mundo-animal/`. Ver resultados en `ENTREGA.md` y `PRUEBAS.md`.

No es necesario contratar servidor, instalar dependencias ni comprar un dominio para esta etapa. Si el repositorio es público, todos sus archivos son visibles: incluir únicamente materiales aprobados para difusión pública. Si se añade un dominio, su titularidad y renovación deberán permanecer en la cuenta del usuario.

## Llaves y acceso

No se crearon contraseñas, claves de API ni cuentas de terceros. El control está en la propia sesión de GitHub del usuario. No enviar contraseñas por chat ni incluir tokens en el código. Mantener activada la autenticación de dos factores de la cuenta.

## Privacidad

La web no guarda formularios, cuentas ni información de mascotas, y no incluye seguimiento propio. WhatsApp, Instagram, Google Maps y GitHub aplican sus propias políticas. No se aceptan expedientes por esta web. La futura aplicación privada se diseña en `ARQUITECTURA-PRIVADA.md`.

## Actualizar recursos sin caché anterior

Al modificar CSS o `app.js`, actualizá su parámetro `v` en `index.html` y el parámetro de la vista previa en `tests/responsive.html`. Comprobá que el nuevo despliegue finalizó antes de revisar la página.
