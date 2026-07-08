"use client";

import { siteConfig } from "@/lib/site-config";
import { trackContact } from "@/lib/analytics";

type Props = {
  waMessage: string;
  location: string;
};

export function ContactButtons({ waMessage, location }: Props) {
  return (
    <div className="flex gap-3 flex-wrap">
      <a
        href={`tel:${siteConfig.phone}`}
        onClick={() => trackContact("call", location)}
        className="inline-flex items-center gap-2.5 bg-rojo text-white text-[15px] font-semibold px-7 py-4 rounded-md hover:bg-rojo-dark transition-colors"
      >
        Llamar y cotizar
      </a>
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMessage)}`}
        onClick={() => trackContact("whatsapp", location)}
        className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[15px] font-semibold px-7 py-4 rounded-md hover:opacity-90 transition-opacity"
      >
        Cotizar por WhatsApp
      </a>
    </div>
  );
}
