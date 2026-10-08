import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  Compass, 
  Target, 
  Sparkles, 
  Award, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Building2, 
  TreePine,
  Briefcase,
  HeartHandshake,
  Globe
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { EVENTOS_EMPRESARIALES_DATA, HOTEL_INFO } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Eventos Empresariales & Retiros Corporativos | Orgánico Ajusco",
  description: "Organiza retiros ejecutivos, team building, kick offs y activaciones de marca en el bosque del Ajusco, a solo 45 min de CDMX. Experiencias a la medida con OTAM y Grupo Orgánico.",
};

export default function EventosEmpresarialesPage() {
  const { hero, stats, quote, otam, successCase, institutionalCase, modalidades, gallery } = EVENTOS_EMPRESARIALES_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-6 h-6 text-[#C5B49F]" />,
    Compass: <Compass className="w-6 h-6 text-[#C5B49F]" />,
    Target: <Target className="w-6 h-6 text-[#C5B49F]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#C5B49F]" />,
    Award: <Award className="w-6 h-6 text-[#C5B49F]" />
  };

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header Hero */}
      <PageHeader
        title={hero.title}
        subtitle={hero.subtitle}
        tag={hero.tag}
        imageSrc={hero.image}
        breadcrumb="Eventos Empresariales"
      />

      {/* 2. Impact Metrics Bar */}
      <section className="py-12 border-b border-white/10 bg-[#060807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center reveal-stagger">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center reveal">
              <span className="text-3xl sm:text-5xl font-light text-[#C5B49F] tracking-tight">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-[#F4F5F1] font-semibold mt-2">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Statement & Storytelling */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 reveal-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Naturaleza a tu Alcance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F5F1] tracking-tight leading-tight">
                {quote.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                Lejos del asfalto y las distracciones corporativas convencionales, el bosque ofrece una atmósfera única donde la claridad mental, la cohesión interpersonal y la energía creativa se potencian de manera orgánica.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, me gustaría cotizar un evento empresarial para nuestra empresa."
                  label="Cotiza tu Evento Hoy"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-6 reveal-scale">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden card-luxury group shadow-2xl border border-white/10">
                <Image
                  src={quote.image}
                  alt="Historias y eventos empresariales en Orgánico Ajusco"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OTAM | Casa Productora de Experiencias */}
      <section className="py-20 sm:py-28 bg-[#060807] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 lg:order-2 reveal-scale">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden card-luxury group shadow-2xl border border-white/10">
                <Image
                  src={otam.image}
                  alt={otam.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold border border-white/10">
                  {otam.badge}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6 lg:order-1 flex flex-col gap-6 reveal-left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                  Grupo Orgánico Hoteles Boutique
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  {otam.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                {otam.p1}
              </p>

              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                {otam.p2}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={otam.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-white transition-colors w-full sm:w-auto shadow-xl"
                >
                  <span>{otam.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A0D0C]" />
                </a>
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, quisiera cotizar la producción de un evento con OTAM."
                  label="Contactar Productor"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Caso de Éxito: ADIDAS RUNNING RETREAT */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="card-luxury rounded-3xl p-8 sm:p-14 border border-white/15 overflow-hidden relative reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 w-fit">
                  <Award className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold">
                    {successCase.badge}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight">
                  {successCase.title}
                </h3>

                <blockquote className="text-base sm:text-lg text-[#F4F5F1]/90 font-light italic leading-relaxed border-l-2 border-[#C5B49F] pl-4">
                  {successCase.quote}
                </blockquote>

                <p className="text-xs sm:text-sm text-[#8E9B93] font-light leading-relaxed">
                  {successCase.tagline}
                </p>

                <div className="pt-2">
                  <WhatsAppButton
                    message="Hola Orgánico Ajusco, me gustaría diseñar un retreat corporativo similar al de Adidas."
                    label="Diseñar tu Retiro a Medida"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-luxury shadow-2xl border border-white/10">
                  <Image
                    src={successCase.image}
                    alt={successCase.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.1. Evento Internacional & Diplomático: UNIÓN EUROPEA */}
      <section className="py-20 sm:py-28 bg-[#060807] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col gap-12">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 w-fit mb-4">
                  <Globe className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold">
                    {institutionalCase.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight">
                  {institutionalCase.title}
                </h2>
                <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-4 leading-relaxed">
                  {institutionalCase.description}
                </p>
              </div>

              <div className="shrink-0">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, me interesa cotizar un evento institucional o diplomático de gran escala."
                  label="Cotizar Evento Institucional"
                  variant="primary"
                  size="md"
                  className="shadow-2xl"
                />
              </div>
            </div>

            {/* 4 Photos Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Photo 1: Big featured over water stage */}
              <div className="lg:col-span-7 reveal-scale">
                <div className="relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden card-luxury group shadow-2xl border border-white/10">
                  <Image
                    src={institutionalCase.images[0].src}
                    alt={institutionalCase.images[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5B49F] font-semibold">
                      Producción Sobre el Lago
                    </span>
                    <h4 className="text-xl sm:text-2xl font-light text-[#F4F5F1] mt-1">
                      {institutionalCase.images[0].title}
                    </h4>
                    <p className="text-xs text-[#8E9B93] font-light mt-1 max-w-lg leading-relaxed">
                      {institutionalCase.images[0].caption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Photos 2, 3, 4: Column cards */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4 reveal-stagger">
                {institutionalCase.images.slice(1).map((item, idx) => (
                  <div
                    key={idx}
                    className="card-luxury p-3.5 rounded-2xl border border-white/10 flex items-center gap-4 group hover:border-[#C5B49F]/40 transition-all flex-1 reveal"
                  >
                    <div className="relative w-28 h-24 sm:w-32 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="160px"
                      />
                    </div>
                    <div className="flex flex-col gap-1 pr-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#C5B49F] font-semibold">
                        Fotografía del Evento
                      </span>
                      <h5 className="text-sm font-medium text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#8E9B93] font-light line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Experiencias Empresariales (Las 5 Modalidades) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Nuestra Propuesta Para Ti
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Experiencias Empresariales
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-3 leading-relaxed">
              Formatos flexibles diseñados para adaptarse a la cultura y objetivos de tu organización, combinando retos al aire libre, estrategia ejecutiva y bienestar integral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
            {modalidades.map((m) => (
              <div
                key={m.id}
                className="card-luxury rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden group hover:border-[#C5B49F]/40 transition-all shadow-xl"
              >
                <div>
                  {m.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={m.image}
                        alt={m.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center">
                        {iconMap[m.icon] || <Users className="w-5 h-5 text-[#C5B49F]" />}
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-normal text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wider text-[#C5B49F] font-semibold mt-1.5">
                      {m.highlight}
                    </p>

                    <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <WhatsAppButton
                    message={`Hola Orgánico Ajusco, deseo cotizar una experiencia de ${m.title} para nuestro equipo.`}
                    label={`Cotizar ${m.title}`}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                  />
                </div>
              </div>
            ))}

            {/* Espacios Vinculados Card */}
            <div className="card-luxury rounded-2xl border border-[#C5B49F]/30 bg-gradient-to-br from-white/[0.03] to-[#C5B49F]/[0.05] flex flex-col justify-between overflow-hidden shadow-xl">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/espacios/auditorio-isaura-1.webp"
                    alt="Auditorio Isaura y Salones"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-[#C5B49F]/30 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#C5B49F]" />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-normal text-[#F4F5F1]">
                    Instalaciones & Salones
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-[#C5B49F] font-semibold mt-1.5">
                    Auditorio Isaura, Salón Victoria & Jardines
                  </p>

                  <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                    Conoce la capacidad, equipamiento de audio y proyección, y los 4 jardines monumentales disponibles para tu evento.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href="/espacios"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-white transition-colors"
                >
                  <span>Ver Todos los Espacios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Galería de Momentos Corporativos */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Galería Visual
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Momentos de Conexión & Retiros en el Bosque
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 reveal-stagger">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden card-luxury group shadow-xl border border-white/10 reveal"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-[#F4F5F1] font-light leading-snug">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Final */}
      <section className="py-20 bg-[#060807] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
            Atención Personalizada
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight">
            Diseñemos juntos la próxima cumbre de tu equipo
          </h2>
          <p className="text-sm sm:text-base text-[#8E9B93] font-light max-w-2xl leading-relaxed">
            Nuestro equipo de concierge corporativo y producción OTAM te acompaña en la logística completa: hospedaje, transporte, alimentos de autor y dinámicas personalizadas.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, deseo agendar una llamada para planear un evento corporativo."
              label="Hablar con Concierge Corporativo"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
            />
            <Link
              href="/espacios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors w-full sm:w-auto"
            >
              <span>Explorar Salones & Jardines</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5B49F]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
