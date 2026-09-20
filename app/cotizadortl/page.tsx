import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizador Interno",
  description: "Herramienta interna de cotización de fletes. Uso exclusivo de Transportes León.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CotizadorPage() {
  return (
    <iframe
      src="/cotizadortl.html"
      title="Cotizador de Fletes — Transportes León"
      style={{
        border: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
