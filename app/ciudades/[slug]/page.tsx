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

function getCity(slug: string) {
  return siteConfig.cities.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    return { title: "Ciudad no encontrada" };
  }

  const title = `Fletes en ${city.name}`;
  const description = city.metaDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/ciudades/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/ciudades/${city.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Transportes León en ${city.name}`,
        },
      ],
    },
  };
}

function CityJsonLd({ city }: { city: NonNullable<ReturnType<typeof getCity>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Flete de carga local y foráneo",
    name: `Fletes en ${city.name}`,
    description: city.intro,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: `+52${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);

  if (!city) {
    notFound();
  }

  const otherCities = siteConfig.cities.filter((c) => c.slug !== city.slug);
  const waMessage = `Hola, necesito cotizar un flete desde ${city.name}`;

  return (
    <>
      <CityJsonLd city={city} />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs items={[{ label: `Fletes en ${city.name}`, href: `/ciudades/${city.slug}` }]} />

        {/* Hero de la ciudad */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              {city.region}
            </div>

            <h1 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[0.95] text-gray-900 mb-4">
              FLETES EN <span className="text-rojo">{city.name.toUpperCase()}</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              {city.intro}
            </p>

            <ContactButtons waMessage={waMessage} location="ciudad_hero" />
          </div>

          <div className="relative min-h-[280px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt={`Unidad de Transportes León en ${city.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Rutas foráneas destacadas desde esta ciudad */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            RUTAS FORÁNEAS DESDE {city.name.toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {siteConfig.routes.map((route) => (
              <Link
                key={route.slug}
                href={`/rutas/${route.slug}`}
                className="bg-white border border-borde rounded-lg px-4.5 py-4 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    → {route.name}
                  </div>
                  <div className="text-xs text-gris mt-0.5">
                    {route.km} km aprox.
                  </div>
                </div>
                <span className="text-rojo text-lg font-bold">›</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Unidades disponibles */}
        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            UNIDADES DISPONIBLES EN {city.name.toUpperCase()}
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
                    alt={`${unit.name} disponible en ${city.name}`}
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

        {/* Otras ciudades */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            OTRAS ZONAS DE COBERTURA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/ciudades/${c.slug}`}
                className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-gray-900">
                  → {c.name}
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
