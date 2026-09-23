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

function getZona(slug: string) {
  return siteConfig.zonasTuristicas.find((z) => z.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.zonasTuristicas.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const zona = getZona(slug);

  if (!zona) {
    return { title: "Destino no encontrado" };
  }

  return {
    title: zona.metaTitle,
    description: zona.metaDescription,
    alternates: {
      canonical: `/zonas-turisticas/${zona.slug}`,
    },
    openGraph: {
      title: zona.metaTitle,
      description: zona.metaDescription,
      url: `${siteConfig.url}/zonas-turisticas/${zona.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `Flete a ${zona.name}`,
        },
      ],
    },
  };
}

function ZonaJsonLd({ zona }: { zona: NonNullable<ReturnType<typeof getZona>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Flete dedicado a zona turística",
    name: `Flete a ${zona.name}`,
    description: zona.intro,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: `+52${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: zona.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ZonaTuristicaPage({ params }: Props) {
  const { slug } = await params;
  const zona = getZona(slug);

  if (!zona) {
    notFound();
  }

  const otrasZonas = siteConfig.zonasTuristicas.filter((z) => z.slug !== zona.slug);
  const waMessage = `Hola, necesito cotizar un flete a ${zona.name}`;

  return (
    <>
      <ZonaJsonLd zona={zona} />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs
          items={[
            { label: "Zonas Turísticas", href: "/zonas-turisticas" },
            { label: zona.name, href: `/zonas-turisticas/${zona.slug}` },
          ]}
        />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              {zona.requiereFerry ? "Incluye cruce en ferry" : "Servicio express"}
            </div>

            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-gray-900 mb-4">
              FLETE A <span className="text-rojo">{zona.name.toUpperCase()}</span>
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              {zona.intro}
            </p>

            <div className="flex gap-5 flex-wrap mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">📍 Distancia:</span>
                <span className="text-gris">{zona.km} km aproximadamente</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">⏱️ Tiempo:</span>
                <span className="text-gris">{zona.duration}</span>
              </div>
            </div>

            <ContactButtons waMessage={waMessage} location="zona_turistica_hero" />
          </div>

          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt={`Flete a ${zona.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {zona.requiereFerry && (
          <section className="py-8 px-[6%]">
            <div className="bg-azul-light border border-azul rounded-lg px-6 py-5">
              <div className="text-[15px] font-semibold text-azul mb-1">
                ⛴️ Este destino incluye cruce en ferry
              </div>
              <div className="text-xs text-gris">
                Coordinamos el traslado completo, incluyendo el cruce en ferry, para
                que tu carga llegue directo sin que tengas que gestionarlo tú por
                separado.
              </div>
            </div>
          </section>
        )}

        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            UNIDADES DISPONIBLES
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
                    alt={`${unit.name} disponible para flete a ${zona.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[15px] font-bold text-gray-900">{unit.name}</div>
                  <div className="text-xs text-gris mt-0.5">{unit.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            OTRAS ZONAS TURÍSTICAS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
            {otrasZonas.map((z) => (
              <Link
                key={z.slug}
                href={`/zonas-turisticas/${z.slug}`}
                className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-gray-900">→ {z.name}</span>
                <span className="text-rojo text-lg font-bold">›</span>
              </Link>
            ))}
          </div>
          <Link
            href="/zonas-turisticas"
            className="text-sm font-semibold text-azul hover:underline"
          >
            ← Ver todas las zonas turísticas
          </Link>
        </section>

        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
