import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { MapPin, Navigation, Compass, Sparkles, ArrowUpRight, Phone, Smartphone, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { HOTEL_INFO } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | Nuestra Historia & Ubicación en el Ajusco",
  description: "Conoce la filosofía de Orgánico Hotel Boutique Ajusco, nuestra ubicación en San Miguel Ajusco a 3,000 msnm, mapa de llegada y pertenencia a Grupo Orgánico Hoteles Boutique.",
};

export default function NosotrosPage() {
  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header */}
      <PageHeader
        title="Un Refugio de Naturaleza, Arquitectura y Privacidad"
        subtitle="Nacimos en el corazón del Ajusco con una convicción clara: ofrecer un santuario donde la tranquilidad de la montaña y la alta hospitalidad coexistan en perfecto equilibrio."
        tag="Origen & Filosofía"
        imageSrc="/images/hero/fachada-principal.webp"
        breadcrumb="Nosotros"
      />

      {/* 2. Manifiesto & Historia */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 reveal-left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                  Nuestra Filosofía
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  Respeto por el Bosque, Pasión por los Detalles
                </h2>
              </div>

              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                Orgánico Hotel Boutique Ajusco es el resultado de una visión audaz: transformar la ladera montañosa del Ajusco en un destino de lujo sin alterar la esencia agreste del ecosistema. Cada suite, terraza y sendero fue trazado respetando los árboles centenarios y la topografía volcánica.
              </p>

              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                Nuestra arquitectura combina piedra basalto de la zona, maderas recicladas y curadas, amplios ventanales panorámicos y chimeneas de tiro alto que rinden culto al fuego. Aquí el silencio no es una ausencia, sino una presencia enriquecedora que invita a la introspección, al romance y a la calma.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="block text-2xl font-light text-[#C5B49F]">3,000m</span>
                  <span className="text-xs text-[#8E9B93]">Altitud sobre el nivel del mar</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="block text-2xl font-light text-[#C5B49F]">100%</span>
                  <span className="text-xs text-[#8E9B93]">Compromiso con el entorno</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 reveal-stagger">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury reveal">
                <Image
                  src="/images/hero/recepcion.webp"
                  alt="Recepción de Orgánico Ajusco"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury mt-8 reveal">
                <Image
                  src="/images/hero/hero-dron-bosque.webp"
                  alt="Vista aérea del bosque y suites"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALIANZAS: ORIGEN SPA & GRUPO ORGÁNICO */}
      <section className="py-20 sm:py-28 bg-[#060807] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Ecosistema Orgánico
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Bienestar Holístico & Red Hospitalaria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
            {/* Origen Centro Holístico y Spa */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] font-semibold">
                    <Sparkles className="w-4 h-4 text-[#C5B49F]" />
                    <span>Centro de Bienestar</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] text-[10px] text-[#8E9B93]">
                    En nuestras instalaciones
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-[#F4F5F1]">
                  {HOTEL_INFO.links.spaName}
                </h3>
                <p className="text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                  Contamos con Origen Centro Holístico y Spa para elevar tu experiencia de desconexión. Disfruta de masajes relajantes y de tejido profundo, rituales aromaterapéuticos con hierbas de montaña, sesiones de temazcal tradicional y terapias de sonido que revitalizan tus sentidos.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href={HOTEL_INFO.links.spa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#D8C7B3] transition-colors"
                >
                  <span>Visitar sitio web de Origen Spa</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A0D0C]" />
                </a>
              </div>
            </div>

            {/* Grupo Orgánico Hoteles Boutique */}
            <div className="card-luxury rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5B49F] font-semibold">
                    <Compass className="w-4 h-4 text-[#C5B49F]" />
                    <span>Colección de Refugios</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] text-[10px] text-[#8E9B93]">
                    Grupo Hotelero
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-[#F4F5F1]">
                  {HOTEL_INFO.links.groupName}
                </h3>
                <p className="text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                  Orgánico Hotel Boutique Ajusco forma parte con orgullo de Grupo Orgánico Hoteles Boutique. Un colectivo dedicado a crear propiedades con alma en destinos privilegiados, garantizando un estándar de servicio cálido, personalizado y respetuoso de la identidad local.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href={HOTEL_INFO.links.group}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                >
                  <span>Conocer Grupo Orgánico (GOHB)</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5B49F]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UBICACIÓN & CÓMO LLEGAR */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-6 reveal-left">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                  Ubicación & Llegada
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  Cómo Llegar a la Montaña
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#8E9B93]">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <MapPin className="w-5 h-5 text-[#C5B49F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#F4F5F1] mb-1">
                      Dirección Exacta
                    </strong>
                    <span>{HOTEL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <Navigation className="w-5 h-5 text-[#C5B49F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#F4F5F1] mb-1">
                      Ruta Sugerida desde Periférico Sur
                    </strong>
                    <span>Subir por Carretera Picacho-Ajusco hasta el kilómetro 12.5 en San Miguel Ajusco. El hotel cuenta con señalamientos y acceso pavimentado para todo tipo de vehículos.</span>
                  </div>
                </div>

                {/* Líneas de Atención: Móviles y Fijas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Líneas Móviles */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#3B82F6]/30 transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/25 flex items-center justify-center shrink-0 text-[#60A5FA]">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#F4F5F1] tracking-wide">
                        Líneas Móviles
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 pl-12">
                      {HOTEL_INFO.phones.mobiles.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="text-sm font-medium text-[#60A5FA] hover:text-[#93C5FD] hover:underline transition-colors block"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Líneas Fijas */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#3B82F6]/30 transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/25 flex items-center justify-center shrink-0 text-[#60A5FA]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#F4F5F1] tracking-wide">
                        Líneas Fijas
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 pl-12">
                      {HOTEL_INFO.phones.landlines.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="text-sm font-medium text-[#60A5FA] hover:text-[#93C5FD] hover:underline transition-colors block"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, me gustaría recibir la ubicación en Google Maps e indicaciones de llegada."
                  label="Pedir Ubicación por WhatsApp"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Embedded Responsive Interactive Map */}
            <div className="lg:col-span-7 reveal-scale">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden card-luxury border border-white/10 shadow-2xl">
                <iframe
                  title="Ubicación de Orgánico Hotel Boutique Ajusco en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.7262271887375!2d-99.20208322402127!3d19.21482148202102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bd4db5c0e11%3A0xe4cba799c56ca1ea!2sOrganico%20Hotel%20Boutique!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#0A0D0C]/80 backdrop-blur-md border border-white/10 text-xs text-[#C5B49F] font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>San Miguel Ajusco, CDMX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
