import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Fecha de la última actualización de contenido (actualizar manualmente cuando
// se agregue o edite contenido de rutas/ciudades/estados). Usar una fecha fija
// evita que el sitemap reporte "recién modificado" en cada build sin motivo real.
const CONTENT_LAST_MODIFIED = new Date("2026-07-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const servicioPages: MetadataRoute.Sitemap = siteConfig.servicios.map((servicio) => ({
    url: `${siteConfig.url}/servicios/${servicio.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const routePages: MetadataRoute.Sitemap = siteConfig.routes.map((route) => ({
    url: `${siteConfig.url}/rutas/${route.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const retornoPages: MetadataRoute.Sitemap = siteConfig.retornos.map((retorno) => ({
    url: `${siteConfig.url}/retornos/${retorno.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = siteConfig.cities.map((city) => ({
    url: `${siteConfig.url}/ciudades/${city.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const statePages: MetadataRoute.Sitemap = siteConfig.states.map((state) => ({
    url: `${siteConfig.url}/estados/${state.slug}`,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicioPages,
    ...routePages,
    ...retornoPages,
    ...cityPages,
    ...statePages,
  ];
}
