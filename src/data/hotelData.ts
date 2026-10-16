export interface SuiteItem {
  id: string;
  name: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  capacity: string;
  size: string;
  bed: string;
  price: string;
  priceNumber: number;
  amenities: string[];
  images: string[];
  featuredImage: string;
  whatsappMessage: string;
}

export interface GastronomiaItem {
  id: string;
  name: string;
  concept: string;
  subtitle: string;
  schedule?: string;
  description: string;
  highlights: string[];
  images: string[];
  featuredImage: string;
  whatsappMessage: string;
  menus?: {
    name: string;
    label: string;
    url: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  category: 'intimos' | 'rebeldia' | 'compartir';
  categoryLabel: string;
  name: string;
  subtitle: string;
  description: string;
  duration?: string;
  includes: string[];
  featuredImage: string;
  whatsappMessage: string;
}

export interface SpaceItem {
  id: string;
  name: string;
  category: 'social' | 'corporativo' | 'recreativo' | 'jardines';
  capacity: string;
  size?: string;
  description: string;
  features: string[];
  featuredImage: string;
  images?: string[];
  whatsappMessage: string;
}

export const HOTEL_INFO = {
  name: "Orgánico Hotel Boutique Ajusco",
  slogan: "Así se siente el Bosque, Así se siente Orgánico Ajusco.",
  location: "Camino Real 30 de Marzo, San Miguel Ajusco, Tlalpan, C.P. 14700, Ciudad de México",
  altitude: "3,000 msnm",
  phone: "+52 55 5573 7822",
  phoneRaw: "5555737822",
  phones: {
    mobiles: [
      { display: "55 9696 9073", raw: "5596969073", tel: "+525596969073" },
      { display: "55 9691 0966", raw: "5596910966", tel: "+525596910966" }
    ],
    landlines: [
      { display: "55 5645 5347", raw: "5556455347", tel: "+525556455347" },
      { display: "55 5573 7822", raw: "5555737822", tel: "+525555737822" }
    ]
  },
  whatsappNumber: "+52 55 7455 5091",
  whatsappRaw: "525574555091",
  email: "reservaciones@organicohotelboutique.com",
  contactEmail: "contacto@organicohotelboutique.com",
  socials: {
    facebook: "https://www.facebook.com/OrganicoHotelBoutique/",
    instagram: "https://www.instagram.com/organicohotelboutique/?hl=en"
  },
  bookingUrl: "https://booking.easy-rez.com/organico-hotel-boutique/es/home",
  links: {
    booking: "https://booking.easy-rez.com/organico-hotel-boutique/es/home",
    spa: "https://www.origencentroholisticoyspa.com/",
    spaName: "Origen Centro Holístico y Spa",
    group: "https://www.gohb.com.mx/",
    groupName: "Grupo Orgánico Hoteles Boutique"
  },
  logos: {
    white: "/images/logos/organico-blanco.png",
    dark: "/images/logos/organico-dark.png"
  }
};

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${HOTEL_INFO.whatsappRaw}?text=${encodeURIComponent(message.trim())}`;
}

export const SUITES_DATA: SuiteItem[] = [
  {
    id: "mini-suite",
    name: "Mini Suite",
    subtitle: "Intimidad, calidez y reconexión en el corazón del bosque",
    shortDesc: "Diseñada para escapadas románticas o retiros individuales. Acogedora, silenciosa y rodeada de pinos centenarios.",
    description: "Nuestra Mini Suite es el refugio esencial para quienes buscan desconectarse del ritmo citadino. Cuenta con opción de chimenea de leña tradicional (sujeta a disponibilidad), cama Queen Size de máximo confort, baño privado con regadera de lluvia y ventanales con vista directa a los senderos verdes del Ajusco.",
    capacity: "Máximo 2 personas",
    size: "35 m²",
    bed: "1 Cama Queen Size",
    price: "$2,900.00 MXN",
    priceNumber: 2900,
    amenities: [
      "Calefacción",
      "Batas de baño",
      "Baño con secadora de pelo",
      "Caja de seguridad",
      "Sala de estar",
      "Chimenea (bajo disponibilidad)",
      "Terraza privada",
      "TV 32” & WiFi",
      "Incluye desayuno continental"
    ],
    featuredImage: "/images/suites/mini-suite-1.webp",
    images: [
      "/images/suites/mini-suite-1.webp",
      "/images/suites/mini-suite-2.webp",
      "/images/suites/mini-suite-3.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría consultar disponibilidad y tarifas para la Mini Suite ($2,900 MXN)."
  },
  {
    id: "standard-suite",
    name: "Standard Suite",
    subtitle: "Confort alpino y terrazas abiertas a la inmensidad del bosque",
    shortDesc: "Equilibrio puro entre piedra volcánica y madera noble, con terraza privada para contemplar los atardeceres de montaña.",
    description: "Una suite espaciosa y luminosa concebida para el disfrute en pareja. Dispone de chimenea de tiro alto (sujeta a disponibilidad), amplia terraza exterior con sala campestre, cama King Size de máxima comodidad y un diseño arquitectónico que fusiona calidez y sofisticación alpina.",
    capacity: "Máximo 3 personas",
    size: "48 m²",
    bed: "1 Cama King Size",
    price: "$3,500.00 MXN",
    priceNumber: 3500,
    amenities: [
      "Calefacción",
      "Amenidades",
      "Batas de baño y pantuflas",
      "Baño con secadora de pelo",
      "Caja de seguridad",
      "Sala de estar",
      "Chimenea (bajo disponibilidad)",
      "Terraza privada",
      "TV 32” & WiFi"
    ],
    featuredImage: "/images/suites/standard-suite-1.webp",
    images: [
      "/images/suites/standard-suite-1.webp",
      "/images/suites/standard-suite-2.webp",
      "/images/suites/standard-suite-3.webp",
      "/images/suites/standard-suite-bano.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, deseo información y cotización para reservar la Standard Suite ($3,500 MXN)."
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    subtitle: "Espacio superior con sala lounge, tina panorámica y privacidad total",
    shortDesc: "Para quienes buscan un nivel superior de confort: sala de estar independiente, tina relajante y vistas al horizonte.",
    description: "La Premium Suite eleva la experiencia de descanso a otro nivel. Ofrece una sala de estar privada con chimenea monumental (sujeta a disponibilidad), tina de hidromasaje o diseño panorámico con vista a la arboleda, terraza exterior privada y detalles de bienvenida artesanales.",
    capacity: "Máximo 3 personas",
    size: "65 m²",
    bed: "1 Cama King Size + Sala Lounge",
    price: "$4,500.00 MXN",
    priceNumber: 4500,
    amenities: [
      "Calefacción",
      "Amenidades",
      "Batas de baño y pantuflas",
      "Baño con secadora de pelo",
      "Caja de seguridad",
      "Sala de estar",
      "Chimenea (bajo disponibilidad)",
      "Terraza privada",
      "TV 32” & WiFi"
    ],
    featuredImage: "/images/suites/premium-suite-1.webp",
    images: [
      "/images/suites/premium-suite-1.webp",
      "/images/suites/premium-suite-2.webp",
      "/images/suites/premium-suite-3.webp",
      "/images/suites/premium-suite-bano.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, me interesa conocer fechas disponibles para la Premium Suite ($4,500 MXN)."
  },
  {
    id: "master-suite",
    name: "Master Suite",
    subtitle: "La cúspide de Orgánico: dos niveles de arquitectura y vistas 360°",
    shortDesc: "Nuestra suite más exclusiva y emblemática. Arquitectura en dos pisos, chimenea colosal (sujeta a disponibilidad) y la máxima privacidad.",
    description: "Construida como una oda a la montaña, la Master Suite impresiona por sus techos a doble altura revestidos de maderas curadas. Distribuida en dos niveles con recámara principal panorámica en la planta alta, sala de estar monumental, comedor privado, tina de inmersión y terraza de 360 grados frente a la sierra del Ajusco.",
    capacity: "Máximo 2 personas",
    size: "92 m²",
    bed: "1 Cama King Size",
    price: "$5,500.00 MXN",
    priceNumber: 5500,
    amenities: [
      "Botella de vino de Bienvenida",
      "Cama King size",
      "Baño completo con secadora de pelo",
      "Chimenea con leñero o chimenea grande de etanol (bajo disponibilidad)",
      "Terraza privada",
      "TV con cable & WiFi",
      "Calefacción",
      "Sala de estar",
      "Caja de seguridad",
      "Batas de baño y pantuflas",
      "Amenidades"
    ],
    featuredImage: "/images/suites/master-suite-1.webp",
    images: [
      "/images/suites/master-suite-1.webp",
      "/images/suites/master-suite-2.webp",
      "/images/suites/master-suite-3.webp",
      "/images/suites/master-suite-4.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría cotizar una estancia exclusiva en la Master Suite ($5,500 MXN)."
  }
];

export const GASTRONOMIA_DATA: GastronomiaItem[] = [
  {
    id: "don-petro",
    name: "Restaurante Don Petro",
    concept: "Cocina Abierta de Montaña",
    subtitle: "Ingredientes frescos, recetas de herencia y calma al despertar",
    description: "El desayuno en Don Petro no es solo la primera comida del día: es un ritual que celebra el silencio y el placer de despertar entre pinos. Disfruta de un buffet generoso con platillos caseros, panadería recién horneada, guisados tradicionales en barro y aromas que invitan a compartir sin prisa. A la hora de la comida, la carta presenta propuestas reconfortantes preparadas en nuestra cocina abierta.",
    highlights: [
      "Buffet de montaña los fines de semana",
      "Cocina abierta a la vista de los comensales",
      "Ingredientes de productores locales del valle",
      "Panadería rústica y café de especialidad mexicano"
    ],
    featuredImage: "/images/gastronomia/don-petro-1.webp",
    images: [
      "/images/gastronomia/don-petro-1.webp",
      "/images/gastronomia/don-petro-salon.webp",
      "/images/gastronomia/don-petro-plato.webp",
      "/images/gastronomia/don-petro-2.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, deseo reservar una mesa en Restaurante Don Petro.",
    menus: [
      {
        name: "Menú Desayunos",
        label: "Desayunos & Mañanas de Montaña",
        url: "/menus/Menu-Desayunos_Don_Petro.pdf"
      },
      {
        name: "Menú Comidas",
        label: "Comidas & Temporada",
        url: "/menus/Menu-Comidas_Don_Petro.pdf"
      }
    ]
  },
  {
    id: "fuego",
    name: "Fuego - Cocina a las Brasas",
    concept: "Fuego Vivo & Sabores Ahumados",
    subtitle: "El poder primitivo de las brasas bajo el frío vigorizante de la altura",
    description: "Fuego rinde homenaje a la técnica ancestral de cocción con carbón y leña de encino. Cortes de res de primera selección sellados a fuego directo, pesca fresca a las brasas, verduras caramelizadas al humo y guarniciones rústicas servidas en terrazas cálidas con calentadores y fogateros.",
    highlights: [
      "Cortes selectos sellados a la leña de encino",
      "Técnica abierta de parrilla y ahumado lento",
      "Terraza con vistas a las coníferas y fogateros",
      "Maridaje sugerido con nuestra cava privada"
    ],
    featuredImage: "/images/gastronomia/fuego-1.webp",
    images: [
      "/images/gastronomia/fuego-1.webp",
      "/images/gastronomia/fuego-brasas.webp",
      "/images/gastronomia/fuego-terraza.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, deseo reservar una mesa en Restaurante Fuego - Cocina a las Brasas."
  },
  {
    id: "bar-miel-sobre-limon",
    name: "Bar Miel Sobre Limón",
    concept: "Mixología de Autor & Bar de Altura",
    subtitle: "Movimientos precisos, destilados mexicanos y atardeceres lentos",
    description: "En este rincón de montaña, la coctelería se convierte en un espectáculo sensorial. Menú diseñado para acompañar atardeceres lentos con vistas panorámicas del Ajusco, conversaciones profundas y noches sin prisa. Desde cócteles insignia infusionados con pino, mieles locales y mezcales oaxaqueños, hasta clásicos reinventados.",
    highlights: [
      "Cócteles insignia con botánicos y hierbas de montaña",
      "Cava privada de vinos tintos y espumosos de autor",
      "Música ambiental lounge & fogata de exterior",
      "Menú de bocadillos y snacks gourmet"
    ],
    featuredImage: "/images/gastronomia/bar-miel-limon-1.webp",
    images: [
      "/images/gastronomia/bar-miel-limon-1.webp",
      "/images/gastronomia/bar-cocktail-1.webp",
      "/images/gastronomia/bar-miel-terraza.webp",
      "/images/gastronomia/bar-barra.webp"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría reservar un espacio en Bar Miel Sobre Limón."
  }
];

export const EXPERIENCIAS_DATA: ExperienceItem[] = [
  // Íntimas
  {
    id: "cena-romantica",
    category: "intimos",
    categoryLabel: "Momentos Íntimos",
    name: "Cena Romántica de Autor",
    subtitle: "Una noche inolvidable a la luz de las velas y el bosque",
    description: "Espacio reservado con decoración íntima, iluminación tenue, menú degustación de 4 tiempos diseñado por el chef, botella de vino de la casa y servicio personalizado en un rincón privado de la propiedad.",
    includes: [
      "Montaje exclusivo privado con velas y flores",
      "Menú degustación de autor en 4 tiempos",
      "Botella de vino tinto o espumoso seleccionado",
      "Servicio de mesero privado durante la velada"
    ],
    featuredImage: "/images/experiencias/cena-romantica-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría solicitar informes y reservar la Cena Romántica de Autor."
  },
  {
    id: "pedida-de-mano",
    category: "intimos",
    categoryLabel: "Momentos Íntimos",
    name: "Pedidas de Mano Mágicas",
    subtitle: "El escenario perfecto para una promesa para toda la vida",
    description: "Diseñamos la atmósfera perfecta en nuestros jardines o terrazas con vistas a la sierra: montaje monumental, letras luminosas 'Marry Me', camino de velas, pirotecnia fría, champaña de celebración y cena privada.",
    includes: [
      "Coordinación personalizada y montaje escenográfico",
      "Letras gigantes o arco floral decorativo",
      "Camino de antorchas y velas aromáticas",
      "Botella de champaña para el brindis",
      "Cena romántica de celebración en 4 tiempos"
    ],
    featuredImage: "/images/experiencias/pedida-mano-card.webp",
    whatsappMessage: "Hola Orgánico Ajusco, quiero organizar una Pedida de Mano inolvidable en sus espacios."
  },
  {
    id: "fogatada-privada",
    category: "intimos",
    categoryLabel: "Momentos Íntimos",
    name: "Fogatada Privada Gourmet",
    subtitle: "Calor de fuego, estrellas y malvaviscos en tu propio deck",
    description: "Disfruta de una fogata privada encendida exclusivamente para ti en una terraza natural. Incluye kit gourmet de s'mores artesanales, botella de vino tinto, cobijas térmicas y madera de encino de larga duración.",
    includes: [
      "Fogatero privado con encendido asistido",
      "Kit gourmet para preparar s'mores con chocolates finos",
      "Botella de vino tinto de la casa",
      "Mantas y cobijas térmicas de montaña"
    ],
    featuredImage: "/images/experiencias/fogata-privada-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo cotizar y reservar una Fogatada Privada Gourmet."
  },
  {
    id: "picnic-bosque",
    category: "intimos",
    categoryLabel: "Momentos Íntimos",
    name: "Picnic Gourmet en el Bosque",
    subtitle: "Montaje campestre con mantas, cojines y tabla artesanal",
    description: "Un descanso romántico o relajante entre árboles. Te preparamos un montaje estilizado sobre el pasto o deck privado con tabla de charcutería, quesos madurados, frutas de temporada, pan artesanal y vino.",
    includes: [
      "Montaje bohemio con tapetes, cojines y canasta rústica",
      "Tabla de quesos y carnes frías artesanales",
      "Pan rústico recién horneado y fruta fresca",
      "Botella de vino y aguas minerales"
    ],
    featuredImage: "/images/experiencias/picnic-intimo.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo reservar un Picnic Gourmet en el bosque."
  },
  {
    id: "cinema-organico",
    category: "intimos",
    categoryLabel: "Momentos Íntimos",
    name: "Cinema Orgánico al Aire Libre",
    subtitle: "Cine bajo las estrellas del Ajusco con fogata y cobijas",
    description: "Proyector de alta definición, pantalla gigante, sillones mullidos, sonido envolvente y una selección de películas para disfrutar una velada cinematográfica única al aire libre con palomitas recién hechas.",
    includes: [
      "Espacio exclusivo reservado con pantalla de proyección",
      "Selección personalizada de películas",
      "Palomitas de maíz caseras ilimitadas",
      "Servicio de coctelería y snacks a la carta"
    ],
    featuredImage: "/images/experiencias/cinema-organico.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo reservar la experiencia de Cinema Orgánico al aire libre."
  },

  // Rebeldía
  {
    id: "cuatrimotos",
    category: "rebeldia",
    categoryLabel: "Momentos Rebeldía",
    name: "Ruta en Cuatrimotos",
    subtitle: "Adrenalina y terracería por los senderos agrestes del Ajusco",
    description: "Recorrido guiado en cuatrimoto monoplaza o biplaza a través de caminos de tierra, subidas rocosas y senderos rodeados de árboles gigantes. Una inyección de energía pura en contacto directo con la montaña.",
    includes: [
      "Equipo de seguridad (casco y gafas protectoras)",
      "Guía experimentado durante todo el trayecto",
      "Instrucción previa de manejo",
      "Rutas panorámicas con paradas para fotografías"
    ],
    featuredImage: "/images/experiencias/cuatrimotos-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, me interesa reservar la experiencia de Cuatrimotos por los senderos."
  },
  {
    id: "cabalgata",
    category: "rebeldia",
    categoryLabel: "Momentos Rebeldía",
    name: "Cabalgata por la Sierra",
    subtitle: "Paseos a caballo con la majestuosidad del bosque como fondo",
    description: "Siente el ritmo pausado de la naturaleza a lomo de caballo. Paseos guiados por los valles y pendientes del Ajusco, respirando el aroma a pino fresco y escuchando el crujir de las ramas.",
    includes: [
      "Caballo dócil y adiestrado según nivel del jinete",
      "Acompañamiento de guía local",
      "Recorrido de 60 a 90 minutos por senderos naturales",
      "Vistas panorámicas a la cordillera"
    ],
    featuredImage: "/images/experiencias/cabalgata-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría cotizar una Cabalgata guiada por la montaña."
  },
  {
    id: "trekking-montana",
    category: "rebeldia",
    categoryLabel: "Momentos Rebeldía",
    name: "Trekking & Caminata de Altura",
    subtitle: "Caminatas de exploración a más de 3,000 metros de altitud",
    description: "Rutas de senderismo interpretativo para conectar con la flora y fauna del Ajusco. Guiadas por expertos locales para conocer la historia geológica y los secretos botánicos del bosque.",
    includes: [
      "Guía de montaña certificado",
      "Bastones de senderismo y kit de hidratación",
      "Paradas interpretativas de flora nativa",
      "Ascenso a miradores naturales"
    ],
    featuredImage: "/images/experiencias/trekking-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo información sobre las rutas de Trekking de montaña."
  },
  {
    id: "tiro-arco-rifle",
    category: "rebeldia",
    categoryLabel: "Momentos Rebeldía",
    name: "Tiro con Arco & Tiro Deportivo",
    subtitle: "Precisión, concentración y puntería al aire libre",
    description: "Prueba tu pulso y puntería en nuestro campo de tiro supervisado. Pon a prueba tus habilidades con arcos olímpicos/recreativos y rifles deportivos de aire comprimido.",
    includes: [
      "Instrucción técnica por especialista",
      "Arcos y flechas adaptados o rifle deportivo",
      "Dianas reglamentarias de diferentes distancias",
      "Reglamento y medidas completas de seguridad"
    ],
    featuredImage: "/images/experiencias/tiro-arco.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo solicitar información de la actividad de Tiro con Arco y Rifle."
  },

  // Para Compartir
  {
    id: "fogatada-grupal",
    category: "compartir",
    categoryLabel: "Momentos Para Compartir",
    name: "Fogatada Grupal de Montaña",
    subtitle: "Risas, historias y música alrededor del fuego central",
    description: "El punto de encuentro social de Orgánico. Cada tarde noche encendemos el fogatero central de piedra para que los huéspedes se reúnan, compartan un vino caliente, malvaviscos y la magia nocturna del Ajusco.",
    includes: [
      "Fogatero comunal encendido al atardecer",
      "Música acústica y atmósfera relajada",
      "Estación de malvaviscos",
      "Servicio de bebidas y coctelería a la orden"
    ],
    featuredImage: "/images/experiencias/fogata-grupal-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo información sobre la Fogatada Grupal de los fines de semana."
  },
  {
    id: "taller-pizzas",
    category: "compartir",
    categoryLabel: "Momentos Para Compartir",
    name: "Taller de Pizzas a la Leña",
    subtitle: "Crea tu propia receta con masa madre y horno de piedra",
    description: "Una experiencia culinaria divertida y participativa. Nuestro chef pizzero te enseña los secretos del amasado, fermentación y horneado a más de 400°C en horno tradicional de leña.",
    includes: [
      "Ingredientes gourmet (quesos, jamones, vegetales locales)",
      "Masa artesanal y salsas de la casa",
      "Asesoría de chef maestro pizzero",
      "Copa de vino para maridar tu propia pizza"
    ],
    featuredImage: "/images/experiencias/taller-pizza-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, quiero reservar un lugar en el Taller de Pizzas a la Leña."
  },
  {
    id: "cata-vinos-mixologia",
    category: "compartir",
    categoryLabel: "Momentos Para Compartir",
    name: "Cata de Vinos & Taller de Mixología",
    subtitle: "Descubre aromas, notas y técnicas con nuestros sommeliers",
    description: "Sesiones guiadas por expertos para catar etiquetas seleccionadas de vinos mexicanos o aprender a elaborar cócteles de autor utilizando ingredientes silvestres del Ajusco.",
    includes: [
      "Degustación de 4 etiquetas o 3 cócteles preparados",
      "Tabla de maridaje con quesos y frutos secos",
      "Guía explicativa de notas y procesos",
      "Recetario digital exclusivo"
    ],
    featuredImage: "/images/experiencias/cata-vino-1.webp",
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría informes sobre las Catas de Vino y Talleres de Mixología."
  }
];

export const ESPACIOS_DATA: SpaceItem[] = [
  {
    id: "auditorio-isaura",
    name: "Auditorio Isaura",
    category: "corporativo",
    capacity: "Hasta 100 Personas",
    description: "El espacio perfecto para presentaciones empresariales, conferencias, capacitaciones y reuniones estratégicas. Equipado con proyector de 3,000 lúmenes para imágenes nítidas, sistema de audio profesional y room darkening para máxima concentración, garantiza un entorno ideal para comunicar con impacto.",
    features: [
      "Proyector de 3,000 lúmenes de alta definición",
      "Sistema de audio profesional y microfonía",
      "Room darkening para proyección óptima y máxima concentración",
      "Conectividad digital y servicio de coffee break continuo"
    ],
    featuredImage: "/images/espacios/auditorio-isaura-1.webp",
    images: [
      "/images/espacios/auditorio-isaura-1.webp",
      "/images/espacios/auditorio-isaura-2.webp",
      "/images/espacios/auditorio-isaura-extra-1.jpg",
      "/images/espacios/auditorio-isaura-extra-2.jpg",
      "/images/espacios/auditorio-isaura-extra-3.jpg",
      "/images/espacios/auditorio-isaura-extra-4.jpg",
      "/images/espacios/auditorio-isaura-extra-5.jpg"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, solicito informes y disponibilidad para reservar el Auditorio Isaura."
  },
  {
    id: "salon-victoria",
    name: "Salón Victoria",
    category: "social",
    capacity: "Hasta 80 Personas",
    description: "Diseñado para recibir eventos de gran escala con estilo y funcionalidad, el Salón Victoria es el corazón de nuestras celebraciones más memorables. Con capacidad para adaptarse a conferencias, congresos, banquetes y recepciones, cuenta con proyector de alta calidad, sistema de audio profesional y todo el equipamiento necesario para garantizar el éxito de tu evento.",
    features: [
      "Vistas panorámicas hacia el lago y arboleda",
      "Proyector de alta resolución y audio profesional",
      "Espacio adaptable para congresos, banquetes o cócteles",
      "Chimenea monumental y acabados en maderas nobles"
    ],
    featuredImage: "/images/espacios/salon-victoria-4.jpg",
    images: [
      "/images/espacios/salon-victoria-4.jpg",
      "/images/espacios/salon-victoria-5.jpg",
      "/images/espacios/salon-victoria-6.jpg",
      "/images/espacios/salon-victoria-lago-3.png",
      "/images/espacios/salon-victoria-cocina-3.jpg"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, deseo cotizar el Salón Victoria para un evento especial."
  },
  {
    id: "casa-club",
    name: "Casa Club Orgánico",
    category: "recreativo",
    capacity: "Hasta 40 Personas",
    description: "Te espera un espacio acogedor donde el tiempo transcurre sin prisas. Podrás retar a tus amigos en la mesa de billar, compartir risas con juegos de mesa o perderte entre páginas en nuestra librería privada, frente a la chimenea encendida.",
    features: [
      "Mesa de billar y póker profesional",
      "Librería privada y rincones de lectura",
      "Juegos de mesa seleccionados",
      "Radios para solicitud de bebidas y snacks directo al bar"
    ],
    featuredImage: "/images/espacios/casa-club-1.webp",
    images: [
      "/images/espacios/casa-club-1.webp",
      "/images/espacios/casa-club-2.webp",
      "/images/espacios/casa-club-extra-1.png",
      "/images/espacios/casa-club-extra-2.png",
      "/images/espacios/casa-club-extra-3.png",
      "/images/espacios/casa-club-extra-4.png",
      "/images/espacios/casa-club-extra-5.png"
    ],
    whatsappMessage: "Hola Orgánico Ajusco, quisiera consultar detalles y exclusividad de la Casa Club."
  },
  {
    id: "jardin-chulavista",
    name: "Jardín Chula Vista",
    category: "jardines",
    size: "775 m²",
    capacity: "Hasta 150 Personas",
    description: "Diseñado para celebrar la vida y los momentos que merecen recordarse, Chula Vista es el escenario perfecto para bodas íntimas, rituales espirituales, experiencias sensoriales y encuentros que dejan huella. Su nombre lo dice todo: una vista hermosa que invita a detenerse, respirar profundo y agradecer.",
    features: [
      "Superficie de 775 m² de césped natural impecable",
      "Mirador con vista abierta a la inmensidad del valle",
      "Ideal para bodas íntimas y rituales al atardecer",
      "Acceso directo y facilidades para montajes decorativos"
    ],
    featuredImage: "/images/espacios/jardin-chulavista.webp",
    whatsappMessage: "Hola Orgánico Ajusco, me gustaría cotizar el Jardín Chula Vista para una boda o evento."
  },
  {
    id: "jardin-loma-alta",
    name: "Jardín Loma Alta",
    category: "jardines",
    size: "896 m²",
    capacity: "Hasta 200 Personas",
    description: "Rodeado de verdes intensos, cielos despejados y una panorámica inigualable, Loma Alta no solo ofrece una vista espectacular, sino una energía especial que invita a celebrar con profundidad y autenticidad. Ideal para ceremonias emotivas, encuentros espirituales y eventos donde cada detalle importa.",
    features: [
      "Superficie de 896 m² en elevación panorámica",
      "Entorno místico rodeado de coníferas centenarias",
      "Perfecto para ceremonias emotivas y recepciones de bienvenida",
      "Vistas despejadas al cielo y horizonte de montaña"
    ],
    featuredImage: "/images/espacios/jardin-loma-alta.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo información sobre el Jardín Loma Alta para una ceremonia."
  },
  {
    id: "jardin-linda-vista",
    name: "Jardín Linda Vista",
    category: "jardines",
    size: "1,290 m²",
    capacity: "Hasta 300 Personas",
    description: "Linda Vista es el lugar donde la naturaleza se vuelve cómplice de tu historia. Diseñado para celebrar el amor, la vida y los momentos únicos, este jardín ha sido creado con el alma, respetando cada rincón del entorno que lo rodea. Es perfecto para bodas íntimas, eventos especiales o simplemente para contemplar en silencio la grandeza del mundo.",
    features: [
      "Nuestro jardín más amplio: 1,290 m² de explanada",
      "Capacidad para carpas monumentales y montajes de gran formato",
      "Rodeado de árboles centenarios con privacidad absoluta",
      "Escenario idóneo para bodas de ensueño y banquetes al aire libre"
    ],
    featuredImage: "/images/espacios/jardin-loma-linda.webp",
    whatsappMessage: "Hola Orgánico Ajusco, solicito cotización para el Jardín Linda Vista para un banquete."
  },
  {
    id: "jardin-loma-escondida",
    name: "Jardín Loma Escondida",
    category: "jardines",
    size: "210 m²",
    capacity: "Hasta 50 Personas",
    description: "Entre caminos ocultos y susurros del bosque, se encuentra Jardín Loma Escondida, un refugio natural que parece haber sido descubierto por casualidad… pero que se queda para siempre en el corazón. Su nombre no es casual: aquí, la magia se esconde entre árboles centenarios, cielos que abrazan y una quietud que reconforta.",
    features: [
      "Superficie íntima de 210 m² en un claro del bosque",
      "Aislamiento acústico natural para máxima discreción",
      "Ideal para rituales holísticos, fogatas íntimas o picnics privados",
      "Atmósfera envolvente entre coníferas y cielo abierto"
    ],
    featuredImage: "/images/espacios/jardin-loma-escondida.webp",
    whatsappMessage: "Hola Orgánico Ajusco, deseo informes para un evento íntimo en el Jardín Loma Escondida."
  }
];

export const EVENTOS_EMPRESARIALES_DATA = {
  hero: {
    tag: "Corporativo & Negocios",
    title: "Eventos Empresariales que Conectan, Inspiran y Generan Resultados",
    subtitle: "Desde reuniones ejecutivas y kick offs hasta team buildings, retiros corporativos y activaciones de marca. Diseñamos experiencias a la medida rodeadas de naturaleza, a solo 45 minutos de la CDMX.",
    ctaWhatsApp: "Hola Orgánico Ajusco, me gustaría cotizar un evento corporativo para nuestra empresa.",
    image: "/images/eventos/corp-hero-banner.png"
  },
  stats: [
    { value: "+10", label: "Años Creando Experiencias" },
    { value: "+500", label: "Eventos Realizados" },
    { value: "+200", label: "Empresas & Marcas Atendidas" },
    { value: "45 min", label: "Desde el Centro de la CDMX" }
  ],
  quote: {
    heading: "Hemos sido testigos de cientos de historias que han encontrado aquí su lugar ideal.",
    cta: "Cotiza tu Evento Hoy",
    image: "/images/eventos/corp-mcdonalds-52.jpg"
  },
  otam: {
    badge: "Casa Productora de Experiencias",
    title: "OTAM | Casa Productora de Experiencias",
    p1: "Contamos con espacios únicos al aire libre ideales para cualquier evento, experiencias en Bosque, Playa, y en Ciudad, sin embargo también puedes disfrutarlas fuera de nuestros hoteles, te acompañamos de principio a fin en la planeación, organización y operación de actividades en cualquier lugar que tu imaginación nos proponga.",
    p2: "Todas nuestras experiencias están disponibles en cualquiera de las propiedades de Grupo Orgánico Hoteles Boutique. Queremos que seas parte de nuestra historia, por lo que te invitamos a conocer todas las experiencias que tenemos especialmente para ti. ¡Sé parte de nuestra familia!",
    ctaText: "Descubre OTAM",
    link: "https://www.somosotam.com/",
    image: "/images/eventos/corp-ironchef-23.jpg"
  },
  successCase: {
    title: "ADIDAS RUNNING RETREAT",
    badge: "Caso de Éxito Emblemático",
    quote: "“Un retiro organizado por Adidas Runners, celebrado en el pintoresco Orgánico Hotel Boutique Ajusco, ubicado en pleno bosque del Ajusco, apenas a 30 minutos de la Ciudad de México. Fue una experiencia ideal para corredores, entrenadores y capitanes de la comunidad Adidas Runners, enfocada en unir naturaleza, actividad física y bienestar.”",
    tagline: "Ya sea que busques fortalecer la conexión entre tu equipo, reconocer logros o simplemente compartir un momento especial fuera de la rutina, tenemos la experiencia ideal para lograrlo.",
    image: "/images/eventos/corp-adidas-4.jpg"
  },
  institutionalCase: {
    title: "UNIÓN EUROPEA EN EL BOSQUE",
    badge: "Producción & Operación Integral",
    description: "Grupo Orgánico Hoteles Boutique operó desde cero todo el evento en el Bosque de Chapultepec: diseño y montaje monumental del escenario sobre el lago, logística integral, protocolo diplomático internacional, ensambles artísticos y coordinación de actividades multiculturales.",
    images: [
      {
        src: "/images/eventos/union-europea-4.jpg",
        title: "Escenario Monumental sobre el Lago",
        caption: "Ensamble de gaitas y percusión sobre el lago con banderas de México y la Unión Europea."
      },
      {
        src: "/images/eventos/union-europea-1.jpg",
        title: "Danza Folclórica Internacional",
        caption: "Presentaciones artísticas y expresiones culturales tradicionales en el escenario principal."
      },
      {
        src: "/images/eventos/union-europea-3.jpg",
        title: "Conducción y Protocolo",
        caption: "Conducción oficial y actividades interactivas durante la jornada diplomática."
      },
      {
        src: "/images/eventos/union-europea-2.jpg",
        title: "Concurrencia y Comunidad",
        caption: "Asistentes y familias celebrando la alianza cultural y la hermandad entre naciones."
      }
    ]
  },
  modalidades: [
    {
      id: "team-building",
      title: "Team Building",
      highlight: "Fortalece la comunicación, liderazgo y trabajo en equipo.",
      description: "Circuitos de desafíos colaborativos en el bosque, tiro con arco estratégico, rallies de orientación y dinámicas como Bicicleta del Cambio o Iron Chef.",
      icon: "Users",
      image: "/images/eventos/corp-bicicleta-4.jpg"
    },
    {
      id: "offsites",
      title: "Offsites Corporativos",
      highlight: "Planeación estratégica lejos de la oficina.",
      description: "Jornadas de inmersión total en el Auditorio Isaura con equipamiento audiovisual premium, pausas de café gourmet y sesiones de trabajo sin distracciones urbanas.",
      icon: "Compass",
      image: "/images/eventos/corp-mcdonalds-61.jpg"
    },
    {
      id: "kick-offs",
      title: "Kick Offs",
      highlight: "Alinea objetivos y motiva a tu equipo.",
      description: "Presentaciones de inicio de año o cuarto de ciclo en un ambiente de montaña que despierta la inspiración, el compromiso y el sentido de pertenencia.",
      icon: "Target",
      image: "/images/eventos/corp-mcdonalds-40.jpg"
    },
    {
      id: "wellness",
      title: "Wellness Corporativo",
      highlight: "Sound healing, yoga, meditación y bienestar.",
      description: "Sesiones guiadas de mindfulness, baños de sonido tibetano, respiración consciente y spa holístico para renovar la energía y prevenir el agotamiento.",
      icon: "Sparkles",
      image: "/images/eventos/corp-meditacion-1.png"
    },
    {
      id: "activaciones",
      title: "Activaciones de Marca",
      highlight: "Experiencias memorables para conectar con audiencias.",
      description: "Lanzamientos de productos automotrices, deportivos y lifestyle en escenarios naturales impactantes con facilidades de producción audiovisual de alto nivel.",
      icon: "Award",
      image: "/images/eventos/corp-adidas-1.jpg"
    }
  ],
  gallery: [
    { src: "/images/eventos/corp-mcdonalds-40.jpg", alt: "Retiro empresarial McDonald's en Orgánico Ajusco" },
    { src: "/images/eventos/corp-adidas-4.jpg", alt: "Adidas Running Retreat en el bosque" },
    { src: "/images/eventos/union-europea-4.jpg", alt: "Cumbre Unión Europea con escenario sobre el lago" },
    { src: "/images/eventos/corp-ironchef-16.jpg", alt: "Dinámica Iron Chef Corporativo al aire libre" },
    { src: "/images/eventos/corp-medix-7.jpg", alt: "Retiro y planeación corporativa Medix" },
    { src: "/images/eventos/corp-bicicleta-10.jpg", alt: "Team building Bicicleta del Cambio" },
    { src: "/images/eventos/union-europea-1.jpg", alt: "Danzas folclóricas en evento de la Unión Europea" },
    { src: "/images/eventos/corp-mixologia-pintura-1.png", alt: "Taller de Mixología y Pintura Intuitiva" }
  ]
};
