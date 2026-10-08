'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: "¿Dónde se encuentra ubicado Orgánico Hotel Boutique Ajusco y cómo se llega desde la CDMX?",
    answer: "Orgánico Hotel Boutique se localiza en Camino Real 30 de Marzo, San Miguel Ajusco, Alcaldía Tlalpan, CDMX, a 3,000 metros de altitud en el bosque del Ajusco. Se llega en aproximadamente 45 a 55 minutos desde el sur de la Ciudad de México por la Carretera Picacho-Ajusco. Toda la ruta de acceso está pavimentada y el hotel cuenta con estacionamiento privado vigilado las 24 horas."
  },
  {
    question: "¿Todas las suites cuentan con chimenea de leña funcional?",
    answer: "No todas las suites cuentan con chimenea, su asignación es bajo disponibilidad al momento de hacer la reservación. En las suites asignadas con chimenea se incluye dotación inicial de leña, encendido asistido por nuestro personal y servicio a la habitación (room service)."
  },
  {
    question: "¿El restaurante Don Petro y el Bar Miel Sobre Limón están abiertos al público en general?",
    answer: "Sí. No es necesario estar hospedado para disfrutar de nuestra gastronomía. Restaurante Don Petro ofrece desayunos de pueblo, cortes selectos a las brasas en Fuego y su tradicional buffet campestre de fin de semana. Bar Miel Sobre Limón cuenta con mixología botánica y fogateros. Por cuestiones de aforo del bosque, se requiere reservación previa vía WhatsApp."
  },
  {
    question: "¿Qué tipo de experiencias románticas y pedidas de mano se pueden realizar?",
    answer: "Diseñamos momentos íntimos que incluyen cenas privadas de 4 tiempos a la luz de las velas con maridaje de vino, montajes escenográficos de pedida de mano con letreros luminosos gigantes en el bosque, fogatadas románticas con bombones y picnics de autor con atención de concierge."
  },
  {
    question: "¿Tienen infraestructura para eventos empresariales, retiros de liderazgo y convenciones?",
    answer: "Sí. Disponemos del Salón Victoria (80 personas), Auditorio Isaura (150 personas), Casa Club y jardines de montaña con capacidad para más de 300 asistentes. Todos los eventos B2B, dinámicas de team building y retiros ejecutivos son operados y producidos desde cero por OTAM y Grupo Orgánico Hoteles Boutique, con clientes de clase mundial como la Unión Europea y Adidas."
  },
  {
    question: "¿Cómo se realizan las reservaciones y cuál es el horario de check-in / check-out?",
    answer: "Las reservaciones se realizan de forma directa y personalizada a través del canal oficial de WhatsApp del hotel (+52 55 9696 9073) para garantizar disponibilidad y paquetes a medida. El horario de entrada (check-in) es a las 15:00 hrs y la salida (check-out) es a las 12:00 hrs."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#060807] border-t border-white/5 relative" id="faq">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5B49F]" />
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-3 leading-relaxed">
            Todo lo que necesitas saber antes de subir a la montaña, reservar tu suite o planear tu experiencia en Orgánico Hotel Boutique Ajusco.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4 reveal-stagger">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-luxury rounded-2xl overflow-hidden border border-white/10 transition-all reveal"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-light text-[#F4F5F1] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C5B49F] text-[#0A0D0C]' : 'text-[#C5B49F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-[#8E9B93] font-light leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left reveal-scale">
          <div>
            <h3 className="text-lg font-medium text-[#F4F5F1]">
              ¿Tienes alguna duda específica sobre tu estancia?
            </h3>
            <p className="text-xs sm:text-sm text-[#8E9B93] mt-1">
              Nuestro concierge responde al instante por WhatsApp para cotizaciones, menú o eventos especiales.
            </p>
          </div>
          <WhatsAppButton
            message="Hola Orgánico Ajusco, tengo una consulta sobre sus servicios y suites."
            label="Chatear con Concierge"
            variant="primary"
            size="md"
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
