import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Users, 
  Check, 
  ArrowRight, 
  Flame 
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ESPACIOS_DATA } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Nuestros Espacios | Salones, Auditorio & Jardines en el Ajusco",
  description: "Conoce los espacios interiores y jardines al aire libre de Orgánico Hotel Boutique Ajusco: Auditorio Isaura, Salón Victoria, Casa Club y los 4 jardines panorámicos de montaña.",
};

export default function EspaciosPage() {
  const salones = ESPACIOS_DATA.filter(e => e.category === 'corporativo' || e.category === 'social' || e.category === 'recreativo');
  const jardines = ESPACIOS_DATA.filter(e => e.category === 'jardines');

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header */}
      <PageHeader
        title="Espacios que Inspiran, Conectan y Transforman"
        subtitle="Un santuario natural con infraestructura de vanguardia: salones climatizados con chimenea, auditorio de alta tecnología y más de 3,000 m² de jardines entre coníferas."
        tag="Arquitectura & Naturaleza"
        imageSrc="/images/espacios/salon-victoria-4.jpg"
        breadcrumb="Nuestros Espacios"
      />

      {/* 2. Anchor Bar & Quick Stats */}
      <section className="py-8 border-b border-white/10 bg-[#060807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#8E9B93]">
            <span className="text-[#C5B49F] font-semibold">Explorar Espacios:</span>
            <a href="#salones" className="hover:text-white transition-colors">Salones & Auditorio</a>
            <span>·</span>
            <a href="#jardines" className="hover:text-white transition-colors">Jardines de Montaña</a>
            <span>·</span>
            <a href="#casa-club" className="hover:text-white transition-colors">Casa Club</a>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/eventos-empresariales"
              className="inline-flex items-center gap-1.5 text-xs text-[#C5B49F] hover:text-white font-medium transition-colors"
            >
              <span>Ver Eventos Empresariales</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Salones & Auditorio */}
      <section id="salones" className="py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Instalaciones Cerradas & Alta Tecnología
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Salones de Autor & Auditorio
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-3 leading-relaxed">
              Espacios acústicamente diseñados y rodeados de ventanales panorámicos, que combinan maderas curadas, chimeneas monumentales y equipo audiovisual para presentaciones impecables.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {salones.map((space, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={space.id}
                  id={space.id}
                  className="scroll-mt-28 flex flex-col gap-8 p-6 sm:p-10 rounded-3xl bg-white/[0.015] border border-white/10 shadow-2xl reveal"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Image Column */}
                    <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden card-luxury group shadow-2xl">
                        <Image
                          src={space.featuredImage}
                          alt={space.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold border border-white/10">
                          {space.capacity}
                        </div>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className={`lg:col-span-5 flex flex-col gap-5 ${isReversed ? 'lg:order-1' : ''}`}>
                      <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                          Espacio Cubierto
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-light text-[#F4F5F1] tracking-tight mt-1">
                          {space.name}
                        </h3>
                      </div>

                      <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                        {space.description}
                      </p>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[#F4F5F1]">
                          <Users className="w-4 h-4 text-[#C5B49F]" />
                          <span>Capacidad:</span>
                          <strong className="font-semibold text-[#C5B49F]">{space.capacity}</strong>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#8E9B93]">
                          <Flame className="w-3.5 h-3.5 text-[#C5B49F]" />
                          <span>Calidez & Bosque</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-2.5">
                          Equipamiento & Características:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 text-xs text-[#8E9B93]">
                          {space.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-[#C5B49F] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <WhatsAppButton
                          message={space.whatsappMessage}
                          label={`Cotizar ${space.name}`}
                          variant="primary"
                          size="md"
                          className="w-full sm:w-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Galería adicional de fotos del espacio */}
                  {space.images && space.images.length > 1 && (
                    <div className="pt-8 border-t border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                          Fotografías de {space.name}
                        </span>
                        <span className="text-[11px] text-[#8E9B93]">
                          {space.images.length} Vistas del Espacio
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 reveal-stagger">
                        {space.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden card-luxury group border border-white/10 hover:border-[#C5B49F]/50 transition-all shadow-md reveal"
                          >
                            <Image
                              src={img}
                              alt={`${space.name} - Vista ${imgIdx + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Jardines de Montaña */}
      <section id="jardines" className="py-20 sm:py-28 bg-[#060807] border-y border-white/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Escenarios al Aire Libre
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Jardines Panorámicos en el Bosque
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-3 leading-relaxed">
              Cuatro explanadas naturales con césped de alta densidad y vistas abiertas hacia el valle y los pinos centenarios, ideales para bodas, rituales, ceremonias y banquetes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 reveal-stagger">
            {jardines.map((jardin) => (
              <div
                key={jardin.id}
                id={jardin.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={jardin.featuredImage}
                      alt={jardin.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-semibold text-[#C5B49F] border border-white/10">
                      {jardin.size}
                    </div>
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#F4F5F1] font-medium border border-white/10">
                      {jardin.capacity}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5B49F] font-semibold">
                      Jardín de Montaña
                    </span>
                    <h3 className="text-2xl font-light text-[#F4F5F1] mt-1 group-hover:text-[#C5B49F] transition-colors">
                      {jardin.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {jardin.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <WhatsAppButton
                    message={jardin.whatsappMessage}
                    label={`Cotizar ${jardin.name}`}
                    variant="primary"
                    size="md"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Banner de Enlace a Eventos Empresariales */}
      <section className="py-20 bg-[#0A0D0C]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="card-luxury p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 reveal-scale">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Solución Integral para Empresas
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-2">
                ¿Planeando un Retiro o Team Building?
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                Descubre nuestra propuesta para corporativos: dinámicas de integración, offsites ejecutivos, wellness y producción integral con nuestra casa productora OTAM.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                href="/eventos-empresariales"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-white transition-all shadow-xl"
              >
                <span>Ver Eventos Empresariales</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
