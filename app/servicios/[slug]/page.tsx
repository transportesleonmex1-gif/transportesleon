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

function getServicio(slug: string) {
  return siteConfig.servicios.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.servicios.map((servicio) => ({ slug: servicio.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServicio(slug);

  if (!servicio) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: servicio.metaTitle,
    description: servicio.metaDescription,
    alternates: {
      canonical: `/servicios/${servicio.slug}`,
    },
    openGraph: {
      title: servicio.metaTitle,
      description: servicio.metaDescription,
      url: `${siteConfig.url}/servicios/${servicio.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: servicio.metaTitle,
        },
      ],
    },
  };
}

function ServicioJsonLd({ servicio }: { servicio: NonNullable<ReturnType<typeof getServicio>> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: servicio.metaTitle,
    name: servicio.title,
    description: servicio.intro,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: `+52${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Ciudad de México",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = getServicio(slug);

  if (!servicio) {
    notFound();
  }

  const otherServicios = siteConfig.servicios.filter((s) => s.slug !== servicio.slug);
  const waMessage = `Hola, tengo una duda sobre: ${servicio.metaTitle}`;

  return (
    <>
      <ServicioJsonLd servicio={servicio} />
      <Header />
      <main className="pb-16 sm:pb-0">
        <Breadcrumbs items={[{ label: servicio.metaTitle, href: `/servicios/${servicio.slug}` }]} />

        {/* Hero del servicio */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-[6%] py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 bg-azul-light text-azul text-xs font-semibold uppercase tracking-wide px-3.5 py-1.5 rounded-full mb-5 w-fit">
              {servicio.badge}
            </div>

            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.0] text-gray-900 mb-4">
              {servicio.title}
            </h1>

            <p className="text-[16px] text-gris max-w-[520px] mb-6 leading-relaxed">
              {servicio.intro}
            </p>

            <ContactButtons waMessage={waMessage} location="servicio_hero" />
          </div>

          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden bg-gray-100">
            <Image
              src="/images/hero-np300-ruta.jpg"
              alt={servicio.metaTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Secciones de contenido */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <div className="max-w-3xl mx-auto space-y-8">
            {servicio.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-[22px] sm:text-[26px] text-gray-900 leading-tight mb-2.5">
                  {section.heading}
                </h2>
                <p className="text-[15px] text-gris leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Unidades disponibles */}
        <section className="py-14 px-[6%]">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            NUESTRA FLOTILLA
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
                    alt={unit.name}
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

        {/* Otros servicios */}
        <section className="py-14 px-[6%] bg-gris-claro">
          <h2 className="font-display text-[28px] sm:text-[36px] text-gray-900 leading-none mb-8">
            OTROS SERVICIOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {otherServicios.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-gray-900">
                  → {s.metaTitle}
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
