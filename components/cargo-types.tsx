import { siteConfig } from "@/lib/site-config";

const icons: Record<string, string> = {
  hammer: "🔩",
  leaf: "🌽",
  package: "📦",
  settings: "⚙️",
  shield: "🛡️",
  "file-text": "📄",
};

export function CargoTypes() {
  return (
    <section className="py-18 px-[6%]" id="servicios">
      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Lo que ofrecemos
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        TIPOS DE CARGA
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.cargoTypes.map((cargo) => (
          <div
            key={cargo.title}
            className="border border-borde rounded-xl p-6 hover:border-azul hover:shadow-md transition-all"
          >
            <div className="w-11 h-11 bg-azul-light rounded-lg flex items-center justify-center text-2xl mb-3.5">
              {icons[cargo.icon]}
            </div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-1.5">
              {cargo.title}
            </h3>
            <p className="text-[13px] text-gris leading-relaxed">
              {cargo.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
