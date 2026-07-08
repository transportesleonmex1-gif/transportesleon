import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactButtons } from "@/components/contact-buttons";
import { FinalCta, Footer } from "@/components/cta-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

function getRetorno(slug: string) {
  return siteConfig.retornos.find((r) => r.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.retornos.map((retorno) => ({ slug: retorno.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const retorno = getRetorno(slug);

  if (!retorno) {
    return { title: "Ruta no encontrada" };
  }

  const title = `Flete de ${retorno.name} a CDMX y Zona Metropolitana`;
  const description = retorno.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/retornos/${retorno.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/retornos/${retorno.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Flete de ${retorno.name} a CDMX y zona metropolitana`,
        },
      ],
    },
  };
}

function RetornoJsonLd({ retorno }: { retorno: NonNullable<ReturnType<typeof getRetorno>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Flete de retorno de carga",
    name: `Flete de ${retorno.name} a CDMX y zona metropolitana`,
    description: retorno.intro,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: `+52${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: [
      { "@type": "City", name: retorno.name },
      { "@type": "City", name: "Ciudad de México" },
      { "@type": "State", name: "Estado de México" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Empresas y particulares con carga hacia CDMX o zona metropolitana",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RetornoPage({ params }: Props) {
  const { slug } = await params;
  const retorno = getRetorno(slug);

  if (!retorno) {
    notFound();
  }

  const otherRetornos = siteConfig.retornos.filter((r) => r.slug !== retorno.slug);
  const waMessage = `Hola, necesito cotizar un flete de ${retorno.name} a CDMX / zona metropolitana`;

  return (
    <>
      <RetornoJsonLd retorno={retorno} />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs
          items={[
            { label: `Flete de ${retorno.name} a CDMX`, href: `/retornos/${retorno.slug}` },
          ]}
        />

        {/* Hero de la ruta de retorno */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Flete de retorno · Tarifa preferencial
            </div>

            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-gray-900 mb-4">
              FLETE DE {retorno.name.toUpperCase()} A <span className="text-rojo">CDMX Y ZONA METROPOLITANA</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              {retorno.intro}
            </p>

            <div className="flex gap-5 flex-wrap mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">📍 Distancia:</span>
                <span className="text-gris">{retorno.km} km aproximadamente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">⏱️ Tiempo:</span>
                <span className="text-gris">{retorno.duration}</span>
              </div>
            </div>

            <ContactButtons waMessage={waMessage} location="retorno_hero" />
          </div>

          <div className="relative min-h-[280px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt={`Unidad de Transportes León lista para flete de ${retorno.name} a CDMX`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Unidades disponibles */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            UNIDADES DISPONIBLES PARA ESTE TRAYECTO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.units.map((unit) => (
              <div
                key={unit.slug}
                className="bg-white border border-borde rounded-xl overflow-hidden"
              >
                <div className="h-[160px] relative overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={`${unit.name} disponible para flete de ${retorno.name} a CDMX`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[15px] font-bold text-gray-900">
                    {unit.name}
                  </div>
                  <div className="text-xs text-gris mt-0.5">{unit.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            ¿POR QUÉ ELEGIRNOS PARA TU FLETE DESDE {retorno.name.toUpperCase()}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">🚛</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Flotilla de 1 a 30 toneladas
              </div>
              <p className="text-[13px] text-gris">
                Desde camionetas NP300 hasta trailer de 53 pies, elegimos la unidad
                correcta para tu carga desde {retorno.name}.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Carga asegurada y con lona
              </div>
              <p className="text-[13px] text-gris">
                Protegemos tu mercancía durante todo el trayecto de {retorno.name} a
                CDMX con lona y amarres profesionales.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Tarifa preferencial
              </div>
              <p className="text-[13px] text-gris">
                Por tratarse de un viaje de regreso, ofrecemos tarifa preferencial
                para carga desde {retorno.name} hacia CDMX y zona metropolitana.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">📄</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Facturación disponible
              </div>
              <p className="text-[13px] text-gris">
                Emitimos factura para empresas y personas morales que envían carga
                desde {retorno.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Ruta de ida relacionada */}
        {(() => {
          const route = siteConfig.routes.find(
            (r) =>
              r.name.toLowerCase().includes(retorno.name.toLowerCase()) ||
              retorno.name.toLowerCase().includes(r.name.toLowerCase())
          );
          if (!route) return null;
          return (
            <section className="py-8 px-[6%]">
              <Link
                href={`/rutas/${route.slug}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-azul-light border border-azul rounded-lg px-6 py-5 hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-[15px] font-semibold text-azul">
                    🔁 ¿También necesitas enviar carga a {route.name}?
                  </div>
                  <div className="text-xs text-gris mt-1">
                    Consulta nuestra ruta de ida desde CDMX
                  </div>
                </div>
                <span className="text-azul font-bold text-sm whitespace-nowrap">
                  Ver flete de CDMX a {route.name} ›
                </span>
              </Link>
            </section>
          );
        })()}

        {/* Otras rutas de retorno */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            OTRAS RUTAS DE RETORNO
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {otherRetornos.map((r) => (
              <Link
                key={r.slug}
                href={`/retornos/${r.slug}`}
                className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-gray-900">
                  → {r.name} a CDMX
                </span>
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
