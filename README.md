# Fotos y Video El Tigre - Plataforma Web Oficial

Plataforma digital para la distribución y venta de material fotográfico y cinematográfico de **Fotos y Video El Tigre**, especializado en las **Topaderas tradicionales de San Pedro Lagunillas**, los **Toros/Jaripeos rancheros** y los **Bailes populares**.

## Características Implementadas
1. **Identidad Oficial "Fotos y Video El Tigre"**:
   - Logotipo oficial dorado y negro con tigre y carrete cinematográfico.
   - Marca de agua dinámica de protección en todas las vistas previas.
2. **Reproductor de Video con Límite de 10 Segundos**:
   - Temporizador de 10 segundos con cronómetro en tiempo real.
   - Selector interactivo entre Topaderas de Harina, Jaripeo & Toros y Noche de Baile.
3. **Carrusel de las 10 Fotografías más Destacadas**:
   - Selector visual interactivo, ampliación de imágenes y control táctil/botones.
4. **Catálogo y Galería Filtrable**:
   - Filtrado por categorías: Topaderas, Toros y Bailes de San Pedro Lagunillas.
5. **Estructura de Precios Oficial**:
   - **Video**: $600 MXN en formato Digital HD | $700 MXN en Memoria USB de regalo.
   - **Fotografías**: $30 MXN Digital HD | $50 MXN Impresa en papel fotográfico 4x6.
6. **Sistema de Enlaces de Descarga de UN SOLO USO**:
   - Cada pedido genera un Token de seguridad único (`/descargar?token=...`).
   - Una vez confirmado el pago, al hacer clic en descargar, el enlace se consume y queda **inhabilitado/quemado permanentemente** para proteger los derechos de autor.
7. **Integración con WhatsApp**:
   - Enlace directo con mensaje preformateado y folio de pedido al número oficial: **311 847 0860** (`+52 311 847 0860`).

## Endpoints de la API
- `GET /api/catalog` - Retorna el catálogo completo con precios y categorías.
- `POST /api/orders/create` - Registra pedido, genera link de WhatsApp y token de 1 solo uso.
- `GET /api/tokens/check/:token` - Valida si el token existe, está activo o ya fue consumido.
- `POST /api/tokens/consume/:token` - Autoriza la descarga y quema el token para que no pueda reutilizarse.

## Contacto e Informes
- **WhatsApp**: 311 847 0860
- **Ubicación**: San Pedro Lagunillas, Nayarit
