import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Smartphone, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  Sparkles, 
  CalendarCheck,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { HOTEL_INFO, createWhatsAppUrl } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Contacto & Reservaciones | Orgánico Hotel Boutique Ajusco",
  description: "Comunícate con Orgánico Hotel Boutique Ajusco. Reserva tu suite, cotiza eventos corporativos o sociales y consulta horarios del Restaurante Don Petro en San Miguel Ajusco.",
  openGraph: {
    title: "Contacto & Reservaciones | Orgánico Hotel Boutique Ajusco",
    description: "Atención personalizada para hospedaje, eventos y gastronomía a 3,000 metros de altitud en el Ajusco, CDMX.",
    images: [
      {
        url: '/images/hero/recepcion.webp',
        width: 1200,
        height: 630,
        alt: 'Recepción y Atención en Orgánico Hotel Boutique Ajusco'
      }
    ]
  }
};

const CONTACT_FAQS = [
  {
    q: "¿Con cuánta anticipación debo reservar mi suite?",
    a: "Para fines de semana y fechas especiales recomendamos reservar con al menos 2 a 3 semanas de anticipación, ya que contamos con un número exclusivo de suites para preservar la intimidad y calma de la montaña."
  },
  {
    q: "¿Puedo visitar el Restaurante Don Petro sin hospedarme en el hotel?",
    a: "¡Por supuesto! El Restaurante Don Petro y Bar Miel Sobre Limón reciben a comensales externos todos los días. Te sugerimos contactarnos previamente para garantizar la mejor mesa frente a la vista del bosque."
  },
  {
    q: "¿Cómo agendo una visita presencial para eventos empresariales o bodas?",
    a: "Puedes enviar tus datos en el formulario seleccionando 'Eventos Empresariales' o 'Bodas', o escribirnos directo por WhatsApp. Uno de nuestros coordinadores te recibirá personalmente para un recorrido guiado por nuestros salones y jardines."
  },
  {
    q: "¿Cuentan con estacionamiento propio y seguridad?",
    a: "Sí, el hotel cuenta con estacionamiento privado vigilado las 24 horas y acceso controlado dentro de la propiedad para la total tranquilidad de nuestros huéspedes y comensales."
  }
];

export default function ContactoPage() {
  const generalWaUrl = createWhatsAppUrl(
    "Hola Orgánico Ajusco, me gustaría solicitar información y disponibilidad para mi próxima visita."
  );

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Page Header */}
      <PageHeader
        title="Conecta con el Refugio en el Bosque"
        subtitle="Estamos listos para planificar tu próxima estancia de lujo, retiro corporativo, boda de ensueño o visita gastronómica a 3,000 metros de altitud."
        tag="Contacto & Reservaciones"
        imageSrc="/images/hero/recepcion.webp"
        breadcrumb="Contacto"
      />

      {/* 2. Main Interaction Section: Form + Direct Channels */}
      <section className="py-16 sm:py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Channels & Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Card 1: Concierge Inmediato & WhatsApp */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                    Atención Inmediata
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En Línea
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] tracking-tight mb-2">
                  Concierge & WhatsApp Directo
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9B93] font-light leading-relaxed mb-6">
                  Si deseas consultar disponibilidad en tiempo real o requieres asistencia inmediata, escríbenos a nuestra línea oficial de mensajería.
                </p>

                <a
                  href={generalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 group"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-black" size={18} />
                  <span>Chatear por WhatsApp ({HOTEL_INFO.whatsappNumber})</span>
                </a>
              </div>

              {/* Card 2: Central Telefónica */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-semibold mb-3">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Central Telefónica</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#8E9B93] mb-2 flex items-center gap-1">
                      <Smartphone className="w-3 h-3 text-[#C5B49F]" />
                      Móviles
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {HOTEL_INFO.phones.mobiles.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="text-xs sm:text-sm font-medium text-[#F4F5F1] hover:text-[#C5B49F] transition-colors block"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#8E9B93] mb-2 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-[#C5B49F]" />
                      Líneas Fijas
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {HOTEL_INFO.phones.landlines.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="text-xs sm:text-sm font-medium text-[#F4F5F1] hover:text-[#C5B49F] transition-colors block"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Horarios & Tiempos */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horarios de Hospitalidad</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="block text-[#8E9B93] text-[10px] uppercase">Recepción</span>
                    <span className="text-[#F4F5F1] font-medium">24 Horas / 365 Días</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="block text-[#8E9B93] text-[10px] uppercase">Check-in / Check-out</span>
                    <span className="text-[#F4F5F1] font-medium">15:00 hrs / 12:00 hrs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 col-span-2">
                    <span className="block text-[#8E9B93] text-[10px] uppercase">Restaurante Don Petro</span>
                    <span className="text-[#F4F5F1] font-medium">Lunes a Domingo · 09:00 a 22:00 hrs</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Location, Coordinates & Navigation Map */}
      <section className="py-20 sm:py-28 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Location Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                  Nuestra Ubicación
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  En el Corazón Silencioso del Ajusco
                </h2>
              </div>

              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                Ubicados en San Miguel Ajusco, al sur de la Ciudad de México, a 3,000 metros de altitud. Un microclima alpino rodeado de densos bosques de coníferas, a tan solo 45 minutos del Anillo Periférico.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5B49F] shrink-0 mt-1" />
                <div className="text-xs sm:text-sm text-[#8E9B93] font-light leading-relaxed">
                  <strong className="text-[#F4F5F1] font-medium block mb-1">Dirección:</strong>
                  {HOTEL_INFO.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="block text-2xl font-light text-[#C5B49F]">3,000m</span>
                  <span className="text-xs text-[#8E9B93]">Altitud de Montaña</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="block text-2xl font-light text-[#C5B49F]">45 min</span>
                  <span className="text-xs text-[#8E9B93]">Desde Periférico Sur</span>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Organico+Hotel+Boutique+Ajusco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/[0.06] border border-white/15 hover:border-[#C5B49F]/50 text-xs uppercase tracking-wider text-[#F4F5F1] transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#C5B49F]" />
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9B93]" />
                </a>

                <a
                  href="https://waze.com/ul?q=Organico+Hotel+Boutique+Ajusco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/[0.06] border border-white/15 hover:border-[#C5B49F]/50 text-xs uppercase tracking-wider text-[#F4F5F1] transition-all"
                >
                  <Compass className="w-4 h-4 text-[#C5B49F]" />
                  <span>Ruta en Waze</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9B93]" />
                </a>
              </div>
            </div>

            {/* Right Map Embed / Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[420px] sm:h-[480px] bg-[#121715]">
                <iframe
                  title="Ubicación de Orgánico Hotel Boutique Ajusco"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1437812166946!2d-99.2045543!3d19.232598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8e104169bf8b%3A0x6b49feaebe6393b8!2sOrg%C3%A1nico%20Hotel%20Boutique!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Map Floating Banner */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-xl bg-[#0A0D0C]/90 backdrop-blur-md border border-white/15 text-xs">
                  <div className="flex items-center gap-2 text-[#C5B49F] font-semibold uppercase tracking-wider text-[11px] mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Acceso Exclusivo y Privado</span>
                  </div>
                  <p className="text-[#8E9B93] font-light leading-relaxed">
                    Portón de seguridad sobre Camino Real 30 de Marzo. Favor de identificarse con el equipo de vigilancia a su llegada.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-2">
              Dudas Comunes sobre tu Visita
            </h2>
            <p className="text-sm text-[#8E9B93] font-light mt-3">
              Información clara para planear una experiencia impecable en la montaña.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-[#C5B49F] text-xs uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Duda Frecuente</span>
                </div>
                <h3 className="text-base sm:text-lg font-light text-[#F4F5F1] leading-snug">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#8E9B93] font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom WhatsApp CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0A0D0C] to-[#060807]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center gap-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
            ¿Requieres Asistencia Inmediata?
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight max-w-2xl">
            Conversa directamente con nuestro equipo de anfitriones por WhatsApp
          </h2>
          <p className="text-sm text-[#8E9B93] font-light max-w-lg">
            Te asesoramos para elegir la suite ideal, coordinar el menú de tu cena o agendar visitas privadas.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, me gustaría comunicarme directamente con un asesor."
              label="Abrir WhatsApp Oficial"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
