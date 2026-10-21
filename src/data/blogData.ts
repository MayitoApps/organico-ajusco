export interface BlogImage {
  src: string;
  caption: string;
  alt: string;
}

export interface BlogSection {
  heading: string;
  body: string[];
  tip?: string;
  quote?: string;
  image?: BlogImage;
  imageGrid?: BlogImage[];
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Romance & Parejas' | 'Eventos & Retiros' | 'Gastronomía' | 'Bodas de Bosque' | 'Naturaleza & Bienestar';
  categorySlug: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  gallery?: BlogImage[];
  inboundCta: {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    whatsappText: string;
  };
  content: {
    intro: string;
    sections: BlogSection[];
    conclusion: string;
  };
}

export const BLOG_CATEGORIES = [
  { name: 'Todos', slug: 'todos' },
  { name: 'Romance & Parejas', slug: 'romance' },
  { name: 'Eventos & Retiros', slug: 'eventos' },
  { name: 'Gastronomía', slug: 'gastronomia' },
  { name: 'Bodas de Bosque', slug: 'bodas' },
  { name: 'Naturaleza & Bienestar', slug: 'bienestar' },
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'escapada-romantica-ajusco-cdmx',
    title: 'Una fogata, una copa de vino y ustedes dos: el arte de escaparse juntos al bosque',
    subtitle: 'Lo que aprendimos recibiendo a parejas que solo necesitaban apagar las pantallas, prender la chimenea y volverse a escuchar sin prisa.',
    excerpt: 'Entre el olor a pino fresco, el frío rico de la tarde y el calor de la leña, te contamos cómo planear ese fin de semana en pareja que llevan meses posponiendo a sólo 45 minutos de la ciudad.',
    category: 'Romance & Parejas',
    categorySlug: 'romance',
    author: {
      name: 'Mariana & Carlos',
      role: 'Anfitriones en Orgánico Ajusco',
    },
    publishedAt: '2026-10-15',
    readTime: '4 min de lectura',
    featuredImage: '/images/experiencias/cena-romantica-1.webp',
    tags: ['Escapada en Pareja', 'Momentos Íntimos', 'Cabaña con Chimenea', 'Fin de Semana Juntos', 'Bosque del Ajusco'],
    metaTitle: 'Escapada Romántica en el Ajusco | Momentos Juntos Frente a la Chimenea',
    metaDescription: 'Descubre cómo planear una escapada en pareja íntima y sin prisas. Suites acogedoras con chimenea, cenas con velas en el bosque y vino caliente en Orgánico Ajusco.',
    gallery: [
      {
        src: '/images/experiencias/pedida-mano-toast.webp',
        caption: 'Un brindis con el sol cayendo detrás de las montañas',
        alt: 'Brindis en pareja al atardecer en Orgánico Ajusco',
      },
      {
        src: '/images/suites/premium-suite-1.webp',
        caption: 'Nuestras suites de madera pensadas para descansar de verdad',
        alt: 'Habitación acogedora de madera en la montaña',
      },
      {
        src: '/images/experiencias/cata-vino-1.webp',
        caption: 'Una tarde probando vinos y platicando de todo un poco',
        alt: 'Cata de vino íntima entre árboles',
      },
    ],
    inboundCta: {
      badge: 'Un tiempo para ustedes',
      title: '¿Hace cuánto no se regalan un fin de semana a solas?',
      description: 'Platícanos qué fecha tienen en mente. Les preparamos la suite, dejamos la leña lista y si quieren, les organizamos una cena bajo las estrellas.',
      buttonText: 'Conocer las Suites',
      buttonHref: '/suites',
      whatsappText: 'Hola Mariana y Carlos, leí su artículo en el blog y nos gustaría planear una escapada en pareja a Orgánico Ajusco.',
    },
    content: {
      intro: 'Nos pasa a todos: la semana se va volando entre pendientes del trabajo, el tráfico de Periférico, mensajes que contestar y cenas rápidas mientras vemos una serie en la tele. De pronto te das cuenta de que hace semanas no te sientas con tu pareja a platicar con calma, sin mirar el reloj. Por fortuna, a menos de una hora hacia el sur de la ciudad, hay un rincón donde el tiempo parece bajar la velocidad.',
      sections: [
        {
          heading: '1. El ritual de prender el fuego y soltar el teléfono',
          body: [
            'Cuando llegas a la montaña, lo primero que notas es el cambio en el aire: huele a tierra mojada, a resina de pino y a leña limpia. Entras a la suite, acomodas tus cosas y prendes la chimenea. Hay algo casi mágico en ese momento: el sonido de las chispas tronando y la luz cálida bailando en las paredes de madera invitan de inmediato a dejar el celular en la bolsa.',
            'No necesitas un itinerario lleno de actividades. A veces el mejor plan de fin de semana es simplemente ponerse ropa cómoda, abrir una botella de vino mexicano, taparse con una cobija rica y ponerse al día con la persona que tienes al lado.',
          ],
          image: {
            src: '/images/suites/master-suite-1.webp',
            caption: 'Nuestras suites están hechas con maderas nobles y ventanales grandes para ver llover o atardecer calientitos adentro.',
            alt: 'Suite acogedora con chimenea encendida en Orgánico Ajusco',
          },
          tip: 'Un consejo de corazón: si planean venir en fin de semana, escríbannos con un par de semanas de anticipación. Al tener pocas suites, cuidamos que nunca haya ruido ni tumultos.',
        },
        {
          heading: '2. Detalles que se quedan grabados en la memoria',
          body: [
            'Nos encanta cuando alguien nos pide ser cómplices de una sorpresa. Puede ser desde una cena íntima con un caminito de antorchas y velas parpadeando entre los pinos, hasta una fogatita privada donde les llevamos malvaviscos, chocolate caliente y copas para brindar.',
            'Aquí no hay prisas. Si quieren quedarse tres horas platicando alrededor del fuego después de cenar, el bosque es todo suyo.',
          ],
          imageGrid: [
            {
              src: '/images/experiencias/cena-romantica-2.webp',
              caption: 'Una mesa lista solo para ustedes dos en medio del bosque.',
              alt: 'Cena con velas en claro de bosque',
            },
            {
              src: '/images/experiencias/fogata-privada-1.webp',
              caption: 'Calentarse las manos frente a la fogata con chocolate y malvaviscos.',
              alt: 'Fogata nocturna para dos personas en la montaña',
            },
          ],
          quote: '"El mejor regalo que le puedes hacer a quien amas no es algo material, es tu atención completa y tu tiempo sin distracciones."',
        },
        {
          heading: '3. Comer rico, caliente y con calma',
          body: [
            'En la montaña el frío despierta el apetito de una forma muy especial. En Don Petro la cocina gira alrededor de las brasas: carnes jugosas selladas al fuego, quesos derretidos, pan rústico recién salido del horno y ensaladas frescas.',
            'Comer viendo cómo la neblina baja por la ladera de los cerros mientras disfrutas de una buena copa de vino hace que cada bocado sepa a hogar.',
          ],
          image: {
            src: '/images/gastronomia/fuego-terraza.webp',
            caption: 'Nuestra terraza: el lugar favorito para comer rico viendo cómo atardece en la sierra.',
            alt: 'Comida al fuego con vista al bosque en Orgánico Ajusco',
          },
        },
        {
          heading: '4. ¿Qué empacar? Vente cómodo y abrigado',
          body: [
            'A 3,000 metros el clima es fresco y agradecido. En el día el sol calienta rico y dan ganas de caminar, pero al caer la tarde la temperatura baja rápido.',
            'Tráete tu suéter favorito, una chamarra calientita para la noche, tenis o botas cómodas para andar por los senderos y muchas ganas de descansar.',
          ],
        },
      ],
      conclusion: 'A veces lo único que necesitamos para reencontrarnos es un lugar tranquilo donde no haya nada urgente que hacer. Aquí los esperamos con el fuego encendido.',
    },
  },
  {
    slug: 'retiro-corporativo-team-building-ajusco',
    title: 'Cerrar las laptops y hablar de verdad: por qué tu equipo necesita salir al bosque',
    subtitle: 'Las grandes ideas nunca nacieron en una sala de juntas con luces frías. Nacen compartiendo un café caliente, cocinando juntos o platicando frente a una fogata.',
    excerpt: 'Más allá del típico team building aburrido y acartonado, te compartimos cómo un par de días en la montaña logran que los equipos vuelvan a mirarse a los ojos, reírse y remar hacia el mismo lado.',
    category: 'Eventos & Retiros',
    categorySlug: 'eventos',
    author: {
      name: 'Rodrigo',
      role: 'Coordinador de Retiros y Experiencias de Equipo',
    },
    publishedAt: '2026-10-10',
    readTime: '5 min de lectura',
    featuredImage: '/images/eventos/corp-adidas-1.jpg',
    tags: ['Retiros de Equipo', 'Reconectar Personas', 'Convivencia Real', 'Offsite en la Naturaleza', 'Empresas Humanas'],
    metaTitle: 'Retiros y Team Building en el Ajusco | Conectar Personas en el Bosque',
    metaDescription: 'Organiza una jornada diferente para tu equipo de trabajo. Salones rodeados de bosque, dinámicas humanas al aire libre y comida compartida en Orgánico Ajusco.',
    gallery: [
      {
        src: '/images/eventos/corp-mcdonalds-40.jpg',
        caption: 'Risas, retos y buena vibra compartida entre compañeros',
        alt: 'Equipo de trabajo divirtiéndose en dinámicas al aire libre',
      },
      {
        src: '/images/eventos/union-europea-1.jpg',
        caption: 'Espacio para conversar con profundidad y empatía',
        alt: 'Reunión de equipo al aire libre en Orgánico Ajusco',
      },
      {
        src: '/images/espacios/auditorio-isaura-1.webp',
        caption: 'Salones cómodos donde las sesiones de planeación fluyen mejor',
        alt: 'Salón de trabajo con luz natural en el Ajusco',
      },
    ],
    inboundCta: {
      badge: 'Un respiro para tu gente',
      title: 'Diseñemos un día donde su equipo vuelva a conectar',
      description: 'Platícanos qué necesita tu equipo: si quieren trabajar en metas, celebrar un logro o simplemente convivir sin pantallas de por medio. Nos encargamos de todo.',
      buttonText: 'Ver Espacios para Equipos',
      buttonHref: '/eventos-empresariales',
      whatsappText: 'Hola Rodrigo, leí el blog sobre retiros de equipo y me gustaría planear una jornada diferente para mi empresa.',
    },
    content: {
      intro: 'Todos hemos estado ahí: una reunión de cuatro horas en una sala cerrada donde la mitad del equipo mira de reojo los correos en la computadora y la otra mitad solo espera a que den las dos de la tarde. El cansancio acumulado no se quita con otro mensaje por Slack ni con una pizza fría en la oficina. Para que un equipo cree cosas nuevas, primero necesita volver a sentirse un grupo de personas.',
      sections: [
        {
          heading: '1. Cuando quitas el ruido de la ciudad, las personas se escuchan',
          body: [
            'Llegar a un lugar rodeado de árboles y respirar aire frío tiene un efecto casi instantáneo: los hombros bajan, el ceño se relaja y la gente deja de contestar en piloto automático. En la montaña las conversaciones son distintas; no hay prisa por correr a otra junta y la mente tiene espacio para pensar con perspectiva.',
            'Hemos visto a directores generales y a jóvenes recién ingresados platicar como iguales sentados en una banca de madera con una taza de café recién colado en las manos. Esa cercanía es imposible de forzar en una oficina tradicional.',
          ],
          image: {
            src: '/images/eventos/corp-meditacion-1.png',
            caption: 'Comenzar el día respirando aire puro en el pasto cambia por completo la energía de cualquier sesión de trabajo.',
            alt: 'Grupo de trabajo en sesión matutina al aire libre',
          },
          quote: '"Los mejores acuerdos no nacen de la presión; se forjan en lugares donde la mente puede respirar con calma."',
        },
        {
          heading: '2. Dinámicas donde nadie finge: cocinar, reír y colaborar',
          body: [
            'Olvídate de las dinámicas incómodas de oficina donde nadie quiere participar. Aquí la convivencia se da de manera natural:',
            '• Desafío de Cocina al Fuego: Equipos que preparan juntos una receta a las brasas guiados por nuestros cocineros. Se ensucian las manos, se ayudan, se ríen de lo que se les quema y disfrutan juntos de lo que prepararon.',
            '• Rallys y Caminatas por la Sierra: Mover el cuerpo, salir a caminar juntos y ayudarse a subir veredas en el bosque une mucho más que cien correos electrónicos.',
            '• La Fogata de Cierre: Al terminar la tarde, prender un buen fuego para platicar con honestidad sobre lo que sueñan lograr juntos.',
          ],
          imageGrid: [
            {
              src: '/images/eventos/corp-ironchef-16.jpg',
              caption: 'Cocinando al fuego: donde se olvidan los puestos y se trabaja en equipo de verdad.',
              alt: 'Colaboradores cocinando juntos en desafío de brasas',
            },
            {
              src: '/images/eventos/corp-mixologia-51.jpg',
              caption: 'Preparando cócteles con botánicos y compartiendo un buen rato.',
              alt: 'Taller de mixología entre compañeros de equipo',
            },
          ],
          tip: 'Una idea que siempre funciona: dejen un espacio de 2 horas sin agenda fija. Verás que es justo ahí donde surgen las ideas más valiosas del retiro.',
        },
        {
          heading: '3. Comodidad para trabajar y desconexión para descansar',
          body: [
            'Estar en la montaña no significa sufrir: tenemos salones amplios con chimenea, pantallas para proyectar, café calientito todo el día y comida reconfortante preparada al momento.',
            'Y si deciden quedarse a dormir, despertar con el canto de los pájaros y el sol pegando en las cabañas es el mejor reinicio que cualquier líder le puede regalar a su gente.',
          ],
          image: {
            src: '/images/espacios/casa-club-1.webp',
            caption: 'Nuestra Casa Club: madera, ventanales panorámicos y chimenea para trabajar a gusto.',
            alt: 'Salón de Casa Club en Orgánico Ajusco con vista al bosque',
          },
        },
      ],
      conclusion: 'Un retiro no es un gasto en la empresa; es recordar que las organizaciones están hechas de seres humanos que necesitan cuidarse, conocerse y confiar entre sí.',
    },
  },
  {
    slug: 'restaurante-don-petro-fuego-vino-ajusco',
    title: 'El calor de la leña y comida que reconforta el corazón: bienvenidos a Don Petro',
    subtitle: 'A 3,000 metros de altura el hambre se siente distinto: sabe a carne jugosa sellada al carbón, pan rústico recién horneado y una copa que calienta las manos.',
    excerpt: 'Te contamos qué pasa en nuestra cocina cuando se encienden las brasas de roble por la mañana y por qué una visita de fin de semana al Ajusco sabe mucho mejor alrededor de una buena mesa.',
    category: 'Gastronomía',
    categorySlug: 'gastronomia',
    author: {
      name: 'Chef Pedro',
      role: 'Guardián del Fuego en Don Petro',
    },
    publishedAt: '2026-10-05',
    readTime: '4 min de lectura',
    featuredImage: '/images/gastronomia/don-petro-1.webp',
    tags: ['Restaurante Don Petro', 'Cocina de Brasas', 'Comer en el Bosque', 'Bar Miel Sobre Limón', 'Sabores de Montaña'],
    metaTitle: 'Restaurante Don Petro en el Ajusco | Cocina al Fuego & Cortes Jugosos',
    metaDescription: 'Prueba la cocina a las brasas de Restaurante Don Petro en el Ajusco. Cortes al carbón, pizzas artesanales y coctelería botánica abiertos a todo el público.',
    gallery: [
      {
        src: '/images/gastronomia/don-petro-plato.webp',
        caption: 'Platillos generosos preparados al momento con ingredientes frescos',
        alt: 'Platillo caliente servido en Don Petro',
      },
      {
        src: '/images/gastronomia/bar-barra.webp',
        caption: 'La barra rústica de madera donde preparamos los destilados de la casa',
        alt: 'Barra de madera noble en Bar Miel Sobre Limón',
      },
      {
        src: '/images/gastronomia/don-petro-2.webp',
        caption: 'Comer viendo los árboles mecerse con el viento',
        alt: 'Mesa con ventanales hacia los pinos en Don Petro',
      },
    ],
    inboundCta: {
      badge: 'Tu mesa frente a los pinos',
      title: 'Ven a comer rico este fin de semana',
      description: 'El restaurante y el bar están abiertos tanto para quienes se hospedan como para quienes vienen a pasar el día al Ajusco. Escríbenos para apartar tu mesa.',
      buttonText: 'Ver Menú de Don Petro',
      buttonHref: '/gastronomia',
      whatsappText: 'Hola Chef Pedro, vi la publicación de Don Petro y me gustaría reservar una mesa para comer rico este fin de semana.',
    },
    content: {
      intro: 'Aquí el día empieza muy temprano, cuando el frío todavía se siente en la punta de los dedos y empezamos a acomodar la leña de roble en las parrillas. Ese aroma a madera prendiendo, mezclado con el primer café de olla del día, es nuestro saludo favorito a la mañana. En la montaña no se cocina con prisa; el fuego tiene sus propios tiempos.',
      sections: [
        {
          heading: '1. Lo que el fuego le hace a la comida',
          body: [
            'No creemos en la cocina pretenciosa donde sales con hambre. En la sierra el cuerpo pide comida honesta que llene el estómago y caliente el corazón. Por eso nuestros cortes —como el Rib Eye grueso o el New York— van directo a la parrilla bien caliente, sellando los jugos por dentro y dejando esa costrita dorada y ahumada que solo da la leña de verdad.',
            'Y si te apetece otra cosa, siempre hay una pizza rústica saliendo del horno con el queso burbujeando, una trucha fresca criada en aguas de montaña o un fondue caliente para sopear con pancito campesino mientras afuera corre el aire fresco.',
          ],
          image: {
            src: '/images/gastronomia/fuego-brasas.webp',
            caption: 'Carbón al rojo vivo y leña de roble: la única manera en que sabemos cocinar.',
            alt: 'Parrilla al carbón encendida en Don Petro',
          },
        },
        {
          heading: '2. Una copa en Miel Sobre Limón para cerrar la tarde',
          body: [
            'Al lado del restaurante está nuestro bar, Miel Sobre Limón. Aquí nos gusta jugar con miel pura de abeja de la zona, romero que cortamos cerca, frutos rojos y mezcales artesanales mexicanos.',
            'Pedirte un cóctel de autor o un carajillo bien preparado y salirte a la terraza a ver cómo se oculta el sol entre las copas de los pinos es de esos pequeños lujos que le hacen bien a cualquiera.',
          ],
          imageGrid: [
            {
              src: '/images/gastronomia/bar-cocktail-1.webp',
              caption: 'Coctelería fresca preparada con hierbas de la montaña.',
              alt: 'Cóctel artesanal servido en terraza',
            },
            {
              src: '/images/gastronomia/bar-miel-terraza.webp',
              caption: 'Nuestra terraza de madera: cobijas a la mano y plática sin fin.',
              alt: 'Terraza lounge del bar Miel Sobre Limón',
            },
          ],
          tip: 'Pídete el carajillo ahumado de la casa después de comer: te aseguramos que te va a dejar con una sonrisa.',
        },
        {
          heading: '3. Las puertas están abiertas para todos',
          body: [
            'Mucha gente nos pregunta si tienen que quedarse a dormir en el hotel para comer aquí, y la respuesta es no: Don Petro recibe con mucho cariño a familias, parejas y amigos que simplemente quieren escapar de la ciudad por unas horas y comer rico rodeados de árboles.',
          ],
          image: {
            src: '/images/gastronomia/don-petro-salon.webp',
            caption: 'El salón principal: chimenea encendida, luz tenue y la sensación de estar en casa.',
            alt: 'Interior del Restaurante Don Petro con fogón',
          },
        },
      ],
      conclusion: 'Comer juntos es la forma más bonita de celebrar que estamos vivos. Cuando vengan al Ajusco, acérquense a la cocina a saludar; aquí siempre hay leña ardiendo.',
    },
  },
  {
    slug: 'bodas-en-el-bosque-tendencias-micro-weddings',
    title: 'Casarse entre los árboles: el encanto de una boda donde importan las personas, no el protocolo',
    subtitle: 'Abrazar a cada invitado, bailar descalzos bajo foquitos cálidos y decir \'sí, acepto\' con el bosque como único testigo.',
    excerpt: 'Si la idea de una boda masiva en un salón cerrado no resuena con ustedes, esto es lo que significa celebrar su amor de forma íntima, auténtica y rodeados de naturaleza.',
    category: 'Bodas de Bosque',
    categorySlug: 'bodas',
    author: {
      name: 'Sofía',
      role: 'Concierge de Bodas y Celebraciones Íntimas',
    },
    publishedAt: '2026-09-28',
    readTime: '5 min de lectura',
    featuredImage: '/images/experiencias/pedida-mano-cover.webp',
    tags: ['Bodas Boutique', 'Casarse en el Bosque', 'Micro Weddings', 'Amor Auténtico', 'Bodas Íntimas CDMX'],
    metaTitle: 'Bodas en el Bosque en el Ajusco | Celebraciones Íntimas y Reales',
    metaDescription: 'Planea una boda boutique entre los pinos de Orgánico Ajusco. Jardines abiertos, luces cálidas, comida de autor y habitaciones para tu círculo más querido.',
    gallery: [
      {
        src: '/images/experiencias/pedida-mano-toast.webp',
        caption: 'Brindis de boda con vistas verdes infinitas',
        alt: 'Pareja brindando en su boda en el bosque',
      },
      {
        src: '/images/espacios/jardin-chulavista.webp',
        caption: 'Jardín Chulavista: el pasto verde y los árboles como decoración principal',
        alt: 'Jardín de eventos nupciales en Orgánico Ajusco',
      },
      {
        src: '/images/espacios/casa-club-2.webp',
        caption: 'La calidez de un salón de montaña para bailar hasta tarde',
        alt: 'Salón iluminado con luces cálidas para recepción',
      },
    ],
    inboundCta: {
      badge: 'El día más especial',
      title: 'Vengan a conocer el bosque y platiquemos de su boda',
      description: 'Nos encantaría recibirlos un fin de semana, caminar juntos por los jardines, mostrarles cómo se ve la luz al atardecer y pensar ideas para su celebración.',
      buttonText: 'Ver Espacios para Bodas',
      buttonHref: '/espacios',
      whatsappText: 'Hola Sofía, leímos el artículo sobre bodas en el bosque y nos gustaría agendar una visita para conocer los jardines.',
    },
    content: {
      intro: 'Siempre recuerdo a una novia que me dijo mientras caminábamos por el jardín: "Sofía, yo no quiero pasarme la noche de mi boda yendo de mesa en mesa saludando por compromiso a compromisos de mis papás; solo quiero poder abrazar a mis mejores amigos, bailar con mi pareja y sentir que todo esto es real". Para parejas como ellos nació la idea de casarse en el bosque.',
      sections: [
        {
          heading: '1. Menos compromiso, más emoción verdadera',
          body: [
            'Una boda íntima —de entre 40 y 120 personas— tiene una magia difícil de describir. No hay formalismos acartonados ni desfiles eternos. La gente que está ahí te conoce de toda la vida y celebra contigo con el corazón abierto.',
            'Además, la naturaleza te regala una escenografía viva: los pinos gigantescos, el olor a bosque fresco y esa luz dorada de las cinco de la tarde que hace que cualquier fotografía parezca sacada de una película.',
          ],
          image: {
            src: '/images/espacios/bodas-sociales-1.webp',
            caption: 'Mesas largas de madera, flores silvestres y una atmósfera relajada donde todos se sienten en confianza.',
            alt: 'Boda boutique al aire libre en Orgánico Ajusco',
          },
        },
        {
          heading: '2. Claves para que una boda de montaña sea inolvidable',
          body: [
            '• Luces cálidas por todos lados: guirnaldas de foquitos colgadas entre los árboles, velas en las mesas y antorchas encendidas cuando cae la noche. Crean una atmósfera que abriga el alma.',
            '• Un rincón con fogata y cobijitas: cuando refresca en la sierra, poner una canasta con mantas suaves y encender fogateros donde los invitados se junten a comer bombones tostados es el éxito garantizado.',
            '• Dormir en el mismo lugar: que los novios y su círculo más cercano puedan subir a sus suites sin tener que manejar de noche, y reunirse a la mañana siguiente para desayunar chilaquiles calientes y platicar de la noche anterior.',
          ],
          imageGrid: [
            {
              src: '/images/experiencias/pedida-mano-1.webp',
              caption: 'Caminos iluminados con fuego real para caminar hacia el altar.',
              alt: 'Sendero nupcial iluminado con antorchas',
            },
            {
              src: '/images/espacios/jardin-loma-alta.webp',
              caption: 'Espacios verdes amplios para disfrutar del cóctel de bienvenida con buena música.',
              alt: 'Jardín con cielo despejado para cóctel nupcial',
            },
          ],
          quote: '"Cuando te casas en la naturaleza, el bosque te recuerda lo sencillo y profundo que es amar."',
        },
        {
          heading: '3. Cero estrés si cambia el clima',
          body: [
            'En la montaña el clima tiene personalidad. Por eso contamos con terrazas cubiertas y salones hermosos con chimenea, para que si llueve o se nubla, tu evento no se arruine; al contrario, se vuelva aún más acogedor y cinematográfico.',
          ],
          image: {
            src: '/images/espacios/lago-victoria.webp',
            caption: 'Nuestro lago y los senderos: el lugar soñado para su sesión de fotos de pareja.',
            alt: 'Lago Victoria en el bosque de Orgánico Ajusco',
          },
        },
      ],
      conclusion: 'Casarse en el bosque es empezar una nueva etapa con los pies en la tierra, el corazón tranquilo y rodeados de la gente que más quieres en el mundo.',
    },
  },
  {
    slug: 'bienestar-silencio-temazcal-3000-metros',
    title: 'Aprender a no hacer nada: el regalo del silencio y el vapor en la montaña',
    subtitle: 'Lo que le pasa a tu cuerpo y a tu cabeza cuando apagas las notificaciones y respiras profundo a 3,000 metros de altura.',
    excerpt: 'La vida en la ciudad nos tiene corriendo todo el día en piloto automático. Te platicamos cómo una tarde en el temazcal, una caminata lenta entre los pinos y una noche de descanso profundo te regresan la calma.',
    category: 'Naturaleza & Bienestar',
    categorySlug: 'bienestar',
    author: {
      name: 'Ana',
      role: 'Terapeuta y Guardiana de Origen Spa',
    },
    publishedAt: '2026-09-20',
    readTime: '4 min de lectura',
    featuredImage: '/images/hero/hero-dron-bosque.webp',
    tags: ['Silencio de Montaña', 'Temazcal Ancestral', 'Origen Spa', 'Paz Mental', 'Desconexión CDMX'],
    metaTitle: 'Bienestar y Temazcal en el Ajusco | Volver a la Calma a 3,000 Metros',
    metaDescription: 'Siente el alivio del silencio del bosque, los rituales de temazcal y masajes con esencias de montaña en Origen Spa en Orgánico Hotel Boutique Ajusco.',
    gallery: [
      {
        src: '/images/experiencias/cabalgata-1.webp',
        caption: 'Caminar sin prisa acompañados por el paso noble de los caballos',
        alt: 'Paseo ecuestre por senderos del Ajusco',
      },
      {
        src: '/images/hero/fachada-principal.webp',
        caption: 'Materiales naturales que se funden con la piedra y los árboles',
        alt: 'Fachada armónica de Orgánico Hotel Boutique',
      },
      {
        src: '/images/experiencias/picnic-intimo.webp',
        caption: 'Comer frutas frescas y frutos secos sobre el pasto verde',
        alt: 'Picnic saludable en el bosque',
      },
    ],
    inboundCta: {
      badge: 'Un respiro para ti',
      title: 'Ven a consentirte y soltar el cansancio',
      description: 'Puedes visitarnos solo por el día a Origen Spa o combinar tu temazcal con una noche de descanso en una de nuestras suites. Escríbenos para platicar.',
      buttonText: 'Conocer Origen Spa & Terapias',
      buttonHref: '/nosotros',
      whatsappText: 'Hola Ana, leí tu publicación sobre el silencio y el temazcal y me gustaría agendar una sesión de bienestar en Origen Spa.',
    },
    content: {
      intro: '¿Te has dado cuenta de cuánto ruido llevas acumulado adentro? Cláxones en la calle, alertas en el teléfono celular, pendientes que resolver antes de que acabe el día... El cuerpo y la mente se acostumbran a vivir en tensión permanente. Por eso, cuando llegas a la montaña y te bajas del coche, lo primero que te impacta es el silencio. Un silencio limpio y profundo que no da miedo, sino que te cobija de inmediato.',
      sections: [
        {
          heading: '1. Caminar entre pinos: la mejor medicina natural',
          body: [
            'Los japoneses tienen una palabra para esto: Shinrin-yoku, que significa "darse un baño de bosque". No se trata de hacer ejercicio agotador ni de romper marcas; se trata de caminar despacito, respirando hondo el aroma a resina y tierra húmeda, sintiendo el viento frío en la cara y escuchando crujir las ramas.',
            'Caminar media hora por el bosque reduce la presión sanguínea y calma los pensamientos acelerados. De pronto te das cuenta de que llevabas meses respirando cortito, y aquí tus pulmones vuelven a llenarse por completo.',
          ],
          image: {
            src: '/images/experiencias/trekking-1.webp',
            caption: 'Nuestros senderos naturales: el lugar perfecto para caminar despacio y dejar que los pensamientos se acomoden.',
            alt: 'Persona caminando tranquilamente por sendero del Ajusco',
          },
        },
        {
          heading: '2. El Temazcal: volver al calor del origen',
          body: [
            'En Origen Spa cuidamos el temazcal con mucho respeto. No es una atracción turística de moda; es una ceremonia ancestral donde las piedras volcánicas al rojo vivo reciben infusiones de hierbas aromáticas como romero, eucalipto y ruda.',
            'Entrar a ese calorcito reconfortante, sudar las toxinas y soltar la tensión acumulada en el cuerpo te deja con una sensación de ligereza increíble. Sales sintiéndote renovado, como si te hubieran quitado un costal pesado de la espalda.',
          ],
          imageGrid: [
            {
              src: '/images/hero/recepcion.webp',
              caption: 'Espacios cálidos construidos con piedra volcánica y maderas de la región.',
              alt: 'Recepción acogedora en Orgánico Ajusco',
            },
            {
              src: '/images/experiencias/fogata-grupal-1.webp',
              caption: 'Círculos de fuego para cerrar la tarde en paz y gratitud.',
              alt: 'Fuego al atardecer en el bosque',
            },
          ],
          tip: 'Un tip muy sencillo: después del temazcal, tómate una taza de té de hierbas calientito y regálate una hora de siesta sin alarmas.',
        },
        {
          heading: '3. Masajes que desbaratan los nudos de la espalda',
          body: [
            'Completar tu tarde con un masaje relajante o descontracturante con aceites esenciales de lavanda y pino ayuda a que cada músculo suelte la guardia. Cuando terminas, el cuerpo pesa rico y solo dan ganas de dormir.',
          ],
          image: {
            src: '/images/suites/premium-suite-2.webp',
            caption: 'Nuestras camas y cobijas suaves: listas para el sueño más profundo que hayas tenido en mucho tiempo.',
            alt: 'Cama cómoda de madera en suite de montaña',
          },
        },
      ],
      conclusion: 'La verdadera salud no es tomarse diez pastillas; es saber cuándo parar, escuchar al cuerpo y regalarse un día donde lo único importante sea respirar y estar en paz.',
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, count = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, count);
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}
