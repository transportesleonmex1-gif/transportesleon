const stats = [
  { num: "1–30T", label: "Capacidad" },
  { num: "+10", label: "Rutas foráneas" },
  { num: "24H", label: "Disponibilidad" },
  { num: "6", label: "Zonas de salida" },
];

export function StatsBar() {
  return (
    <div className="bg-azul py-7 px-[5%] grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-display text-[38px] text-white leading-none">
            {stat.num}
          </div>
          <div className="text-xs text-white/70 uppercase tracking-wide mt-0.5">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
