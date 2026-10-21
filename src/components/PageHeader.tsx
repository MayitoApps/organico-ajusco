import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  tag: string;
  imageSrc: string;
  imageAlt?: string;
  breadcrumb?: string;
  wide?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  tag,
  imageSrc,
  imageAlt = "Orgánico Hotel Boutique Ajusco en el bosque",
  breadcrumb,
  wide = false,
}: PageHeaderProps) {
  return (
    <section className="relative w-full min-h-[50vh] sm:min-h-[58vh] flex items-end pb-16 pt-36 overflow-hidden">
      {/* Background Image with Parallax feel and high priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          loading="eager"
          className="object-cover object-center transform scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Layered Luxury Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/70 to-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className={`${wide ? 'max-w-[1700px]' : 'max-w-7xl'} mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full`}>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8E9B93] mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5B49F]" />
          <span className="text-[#C5B49F]">{breadcrumb || tag}</span>
        </div>

        {/* Tag badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-[0.25em] text-[#C5B49F] font-medium mb-3">
          <span>{tag}</span>
        </div>

        {/* Main Title */}
        <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-light text-[#F4F5F1] tracking-tight leading-[1.15] ${wide ? 'max-w-5xl' : 'max-w-4xl'}`}>
          {title}
        </h1>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg text-[#8E9B93] font-light mt-4 leading-relaxed ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
