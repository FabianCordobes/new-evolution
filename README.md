# New Evolution

Repositorio independiente para el sitio de New Evolution.

> Proyecto en preparación. El desarrollo inicial se propone mediante pull request.

## Formulario de contacto

Destino de consultas: `newevolutionpublicidad@gmail.com`.

Configurar `RESEND_API_KEY` y `CONTACT_FROM_EMAIL` en el entorno del servidor (ver `.env.example`). El remitente debe pertenecer a un dominio verificado en Resend. Sin estas variables, el endpoint devuelve 503 y **no se envía ningún correo**. Nunca subir claves al repositorio.

Incluye validación cliente/servidor y campo honeypot. **Antes de publicar**, agregar rate limiting por IP en infraestructura y revisar política de privacidad, protección antispam y consentimiento; no se garantiza protección completa contra abuso.
