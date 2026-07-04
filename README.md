# Transportes León — Sitio Web

Sitio oficial de Transportes León construido con Next.js 16 (App Router), optimizado para SEO y listo para desplegar en Vercel.

## 🚀 Desplegar en Vercel (recomendado)

1. Sube este proyecto a un repositorio de GitHub (puede ser privado).
2. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Clic en **"Add New" → "Project"** y selecciona este repositorio.
4. Vercel detecta Next.js automáticamente — no necesitas configurar nada. Clic en **"Deploy"**.
5. En 1-2 minutos tu sitio estará en una URL tipo `transportesleon.vercel.app`.

## 🌐 Conectar tu dominio transportesleon.com

1. En el panel de tu proyecto en Vercel, ve a **Settings → Domains**.
2. Escribe `transportesleon.com` y `www.transportesleon.com`, clic en **Add**.
3. Vercel te dará registros DNS (tipo A y CNAME) para agregar en GoDaddy, Namecheap o donde compraste el dominio.
4. Una vez propagado el DNS (puede tardar hasta 24 horas), tu dominio apuntará directo al sitio.

## ✅ Verificar en Google Search Console

La etiqueta de verificación de Google ya está integrada en el código (`app/layout.tsx`, campo `verification.google`). En cuanto el sitio esté en línea con tu dominio:

1. Entra a [search.google.com/search-console](https://search.google.com/search-console)
2. Agrega la propiedad `https://www.transportesleon.com`
3. Elige el método "Etiqueta HTML" — como ya está en el código, debería verificar al instante.
4. Envía el sitemap: `https://www.transportesleon.com/sitemap.xml`

## 🛠️ Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📝 Editar contenido del sitio

Todo el contenido del negocio (teléfono, rutas, unidades, zonas de cobertura, tipos de carga) vive en un solo archivo:

```
lib/site-config.ts
```

Edita ese archivo para actualizar textos, agregar rutas o unidades sin tocar el diseño.

### Imágenes

Las fotos están en `public/images/`. Para reemplazar una unidad, sustituye el archivo con el mismo nombre o actualiza la ruta en `lib/site-config.ts`.

## 📦 Estructura del proyecto

```
app/
  layout.tsx        Metadata global + JSON-LD (LocalBusiness/MovingCompany)
  page.tsx          Página principal
  sitemap.ts         Sitemap XML dinámico
  robots.ts          robots.txt dinámico
  manifest.ts          Web App Manifest (PWA/mobile)
  globals.css           Tema visual y colores de marca
components/
  header.tsx              Barra superior + navegación + CTAs
  hero.tsx                  Sección principal con H1
  stats-bar.tsx               Barra de estadísticas
  units-grid.tsx                 Grid de unidades de la flotilla
  gallery.tsx                       Galería de fotos
  coverage-areas.tsx                   Zonas de cobertura y rutas
  cargo-types.tsx                         Tipos de carga / servicios
  cta-footer.tsx                             CTA final + pie de página
lib/
  site-config.ts                                Toda la data del negocio
public/images/                                       Fotos de la flotilla
```

## 🔍 SEO técnico incluido

- **Metadata API de Next.js**: title, description, keywords, Open Graph, Twitter Cards
- **JSON-LD Schema.org**: tipo `MovingCompany` con dirección, geo-coordenadas, horario 24h y áreas de servicio — esto ayuda a aparecer en resultados enriquecidos de Google y Maps
- **Sitemap y robots.txt** generados dinámicamente
- **Imágenes optimizadas** automáticamente por `next/image` (WebP/AVIF, lazy loading, tamaños responsivos)
- **Fuentes self-hosted** (sin dependencia de Google Fonts CDN en runtime) para máxima velocidad
- **Verificación de Google Search Console** ya integrada

## 📞 Datos de contacto del negocio

- Teléfono: 55 6185 7646
- WhatsApp: wa.me/525561857646
- Instagram: @transportesleonmx
