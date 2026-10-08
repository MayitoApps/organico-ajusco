'use client';

import React from 'react';
import Image from 'next/image';
import { HOTEL_INFO, createWhatsAppUrl } from '@/data/hotelData';

export default function FloatingWhatsApp() {
  const url = createWhatsAppUrl(
    "Hola Orgánico Ajusco, me comunico desde su sitio web y me gustaría recibir información y asistencia."
  );

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 p-3.5 bg-[#121714]/95 hover:bg-[#1A221E] text-[#F4F5F1] rounded-full border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:border-[#25D366]/50"
        aria-label={`Contactar por WhatsApp a Orgánico Ajusco (${HOTEL_INFO.whatsappNumber})`}
      >
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
          <Image
            src="/images/icons/whatsapp.png"
            alt="WhatsApp Orgánico Ajusco"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="hidden sm:inline-block pr-2 text-xs font-semibold tracking-wider uppercase text-[#F4F5F1] group-hover:text-white transition-colors">
          WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366]" />
        </span>
      </a>
    </aside>
  );
}
