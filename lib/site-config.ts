interface CityItem {
  slug: string;
  name: string;
  region: string;
  metaTitle?: string;
  intro: string;
  highlight: string;
  metaDescription: string;
}

interface RouteItem {
  slug: string;
  name: string;
  km: number;
  duration: string;
  metaTitle?: string;
  intro: string;
  metaDescription: string;
}

export const siteConfig = {
  name: "Transportes León",
  shortName: "Transportes León",
  tagline: "Tu Solución En Movimiento",
  url: "https://www.transportesleonmx.com",
  domain: "transportesleonmx.com",
  ogImage: "/images/og-cover.jpg",
  ga4MeasurementId: "G-G0BF5NYZ41",
  phone: "5561857646",
  phoneDisplay: "55 6185 7646",
  whatsapp: "525561857646",
  description:
    "Fletes foráneos desde CDMX y Edo. Méx. Flotilla de 1 a 30 toneladas. Servicio 24 horas, fletes urgentes. Cotiza ya.",
  social: {
    instagram: "https://www.instagram.com/transportesleonmx",
    facebook: "https://www.facebook.com/transportesleonmx",
    googleBusiness: "https://maps.app.goo.gl/QJrKA14hHSMMNcRR6",
  },
  address: {
    addressLocality: "Naucalpan de Juárez",
    addressRegion: "México",
    addressCountry: "MX",
  },
  cities: [
    {
      slug: "naucalpan",
      name: "Naucalpan de Juárez",
      region: "Estado de México",
      intro:
        "Naucalpan es nuestra base de operaciones. Damos servicio a colonias, parques industriales y zonas comerciales de todo el municipio, incluyendo Ciudad Satélite, Naucalpan Centro y las zonas industriales cercanas a la México-Toluca, con salida inmediata para fletes locales y foráneos.",
      highlight: "Base de operaciones y salida principal de la flotilla.",
      metaDescription: "Fletes locales y foráneos en Naucalpan de Juárez, Estado de México. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "tlalnepantla",
      name: "Tlalnepantla de Baz",
      region: "Estado de México",
      intro:
        "En Tlalnepantla atendemos tanto la zona industrial de Vallejo-Tlalnepantla como los corredores comerciales cercanos al Periférico y la Autopista México-Querétaro. Es una de nuestras zonas con mayor frecuencia de fletes locales hacia CDMX y foráneos hacia el Bajío.",
      highlight: "Alta frecuencia de fletes hacia el corredor industrial del Bajío.",
      metaDescription: "Fletes locales y foráneos en Tlalnepantla de Baz, Estado de México. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "atizapan",
      name: "Atizapán de Zaragoza",
      region: "Estado de México",
      intro:
        "En Atizapán de Zaragoza cubrimos tanto la zona urbana como los desarrollos industriales y comerciales cercanos a Lago de Guadalupe y la carretera a Toluca, con unidades disponibles para carga ligera y pesada.",
      highlight: "Cobertura desde Lago de Guadalupe hasta zona centro.",
      metaDescription: "Fletes locales y foráneos en Atizapán de Zaragoza, Estado de México. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "tepotzotlan",
      name: "Tepotzotlán",
      region: "Estado de México",
      metaTitle: "Fletes en Tepotzotlán 24h | Cotiza Hoy",
      intro:
        "Tepotzotlán es punto estratégico de salida hacia el Bajío y el norte del país gracias a su cercanía con la autopista México-Querétaro. Damos servicio a parques industriales, bodegas logísticas y zona centro del municipio.",
      highlight: "Punto estratégico de salida hacia el Bajío y el norte.",
      metaDescription: "Fletes locales y foráneos en Tepotzotlán, Estado de México. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "cuautitlan-izcalli",
      name: "Cuautitlán Izcalli",
      region: "Estado de México",
      intro:
        "En Cuautitlán Izcalli atendemos la importante zona industrial del municipio, con experiencia en carga para plantas manufactureras, centros de distribución y comercios ubicados sobre la vía José López Portillo y sus alrededores.",
      highlight: "Experiencia en carga industrial y centros de distribución.",
      metaDescription: "Fletes locales y foráneos en Cuautitlán Izcalli, Estado de México. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "ciudad-de-mexico",
      name: "Ciudad de México",
      region: "CDMX",
      intro:
        "Cubrimos toda la Ciudad de México, desde alcaldías del norte como Azcapotzalco y Gustavo A. Madero hasta el poniente y sur de la ciudad. Es nuestro punto de conexión principal para fletes locales y el origen más común de nuestras rutas foráneas.",
      highlight: "Cobertura en todas las alcaldías y origen principal de rutas foráneas.",
      metaDescription: "Fletes locales y foráneos en Ciudad de México, CDMX. Cotiza al 55 6185 7646, servicio 24 horas, 1 a 30 toneladas.",
    },
  ] as CityItem[],
  routes: [
    {
      slug: "queretaro",
      name: "Querétaro",
      km: 220,
      duration: "2 h 30 min aprox.",
      intro:
        "Transportamos carga foránea de CDMX y zona metro a Querétaro y su área metropolitana, incluyendo parques industriales y zona centro.",
      metaDescription: "Flete foráneo de CDMX a Querétaro (220 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "puebla",
      name: "Puebla",
      km: 130,
      duration: "1 h 45 min aprox.",
      intro:
        "Servicio de flete foráneo desde CDMX hacia Puebla capital y municipios cercanos, ideal para carga industrial y comercial.",
      metaDescription: "Flete foráneo de CDMX a Puebla (130 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "toluca",
      name: "Toluca",
      km: 65,
      duration: "1 hora aprox.",
      intro:
        "Ruta corta y frecuente desde CDMX y Naucalpan hacia Toluca, perfecta para entregas same-day de materiales y mercancía.",
      metaDescription: "Flete foráneo de CDMX a Toluca (65 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "pachuca",
      name: "Pachuca",
      km: 90,
      duration: "1 h 15 min aprox.",
      intro:
        "Flete foráneo desde CDMX y Tepotzotlán hacia Pachuca, cubriendo zona industrial y centro de la ciudad.",
      metaDescription: "Flete foráneo de CDMX a Pachuca (90 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "cuernavaca",
      name: "Cuernavaca",
      km: 85,
      duration: "1 h 10 min aprox.",
      intro:
        "Transporte de carga desde CDMX hacia Cuernavaca y zona metropolitana de Morelos.",
      metaDescription: "Flete foráneo de CDMX a Cuernavaca (85 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "oaxaca-centro",
      name: "Oaxaca Centro",
      km: 460,
      duration: "6 h 30 min aprox.",
      intro:
        "Flete foráneo de larga distancia desde CDMX hasta Oaxaca Centro, con unidades preparadas para viajes largos y carga asegurada.",
      metaDescription: "Flete foráneo de CDMX a Oaxaca Centro (460 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "acapulco",
      name: "Acapulco",
      km: 400,
      duration: "5 h 30 min aprox.",
      metaTitle: "Flete de Naucalpan y CDMX a Acapulco",
      intro:
        "Servicio de flete foráneo desde CDMX, Naucalpan y zona metro hacia Acapulco, cubriendo zona centro, costera y zona dorada. Ideal para traslado de mercancía, equipo comercial, materiales de construcción y carga industrial que necesita llegar a Acapulco con operador de confianza.",
      metaDescription: "Flete foráneo de Naucalpan y CDMX a Acapulco (400 km). Unidades de 1 a 30 toneladas, servicio 24 horas. Cotiza al 55 6185 7646.",
    },
  ] as RouteItem[],
  states: [
    {
      slug: "jalisco",
      name: "Jalisco",
      capital: "Guadalajara",
      km: 540,
      intro:
        "Transportamos carga desde CDMX y zona metro hasta Guadalajara y su zona metropolitana, incluyendo parques industriales de El Salto y Zapopan. Ideal para mercancía industrial, ferretera y equipo comercial que necesita llegar al occidente del país.",
      industries: ["Manufactura", "Tecnología", "Comercio"],
      metaDescription: "Transporte de carga a Querétaro desde CDMX: Automotriz, Aeroespacial y Logística. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "nuevo-leon",
      name: "Nuevo León",
      capital: "Monterrey",
      km: 900,
      intro:
        "Servicio de flete foráneo de larga distancia hacia Monterrey y su área metropolitana, con unidades preparadas para viajes largos, carga asegurada y facturación para empresas del corredor industrial regiomontano.",
      industries: ["Industria pesada", "Acero", "Manufactura"],
      metaDescription: "Transporte de carga a Nuevo León desde CDMX: Industria pesada, Acero y Manufactura. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "queretaro",
      name: "Querétaro",
      capital: "Santiago de Querétaro",
      km: 220,
      intro:
        "Querétaro es uno de nuestros destinos foráneos más frecuentes por su cercanía con CDMX y su fuerte actividad industrial. Cubrimos parques industriales, zona Bernardo Quintana y municipios cercanos como El Marqués.",
      industries: ["Automotriz", "Aeroespacial", "Logística"],
      metaDescription: "Querétaro es uno de nuestros destinos foráneos más frecuentes por su cercanía con CDMX y su fuerte actividad industrial. Transporte de carga foráneo a.",
    },
    {
      slug: "guanajuato",
      name: "Guanajuato",
      capital: "Guanajuato",
      km: 360,
      intro:
        "Damos servicio a todo el corredor industrial del Bajío guanajuatense: León, Celaya, Irapuato y Silao, con experiencia en carga automotriz, de calzado y manufactura ligera.",
      industries: ["Automotriz", "Calzado", "Manufactura"],
      metaDescription: "Transporte de carga foráneo a Guanajuato desde CDMX. Atendemos los sectores de Automotriz, Calzado y Manufactura. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "puebla",
      name: "Puebla",
      capital: "Puebla",
      km: 130,
      intro:
        "Flete foráneo frecuente desde CDMX hacia Puebla capital y su zona industrial, con rutas también hacia Cholula y municipios cercanos. Buena opción para carga comercial e industrial de corto trayecto.",
      industries: ["Automotriz", "Textil", "Comercio"],
      metaDescription: "Flete foráneo frecuente desde CDMX hacia Puebla capital y su zona industrial, con rutas también hacia Cholula y municipios cercanos. Transporte de carga.",
    },
    {
      slug: "michoacan",
      name: "Michoacán",
      capital: "Morelia",
      km: 310,
      intro:
        "Cubrimos Morelia y municipios agrícolas del estado, con experiencia especial en carga de productos del campo, insumos agrícolas y maquinaria para la región del Bajío michoacano.",
      industries: ["Agricultura", "Agroindustria", "Comercio"],
      metaDescription: "Transporte de carga a Michoacán desde CDMX: Agricultura, Agroindustria y Comercio. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "veracruz",
      name: "Veracruz",
      capital: "Xalapa",
      km: 400,
      intro:
        "Servicio de carga hacia Veracruz puerto y Xalapa, ideal para mercancía relacionada con comercio exterior, distribución y carga industrial que se mueve entre el centro del país y el Golfo de México.",
      industries: ["Comercio exterior", "Petroquímica", "Agroindustria"],
      metaDescription: "Transporte de carga a Veracruz desde CDMX: Comercio exterior, Petroquímica y Agroindustria. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "san-luis-potosi",
      name: "San Luis Potosí",
      capital: "San Luis Potosí",
      km: 420,
      intro:
        "Transportamos carga hacia el corredor industrial de San Luis Potosí, punto clave de conexión logística entre el centro y el norte de México, con experiencia en manufactura y distribución.",
      industries: ["Manufactura", "Logística", "Automotriz"],
      metaDescription: "Transporte de carga a San Luis Potosí desde CDMX: Manufactura, Logística y Automotriz. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "aguascalientes",
      name: "Aguascalientes",
      capital: "Aguascalientes",
      km: 480,
      intro:
        "Servicio foráneo hacia Aguascalientes capital y su zona industrial, con unidades preparadas para carga automotriz y manufacturera de mediano y largo trayecto desde CDMX.",
      industries: ["Automotriz", "Manufactura"],
      metaDescription: "Transporte de carga foráneo a Aguascalientes desde CDMX. Atendemos los sectores de Automotriz y Manufactura. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "estado-de-mexico",
      name: "Estado de México",
      capital: "Toluca",
      km: 65,
      intro:
        "El Estado de México es nuestra zona de mayor cobertura: desde Naucalpan y Tlalnepantla hasta Toluca y municipios industriales de todo el territorio mexiquense, con servicio local y foráneo el mismo día.",
      industries: ["Industria diversa", "Comercio", "Logística"],
      metaDescription: "Transporte de carga a Estado de México desde CDMX: Industria diversa, Comercio y Logística. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "morelos",
      name: "Morelos",
      capital: "Cuernavaca",
      km: 85,
      intro:
        "Cubrimos Cuernavaca y la zona metropolitana de Morelos, con rutas frecuentes desde CDMX ideales para carga comercial y distribución de mercancía.",
      industries: ["Comercio", "Turismo", "Agroindustria"],
      metaDescription: "Transporte de carga foráneo a Morelos desde CDMX. Atendemos los sectores de Comercio, Turismo y Agroindustria. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "hidalgo",
      name: "Hidalgo",
      capital: "Pachuca",
      km: 90,
      intro:
        "Damos servicio a Pachuca y la zona industrial de Tepeji-Tula, con experiencia en carga de materiales de construcción, maquinaria y mercancía comercial desde CDMX y Tepotzotlán.",
      industries: ["Industria del cemento", "Manufactura", "Comercio"],
      metaDescription: "Transporte de carga a Hidalgo desde CDMX: Industria del cemento, Manufactura y Comercio. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "oaxaca",
      name: "Oaxaca",
      capital: "Oaxaca de Juárez",
      km: 460,
      intro:
        "Flete foráneo de larga distancia hacia Oaxaca Centro, con unidades preparadas para viajes largos y carga asegurada, ideal para comercio y distribución hacia el sureste del país.",
      industries: ["Comercio", "Artesanías", "Agroindustria"],
      metaDescription: "Transporte de carga foráneo a Oaxaca desde CDMX. Atendemos los sectores de Comercio, Artesanías y Agroindustria. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "guerrero",
      name: "Guerrero",
      capital: "Chilpancingo",
      km: 400,
      intro:
        "Cubrimos Acapulco, Chilpancingo y zona costera de Guerrero, con experiencia en traslado de mercancía comercial, equipo hotelero y materiales de construcción hacia la región.",
      industries: ["Turismo", "Comercio", "Construcción"],
      metaDescription: "Transporte de carga foráneo a Guerrero desde CDMX. Atendemos los sectores de Turismo, Comercio y Construcción. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "tamaulipas",
      name: "Tamaulipas",
      capital: "Ciudad Victoria",
      km: 750,
      intro:
        "Servicio de larga distancia hacia Tamaulipas, con experiencia en carga industrial y de comercio exterior para empresas que operan hacia la frontera norte del país.",
      industries: ["Comercio exterior", "Industria maquiladora"],
      metaDescription: "Transporte de carga a Tamaulipas desde CDMX: Comercio exterior y Industria maquiladora. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "coahuila",
      name: "Coahuila",
      capital: "Saltillo",
      km: 840,
      intro:
        "Flete foráneo de larga distancia hacia Saltillo y su corredor industrial automotriz, con unidades preparadas para viajes largos y carga asegurada durante todo el trayecto.",
      industries: ["Automotriz", "Industria pesada"],
      metaDescription: "Transporte de carga foráneo a Coahuila desde CDMX. Atendemos los sectores de Automotriz y Industria pesada. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "chihuahua",
      name: "Chihuahua",
      capital: "Chihuahua",
      km: 1450,
      intro:
        "Cubrimos rutas de largo trayecto hacia Chihuahua capital, ideales para carga industrial y comercial que necesita conexión entre el centro del país y el norte.",
      industries: ["Industria maquiladora", "Manufactura"],
      metaDescription: "Transporte de carga foráneo a Chihuahua desde CDMX. Atendemos los sectores de Industria maquiladora y Manufactura. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "sonora",
      name: "Sonora",
      capital: "Hermosillo",
      km: 1900,
      intro:
        "Servicio de flete foráneo de muy larga distancia hacia Hermosillo, pensado para empresas con necesidad de distribución nacional hasta el noroeste del país.",
      industries: ["Agroindustria", "Manufactura"],
      metaDescription: "Transporte de carga foráneo a Sonora desde CDMX. Atendemos los sectores de Agroindustria y Manufactura. Servicio 24 horas, 1 a 30 toneladas.",
    },
    {
      slug: "yucatan",
      name: "Yucatán",
      capital: "Mérida",
      km: 1550,
      intro:
        "Transportamos carga de larga distancia hacia Mérida, ideal para comercio, distribución y mercancía industrial que necesita llegar a la península de Yucatán.",
      industries: ["Comercio", "Turismo", "Industria henequenera"],
      metaDescription: "Transporte de carga a Yucatán desde CDMX: Comercio, Turismo y Industria henequenera. Servicio 24h, 1 a 30 toneladas.",
    },
    {
      slug: "quintana-roo",
      name: "Quintana Roo",
      capital: "Chetumal",
      km: 1650,
      intro:
        "Cubrimos rutas de largo trayecto hacia Quintana Roo, con experiencia en carga comercial y de equipo hotelero para la zona turística del Caribe mexicano.",
      industries: ["Turismo", "Comercio"],
      metaDescription: "Transporte de carga foráneo a Quintana Roo desde CDMX. Atendemos los sectores de Turismo y Comercio. Servicio 24 horas, 1 a 30 toneladas.",
    },
  ],
  servicios: [
    {
      slug: "renta-con-chofer",
      title: "Renta de Camioneta de Carga con Chofer por Día, Semana o Mes",
      metaTitle: "Renta con Chofer por Día, Semana o Mes",
      badge: "Servicio recurrente",
      metaDescription: "Renta de camioneta de carga con chofer por día, semana o mes en CDMX y Edomex. Flotilla de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
      intro:
        "Si necesitas una unidad de carga de forma continua y no solo para un viaje único, ofrecemos renta de camioneta con chofer por día, semana o mes. Ideal para rutas de reparto diario, refuerzo temporal de flotilla, obra en construcción o cualquier operación que requiera transporte de carga de manera recurrente.",
      sections: [
        {
          heading: "¿Cómo funciona?",
          body: "Acuerdas contigo el periodo (día, semana o mes), el tipo de unidad según tu volumen de carga, y la unidad llega con chofer incluido. Tú defines las rutas y horarios de operación dentro del periodo contratado.",
        },
        {
          heading: "¿Para quién es este servicio?",
          body: "Empresas con rutas de distribución diaria, negocios que necesitan refuerzo temporal de flotilla en temporadas altas, constructoras que requieren transporte de materiales por proyecto, y cualquier operación que prefiera no invertir en flotilla propia.",
        },
        {
          heading: "Unidades disponibles para renta con chofer",
          body: "Desde camionetas NP300 hasta trailer de 53 pies, según el volumen y tipo de carga que manejes de forma recurrente.",
        },
      ],
    },
    {
      slug: "flete-urgente",
      title: "Flete Urgente CDMX — Servicio Express 24 Horas",
      metaTitle: "Flete Urgente CDMX 24 Horas",
      badge: "Disponible ahora",
      metaDescription: "Flete urgente en CDMX y zona metropolitana, servicio 24 horas. Salida el mismo día. Unidades de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
      intro:
        "Cuando la carga no puede esperar, ofrecemos servicio de flete urgente las 24 horas del día, los 7 días de la semana. Salimos el mismo día que cotizas, con unidades disponibles para carga local y foránea desde CDMX y zona metropolitana.",
      sections: [
        {
          heading: "¿Qué tan rápido pueden salir?",
          body: "Al cotizar por llamada o WhatsApp, confirmamos disponibilidad de unidad de inmediato. La salida depende de la unidad disponible en ese momento y tu ubicación, pero priorizamos los fletes urgentes sobre la programación regular.",
        },
        {
          heading: "¿Qué tipo de carga urgente atendemos?",
          body: "Carga comercial, industrial, refacciones, mercancía perecedera con manejo adecuado, y cualquier envío que requiera salida inmediata local o foránea.",
        },
        {
          heading: "Cobertura para fletes urgentes",
          body: "Local en CDMX, Naucalpan, Tlalnepantla, Atizapán, Tepotzotlán y Cuautitlán Izcalli, y foráneo urgente a cualquier estado de la República.",
        },
      ],
    },
    {
      slug: "cuanto-cuesta-un-flete",
      title: "¿Cuánto Cuesta un Flete? Factores que Afectan el Precio",
      metaTitle: "¿Cuánto Cuesta un Flete?",
      badge: "Guía informativa",
      metaDescription: "¿Cuánto cuesta un flete en México? Conoce los factores que afectan el precio: distancia, tonelaje, tipo de unidad y urgencia. Cotiza gratis.",
      intro:
        "El costo de un flete varía según varios factores, y no hay una tarifa única que aplique a todos los casos. Aquí te explicamos qué determina el precio final, para que sepas qué información tener a la mano al momento de cotizar.",
      sections: [
        {
          heading: "Distancia y ruta",
          body: "El kilometraje entre origen y destino es el factor más directo. Rutas con más tráfico, casetas o terracería también pueden influir en el tiempo y costo del servicio.",
        },
        {
          heading: "Tonelaje y volumen de carga",
          body: "No es lo mismo mover 500 kilos que 10 toneladas. El tipo de unidad necesaria (NP300, camión, torton o trailer) depende directamente de cuánto y qué tan voluminosa es tu carga.",
        },
        {
          heading: "Tipo de unidad requerida",
          body: "Una camioneta con redilas, una caja seca cerrada, o un trailer de 53 pies tienen costos operativos distintos, lo cual se refleja en la tarifa.",
        },
        {
          heading: "Urgencia del servicio",
          body: "Un flete programado con anticipación normalmente cuesta menos que uno urgente que requiere salida inmediata.",
        },
        {
          heading: "¿Cómo obtengo un precio exacto?",
          body: "Contáctanos por llamada o WhatsApp con origen, destino, tipo de carga y volumen aproximado, y te damos una cotización exacta sin compromiso.",
        },
      ],
    },
    {
      slug: "tipos-de-camiones-de-carga",
      title: "Tipos de Camiones de Carga: Cuál Elegir Según tu Mercancía",
      metaTitle: "Tipos de Camiones de Carga",
      badge: "Guía informativa",
      metaDescription: "Guía de tipos de camiones de carga: NP300, camioneta F350, camión caja seca, torton y trailer 53 pies. Compara capacidades y usos.",
      intro:
        "Elegir la unidad correcta depende del volumen, peso y tipo de mercancía que necesitas transportar. Aquí te explicamos las diferencias entre cada tipo de unidad de nuestra flotilla, para que sepas cuál es la ideal para tu carga.",
      sections: [
        {
          heading: "NP300 Redilas — hasta 1 tonelada",
          body: "Ideal para carga ligera, artículos individuales, mercancía comercial de bajo volumen y entregas rápidas locales.",
        },
        {
          heading: "NP300 Caja Seca — hasta 1 tonelada",
          body: "Igual capacidad que la de redilas, pero con caja cerrada para mercancía que requiere protección contra clima y polvo.",
        },
        {
          heading: "Ford F350 Caja Seca — hasta 3.5 toneladas",
          body: "Un paso arriba en capacidad, ideal para carga mediana que ya no cabe en una camioneta pero no requiere un camión completo.",
        },
        {
          heading: "Camión Caja Seca — hasta 10 toneladas",
          body: "Para mercancía comercial e industrial de mayor volumen que necesita protección total durante el trayecto.",
        },
        {
          heading: "Torton Caja Seca — hasta 10 toneladas",
          body: "Nuestra unidad de mayor tamaño en caja rígida, ideal para carga voluminosa que requiere más espacio interior.",
        },
        {
          heading: "Trailer 53 Pies — hasta 30 toneladas",
          body: "Para carga completa (FTL) de gran volumen y trayectos largos, ideal para distribución industrial y comercial a gran escala.",
        },
      ],
    },
    {
      slug: "transporte-de-carga-empresas",
      title: "Transporte de Carga para Empresas",
      metaTitle: "Transporte de Carga para Empresas",
      badge: "Servicio B2B",
      metaDescription: "Transporte de carga para empresas en CDMX y todo México. Facturación, flotilla de 1 a 30 toneladas, cobertura nacional. Cotiza tu contrato.",
      intro:
        "Ofrecemos transporte de carga para empresas que necesitan un proveedor logístico confiable, ya sea para envíos ocasionales o como parte de su operación recurrente de distribución. Facturamos para personas morales y físicas con actividad empresarial.",
      sections: [
        {
          heading: "Facturación para tu empresa",
          body: "Emitimos factura para que puedas deducir el gasto de transporte dentro de tu operación, sin trámites complicados.",
        },
        {
          heading: "Flotilla según tu volumen de operación",
          body: "Desde camionetas para entregas pequeñas hasta trailer de 53 pies para carga completa, ajustamos la unidad a las necesidades reales de tu empresa.",
        },
        {
          heading: "Cobertura nacional",
          body: "Ya sea que distribuyas dentro de la zona metropolitana o necesites enviar mercancía a otros estados, cubrimos rutas locales y foráneas en toda la República.",
        },
        {
          heading: "Atención directa",
          body: "Cotiza y coordina tus envíos por llamada o WhatsApp, sin intermediarios ni plataformas complicadas.",
        },
      ],
    },
  ],
  retornos: [
    {
      slug: "puebla",
      name: "Puebla",
      km: 130,
      duration: "1 h 45 min aprox.",
      intro:
        "Si tienes carga en Puebla y necesitas enviarla a CDMX, Naucalpan, Tlalnepantla o cualquier punto de la zona metropolitana, contamos con unidades que hacen este trayecto de regreso con frecuencia y tarifa preferencial. Ideal para empresas de Puebla que distribuyen hacia el centro del país.",
      metaDescription: "Flete de Puebla a CDMX y zona metropolitana con tarifa preferencial. Unidades de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "queretaro",
      name: "Querétaro",
      km: 220,
      duration: "2 h 30 min aprox.",
      intro:
        "Transportamos carga de Querétaro hacia CDMX y la zona metropolitana (Naucalpan, Tlalnepantla, Atizapán) con tarifa preferencial por tratarse de un viaje de regreso. Buena opción para empresas del corredor industrial de Querétaro que necesitan distribuir hacia el centro del país.",
      metaDescription: "Flete de Querétaro a CDMX y zona metropolitana con tarifa preferencial. Unidades de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "oaxaca",
      name: "Oaxaca",
      km: 460,
      duration: "6 h 30 min aprox.",
      intro:
        "Si necesitas enviar carga desde Oaxaca hacia CDMX o la zona metropolitana, ofrecemos este trayecto de regreso con tarifa preferencial, unidades preparadas para viajes largos y carga asegurada durante todo el recorrido.",
      metaDescription: "Flete de Oaxaca a CDMX y zona metropolitana con tarifa preferencial. Unidades de 1 a 30 toneladas, carga asegurada. Cotiza al 55 6185 7646.",
    },
    {
      slug: "veracruz",
      name: "Veracruz",
      km: 400,
      duration: "5 horas aprox.",
      intro:
        "Cubrimos el trayecto de Veracruz hacia CDMX y la zona metropolitana con tarifa preferencial por ser viaje de regreso, ideal para empresas relacionadas con comercio exterior y distribución que necesitan mover mercancía desde el puerto hacia el centro del país.",
      metaDescription: "Flete de Veracruz a CDMX y zona metropolitana con tarifa preferencial. Unidades de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
    },
    {
      slug: "acapulco",
      name: "Acapulco",
      km: 400,
      duration: "5 h 30 min aprox.",
      intro:
        "Transportamos carga de Acapulco hacia CDMX y la zona metropolitana con tarifa preferencial, disponible para empresas de comercio, turismo y distribución que necesitan enviar mercancía de regreso al centro del país.",
      metaDescription: "Flete de Acapulco a CDMX y zona metropolitana con tarifa preferencial. Unidades de 1 a 30 toneladas. Cotiza al 55 6185 7646.",
    },
  ],
  units: [
    {
      slug: "np300-redilas",
      name: "NP300 Redilas",
      type: "Pickup",
      capacity: "Hasta 1 tonelada",
      description:
        "Camioneta NP300 con plataforma de redilas, ideal para carga de materiales, ferretería y mercancía general. Disponible con o sin lona de protección.",
      image: "/images/np300-redilas.jpg",
    },
    {
      slug: "np300-caja-seca",
      name: "NP300 Caja Seca",
      type: "Pickup",
      capacity: "Hasta 1 tonelada",
      description:
        "Camioneta NP300 con caja seca cerrada, perfecta para mercancía que requiere protección total contra clima y polvo durante el traslado.",
      image: "/images/np300-caja-seca.jpg",
    },
    {
      slug: "torton-caja-seca",
      name: "Torton Caja Seca",
      type: "Torton",
      capacity: "Hasta 10 toneladas",
      description:
        "Camión torton con caja seca cerrada, nuestra unidad de mayor tamaño en caja rígida, ideal para carga voluminosa y de mayor volumen que requiere protección total contra clima y polvo.",
      image: "/images/torton-caja-seca.jpg",
    },
    {
      slug: "f350-caja-seca",
      name: "Ford F350 Caja Seca",
      type: "Camioneta",
      capacity: "Hasta 3.5 toneladas",
      description:
        "Camioneta Ford F350 con caja seca cerrada, ideal para carga mediana que requiere protección total contra clima y polvo durante el traslado.",
      image: "/images/f350-caja-seca.jpg",
    },
    {
      slug: "camion-caja-seca",
      name: "Camión Caja Seca",
      type: "Camión",
      capacity: "Hasta 10 toneladas",
      description:
        "Camión con caja seca cerrada para distribución empresarial y paquetería foránea, protegiendo la mercancía durante todo el trayecto.",
      image: "/images/camion-caja-seca.jpg",
    },
    {
      slug: "trailer-53-pies",
      name: "Caja Seca 53 Pies",
      type: "Trailer",
      capacity: "Hasta 30 toneladas",
      description:
        "Trailer de caja seca de 53 pies para rutas largas y carga masiva, la opción de mayor capacidad de nuestra flotilla.",
      image: "/images/trailer-53-pies.jpg",
    },
  ],
  cargoTypes: [
    {
      title: "Ferretera y construcción",
      description:
        "Materiales, herramienta, varilla, cemento y más. Experiencia comprobada en tiendas de materiales y ferreterías industriales.",
      icon: "hammer",
    },
    {
      title: "Agrícola y de campo",
      description:
        "Plantas, insumos agrícolas, maquinaria y carga a granel. Plataforma abierta o con lona según necesidad.",
      icon: "leaf",
    },
    {
      title: "Paquetería empresarial",
      description:
        "Distribución y entregas foráneas para empresas. Rutas fijas o por servicio según tu operación.",
      icon: "package",
    },
    {
      title: "Maquinaria e industrial",
      description:
        "Equipo pesado, generadores, motores y maquinaria. Amarres y aseguramiento de carga incluidos.",
      icon: "settings",
    },
    {
      title: "Con lona de protección",
      description:
        "Carga protegida contra lluvia y polvo, disponible en unidades de plataforma abierta.",
      icon: "shield",
    },
    {
      title: "Facturación disponible",
      description:
        "Emitimos factura para empresas y personas morales. Solo necesitamos tus datos fiscales.",
      icon: "file-text",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
