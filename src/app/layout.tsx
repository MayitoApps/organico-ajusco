import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollObserver from "@/components/ScrollObserver";
import DiaDeMuertosPopup from "@/components/DiaDeMuertosPopup";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { HOTEL_INFO } from "@/data/hotelData";

const fontOutfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fontCinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.organicohotelboutique.com"),
  title: {
    default: "Orgánico Hotel Boutique Ajusco | Hotel de Lujo en la Montaña, CDMX",
    template: "%s | Orgánico Hotel Boutique Ajusco"
  },
  description: "Descubre Orgánico Hotel Boutique Ajusco a 3,000 msnm en el bosque del Ajusco, CDMX. Suites de lujo con opción de chimenea bajo disponibilidad, cocina de autor Don Petro, bar de mixología, spa holístico y privacidad total.",
  keywords: [
    "Orgánico Hotel Boutique Ajusco",
    "Hotel Ajusco",
    "Suites de lujo CDMX",
    "Hotel boutique Ajusco",
    "Cenas románticas Ajusco",
    "Pedidas de mano Ajusco",
    "Restaurante Don Petro",
    "Hospedaje de lujo bosque CDMX"
  ],
  authors: [{ name: "Orgánico Hotel Boutique Ajusco" }],
  creator: "Orgánico Hotel Boutique Ajusco",
  publisher: "Grupo Orgánico Hoteles Boutique",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://www.organicohotelboutique.com",
    siteName: "Orgánico Hotel Boutique Ajusco",
    title: "Orgánico Hotel Boutique Ajusco | Refugio de Lujo en la Montaña, CDMX",
    description: "Así se siente el Bosque, Así se siente Orgánico Ajusco. Suites privadas de alta montaña con opción de chimenea bajo disponibilidad, gastronomía de autor y desconexión absoluta.",
    images: [
      {
        url: "/images/hero/hero-montana.webp",
        width: 1920,
        height: 1080,
        alt: "Orgánico Hotel Boutique Ajusco"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Orgánico Hotel Boutique Ajusco | Refugio en el Bosque, CDMX",
    description: "Así se siente el Bosque, Así se siente Orgánico Ajusco. Suites privadas de montaña y alta gastronomía a 3,000 msnm.",
    images: ["/images/hero/hero-montana.webp"]
  },
  alternates: {
    canonical: "https://www.organicohotelboutique.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "travel",
  other: {
    "geo.position": "19.2148215;-99.1995083",
    "geo.placename": "San Miguel Ajusco, Tlalpan, Ciudad de México",
    "geo.region": "MX-CMX",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: "/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://www.organicohotelboutique.com/#hotel",
      "name": "Orgánico Hotel Boutique Ajusco",
      "alternateName": ["Orgánico Ajusco", "Organico Hotel Boutique"],
      "description": "Hotel boutique y refugio de lujo a 3,000 msnm en el bosque del Ajusco, Ciudad de México. Suites privadas con chimenea bajo disponibilidad, cocina de autor Don Petro, bar de mixología botánica, spa holístico y experiencias románticas.",
      "url": "https://www.organicohotelboutique.com",
      "telephone": ["+52 55 9696 9073", "+52 55 9691 0966", "+52 55 5645 5347", "+52 55 5573 7822"],
      "priceRange": "$$$$",
      "currenciesAccepted": "MXN",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
      "checkinTime": "15:00",
      "checkoutTime": "12:00",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.8"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Camino Real 30 de Marzo",
        "addressLocality": "San Miguel Ajusco, Tlalpan",
        "addressRegion": "Ciudad de México",
        "postalCode": "14700",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.2148215,
        "longitude": -99.1995083
      },
      "image": "https://www.organicohotelboutique.com/images/hero/hero-montana.webp",
      "sameAs": [
        "https://www.instagram.com/organicohotelboutique/",
        "https://www.gohb.com.mx/"
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Chimenea de leña (bajo disponibilidad)", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Restaurante Don Petro", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Bar Miel Sobre Limón", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Spa Holístico y Temazcal Origen", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Estacionamiento privado vigilado 24h", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wi-Fi de alta velocidad", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Cenas románticas y pedidas de mano", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Salones y jardines para eventos empresariales", "value": true }
      ],
      "parentOrganization": {
        "@type": "Organization",
        "@id": "https://www.organicohotelboutique.com/#organization",
        "name": "Grupo Orgánico Hoteles Boutique",
        "url": "https://www.gohb.com.mx/"
      }
    },
    {
      "@type": "Restaurant",
      "@id": "https://www.organicohotelboutique.com/#don-petro",
      "name": "Restaurante Don Petro & Fuego Brasas",
      "servesCuisine": ["Mexicana contemporánea", "Cocina de montaña", "Cortes a las brasas", "Buffet campestre"],
      "priceRange": "$$$",
      "acceptsReservations": "True",
      "telephone": "+52 55 9696 9073",
      "url": "https://www.organicohotelboutique.com/gastronomia",
      "menu": "https://www.organicohotelboutique.com/gastronomia"
    },
    {
      "@type": "EventVenue",
      "@id": "https://www.organicohotelboutique.com/#eventos",
      "name": "Salón Victoria, Auditorio Isaura & Jardines Orgánico Ajusco",
      "maximumAttendeeCapacity": 350,
      "description": "Espacios interiores acústicamente diseñados y jardines panorámicos de alta montaña para eventos empresariales, retiros y convenciones operados por OTAM.",
      "url": "https://www.organicohotelboutique.com/eventos-empresariales"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.organicohotelboutique.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Dónde se encuentra ubicado Orgánico Hotel Boutique Ajusco y cómo se llega desde la CDMX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orgánico Hotel Boutique se localiza en Camino Real 30 de Marzo, San Miguel Ajusco, Alcaldía Tlalpan, CDMX, a 3,000 metros de altitud en el bosque del Ajusco. Se llega en aproximadamente 45 a 55 minutos desde el sur de la Ciudad de México por la Carretera Picacho-Ajusco con carretera pavimentada y estacionamiento privado vigilado 24 horas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Todas las suites cuentan con chimenea de leña funcional?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No todas las suites cuentan con chimenea, su asignación es bajo disponibilidad al momento de reservar. Las suites asignadas con chimenea incluyen dotación inicial de leña, encendido asistido por nuestro personal y servicio a la habitación."
          }
        },
        {
          "@type": "Question",
          "name": "¿El restaurante Don Petro y el Bar Miel Sobre Limón están abiertos al público en general?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. No es necesario estar hospedado para disfrutar de nuestra gastronomía. Restaurante Don Petro ofrece desayunos de pueblo, cortes selectos a las brasas en Fuego y su tradicional buffet campestre de fin de semana. Bar Miel Sobre Limón cuenta con mixología botánica y fogateros. Se requiere reservación previa por WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tipo de experiencias románticas y pedidas de mano se pueden realizar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Diseñamos momentos íntimos que incluyen cenas privadas de 4 tiempos a la luz de las velas con maridaje de vino, montajes escenográficos de pedida de mano con letreros luminosos gigantes en el bosque, fogatadas románticas con bombones y picnics de autor con atención de concierge."
          }
        },
        {
          "@type": "Question",
          "name": "¿Tienen infraestructura para eventos empresariales, retiros de liderazgo y convenciones?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Disponemos del Salón Victoria (80 personas), Auditorio Isaura (150 personas), Casa Club y jardines de montaña con capacidad para más de 300 asistentes. Todos los eventos B2B y retiros ejecutivos son producidos por OTAM y Grupo Orgánico Hoteles Boutique, con clientes como la Unión Europea y Adidas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se realizan las reservaciones y cuál es el horario de check-in / check-out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las reservaciones se realizan de forma directa y personalizada a través del canal oficial de WhatsApp del hotel (+52 55 9696 9073). El horario de entrada (check-in) es a las 15:00 hrs y la salida (check-out) es a las 12:00 hrs."
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.organicohotelboutique.com/#website",
      "url": "https://www.organicohotelboutique.com",
      "name": "Orgánico Hotel Boutique Ajusco",
      "inLanguage": "es-MX"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      data-scroll-behavior="smooth"
      className={`${fontOutfit.variable} ${fontSans.variable} ${fontCinzel.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0D0C] text-[#F4F5F1] selection:bg-[#C5B49F] selection:text-[#0A0D0C]">
        <ScrollObserver />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <DiaDeMuertosPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
