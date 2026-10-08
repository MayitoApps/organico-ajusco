import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Check, Flame, Users, ConciergeBell, Bed, Sparkles, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SUITES_DATA } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Suites de Lujo en el Bosque",
  description: "Conoce nuestras 4 categorías de suites en el Ajusco: Mini Suite, Standard Suite, Premium Suite y Master Suite. Chimenea bajo disponibilidad y vistas panorámicas a 3,000 msnm.",
};

export default function SuitesPage() {
  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header */}
      <PageHeader
        title="Santuarios de Descanso en la Montaña"
        subtitle="Cada suite ha sido diseñada para honrar el silencio del Ajusco, integrando maderas nobles, chimenea (bajo disponibilidad) y vistas al bosque de coníferas."
        tag="Hospedaje de Autor"
        imageSrc="/images/suites/master-suite-1.webp"
        breadcrumb="Suites"
      />

      {/* 2. Intro Features */}
      <section className="py-12 border-b border-white/10 bg-[#060807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal-stagger">
          <div className="p-4 reveal">
            <Flame className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Chimenea</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Bajo disponibilidad al reservar</p>
          </div>
          <div className="p-4 reveal">
            <Sparkles className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Calefacción</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Ambiente cálido y acogedor en la montaña</p>
          </div>
          <div className="p-4 reveal">
            <Users className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Privacidad Total</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Suites independientes distribuidas en el bosque</p>
          </div>
          <div className="p-4 reveal">
            <ShieldCheck className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Servicio a la Suite</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Room service y asistencia de concierge</p>
          </div>
        </div>
      </section>

      {/* 3. Detailed Suites List */}
      <section className="py-16 sm:py-24">
        {/* Availability Banner */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-[#C5B49F]/30 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
            <Flame className="w-5 h-5 text-[#C5B49F] shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">
                Información importante sobre chimeneas
              </h5>
              <p className="text-xs text-[#8E9B93] font-light mt-1">
                No todas las suites cuentan con chimenea; la asignación de suite con chimenea está sujeta a disponibilidad al momento de reservar. Te sugerimos confirmar tu solicitud directamente con nuestro concierge vía WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Selection Pill Bar */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 reveal-stagger">
            {SUITES_DATA.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#C5B49F]/60 hover:bg-white/[0.04] transition-all text-center group block card-luxury reveal"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#8E9B93] block">Suite</span>
                <h3 className="text-sm sm:text-base font-medium text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors mt-0.5">
                  {s.name}
                </h3>
                <div className="text-sm font-light text-[#C5B49F] mt-1">
                  {s.price}
                </div>
                <span className="text-[11px] text-[#8E9B93] block mt-0.5 font-light">
                  {s.capacity}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col gap-24 sm:gap-32">
          {SUITES_DATA.map((suite, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={suite.id}
                id={suite.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center reveal"
              >
                {/* Images Column */}
                <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''} reveal-scale`}>
                  {/* Main Large Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden card-luxury group shadow-2xl">
                    <Image
                      src={suite.featuredImage}
                      alt={suite.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold border border-white/10">
                      Room Service · {suite.capacity}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4 reveal-stagger">
                    {suite.images.slice(1, 4).map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden card-luxury group reveal"
                      >
                        <Image
                          src={img}
                          alt={`${suite.name} detalle ${imgIdx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 1024px) 33vw, 19vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Column */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                      Refugio de Montaña
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-1">
                      {suite.name}
                    </h2>
                  </div>

                  {/* Spec Chips */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10 text-center reveal-stagger">
                    <div className="p-2 rounded-lg bg-white/[0.02] reveal">
                      <ConciergeBell className="w-4 h-4 text-[#C5B49F] mx-auto mb-1" />
                      <span className="block text-xs font-semibold text-[#F4F5F1]">Room Service</span>
                      <span className="text-[10px] text-[#8E9B93]">Disponible</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.02] reveal">
                      <Users className="w-4 h-4 text-[#C5B49F] mx-auto mb-1" />
                      <span className="block text-xs font-semibold text-[#F4F5F1]">{suite.capacity}</span>
                      <span className="text-[10px] text-[#8E9B93]">Capacidad</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.02] reveal">
                      <Bed className="w-4 h-4 text-[#C5B49F] mx-auto mb-1" />
                      <span className="block text-xs font-semibold text-[#F4F5F1]">Cama de Lujo</span>
                      <span className="text-[10px] text-[#8E9B93]">{suite.bed.split(' ')[1] || 'King'}</span>
                    </div>
                  </div>

                  {/* Amenity Checklist */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                      Amenidades de la Habitación
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#8E9B93]">
                      {suite.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5B49F] shrink-0 mt-0.5" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tariff & Direct WhatsApp Action */}
                  <div className="pt-2 flex flex-col gap-3">
                    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#8E9B93] block">
                          Tarifa por Noche
                        </span>
                        <span className="text-xl sm:text-2xl font-light text-[#F4F5F1]">
                          {suite.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-widest text-[#8E9B93] block">
                          Ocupación
                        </span>
                        <span className="text-xs text-[#C5B49F] font-semibold">
                          {suite.capacity}
                        </span>
                      </div>
                    </div>

                    <WhatsAppButton
                      message={suite.whatsappMessage}
                      label={`Reservar ${suite.name}`}
                      variant="primary"
                      size="md"
                      className="w-full shadow-xl"
                    />
                    <p className="text-[11px] text-[#8E9B93] italic text-center sm:text-left">
                      Tarifa en moneda nacional (MXN). Reserva directa inmediata con confirmación personalizada.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Políticas y Consejos de Estancia */}
      <section className="py-16 bg-[#060807] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
            Recomendaciones de Altura
          </span>
          <h3 className="text-2xl font-light text-[#F4F5F1]">
            Tu estancia a 3,000 metros sobre el nivel del mar
          </h3>
          <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed">
            Las noches en el Ajusco son frías y despejadas. Nuestras suites cuentan con calefacción y chimenea sujeta a disponibilidad previa (con dotación de leña incluida en suites asignadas). Te sugerimos traer calzado cómodo para bosque y abrigo abrigador para disfrutar de las terrazas al atardecer.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, tengo una duda antes de reservar mi suite."
              label="Consultar con Concierge"
              variant="outline"
              size="sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
