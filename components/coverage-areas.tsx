import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function CoverageAreas() {
  return (
    <section className="py-18 px-[6%] bg-gris-claro" id="rutas">
      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Cobertura
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        ZONAS DE SALIDA
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 mb-12">
        {siteConfig.cities.map((city) => (
          <Link
            key={city.slug}
            href={`/ciudades/${city.slug}`}
            className="bg-white border border-borde px-5 py-3.5 text-sm font-semibold text-gray-900 rounded-lg flex items-center gap-2 hover:border-rojo hover:shadow-md transition-all"
          >
            <span className="w-2 h-2 bg-rojo rounded-full shrink-0" />
            {city.name}
          </Link>
        ))}
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Destinos foráneos
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        RUTAS QUE CUBRIMOS
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

        <div className="bg-azul-light border border-azul rounded-lg px-4.5 py-4 flex items-center justify-center sm:col-span-2 lg:col-span-3 text-center">
          <div>
            <div className="text-[15px] font-semibold text-azul">
              ¿Tu destino no está en la lista?
            </div>
            <div className="text-xs text-gris mt-1">
              Llegamos a cualquier punto del país — cotiza tu ruta al{" "}
              <a href={`tel:${siteConfig.phone}`} className="font-bold text-rojo">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-rojo mb-2.5">
        Cobertura nacional
      </p>
      <h2 className="font-display text-[32px] sm:text-[44px] lg:text-[52px] text-gray-900 leading-none mb-10">
        ESTADOS QUE CUBRIMOS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {siteConfig.states.slice(0, 8).map((state) => (
          <Link
            key={state.slug}
            href={`/estados/${state.slug}`}
            className="bg-white border border-borde rounded-lg px-4 py-3.5 flex justify-between items-center hover:border-rojo hover:shadow-md transition-all"
          >
            <span className="text-sm font-semibold text-gray-900">
              → {state.name}
            </span>
            <span className="text-rojo text-lg font-bold">›</span>
          </Link>
        ))}

        <div className="bg-azul-light border border-azul rounded-lg px-4.5 py-4 flex items-center justify-center col-span-2 sm:col-span-1 text-center">
          <div>
            <div className="text-[14px] font-semibold text-azul">
              +{siteConfig.states.length - 8} estados más
            </div>
            <div className="text-xs text-gris mt-1">Cobertura en toda la República</div>
          </div>
        </div>
      </div>
    </section>
  );
}
