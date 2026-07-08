"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { trackContact } from "@/lib/analytics";

const heroImages = siteConfig.units.map((unit) => ({
  src: unit.image,
  alt: `${unit.name} de Transportes León, lista para flete foráneo desde CDMX`,
}));

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((i) => (i + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
      <div className="flex flex-col justify-center px-[6%] py-16 lg:py-0 order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
          <span className="w-1.5 h-1.5 bg-azul rounded-full animate-pulse" />
          Servicio disponible ahora
        </div>

        <h1 className="font-display text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.95] text-gray-900 mb-4">
          FLETES <span className="text-rojo">FORÁNEOS</span> DESDE CDMX
        </h1>

        <p className="text-[17px] text-gris max-w-[440px] mb-8 leading-relaxed">
          De 1 hasta 30 toneladas. NP300, torton, camión y trailer disponibles.
          Salimos de CDMX, Naucalpan, Tlalnepantla y zona metro.
        </p>

        <div className="flex gap-3 flex-wrap mb-9">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackContact("call", "hero")}
            className="inline-flex items-center gap-2.5 bg-rojo text-white text-[15px] font-semibold px-7 py-4 rounded-md hover:bg-rojo-dark hover:-translate-y-0.5 transition-all"
          >
            Llamar y cotizar ahora
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20necesito%20un%20flete%20for%C3%A1neo`}
            onClick={() => trackContact("whatsapp", "hero")}
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[15px] font-semibold px-7 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            WhatsApp
          </a>
        </div>

        <ul className="flex gap-5 flex-wrap text-[13px] text-gris font-medium">
          <li className="flex items-center gap-1.5">✅ Con lona disponible</li>
          <li className="flex items-center gap-1.5">✅ Facturación</li>
          <li className="flex items-center gap-1.5">✅ Operador experimentado</li>
          <li className="flex items-center gap-1.5">✅ Precio por km</li>
        </ul>
      </div>

      <div className="relative overflow-hidden bg-gray-100 min-h-[280px] lg:min-h-full order-1 lg:order-2">
        {heroImages.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        <div className="absolute bottom-5 left-5 bg-rojo text-white text-[13px] font-semibold px-4 py-2 rounded-md z-10">
          {siteConfig.tagline}
        </div>

        <div className="absolute bottom-5 right-5 flex gap-1.5 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ver unidad ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
