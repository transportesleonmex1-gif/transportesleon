import { siteConfig } from "@/lib/site-config";

export function MobileCtaBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hola,%20necesito%20cotizar%20un%20flete%20for%C3%A1neo`}
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold py-4"
        aria-label="Cotizar por WhatsApp"
      >
        <span aria-hidden="true">💬</span> WhatsApp
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center justify-center gap-2 bg-rojo text-white text-sm font-bold py-4"
        aria-label={`Llamar al ${siteConfig.phoneDisplay}`}
      >
        <span aria-hidden="true">📞</span> Llamar ahora
      </a>
    </div>
  );
}
