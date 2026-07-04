import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-rojo py-18 px-[6%] text-center">
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-white leading-none mb-3">
        ¿LISTO PARA COTIZAR TU FLETE?
      </h2>
      <p className="text-[17px] text-white/85 mb-9 max-w-[500px] mx-auto">
        Llámanos o escríbenos ahora — respondemos en minutos y salimos el mismo día.
      </p>
      <div className="flex gap-3.5 justify-center flex-wrap">
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-2.5 bg-white text-rojo text-[15px] font-bold px-7.5 py-4 rounded-md hover:-translate-y-0.5 transition-transform"
        >
          {siteConfig.phoneDisplay} — Llamar ahora
        </a>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20necesito%20cotizar%20un%20flete%20for%C3%A1neo`}
          className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[15px] font-bold px-7.5 py-4 rounded-md hover:opacity-90 transition-opacity"
        >
          WhatsApp directo
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white/60 py-8 px-[6%] flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px]">
      <Image
        src="/images/logo.jpg"
        alt={siteConfig.name}
        width={120}
        height={36}
        className="h-9 w-auto rounded-sm bg-white p-1"
      />
      <span>© {new Date().getFullYear()} {siteConfig.name} · {siteConfig.tagline}</span>
      <div className="flex gap-5">
        <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
          {siteConfig.phoneDisplay}
        </a>
        <a href={siteConfig.social.instagram} className="hover:text-white transition-colors">
          @transportesleonmx
        </a>
      </div>
    </footer>
  );
}
