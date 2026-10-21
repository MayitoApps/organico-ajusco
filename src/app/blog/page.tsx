import React from 'react';
import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import BlogListing from '@/components/BlogListing';

export const metadata: Metadata = {
  title: 'Blog de Montaña & Experiencias | Orgánico Hotel Boutique Ajusco',
  description:
    'Artículos, guías y consejos sobre escapadas románticas, retiros corporativos, bodas en el bosque y gastronomía al fuego en el Ajusco, Ciudad de México.',
  openGraph: {
    title: 'Blog de Montaña & Experiencias | Orgánico Hotel Boutique Ajusco',
    description:
      'Descubre historias de montaña, guías para escapadas en pareja, retiros corporativos y gastronomía a las brasas a 3,000 metros de altitud.',
    images: [
      {
        url: '/images/experiencias/cena-romantica-1.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Orgánico Hotel Boutique Ajusco',
      },
    ],
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Orgánico Hotel Boutique Ajusco',
    description:
      'Guías de viaje, turismo de montaña, experiencias románticas, retiros de bienestar y eventos empresariales en el Ajusco, CDMX.',
    publisher: {
      '@type': 'Hotel',
      name: 'Orgánico Hotel Boutique Ajusco',
      url: 'https://www.organicohotelboutique.com',
    },
  };

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <PageHeader
        title="Historias, Consejos y Vida en la Montaña"
        subtitle="Un rincón para compartirte ideas de escapadas en pareja, inspiración para momentos especiales y todo lo que pasa alrededor de la leña y los árboles a 3,000 metros de altura."
        tag="Diario del Bosque"
        imageSrc="/images/hero/hero-dron-bosque.webp"
        breadcrumb="Blog"
        wide={true}
      />

      {/* Interactive Blog Listing */}
      <BlogListing />
    </div>
  );
}
