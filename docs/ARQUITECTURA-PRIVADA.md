# Evolución hacia una plataforma privada

## Punto de partida

Esta entrega es un sitio informativo estático. GitHub Pages aloja únicamente contenido público y no ejecuta un servidor privado. No se debe usar para expedientes, datos personales, acceso de propietarios, diagnósticos ni archivos de pacientes. Un formulario oculto, un PIN en JavaScript o cifrar con una clave incluida en la web no protege un historial.

## Arquitectura propuesta para una segunda etapa

Sitio público (GitHub Pages) → enlace a aplicación privada en un alojamiento con servidor → proveedor de identidad → API con autorización en servidor → base de datos y almacenamiento privados.

Separar la aplicación privada del repositorio público. Un posible conjunto tecnológico, a evaluar antes de contratar, es una aplicación web con API y PostgreSQL, autenticación administrada y almacenamiento de objetos privado. No se selecciona ni contrata proveedor en esta entrega.

## Identidad y autorización

- Registro por invitación y verificación del vínculo entre responsable y mascota; no permitir que un usuario se asigne una mascota ajena por su identificador.
- Roles: propietario, veterinario, administración y personal con permisos limitados. Cada lectura y modificación debe validarse en el servidor, además de las políticas de la base de datos.
- Propietarios: acceso solo a las mascotas vinculadas y a información expresamente compartida por el profesional. Eliminar o revocar vínculos debe retirar el acceso inmediatamente.
- Profesionales: acceso autorizado según su función; MFA para el personal, sesiones con cookies HttpOnly, Secure y SameSite, protección CSRF y límites de intentos.
- Separar notas clínicas internas de los resúmenes destinados al propietario. Registrar autor, fecha y versión de cada cambio; corregir mediante versiones, sin borrar la trazabilidad.

## Modelo de datos orientativo

`users`, `staff_roles`, `pets`, `pet_guardians`, `appointments`, `encounters`, `clinical_note_versions`, `care_plans`, `attachments`, `consents`, `audit_events`.

Utilizar identificadores no secuenciales, claves foráneas, controles de acceso por relación y políticas de denegación por defecto. Los identificadores opacos son una capa adicional, no sustituyen la autorización. No guardar datos de pacientes en URLs, archivos públicos, localStorage ni repositorios.

## Almacenamiento y operación

- TLS, cifrado en reposo, secretos en un gestor del servidor y rotación; nunca en el frontend.
- Archivos en contenedores privados con comprobación de tipo, tamaño, análisis de archivos y enlaces firmados de corta duración. No hacer público un contenedor para facilitar descargas.
- Registro de accesos y cambios, con minimización de datos sensibles en logs y alertas por accesos anómalos.
- Copias de seguridad cifradas, pruebas de restauración y objetivos de recuperación acordados con el negocio.
- Entornos separados y datos sintéticos para desarrollo. Prohibir copias de pacientes reales en pruebas y herramientas públicas.
- Política de retención, exportación, baja y respuesta a incidentes, acordada con asesoría apropiada antes de tratar datos reales.

## Etapas y condiciones de salida

1. Definir con el equipo responsables, datos estrictamente necesarios, permisos y consentimiento.
2. Prototipo con datos ficticios y autenticación real; probar aislamiento entre propietarios y permisos del personal.
3. Revisión de seguridad independiente, prueba de restauración y revisión de privacidad aplicable antes de la carga de datos reales.
4. Piloto limitado con soporte, auditoría y procedimiento de incidentes.

Las obligaciones legales y profesionales deberán verificarse con fuentes vigentes al implementar la segunda etapa. Este documento define una propuesta técnica; no certifica cumplimiento normativo ni implementa la plataforma privada.
