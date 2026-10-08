import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Heart, Compass, Users, Check, Sparkles } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { EXPERIENCIAS_DATA } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Experiencias de Montaña & Momentos Inolvidables",
  description: "Descubre nuestras experiencias: Momentos Íntimos (Cenas románticas y pedidas de mano), Momentos Rebeldía (Cuatrimotos y cabalgatas) y Momentos Para Compartir (Cinema orgánico y fogatadas).",
};

export default function ExperienciasPage() {
  const intimos = EXPERIENCIAS_DATA.filter((e) => e.category === 'intimos');
  const rebeldia = EXPERIENCIAS_DATA.filter((e) => e.category === 'rebeldia');
  const compartir = EXPERIENCIAS_DATA.filter((e) => e.category === 'compartir');

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header */}
      <PageHeader
        title="Experiencias & Momentos en el Bosque"
        subtitle="Diseñamos instantes únicos para conectar con quien más quieres o soltar tus instintos salvajes en la inmensidad del Ajusco."
        tag="Vivir la Montaña"
        imageSrc="/images/experiencias/pedida-mano-cover.webp"
        breadcrumb="Experiencias"
      />

      {/* 2. Quick Navigation Bar */}
      <section className="py-8 bg-[#060807] border-b border-white/10 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-medium overflow-x-auto">
          <a
            href="#intimos"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#C5B49F] hover:text-[#0A0D0C] text-[#F4F5F1] transition-colors shrink-0"
          >
            <Heart className="w-3.5 h-3.5 text-[#C5B49F]" />
            <span>Momentos Íntimos</span>
          </a>
          <a
            href="#rebeldia"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#C5B49F] hover:text-[#0A0D0C] text-[#F4F5F1] transition-colors shrink-0"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5B49F]" />
            <span>Momentos Rebeldía</span>
          </a>
          <a
            href="#compartir"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-[#C5B49F] hover:text-[#0A0D0C] text-[#F4F5F1] transition-colors shrink-0"
          >
            <Users className="w-3.5 h-3.5 text-[#C5B49F]" />
            <span>Para Compartir</span>
          </a>
        </div>
      </section>

      {/* 3. MOMENTOS ÍNTIMOS */}
      <section id="intimos" className="py-20 sm:py-28 border-b border-white/10 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C5B49F]" />
              <span>Conexión & Romance</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Momentos Íntimos
            </h2>
            <p className="text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
              El refugio más romántico de la Ciudad de México. Escenarios privados a la luz de las velas para celebrar el amor, aniversarios y compromisos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal-stagger">
            {intimos.map((exp) => (
              <div
                key={exp.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group reveal"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={exp.featuredImage}
                      alt={exp.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121714] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      {exp.subtitle}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-light text-[#F4F5F1]">{exp.name}</h3>
                    <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/5">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                        Qué incluye esta experiencia:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8E9B93]">
                        {exp.includes.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C5B49F] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <WhatsAppButton
                    message={exp.whatsappMessage}
                    label={`Reservar ${exp.name}`}
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

      {/* 4. MOMENTOS REBELDÍA */}
      <section id="rebeldia" className="py-20 sm:py-28 bg-[#060807] border-b border-white/10 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5B49F]" />
              <span>Instinto & Aventura</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Momentos Rebeldía
            </h2>
            <p className="text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
              “Hay instintos que solo el bosque entiende. Y aquí, puedes soltarlos.” Velocidad, caminos de tierra, caballos de montaña y el aire más puro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 reveal-stagger">
            {rebeldia.map((exp) => (
              <div
                key={exp.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group reveal"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={exp.featuredImage}
                      alt={exp.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121714] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                      {exp.subtitle}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-light text-[#F4F5F1]">{exp.name}</h3>
                    <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-6 pt-6 border-t border-white/5">
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                        Qué incluye esta experiencia:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8E9B93]">
                        {exp.includes.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C5B49F] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <WhatsAppButton
                    message={exp.whatsappMessage}
                    label={`Reservar ${exp.name}`}
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

      {/* 5. MOMENTOS PARA COMPARTIR */}
      <section id="compartir" className="py-20 sm:py-28 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C5B49F]" />
              <span>Comunidad & Memoria</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Momentos Para Compartir
            </h2>
            <p className="text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
              “Los mejores recuerdos siempre comienzan con una buena compañía.” Veladas bajo el cielo nocturno, talleres culinarios y fogatas con nuevos amigos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {compartir.map((exp) => (
              <div
                key={exp.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group reveal"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={exp.featuredImage}
                      alt={exp.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121714] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5B49F] font-semibold">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-xl font-light text-[#F4F5F1] mt-1">{exp.name}</h3>
                    <p className="text-xs text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/5">
                      <ul className="flex flex-col gap-1.5 text-xs text-[#8E9B93]">
                        {exp.includes.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3 h-3 text-[#C5B49F] shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <WhatsAppButton
                    message={exp.whatsappMessage}
                    label="Reservar Actividad"
                    variant="primary"
                    size="sm"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Concierge Banner */}
      <section className="py-16 bg-[#060807] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center gap-4 reveal-scale">
          <Sparkles className="w-8 h-8 text-[#C5B49F]" />
          <h3 className="text-2xl font-light text-[#F4F5F1]">
            ¿Tienes una idea o celebración especial en mente?
          </h3>
          <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed">
            Nuestro equipo de concierge de montaña personaliza decoraciones, aniversarios, cumpleaños y sorpresas especiales. Platícanos tu idea y nosotros la hacemos realidad.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, me gustaría diseñar una experiencia totalmente personalizada para una fecha especial."
              label="Hablar con Concierge de Experiencias"
              variant="outline"
              size="md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
