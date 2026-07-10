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

function getRoute(slug: string) {
  return siteConfig.routes.find((r) => r.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    return { title: "Ruta no encontrada" };
  }

  const title = route.metaTitle ?? `Flete CDMX a ${route.name}`;
  const description = route.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/rutas/${route.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/rutas/${route.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Flete foráneo de CDMX a ${route.name}`,
        },
      ],
    },
  };
}

function RouteJsonLd({ route }: { route: NonNullable<ReturnType<typeof getRoute>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Flete foráneo de carga",
    name: `Flete foráneo de CDMX a ${route.name}`,
    description: route.intro,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: `+52${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: route.name,
    },
    audience: {
      "@type": "Audience",
      audienceType: "Empresas y particulares con carga foránea",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = getRoute(slug);

  if (!route) {
    notFound();
  }

  const otherRoutes = siteConfig.routes.filter((r) => r.slug !== route.slug);
  const waMessage = `Hola, necesito cotizar un flete de CDMX a ${route.name}`;

  return (
    <>
      <RouteJsonLd route={route} />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs items={[{ label: `Flete a ${route.name}`, href: `/rutas/${route.slug}` }]} />

        {/* Hero de la ruta */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Flete foráneo
            </div>

            <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[0.95] text-gray-900 mb-4">
              FLETE DE CDMX A <span className="text-rojo">{route.name.toUpperCase()}</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              {route.intro}
            </p>

            <div className="flex gap-5 flex-wrap mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">📍 Distancia:</span>
                <span className="text-gris">{route.km} km aproximadamente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">⏱️ Tiempo:</span>
                <span className="text-gris">{route.duration}</span>
              </div>
            </div>

            <ContactButtons waMessage={waMessage} location="ruta_hero" />
          </div>

          <div className="relative min-h-[280px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt={`Unidad de Transportes León lista para flete a ${route.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Unidades disponibles para esta ruta */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            UNIDADES DISPONIBLES PARA {route.name.toUpperCase()}
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
                    alt={`${unit.name} disponible para flete a ${route.name}`}
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

        {/* Por qué elegirnos para esta ruta */}
        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            ¿POR QUÉ ELEGIRNOS PARA TU FLETE A {route.name.toUpperCase()}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">🚛</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Flotilla de 1 a 30 toneladas
              </div>
              <p className="text-[13px] text-gris">
                Desde camionetas NP300 hasta trailer de 53 pies, elegimos la unidad
                correcta para tu carga rumbo a {route.name}.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Carga asegurada y con lona
              </div>
              <p className="text-[13px] text-gris">
                Protegemos tu mercancía durante todo el trayecto a {route.name} con
                lona y amarres profesionales.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">⏰</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Servicio 24 horas
              </div>
              <p className="text-[13px] text-gris">
                Fletes urgentes a {route.name} disponibles cualquier día de la
                semana, a cualquier hora.
              </p>
            </div>
            <div className="border border-borde rounded-xl p-5">
              <div className="text-2xl mb-2">📄</div>
              <div className="font-bold text-gray-900 text-[15px] mb-1">
                Facturación disponible
              </div>
              <p className="text-[13px] text-gris">
                Emitimos factura para empresas y personas morales que envían carga
                a {route.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Flete de retorno relacionado */}
        {(() => {
          const retorno = siteConfig.retornos.find(
            (r) =>
              route.name.toLowerCase().includes(r.name.toLowerCase()) ||
              r.name.toLowerCase().includes(route.name.toLowerCase())
          );
          if (!retorno) return null;
          return (
            <section className="py-8 px-[6%]">
              <Link
                href={`/retornos/${retorno.slug}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-azul-light border border-azul rounded-lg px-6 py-5 hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-[15px] font-semibold text-azul">
                    🔁 ¿Tienes carga en {retorno.name} que necesitas enviar a CDMX?
                  </div>
                  <div className="text-xs text-gris mt-1">
                    También cubrimos el trayecto de regreso hacia la zona metropolitana, con tarifa preferencial
                  </div>
                </div>
                <span className="text-azul font-bold text-sm whitespace-nowrap">
                  Ver flete de {retorno.name} a CDMX ›
                </span>
              </Link>
            </section>
          );
        })()}

        {/* Otras rutas */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            OTRAS RUTAS QUE CUBRIMOS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {otherRoutes.map((r) => (
              <Link
                key={r.slug}
                href={`/rutas/${r.slug}`}
                className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-gray-900">
                  → {r.name}
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
