'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, Flame, Sparkles, ArrowRight, Calendar, Moon } from 'lucide-react';

interface DiaDeMuertosPopupProps {
  forceOpen?: boolean;
}

const EVENTS = [
  {
    id: 'cena-raices',
    tag: '31 DE OCTUBRE · 7:00 PM',
    name: 'Cena de Raíces a Fuego Vivo',
    desc: 'Menú ancestral de 6 tiempos ahumado en leña de encino con maridaje de autor en la Terraza de Niebla.',
  },
  {
    id: 'fogatadas',
    tag: '24 OCT – 21 NOV',
    name: 'Nuevas Fogatadas de Temporada',
    desc: 'Fogatas privadas: Almas, Orgánica y Especial con bombones, chocolate caliente y atole de flor de cempasúchil.',
  },
  {
    id: 'concurso-calaveritas',
    tag: 'NOCHES · > 10:00 PM',
    name: 'Concurso de Calaveritas en Bar Miel sobre Limón',
    desc: 'Mixología temática de autor de Día de Muertos y lectura bohemia al abrigo de la montaña.',
  },
  {
    id: 'altar-ceremonial',
    tag: '27 OCT – 2 NOV',
    name: 'Altar Ceremonial en el Bosque',
    desc: 'Ofrenda monumental abierta a huéspedes y visitantes con veladoras y tributo entre pinos.',
  },
];

export default function DiaDeMuertosPopup({ forceOpen = false }: DiaDeMuertosPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  const POPUP_STORAGE_KEY = 'gohb_seen_ajusco';
  const PROGRAM_URL = 'https://dia-de-muertos-gohb.vercel.app/organico-ajusco';

  // Open modal with smooth transition
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  // Close modal with exit animation and update session
  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 350);

    try {
      sessionStorage.setItem(POPUP_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage errors in private browsing modes
    }
  }, []);

  // Keyboard navigation & global trigger listeners
  useEffect(() => {
    setMounted(true);

    // Expose backward-compatible global trigger methods
    if (typeof window !== 'undefined') {
      (window as unknown as { gohbOpenPopup?: (id?: string) => void }).gohbOpenPopup = () => {
        handleOpen();
      };
      (window as unknown as { gohbClosePopup?: (id?: string) => void }).gohbClosePopup = () => {
        handleClose();
      };
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleOpen, handleClose]);

  // Initial delay timer on page load
  useEffect(() => {
    if (!mounted) return;

    let shouldShow = forceOpen;

    if (!shouldShow) {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryForce = urlParams.has('popup') || urlParams.has('ddm');
        const alreadySeen = sessionStorage.getItem(POPUP_STORAGE_KEY) === 'true';

        if (queryForce || !alreadySeen) {
          shouldShow = true;
        }
      } catch {
        shouldShow = true;
      }
    }

    if (shouldShow) {
      const timer = setTimeout(() => {
        handleOpen();
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [mounted, forceOpen, handleOpen]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      id="gohb-modal-ajusco"
      className={`fixed inset-0 z-[99999999] flex items-center justify-center p-4 sm:p-6 transition-all duration-350 ease-out ${
        isAnimating ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Día de Muertos 2026 - Orgánico Hotel Boutique Ajusco"
    >
      {/* Backdrop with rich blur & subtle darkening */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-[#0A0705]/85 backdrop-blur-md transition-opacity duration-350 ease-out cursor-pointer ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Luxury Modal Card */}
      <div
        className={`relative z-10 w-full max-w-[530px] max-h-[90vh] overflow-y-auto gohb-custom-scroll rounded-2xl sm:rounded-3xl bg-[#16110E] border border-[#D9822B]/40 p-6 sm:p-8 text-[#F2E8DC] shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(217,130,43,0.22)] transition-all duration-350 ease-out ${
          isAnimating ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
        }`}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#D9822B #1E1713',
        }}
      >
        {/* Decorative warm aura glow at top of card */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D9822B]/25 via-[#B84A29]/10 to-transparent rounded-t-3xl"
          aria-hidden="true"
        />

        {/* Ambient warm corner candle glow */}
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 bg-[#D9822B]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana emergente"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-9 h-9 rounded-full bg-white/[0.06] border border-[#D9822B]/30 text-[#F2E8DC] hover:text-[#16110E] hover:bg-[#D9822B] hover:rotate-90 flex items-center justify-center transition-all duration-300 focus:outline-none shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="relative text-center mb-6 pt-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D9822B]/15 border border-[#D9822B]/40 text-[#E58A3C] text-[10.5px] uppercase tracking-[0.14em] font-bold mb-3 shadow-[0_0_15px_rgba(217,130,43,0.15)]">
            <span className="text-sm animate-pulse">🔥</span>
            <span>DÍA DE MUERTOS 2026 · AJUSCO</span>
          </div>

          {/* Title */}
          <h2 className="font-cinzel text-2xl sm:text-[27px] font-bold leading-tight tracking-wide mb-2.5 bg-gradient-to-r from-white via-[#FCE0B6] to-[#D9822B] bg-clip-text text-transparent">
            Recordar es volver a encontrarnos
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13.5px] text-[#A89B91] leading-relaxed max-w-[420px] mx-auto font-light">
            Celebración ancestral a 3,000 msnm entre el misticismo del bosque de coníferas.
          </p>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-2.5 mb-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="group relative rounded-xl bg-[#201813]/75 hover:bg-[#2A2019]/95 border border-[#B84A29]/28 hover:border-[#D9822B]/60 border-l-[3px] border-l-[#D9822B] p-3.5 sm:p-4 text-left transition-all duration-300 hover:translate-x-1 hover:shadow-[0_4px_20px_rgba(217,130,43,0.14)]"
            >
              {/* Event Tag / Date */}
              <div className="text-[10px] font-bold tracking-[0.1em] text-[#E58A3C] uppercase mb-1">
                {event.tag}
              </div>

              {/* Event Name */}
              <h3 className="font-cinzel text-[14.5px] sm:text-[15.5px] font-bold text-[#F2E8DC] group-hover:text-[#FDD59B] transition-colors leading-snug mb-1">
                {event.name}
              </h3>

              {/* Event Description */}
              <p className="text-[11.5px] sm:text-[12px] text-[#A89B91] leading-relaxed m-0 font-light">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer & CTA Button */}
        <div className="text-center pt-1">
          <a
            id="gohb-cta-ajusco"
            href={PROGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D9822B] via-[#E88E35] to-[#B84A29] hover:from-[#E68E35] hover:to-[#C45330] text-white font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(217,130,43,0.4)] hover:shadow-[0_12px_35px_rgba(217,130,43,0.65)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Ver Programa Completo y Reservar</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="text-[11px] text-[#A89B91]/85 tracking-wide mt-2.5 opacity-80">
            Cupos limitados · Experiencias con previa reservación
          </p>
        </div>
      </div>
    </div>
  );
}
