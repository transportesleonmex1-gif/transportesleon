import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { UnitsGrid } from "@/components/units-grid";
import { Gallery } from "@/components/gallery";
import { CoverageAreas } from "@/components/coverage-areas";
import { CargoTypes } from "@/components/cargo-types";
import { FinalCta, Footer } from "@/components/cta-footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Fletes Foráneos CDMX, Naucalpan y Tlalnepantla | 1 a 30 Toneladas",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <StatsBar />
        <UnitsGrid />
        <Gallery />
        <CoverageAreas />
        <CargoTypes />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
