import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Crumb = {
  label: string;
  href: string;
};

function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd items={allItems} />
      <nav className="px-[6%] py-4 text-xs text-gris" aria-label="breadcrumb">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={item.href}>
              {isLast ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <>
                  <Link href={item.href} className="hover:text-rojo transition-colors">
                    {item.label}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
