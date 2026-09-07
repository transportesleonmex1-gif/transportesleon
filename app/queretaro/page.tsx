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
  title: "Fletes desde Querétaro a Cualquier Destino",
  description:
    "Flete foráneo con origen en Querétaro hacia el Bajío, sur y norte del país. Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
  alternates: {
    canonical: "/queretaro",
  },
  openGraph: {
    title: "Fletes desde Querétaro a Cualquier Destino",
    description:
      "Flete foráneo con origen en Querétaro hacia el Bajío, sur y norte del país. Unidades de 1 a 30 toneladas.",
    url: `${siteConfig.url}/queretaro`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Fletes desde Querétaro",
      },
    ],
  },
};

export default function QueretaroHubPage() {
  const cercanos = siteConfig.desdeQueretaro.filter((d) => d.km <= 250);
  const lejanos = siteConfig.desdeQueretaro.filter((d) => d.km > 250);
  const waMessage = "Hola, necesito cotizar un flete desde Querétaro";

  return (
    <>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs items={[{ label: "Fletes desde Querétaro", href: "/queretaro" }]} />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Nuevo punto de salida
            </div>

            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-gray-900 mb-4">
              FLETES DESDE <span className="text-rojo">QUERÉTARO</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              Además de nuestras rutas desde CDMX, ahora salimos directo desde
              Querétaro hacia el Bajío, el sur y el norte del país — sin necesidad
              de pasar por la Ciudad de México.
            </p>

            <ContactButtons waMessage={waMessage} location="queretaro_hub_hero" />
          </div>

          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt="Fletes desde Querétaro"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            DESTINOS CERCANOS (BAJÍO)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {cercanos.map((d) => (
              <Link
                key={d.slug}
                href={`/queretaro/${d.slug}`}
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
            DESTINOS DE LARGA DISTANCIA
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {lejanos.map((d) => (
              <Link
                key={d.slug}
                href={`/queretaro/${d.slug}`}
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

        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
