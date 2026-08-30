import { siteConfig } from "@/lib/site-config";

// Lista plana de todas las URLs indexables del sitio. La usan tanto el
// sitemap.xml como la ruta de envío a IndexNow, para no mantener la lista
// de páginas en dos lugares distintos.
export function getAllUrls(): string[] {
  const urls = [siteConfig.url];

  for (const servicio of siteConfig.servicios) {
    urls.push(`${siteConfig.url}/servicios/${servicio.slug}`);
  }
  for (const route of siteConfig.routes) {
    urls.push(`${siteConfig.url}/rutas/${route.slug}`);
  }
  for (const retorno of siteConfig.retornos) {
    urls.push(`${siteConfig.url}/retornos/${retorno.slug}`);
  }
  for (const city of siteConfig.cities) {
    urls.push(`${siteConfig.url}/ciudades/${city.slug}`);
  }
  for (const state of siteConfig.states) {
    urls.push(`${siteConfig.url}/estados/${state.slug}`);
  }

  return urls;
}
