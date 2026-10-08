import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Flame, Compass, Sparkles, MapPin, Bed, Users } from 'lucide-react';
import { HOTEL_INFO, SUITES_DATA, GASTRONOMIA_DATA, EXPERIENCIAS_DATA, createWhatsAppUrl } from '@/data/hotelData';
import WhatsAppButton from '@/components/WhatsAppButton';
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer';
import HomeFAQ from '@/components/HomeFAQ';

export default function HomePage() {
  const heroWa = createWhatsAppUrl(
    "Hola Orgánico Ajusco, me gustaría consultar disponibilidad para una estancia en la montaña."
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-5 sm:px-8">
        {/* Background Image & Scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-montana.webp"
            alt="Orgánico Hotel Boutique en el bosque del Ajusco"
            fill
            priority
            loading="eager"
            className="object-cover object-center scale-105 transform animate-in fade-in duration-1000"
            sizes="100vw"
          />
          {/* Multi-layered dark gradients for atmospheric depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C] via-[#0A0D0C]/60 to-black/50" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0D0C]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 mt-8 reveal-stagger">
          {/* Overline tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5B49F] animate-pulse" />
            <span>San Miguel Ajusco · 3,000 MSNM · CDMX</span>
          </div>

          {/* Mandatory Hero Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F4F5F1] tracking-tight leading-[1.08] max-w-4xl reveal">
            Así se siente el Bosque, <br />
            <span className="font-normal text-[#C5B49F]">
              Así se siente Orgánico Ajusco.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#9AA39D] font-light max-w-2xl leading-relaxed reveal">
            Un santuario privado de cabañas con chimenea, gastronomía a las brasas y silencio absoluto en lo alto de la montaña.
          </p>

          {/* Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto reveal">
            <WhatsAppButton
              message="Hola Orgánico Ajusco, me gustaría cotizar una estancia en la montaña."
              label="Reservar por WhatsApp"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto shadow-2xl"
            />
            <Link
              href="/suites"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#F4F5F1] bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md transition-all duration-300"
            >
              <span>Ver Cabañas & Suites</span>
              <ArrowRight className="w-4 h-4 text-[#C5B49F]" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-white/10 w-full max-w-2xl text-center reveal-stagger">
            <div className="reveal">
              <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">3,000m</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Altitud</p>
            </div>
            <div className="reveal">
              <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">100%</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">Privacidad</p>
            </div>
            <div className="reveal">
              <p className="text-xl sm:text-2xl font-light text-[#F4F5F1]">Chimenea</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8E9B93] mt-1">En cada suite</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE */}
      <section className="py-24 sm:py-32 bg-[#060807] border-y border-white/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-[#C5B49F]/5 via-[#D98A53]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] uppercase tracking-[0.3em] text-[#C5B49F] font-semibold reveal">
            <span>Colección de Refugios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F4F5F1] tracking-tight max-w-4xl leading-[1.15] reveal">
            DESCUBRE EL UNIVERSO DE GRUPO ORGÁNICO HOTELES BOUTIQUE
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#C5B49F] font-light max-w-3xl leading-relaxed reveal">
            Un universo de destinos, experiencias y momentos inolvidables.
          </p>

          {/* Video Oficial Universo Grupo Orgánico */}
          <div className="w-full max-w-4xl mx-auto my-3 reveal-scale">
            <LuxuryVideoPlayer
              videoId="r2tnnrp-G6Y"
              title="Descubre el Universo de Grupo Orgánico Hoteles Boutique"
              posterSrc="/images/video-poster.webp"
            />
          </div>

          <div className="max-w-3xl flex flex-col gap-6 text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed reveal">
            <p>
              Déjate envolver por la serenidad del bosque y la energía mística de Valle de Bravo y Tepoztlán; reconecta con la naturaleza, el aire puro y la esencia de la montaña en Ajusco; o descubre el encanto histórico, el arte y la vida cultural que distinguen a Tlalpan y a la vibrante Roma Norte.
            </p>
            <p>
              Y cuando el cuerpo pida mar, calidez y tradición, Veracruz te espera con su brisa, su sabor y esa forma única de hacerte sentir bienvenido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl pt-4 border-y border-white/10 py-8 reveal-stagger">
            <div className="p-4 rounded-xl bg-white/[0.02] reveal">
              <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
                Cada destino tiene su propia esencia.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] reveal">
              <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
                Cada espacio, una historia por vivir.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] reveal">
              <p className="text-sm sm:text-base font-normal text-[#F4F5F1] italic">
                Cada experiencia, un momento para recordar.
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg font-medium text-[#F4F5F1] tracking-wide reveal">
            Todo forma parte del Universo de Grupo Orgánico.
          </p>

          <div className="pt-2 reveal">
            <a
              href={HOTEL_INFO.links.group}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#D8C7B3] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-black/60"
            >
              <span>Visitar Sitio Web de Grupo Orgánico</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0D0C]" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. MANIFIESTO DE MONTAÑA */}
      <section className="py-24 sm:py-32 bg-[#0A0D0C] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6 reveal-left">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                El Silencio de la Altura
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F5F1] tracking-tight leading-tight">
                El lujo de detener el tiempo entre coníferas y fuego.
              </h2>
              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                A menos de una hora del sur de la Ciudad de México, el bullicio urbano desaparece para dar paso al aire puro, el olor a tierra mojada y la paz inquebrantable de la sierra.
              </p>
              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                Orgánico Hotel Boutique Ajusco fue concebido como un refugio arquitectónico que abraza la naturaleza sin perturbarla. Nuestras cabañas de autor combinan la robustez de la madera y la piedra con el confort más refinado.
              </p>

              <div className="pt-2">
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5B49F] hover:text-white transition-colors group"
                >
                  <span>Conocer nuestra historia</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 reveal-stagger">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury reveal">
                <Image
                  src="/images/hero/exteriores-refugio.webp"
                  alt="Refugio en el bosque Orgánico Ajusco"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-luxury mt-8 sm:mt-12 reveal">
                <Image
                  src="/images/hero/exteriores-niebla.webp"
                  alt="Niebla y coníferas en el Ajusco"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 35vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUITES & CABAÑAS (PREVIEW DE ALTA CONVERSIÓN) */}
      <section className="py-24 sm:py-32 bg-[#060807] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Santuarios de Descanso
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
                Nuestras Cabañas & Suites
              </h2>
            </div>
            <Link
              href="/suites"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5B49F] hover:text-white transition-colors group"
            >
              <span>Ver catálogo completo con amenidades</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Suites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {SUITES_DATA.map((suite) => (
              <div
                key={suite.id}
                className="group card-luxury rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={suite.featuredImage}
                      alt={suite.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-light text-[#F4F5F1] border border-[#C5B49F]/30">
                      {suite.price}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#C5B49F] font-medium border border-white/10">
                      Room Service
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#8E9B93] mb-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#C5B49F]" />
                        {suite.capacity}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#C5B49F]" />
                        Chimenea
                      </span>
                    </div>

                    <h3 className="text-xl font-normal text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
                      {suite.name}
                    </h3>
                    <p className="text-xs text-[#8E9B93] font-light mt-2 line-clamp-3 leading-relaxed">
                      {suite.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card CTA & Price */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-white/5 flex items-baseline justify-between mb-3.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#8E9B93]">Tarifa / noche</span>
                    <span className="text-base font-light text-[#C5B49F]">{suite.price}</span>
                  </div>
                  <WhatsAppButton
                    message={suite.whatsappMessage}
                    label="Reservar Suite"
                    variant="primary"
                    size="sm"
                    className="w-full text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GASTRONOMÍA DE AUTOR */}
      <section className="py-24 sm:py-32 bg-[#0A0D0C] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
              Cocina de Montaña
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
              El Ritual del Fuego & los Sabores de Altura
            </h2>
            <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-4 leading-relaxed">
              Desde el abundante buffet campestre de los fines de semana en Don Petro hasta cortes selectos a las brasas y coctelería botánica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-stagger">
            {GASTRONOMIA_DATA.map((item) => (
              <div
                key={item.id}
                className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.featuredImage}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121714] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-wider text-[#C5B49F] font-semibold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {item.concept}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-light text-[#F4F5F1]">{item.name}</h3>
                    <p className="text-xs text-[#C5B49F] font-medium mt-1">{item.subtitle}</p>
                    <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-3 leading-relaxed">
                      {item.description.slice(0, 160)}...
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-4">
                  <WhatsAppButton
                    message={item.whatsappMessage}
                    label="Reservar Mesa"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/gastronomia"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#D8C7B3] transition-colors"
            >
              <span>Explorar Menús & Mixología</span>
              <ArrowRight className="w-4 h-4 text-[#0A0D0C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCIAS & MOMENTOS */}
      <section className="py-24 sm:py-32 bg-[#060807] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5B49F] font-semibold">
                Momentos Memorables
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight mt-2">
                Experiencias Diseñadas en el Bosque
              </h2>
            </div>
            <Link
              href="/experiencias"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5B49F] hover:text-white transition-colors group"
            >
              <span>Ver todas las experiencias</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 Featured Experience Cards (One from each category) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {/* Íntimo */}
            <div className="card-luxury rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5B49F] font-bold">
                  Momentos Íntimos
                </span>
                <h3 className="text-xl font-light text-[#F4F5F1] mt-2">Cenas Románticas & Pedidas</h3>
                <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                  Cenas de 4 tiempos a la luz de las velas, montajes escenográficos de pedida de mano, fogatadas privadas y picnics de autor.
                </p>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mt-4">
                  <Image
                    src="/images/experiencias/cena-romantica-1.webp"
                    alt="Cena Romántica en el Ajusco"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="pt-6">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, me gustaría cotizar una Cena Romántica o Pedida de Mano."
                  label="Cotizar Experiencia Íntima"
                  variant="primary"
                  size="sm"
                  className="w-full"
                />
              </div>
            </div>

            {/* Rebeldía */}
            <div className="card-luxury rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5B49F] font-bold">
                  Momentos Rebeldía
                </span>
                <h3 className="text-xl font-light text-[#F4F5F1] mt-2">Aventura & Conexión Salvaje</h3>
                <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                  Rutas guiadas en cuatrimoto por terracería, cabalgatas entre pinos, tiro con arco y senderismo de cumbre a más de 3,000 msnm.
                </p>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mt-4">
                  <Image
                    src="/images/experiencias/cuatrimotos-1.webp"
                    alt="Cuatrimotos en el Ajusco"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="pt-6">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, deseo información para actividades de aventura (Cuatrimotos / Cabalgata / Tiro)."
                  label="Cotizar Actividades"
                  variant="primary"
                  size="sm"
                  className="w-full"
                />
              </div>
            </div>

            {/* Compartir */}
            <div className="card-luxury rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5B49F] font-bold">
                  Momentos Para Compartir
                </span>
                <h3 className="text-xl font-light text-[#F4F5F1] mt-2">Fogatadas, Cine & Talleres</h3>
                <p className="text-xs text-[#8E9B93] mt-2 leading-relaxed">
                  Fogateros comunales bajo las estrellas, proyecciones de Cinema Orgánico al aire libre, catas de vino y talleres de pizza a la leña.
                </p>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mt-4">
                  <Image
                    src="/images/experiencias/fogata-grupal-1.webp"
                    alt="Fogatada en el Ajusco"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="pt-6">
                <WhatsAppButton
                  message="Hola Orgánico Ajusco, deseo solicitar información sobre Fogatadas Grupales, Cinema y Talleres."
                  label="Cotizar Fogatada o Cinema"
                  variant="primary"
                  size="sm"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOQUE ESTRATÉGICO: ORIGEN CENTRO HOLÍSTICO Y SPA */}
      <section className="py-24 bg-[#0A0D0C] relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#121714] to-[#0A0D0C] p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 reveal-scale">
            <div className="max-w-2xl flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                <Sparkles className="w-4 h-4 text-[#C5B49F]" />
                <span>Sanación & Bienestar en el Bosque</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight">
                Contamos con Origen Centro Holístico y Spa
              </h2>
              <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed">
                Complementa tu estancia de montaña con tratamientos corporales, rituales de renovación, temazcal y terapias holísticas diseñadas para armonizar cuerpo y mente en completa sintonía con la naturaleza.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={HOTEL_INFO.links.spa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#D8C7B3] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
              >
                <span>Conoce Origen Spa</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0D0C]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PREGUNTAS FRECUENTES (SEO & GEO RESPUESTAS DIRECTAS) */}
      <HomeFAQ />

    </div>
  );
}
