"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { trackContact } from "@/lib/analytics";

export function Header() {
  return (
    <>
      <div className="bg-rojo text-white text-center px-5 py-2.5 text-sm font-medium">
        <span className="hidden sm:inline">Llama ahora y cotiza tu flete: </span>
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={() => trackContact("call", "top_bar")}
          className="font-bold underline-offset-2 hover:underline"
        >
          {siteConfig.phoneDisplay}
        </a>
        <span> — 🚨 Fletes urgentes 24 horas, 7 días</span>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-borde">
        <nav className="flex items-center justify-between h-[84px] px-[5%] max-w-7xl mx-auto">
          <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} - Inicio`}>
            <Image
              src="/images/logo.svg"
              alt={`${siteConfig.name} - ${siteConfig.tagline}`}
              width={250}
              height={101}
              className="h-14 sm:h-16 w-auto"
              unoptimized
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20necesito%20cotizar%20un%20flete%20for%C3%A1neo`}
              onClick={() => trackContact("whatsapp", "header")}
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
              aria-label="Cotizar por WhatsApp"
            >
              <span aria-hidden="true">💬</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackContact("call", "header")}
              className="inline-flex items-center gap-1.5 bg-rojo text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2.5 rounded-md hover:bg-rojo-dark transition-colors whitespace-nowrap"
              aria-label={`Llamar al ${siteConfig.phoneDisplay}`}
            >
              <span aria-hidden="true">📞</span>
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
