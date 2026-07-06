import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C0251E",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Fletes Foráneos CDMX, 1 a 30 Toneladas`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "fletes foráneos CDMX",
    "flete foráneo",
    "camioneta de carga con operador",
    "flete a Querétaro",
    "flete a Puebla",
    "flete a Oaxaca",
    "flete a Acapulco",
    "transporte de carga Naucalpan",
    "flete en Tlalnepantla",
    "flete urgente CDMX",
    "renta de camioneta con operador",
    "NP300 redilas",
    "torton caja seca",
    "Ford F350 caja seca",
    "trailer 53 pies CDMX",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Fletes Foráneos CDMX, 1 a 30 Toneladas`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Fletes foráneos CDMX`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Fletes Foráneos CDMX`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "nZ-n0GoIvio_Up04QQwVe9MwtLaJccDkWUH_orvdj3Q",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Transportes León Fletes Foráneos",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+52${siteConfig.phone}`,
    image: `${siteConfig.url}/images/hero-np300-ruta.jpg`,
    logo: `${siteConfig.url}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.googleBusiness,
    ],
    makesOffer: siteConfig.units.map((unit) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Flete foráneo de carga",
        name: `Flete foráneo en ${unit.name}`,
        description: unit.description,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
