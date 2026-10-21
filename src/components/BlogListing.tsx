'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight, BookOpen, Sparkles, SlidersHorizontal, Search } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '@/data/blogData';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'todos' || post.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="w-full">
      {/* Category Pills & Search: Expansive Wide Toolbar */}
      <section className="py-6 sm:py-7 border-b border-white/10 sticky top-[72px] sm:top-[76px] z-30 bg-[#0A0D0C]/95 backdrop-blur-2xl transition-all">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <div className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] font-semibold mr-2 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Categorías:</span>
            </div>
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 border shrink-0 ${
                    isSelected
                      ? 'bg-[#C5B49F] text-[#0A0D0C] border-[#C5B49F] shadow-[0_2px_12px_rgba(197,180,159,0.3)]'
                      : 'bg-white/[0.03] text-[#8E9B93] border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-80 lg:w-96 shrink-0 relative">
            <Search className="w-4 h-4 text-[#8E9B93] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por tema, palabra clave o etiqueta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-[#F4F5F1] placeholder-[#8E9B93]/60 focus:outline-none focus:border-[#C5B49F] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8E9B93] hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Spotlight: Wide Cinematic Banner */}
      {selectedCategory === 'todos' && searchQuery.trim() === '' && featuredPost && (
        <section className="py-10 sm:py-14 border-b border-white/10">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#C5B49F] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                Lectura Recomendada
              </span>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block card-luxury rounded-3xl overflow-hidden border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-500 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 xl:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[360px] xl:min-h-[460px] overflow-hidden">
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/90 via-[#0A0D0C]/20 to-transparent lg:hidden" />
                  <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#0A0D0C]/85 backdrop-blur-md border border-white/10 text-xs uppercase tracking-wider text-[#C5B49F] font-medium shadow-md">
                    {featuredPost.category}
                  </div>
                </div>

                <div className="lg:col-span-5 xl:col-span-4 p-7 sm:p-10 xl:p-12 flex flex-col justify-between bg-gradient-to-br from-[#121714] to-[#0A0D0C]">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-[#8E9B93] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5B49F]" />
                        {featuredPost.publishedAt}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C5B49F]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-light text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors leading-tight mb-4">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm xl:text-base text-[#8E9B93] font-light leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-[#F4F5F1]">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-[#8E9B93]">{featuredPost.author.role}</p>
                    </div>

                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] font-semibold group-hover:translate-x-1.5 transition-transform">
                      <span>Leer Guía Completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main Grid of Articles: Wide Multi-column Layout */}
      <section className="py-14 sm:py-20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                {selectedCategory === 'todos' ? 'Todas las Historias' : `Tema: ${BLOG_CATEGORIES.find(c => c.slug === selectedCategory)?.name || selectedCategory}`}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#F4F5F1] tracking-tight mt-1">
                Historias y Momentos desde la Montaña
              </h2>
            </div>
            <span className="text-xs text-[#8E9B93] bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'publicación' : 'publicaciones disponibles'}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 card-luxury rounded-3xl p-10 border border-white/10 max-w-2xl mx-auto">
              <BookOpen className="w-12 h-12 text-[#C5B49F] mx-auto mb-4 opacity-60" />
              <h3 className="text-xl font-light text-[#F4F5F1]">No se encontraron artículos</h3>
              <p className="text-sm text-[#8E9B93] mt-2 max-w-md mx-auto">
                No hay publicaciones que coincidan con tu criterio de búsqueda. Prueba seleccionando otra categoría o limpiando la barra de búsqueda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSearchQuery('');
                }}
                className="mt-6 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0A0D0C] bg-[#C5B49F] hover:bg-[#d6c7b4] transition-colors"
              >
                Ver todos los artículos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="card-luxury rounded-3xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300 shadow-lg"
                >
                  <div>
                    {/* Thumbnail */}
                    <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0D0C]/85 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-[#C5B49F] font-medium">
                        {post.category}
                      </div>
                    </Link>

                    {/* Body */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-3 text-[11px] text-[#8E9B93] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C5B49F]" />
                          {post.publishedAt}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C5B49F]" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#C5B49F] transition-colors">
                        <h3 className="text-xl font-light text-[#F4F5F1] leading-snug mb-3">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm text-[#8E9B93] font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-xs font-medium text-[#F4F5F1]">{post.author.name}</p>
                      <p className="text-[10px] text-[#8E9B93]">{post.author.role}</p>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C5B49F] font-semibold group-hover:translate-x-1 transition-transform"
                    >
                      <span>Leer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Visual Photo Showcase: Postales de Orgánico Ajusco */}
      <section className="py-16 bg-[#060807]/60 border-t border-white/10">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                Postales de la Montaña
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] tracking-tight mt-1">
                La Esencia Visual de Orgánico Ajusco
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#8E9B93] max-w-md">
              Cada rincón de nuestra propiedad está diseñado para fundirse con los 3,000 metros de altitud y el bosque de coníferas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                src: '/images/experiencias/cena-romantica-1.webp',
                title: 'Cenas Íntimas',
                tag: 'Romance',
                link: '/blog/escapada-romantica-ajusco-cdmx',
              },
              {
                src: '/images/suites/master-suite-1.webp',
                title: 'Suites de Madera',
                tag: 'Descanso',
                link: '/suites',
              },
              {
                src: '/images/gastronomia/fuego-terraza.webp',
                title: 'Cocina de Brasas',
                tag: 'Don Petro',
                link: '/blog/restaurante-don-petro-fuego-vino-ajusco',
              },
              {
                src: '/images/experiencias/pedida-mano-cover.webp',
                title: 'Bodas de Bosque',
                tag: 'Celebraciones',
                link: '/blog/bodas-en-el-bosque-tendencias-micro-weddings',
              },
              {
                src: '/images/eventos/corp-adidas-1.jpg',
                title: 'Retiros Ejecutivos',
                tag: 'Team Building',
                link: '/blog/retiro-corporativo-team-building-ajusco',
              },
              {
                src: '/images/hero/hero-dron-bosque.webp',
                title: 'Vistas al Pinar',
                tag: '3,000 msnm',
                link: '/blog/bienestar-silencio-temazcal-3000-metros',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden card-luxury border border-white/10 block shadow-md hover:border-[#C5B49F]/40"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/90 via-[#0A0D0C]/20 to-transparent transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#C5B49F] font-semibold block mb-0.5">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-[#F4F5F1] leading-snug group-hover:text-[#C5B49F] transition-colors">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inbound Marketing Newsletter: Wide Banner */}
      <section className="py-20 bg-[#060807] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5B49F]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5B49F]" />
              <span>Cartas desde la Montaña</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-light text-[#F4F5F1] tracking-tight">
              Historias, Recetas al Fuego & Novedades de Temporada
            </h2>

            <p className="text-sm sm:text-base text-[#8E9B93] font-light max-w-2xl mx-auto mt-4 leading-relaxed">
              Te escribimos de vez en cuando para compartirte recomendaciones sinceras de escapadas, lo que estamos cocinando en Don Petro y beneficios pensados para ti.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Escribe tu correo electrónico..."
                className="w-full px-5 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-[#F4F5F1] placeholder-[#8E9B93]/60 focus:outline-none focus:border-[#C5B49F] transition-colors"
              />
              <button
                onClick={() => alert('¡Gracias por unirte a nuestra comunidad! Pronto recibirás nuestras guías exclusivas.')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5B49F] hover:bg-[#d6c7b4] text-[#0A0D0C] text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_4px_16px_rgba(197,180,159,0.3)] shrink-0"
              >
                Suscribirme
              </button>
            </div>

            <p className="text-[11px] text-[#8E9B93]/70 mt-3">
              Cuidamos tu privacidad. Sin spam, solo contenido curado de valor para tus escapadas.
            </p>
          </div>
        </div>
      </section>

      {/* Inbound Direct Concierge CTA: Wide Screen Real Estate */}
      <section className="py-16 sm:py-20">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="card-luxury rounded-3xl p-8 sm:p-12 xl:p-14 border border-[#C5B49F]/30 bg-gradient-to-br from-[#121714] to-[#0A0D0C] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                ¿Platicamos?
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] mt-2">
                ¿Tienes en mente una escapada o una fecha especial?
              </h3>
              <p className="text-sm sm:text-base text-[#8E9B93] font-light mt-3 leading-relaxed">
                Escríbenos con toda confianza por WhatsApp. Te ayudamos a resolver cualquier duda sobre las suites, el restaurante o tu celebración para que disfrutes sin preocupaciones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <WhatsAppButton
                message="Hola Orgánico Ajusco, leí su blog y me gustaría que me ayudaran a planear mi próxima visita."
                label="Platicar por WhatsApp"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              />
              <Link
                href="/contacto"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/10 hover:border-white/20 text-[#F4F5F1] text-xs uppercase tracking-wider font-semibold text-center transition-colors"
              >
                Ver Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
