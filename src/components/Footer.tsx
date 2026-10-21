import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Phone, Smartphone, Mail } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { HOTEL_INFO, createWhatsAppUrl } from '@/data/hotelData';

export default function Footer() {
  const generalWa = createWhatsAppUrl(
    "Hola Orgánico Ajusco, me comunico desde la página web para solicitar información general y reservaciones."
  );

  return (
    <footer className="bg-[#060807] text-[#F4F5F1] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#C5B49F]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src={HOTEL_INFO.logos.white}
                alt="Orgánico Hotel Boutique Ajusco"
                width={190}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                className="max-h-12 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-sm font-light text-[#8E9B93] leading-relaxed max-w-sm">
              Refugio de montaña de alta gama en el Ajusco, Ciudad de México. Silencio, coníferas, suites de autor, cocina al fuego y privacidad total a 3,000 metros de altitud.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium">
              &ldquo;{HOTEL_INFO.slogan}&rdquo;
            </p>
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F5F1] mb-5">
              Explorar
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#8E9B93]">
              <li>
                <Link href="/suites" className="hover:text-[#C5B49F] transition-colors">
                  Suites
                </Link>
              </li>
              <li>
                <Link href="/gastronomia" className="hover:text-[#C5B49F] transition-colors">
                  Restaurante Don Petro
                </Link>
              </li>
              <li>
                <Link href="/gastronomia#fuego" className="hover:text-[#C5B49F] transition-colors">
                  Fuego a las Brasas
                </Link>
              </li>
              <li>
                <Link href="/gastronomia#bar" className="hover:text-[#C5B49F] transition-colors">
                  Bar Miel Sobre Limón
                </Link>
              </li>
              <li>
                <Link href="/experiencias" className="hover:text-[#C5B49F] transition-colors">
                  Experiencias de Montaña
                </Link>
              </li>
              <li>
                <Link href="/espacios" className="hover:text-[#C5B49F] transition-colors">
                  Nuestros Espacios
                </Link>
              </li>
              <li>
                <Link href="/eventos-empresariales" className="hover:text-[#C5B49F] transition-colors">
                  Eventos Empresariales
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-[#C5B49F] transition-colors">
                  Nuestra Filosofía
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C5B49F] transition-colors">
                  Blog de Montaña
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-[#C5B49F] hover:text-[#d6c7b4] font-medium transition-colors">
                  Contacto & Reservaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto & Reservaciones */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F5F1] mb-5">
              Reservaciones
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8E9B93]">
              <li>
                <a
                  href={generalWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[#F4F5F1] hover:text-[#C5B49F] transition-colors group"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#8E9B93]">
                      WhatsApp Directo
                    </span>
                    <span className="font-medium">{HOTEL_INFO.whatsappNumber}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <Smartphone className="w-4 h-4 text-[#C5B49F] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#8E9B93] mb-1">
                      Líneas Móviles
                    </span>
                    <div className="flex flex-col gap-0.5">
                      {HOTEL_INFO.phones.mobiles.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="font-medium text-[#F4F5F1] hover:text-[#C5B49F] transition-colors block text-xs sm:text-sm"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5B49F] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#8E9B93] mb-1">
                      Líneas Fijas
                    </span>
                    <div className="flex flex-col gap-0.5">
                      {HOTEL_INFO.phones.landlines.map((p) => (
                        <a
                          key={p.raw}
                          href={`tel:${p.raw}`}
                          className="font-medium text-[#F4F5F1] hover:text-[#C5B49F] transition-colors block text-xs sm:text-sm"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#C5B49F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#8E9B93] mb-0.5">
                    Correo de Atención
                  </span>
                  <a
                    href={`mailto:${HOTEL_INFO.contactEmail}`}
                    className="font-medium text-[#F4F5F1] hover:text-[#C5B49F] transition-colors block text-xs"
                  >
                    {HOTEL_INFO.contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C5B49F] shrink-0 mt-0.5" />
                <span className="text-xs text-[#8E9B93] leading-relaxed">
                  {HOTEL_INFO.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Enlaces Institucionales & Alianzas */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F5F1] mb-5">
              Bienestar & Grupo
            </h4>
            <div className="flex flex-col gap-4">
              {/* Origen Centro Holístico y Spa */}
              <a
                href={HOTEL_INFO.links.spa}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 group block"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[#F4F5F1] group-hover:text-[#C5B49F]">
                  <span>{HOTEL_INFO.links.spaName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B49F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-[11px] text-[#8E9B93] mt-1">
                  Masajes, rituales ancestrales, temazcal y sanación holística.
                </p>
              </a>

              {/* Grupo Orgánico Hoteles Boutique */}
              <a
                href={HOTEL_INFO.links.group}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 group block"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[#F4F5F1] group-hover:text-[#C5B49F]">
                  <span>{HOTEL_INFO.links.groupName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B49F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-[11px] text-[#8E9B93] mt-1">
                  Un universo de hospitalidad de autor y santuarios naturales.
                </p>
              </a>

              {/* Redes Sociales con SVGs limpios */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={HOTEL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#F4F5F1] hover:text-[#C5B49F] hover:border-[#C5B49F]/40 transition-colors"
                  aria-label="Instagram de Orgánico Hotel Boutique Ajusco"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={HOTEL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#F4F5F1] hover:text-[#C5B49F] hover:border-[#C5B49F]/40 transition-colors"
                  aria-label="Facebook de Orgánico Hotel Boutique Ajusco"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9B93]">
          <p>© {new Date().getFullYear()} Orgánico Hotel Boutique Ajusco · San Miguel Ajusco, CDMX.</p>
          <div className="flex items-center gap-6">
            <span>Altitud 3,000 msnm</span>
            <span>·</span>
            <a
              href={HOTEL_INFO.links.group}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Parte de {HOTEL_INFO.links.groupName}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
