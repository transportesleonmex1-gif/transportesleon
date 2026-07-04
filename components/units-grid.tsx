import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function UnitsGrid() {
  return (
    <section className="py-18 px-[6%]" id="unidades">
      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Nuestra flota
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        UNIDADES DISPONIBLES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.units.map((unit) => (
          <article
            key={unit.slug}
            className="border border-borde rounded-xl overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="h-[200px] relative overflow-hidden">
              <Image
                src={unit.image}
                alt={`${unit.name} - ${unit.description}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4.5">
              <span className="inline-block text-[11px] font-semibold bg-azul-light text-azul px-2.5 py-1 rounded-full mb-2">
                {unit.type}
              </span>
              <h3 className="text-[17px] font-bold text-gray-900 mb-1">
                {unit.name}
              </h3>
              <p className="text-[13px] text-gris">{unit.capacity}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
