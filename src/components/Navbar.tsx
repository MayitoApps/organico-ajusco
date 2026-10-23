'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

interface NavLinkItem {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
    description: string;
  }[];
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Suites', href: '/suites' },
  { name: 'Gastronomía', href: '/gastronomia' },
  { name: 'Experiencias', href: '/experiencias' },
  { name: 'Espacios', href: '/espacios' },
  { name: 'Eventos Empresariales', href: '/eventos-empresariales' },
  {
    name: 'Nosotros',
    href: '/nosotros',
    dropdown: [
      {
        name: 'Sobre Nosotros',
        href: '/nosotros',
        description: 'Nuestra historia, filosofía y ubicación en la montaña',
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Historias del bosque, escapadas en pareja y momentos especiales',
      },
    ],
  },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (pathname === '/nosotros' || pathname.startsWith('/blog')) {
      setMobileNosotrosOpen(true);
    }
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative flex items-center justify-between">
          {/* Left Column: Logo placed distinctly to the left */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="group flex items-center gap-3 relative z-10 -ml-1 sm:ml-0">
              <Image
                src={HOTEL_INFO.logos.white}
                alt="Orgánico Hotel Boutique Ajusco"
                width={180}
                height={48}
                priority
                style={{ width: 'auto', height: 'auto' }}
                className="max-h-10 sm:max-h-12 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Center Column: Mathematically Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-5 2xl:gap-6 shrink-0">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const isDropdownActive =
                  pathname === link.href || pathname.startsWith('/blog');

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className={`text-[10px] xl:text-[11.5px] uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium transition-colors relative py-1 cursor-pointer flex items-center gap-1 select-none focus:outline-none ${
                        isDropdownActive
                          ? 'text-[#C5B49F]'
                          : 'text-[#F4F5F1]/80 hover:text-[#F4F5F1]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${
                          dropdownOpen ? 'rotate-180 text-[#C5B49F]' : 'text-[#8E9B93]'
                        }`}
                      />
                      {isDropdownActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5B49F] rounded-full" />
                      )}
                    </button>

                    {/* Luxury Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                        <div className="w-72 p-2 rounded-2xl bg-[#0A0D0C]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1 animate-in fade-in zoom-in-95 duration-200">
                          {link.dropdown.map((subItem) => {
                            const isSubActive =
                              subItem.href === '/nosotros'
                                ? pathname === '/nosotros'
                                : pathname.startsWith('/blog');

                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setDropdownOpen(false)}
                                className={`p-3 rounded-xl transition-all duration-200 block text-left group/item ${
                                  isSubActive
                                    ? 'bg-[#C5B49F]/15 border border-[#C5B49F]/30'
                                    : 'hover:bg-white/[0.05] border border-transparent'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-xs font-medium uppercase tracking-wider ${
                                      isSubActive
                                        ? 'text-[#C5B49F]'
                                        : 'text-[#F4F5F1] group-hover/item:text-[#C5B49F]'
                                    }`}
                                  >
                                    {subItem.name}
                                  </span>
                                  <ArrowUpRight
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isSubActive
                                        ? 'text-[#C5B49F]'
                                        : 'text-[#8E9B93] group-hover/item:text-[#C5B49F] group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5'
                                    }`}
                                  />
                                </div>
                                <p className="text-[11px] text-[#8E9B93] font-light mt-1 leading-snug">
                                  {subItem.description}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] xl:text-[11.5px] uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#C5B49F]'
                      : 'text-[#F4F5F1]/80 hover:text-[#F4F5F1]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5B49F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Column: Symmetrical Balancer with subtle Reservar CTA on Desktop & Mobile Hamburger */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
            <a
              href={HOTEL_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#C5B49F]/30 bg-[#C5B49F]/10 hover:bg-[#C5B49F] text-[#F4F5F1] hover:text-[#0A0D0C] text-[10.5px] uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(197,180,159,0.25)]"
            >
              <span>Reservar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-[#F4F5F1] hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0A0D0C]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
            Navegación
          </p>
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const isParentActive =
                  pathname === link.href || pathname.startsWith('/blog');

                return (
                  <div key={link.name} className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setMobileNosotrosOpen((prev) => !prev)}
                      className={`text-2xl font-light tracking-wide transition-colors flex items-center justify-between w-full text-left py-1 ${
                        isParentActive ? 'text-[#C5B49F] font-normal' : 'text-[#F4F5F1]/80 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 text-[#C5B49F] ${
                          mobileNosotrosOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileNosotrosOpen && (
                      <div className="flex flex-col gap-3 pl-4 pt-1 pb-2 border-l border-[#C5B49F]/30 ml-2">
                        {link.dropdown.map((subItem) => {
                          const isSubActive =
                            subItem.href === '/nosotros'
                              ? pathname === '/nosotros'
                              : pathname.startsWith('/blog');

                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`text-lg font-light transition-colors flex items-center justify-between py-1 ${
                                isSubActive ? 'text-[#C5B49F] font-normal' : 'text-[#8E9B93] hover:text-white'
                              }`}
                            >
                              <span>{subItem.name}</span>
                              {isSubActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F]" />}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-light tracking-wide transition-colors flex items-center justify-between py-1 ${
                    isActive ? 'text-[#C5B49F] font-normal' : 'text-[#F4F5F1]/80 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C5B49F]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Footer with external links & Reservar CTA */}
        <div className="pt-8 mt-6 border-t border-white/10 flex flex-col gap-4">
          <a
            href={HOTEL_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#C5B49F]/40 bg-[#C5B49F] text-[#0A0D0C] text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(197,180,159,0.3)] active:scale-[0.98]"
          >
            <span>Reservar</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-[#8E9B93]">
            <a
              href={HOTEL_INFO.links.spa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>{HOTEL_INFO.links.spaName}</span>
              <ArrowUpRight className="w-3 h-3 text-[#C5B49F]" />
            </a>
            <a
              href={HOTEL_INFO.links.group}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-right justify-end"
            >
              <span>{HOTEL_INFO.links.groupName}</span>
              <ArrowUpRight className="w-3 h-3 text-[#C5B49F]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
