import Image from "next/image";

const galleryImages = [
  { src: "/images/np300-plataforma-vacia.jpg", alt: "Plataforma de redilas vacía lista para carga", tall: true },
  { src: "/images/carga-agricola.jpg", alt: "Carga agrícola transportada por Transportes León" },
  { src: "/images/carga-industrial.jpg", alt: "Carga industrial asegurada para flete foráneo" },
  { src: "/images/torton-cama-plana.jpg", alt: "Torton cama plana de Transportes León" },
  { src: "/images/trailer-53-pies.jpg", alt: "Trailer caja seca 53 pies de Transportes León" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] grid-rows-[180px_180px] lg:grid-rows-[250px_250px] gap-1">
      {galleryImages.map((img, i) => (
        <div
          key={img.src}
          className={`relative overflow-hidden ${
            img.tall ? "row-span-1 lg:row-span-2" : ""
          } ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
}
