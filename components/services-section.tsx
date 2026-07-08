import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const icons: Record<string, string> = {
  "renta-con-chofer": "📅",
  "flete-urgente": "🚨",
  "cuanto-cuesta-un-flete": "💰",
  "tipos-de-camiones-de-carga": "🚛",
  "transporte-de-carga-empresas": "🏢",
};

export function ServicesSection() {
  return (
    <section className="py-16 px-[6%] bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Servicios
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        ¿QUÉ NECESITAS RESOLVER?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.servicios.map((servicio) => (
          <Link
            key={servicio.slug}
            href={`/servicios/${servicio.slug}`}
            className="group bg-gris-claro border border-borde rounded-xl p-6 hover:border-rojo hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">{icons[servicio.slug] ?? "🚚"}</div>
            <div className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-rojo transition-colors">
              {servicio.metaTitle}
            </div>
            <p className="text-[13px] text-gris leading-relaxed line-clamp-3">
              {servicio.intro}
            </p>
            <span className="inline-block mt-3 text-rojo text-sm font-semibold">
              Ver más ›
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
