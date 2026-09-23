import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactButtons } from "@/components/contact-buttons";
import { FinalCta, Footer } from "@/components/cta-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fletes a Zonas Turísticas Donde Paquetería No Llega",
  description:
    "Flete dedicado a zonas turísticas de México donde paquetería y consolidado no cubren bien: Tulum, Los Cabos, Puerto Vallarta y más. Cotiza al 55 6185 7646.",
  alternates: {
    canonical: "/zonas-turisticas",
  },
  openGraph: {
    title: "Fletes a Zonas Turísticas Donde Paquetería No Llega",
    description:
      "Flete dedicado a zonas turísticas de México donde paquetería y consolidado no cubren bien.",
    url: `${siteConfig.url}/zonas-turisticas`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Fletes a zonas turísticas",
      },
    ],
  },
};

export default function ZonasTuristicasHubPage() {
  const sinFerry = siteConfig.zonasTuristicas.filter((z) => !z.requiereFerry);
  const conFerry = siteConfig.zonasTuristicas.filter((z) => z.requiereFerry);
  const waMessage = "Hola, necesito cotizar un flete a una zona turística";

  return (
    <>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs items={[{ label: "Zonas Turísticas", href: "/zonas-turisticas" }]} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Donde paquetería no llega
            </div>

            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-gray-900 mb-4">
              FLETES A <span className="text-rojo">ZONAS TURÍSTICAS</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              Muchos destinos turísticos tienen cobertura limitada o lenta de
              paquetería y consolidado. Ofrecemos flete dedicado y directo desde
              CDMX y zona metropolitana, sin depender de rutas que no cubren bien
              estas zonas.
            </p>

            <ContactButtons waMessage={waMessage} location="zonas_turisticas_hub_hero" />
          </div>

          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt="Fletes a zonas turísticas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            DESTINOS POR CARRETERA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {sinFerry.map((d) => (
              <Link
                key={d.slug}
                href={`/zonas-turisticas/${d.slug}`}
                className="bg-white border border-borde rounded-lg px-4.5 py-4 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900">→ {d.name}</div>
                  <div className="text-xs text-gris mt-0.5">{d.km} km aprox.</div>
                </div>
                <span className="text-rojo text-lg font-bold">›</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            DESTINOS CON CRUCE EN FERRY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {conFerry.map((d) => (
              <Link
                key={d.slug}
                href={`/zonas-turisticas/${d.slug}`}
                className="bg-white border border-borde rounded-lg px-4.5 py-4 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900">→ {d.name}</div>
                  <div className="text-xs text-gris mt-0.5">⛴️ Incluye ferry</div>
                </div>
                <span className="text-rojo text-lg font-bold">›</span>
              </Link>
            ))}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
