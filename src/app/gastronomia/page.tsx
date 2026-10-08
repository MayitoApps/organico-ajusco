import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Utensils, Flame, Wine, Sparkles, FileText, BookOpen, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import WhatsAppButton from '@/components/WhatsAppButton';
import { GASTRONOMIA_DATA } from '@/data/hotelData';

export const metadata: Metadata = {
  title: "Gastronomía & Mixología de Montaña",
  description: "Descubre nuestra propuesta culinaria: Restaurante Don Petro, Fuego Cocina a las Brasas y Bar Miel Sobre Limón en el Ajusco, CDMX.",
};

export default function GastronomiaPage() {
  const donPetro = GASTRONOMIA_DATA.find((g) => g.id === 'don-petro')!;
  const fuego = GASTRONOMIA_DATA.find((g) => g.id === 'fuego')!;
  const barMiel = GASTRONOMIA_DATA.find((g) => g.id === 'bar-miel-sobre-limon')!;

  return (
    <div className="w-full bg-[#0A0D0C]">
      {/* 1. Header */}
      <PageHeader
        title="Cocina de Montaña, Brasas & Mixología"
        subtitle="Lejos del ruido urbano, los sabores se intensifican. Una propuesta gastronómica honesta que honra los ingredientes locales, el calor del fogón y el placer de compartir sin prisa."
        tag="Experiencia Culinaria"
        imageSrc="/images/gastronomia/don-petro-1.webp"
        breadcrumb="Gastronomía & Bar"
      />

      {/* 2. Intro Bar */}
      <section className="py-12 border-b border-white/10 bg-[#060807]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center reveal-stagger">
          <div className="p-4 reveal">
            <Utensils className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Cocina Abierta</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Elaboración artesanal frente al comensal</p>
          </div>
          <div className="p-4 reveal">
            <Flame className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Leña de Encino & Carbón</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Ahumados lentos y sellados a fuego vivo</p>
          </div>
          <div className="p-4 reveal">
            <Wine className="w-6 h-6 text-[#C5B49F] mx-auto mb-2" />
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1]">Cava & Coctelería Botánica</h4>
            <p className="text-[11px] text-[#8E9B93] mt-1">Destilados mexicanos y etiquetas de autor</p>
          </div>
        </div>
      </section>

      {/* 3. RESTAURANTE DON PETRO */}
      <section id="don-petro" className="py-20 sm:py-28 border-b border-white/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 reveal-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                  Restaurante Insignia
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  {donPetro.name}
                </h2>
                <p className="text-sm text-[#C5B49F] font-medium mt-2">
                  {donPetro.concept}
                </p>
              </div>


              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                {donPetro.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                  Puntos Destacados
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#8E9B93]">
                  {donPetro.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5B49F] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cartas & Menús Digitales en PDF */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F5F1] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#C5B49F]" />
                  <span>Cartas & Menús de Don Petro</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal-stagger">
                  <a
                    href="/menus/Menu-Desayunos_Don_Petro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 flex items-center justify-between gap-3 shadow-lg hover:shadow-[#C5B49F]/5 reveal"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#C5B49F]/10 border border-[#C5B49F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C5B49F] transition-colors">
                        <FileText className="w-5 h-5 text-[#C5B49F] group-hover:text-[#0A0D0C] transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-[#F4F5F1] group-hover:text-white truncate">
                          Menú Desayunos
                        </p>
                        <p className="text-[10px] text-[#8E9B93] uppercase tracking-wider">
                          Ver PDF digital
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C5B49F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="/menus/Menu-Comidas_Don_Petro.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 flex items-center justify-between gap-3 shadow-lg hover:shadow-[#C5B49F]/5 reveal"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#C5B49F]/10 border border-[#C5B49F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C5B49F] transition-colors">
                        <FileText className="w-5 h-5 text-[#C5B49F] group-hover:text-[#0A0D0C] transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-[#F4F5F1] group-hover:text-white truncate">
                          Menú Comidas
                        </p>
                        <p className="text-[10px] text-[#8E9B93] uppercase tracking-wider">
                          Ver PDF digital
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C5B49F] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  message={donPetro.whatsappMessage}
                  label="Reservar Mesa en Don Petro"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal-stagger">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury reveal">
                <Image
                  src={donPetro.images[0]}
                  alt="Restaurante Don Petro terraza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={donPetro.images[1]}
                    alt="Salón interior Don Petro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={donPetro.images[2]}
                    alt="Gastronomía Don Petro platillo de autor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FUEGO - COCINA A LAS BRASAS */}
      <section id="fuego" className="py-20 sm:py-28 bg-[#060807] border-b border-white/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-2 lg:order-1 reveal-stagger">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury reveal">
                <Image
                  src={fuego.images[0]}
                  alt="Fuego cocina a las brasas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={fuego.images[1]}
                    alt="Parrilla y carbón en Fuego"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={fuego.images[2]}
                    alt="Terraza exterior de Fuego"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2 reveal-right">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D98A53] font-semibold">
                  Cocina al Fuego Vivo
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  {fuego.name}
                </h2>
                <p className="text-sm text-[#C5B49F] font-medium mt-2">
                  {fuego.concept}
                </p>
              </div>


              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                {fuego.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                  Especialidades
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#8E9B93]">
                  {fuego.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5 text-[#D98A53] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  message={fuego.whatsappMessage}
                  label="Reservar Mesa en Fuego"
                  variant="amber"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BAR MIEL SOBRE LIMÓN */}
      <section id="bar" className="py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-5 flex flex-col gap-6 reveal-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                  Mixología de Autor
                </span>
                <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-1">
                  {barMiel.name}
                </h2>
                <p className="text-sm text-[#C5B49F] font-medium mt-2">
                  {barMiel.concept}
                </p>
              </div>


              <p className="text-sm text-[#8E9B93] font-light leading-relaxed">
                {barMiel.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F4F5F1] mb-3">
                  La Experiencia del Bar
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#8E9B93]">
                  {barMiel.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Wine className="w-3.5 h-3.5 text-[#C5B49F] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <WhatsAppButton
                  message={barMiel.whatsappMessage}
                  label="Reservar en Bar Miel Sobre Limón"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal-stagger">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury reveal">
                <Image
                  src={barMiel.images[0]}
                  alt="Bar Miel Sobre Limón exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={barMiel.images[1]}
                    alt="Cóctel de autor botánico"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden card-luxury reveal">
                  <Image
                    src={barMiel.images[2]}
                    alt="Terraza con vista del Ajusco"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAVA DE VINOS */}
      <section className="py-16 bg-[#060807] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center gap-4 reveal-scale">
          <Wine className="w-8 h-8 text-[#C5B49F]" />
          <h3 className="text-2xl font-light text-[#F4F5F1]">
            Selección Privada de Vinos Tintos y Espumosos de Autor
          </h3>
          <p className="text-xs sm:text-sm text-[#8E9B93] leading-relaxed">
            Nuestra cava reúne etiquetas exclusivas de pequeños productores mexicanos e internacionales, seleccionadas cuidadosamente para maridar a la perfección con el clima de montaña y nuestras recetas a las brasas.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, deseo consultar la carta de vinos y opciones de maridaje."
              label="Consultar Carta de Vinos"
              variant="outline"
              size="sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
