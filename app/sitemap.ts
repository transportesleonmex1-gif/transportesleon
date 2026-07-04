import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routePages: MetadataRoute.Sitemap = siteConfig.routes.map((route) => ({
    url: `${siteConfig.url}/rutas/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = siteConfig.cities.map((city) => ({
    url: `${siteConfig.url}/ciudades/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const statePages: MetadataRoute.Sitemap = siteConfig.states.map((state) => ({
    url: `${siteConfig.url}/estados/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...routePages,
    ...cityPages,
    ...statePages,
  ];
}
