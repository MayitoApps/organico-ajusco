import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ChevronRight, 
  Share2, 
  Sparkles, 
  Lightbulb, 
  Quote, 
  Tag, 
  ArrowUpRight,
  Flame,
  CheckCircle2,
  Bookmark,
  Camera,
  ImageIcon
} from 'lucide-react';
import { 
  BLOG_POSTS, 
  getBlogPostBySlug, 
  getRelatedBlogPosts 
} from '@/data/blogData';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { HOTEL_INFO } from '@/data/hotelData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | Orgánico Hotel Boutique',
    };
  }

  return {
    title: `${post.metaTitle} | Orgánico Hotel Boutique`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug, 3);
  const articleUrl = `https://www.organicohotelboutique.com/blog/${post.slug}`;
  const shareWhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `Te comparto este artículo de Orgánico Hotel Boutique Ajusco: "${post.title}" - ${articleUrl}`
  )}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.organicohotelboutique.com${post.featuredImage}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Hotel',
      name: 'Orgánico Hotel Boutique Ajusco',
      url: 'https://www.organicohotelboutique.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  return (
    <article className="w-full bg-[#0A0D0C] text-[#F4F5F1] pt-32 pb-24">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Expansive Container */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8E9B93] mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5B49F]" />
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3 text-[#C5B49F]" />
          <span className="text-[#C5B49F] line-clamp-1">{post.category}</span>
        </nav>

        {/* Category & Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C5B49F]/15 border border-[#C5B49F]/30 text-[#C5B49F] text-xs uppercase tracking-wider font-semibold">
            {post.category}
          </span>
          <span className="text-xs text-[#8E9B93] flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C5B49F]" />
            {post.publishedAt}
          </span>
          <span className="text-[#8E9B93]">·</span>
          <span className="text-xs text-[#8E9B93] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C5B49F]" />
            {post.readTime}
          </span>
        </div>

        {/* Title & Subtitle: Broad & Immersive */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-light text-[#F4F5F1] tracking-tight leading-[1.15] mb-6 max-w-6xl">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-[#8E9B93] font-light leading-relaxed mb-8 max-w-4xl">
          {post.subtitle}
        </p>

        {/* Author Bio & Sharing Bar */}
        <div className="flex items-center justify-between py-4 border-y border-white/10 mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#C5B49F]/20 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F] font-semibold text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F4F5F1]">{post.author.name}</p>
              <p className="text-xs text-[#8E9B93]">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#8E9B93] hidden sm:inline">Compartir:</span>
            <a
              href={shareWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#C5B49F] hover:text-[#C5B49F] text-xs transition-colors"
            >
              <WhatsAppIcon size={16} className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Featured Image: Expansive Cinema Banner */}
        <figure className="mb-14">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] xl:aspect-[24/10] rounded-3xl overflow-hidden card-luxury border border-white/10 shadow-2xl">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1700px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </figure>

        {/* Editorial Layout: Wide Content + Sticky Inbound Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-14 items-start">
          {/* Main Reading Column */}
          <div className="lg:col-span-8 xl:col-span-8 2xl:col-span-8">
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              <div className="text-lg sm:text-xl text-[#F4F5F1] font-light leading-relaxed mb-12 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border-l-2 border-[#C5B49F] shadow-sm">
                {post.content.intro}
              </div>

              {/* Structured Sections with Inset Visuals */}
              <div className="flex flex-col gap-14">
                {post.content.sections.map((section, idx) => (
                  <section key={idx} className="flex flex-col gap-5 scroll-mt-28" id={`seccion-${idx + 1}`}>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#F4F5F1] tracking-tight border-b border-white/5 pb-3">
                      {section.heading}
                    </h2>

                    <div className="flex flex-col gap-4 text-base sm:text-lg text-[#8E9B93] font-light leading-relaxed">
                      {section.body.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Single Inset Image */}
                    {section.image && (
                      <figure className="my-5 rounded-2xl overflow-hidden card-luxury border border-white/10 shadow-xl">
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                          <Image
                            src={section.image.src}
                            alt={section.image.alt}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 100vw, 950px"
                          />
                        </div>
                        {section.image.caption && (
                          <figcaption className="p-4 bg-white/[0.02] border-t border-white/5 text-xs text-[#8E9B93] flex items-center gap-2">
                            <Camera className="w-3.5 h-3.5 text-[#C5B49F] shrink-0" />
                            <span>{section.image.caption}</span>
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Side-by-side Image Grid */}
                    {section.imageGrid && section.imageGrid.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                        {section.imageGrid.map((img, imgIdx) => (
                          <figure
                            key={imgIdx}
                            className="rounded-2xl overflow-hidden card-luxury border border-white/10 shadow-lg flex flex-col justify-between group"
                          >
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 480px"
                              />
                            </div>
                            {img.caption && (
                              <figcaption className="p-3 bg-white/[0.02] border-t border-white/5 text-[11px] text-[#8E9B93] leading-snug">
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}

                    {/* Optional Highlighted Tip */}
                    {section.tip && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-start gap-4 my-2 shadow-sm">
                        <Lightbulb className="w-5 h-5 text-[#C5B49F] shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-[#F4F5F1] font-normal leading-relaxed">
                          {section.tip}
                        </p>
                      </div>
                    )}

                    {/* Optional Pull Quote */}
                    {section.quote && (
                      <div className="my-6 py-8 px-8 sm:px-12 rounded-2xl bg-white/[0.02] border-y border-white/10 text-center">
                        <Quote className="w-7 h-7 text-[#C5B49F] mx-auto mb-3 opacity-60" />
                        <blockquote className="text-lg sm:text-2xl italic font-light text-[#C5B49F] leading-snug">
                          {section.quote}
                        </blockquote>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Gallery Section */}
              {post.gallery && post.gallery.length > 0 && (
                <section className="my-14 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <ImageIcon className="w-4 h-4 text-[#C5B49F]" />
                    <h3 className="text-xl sm:text-2xl font-light text-[#F4F5F1] tracking-tight">
                      Galería Visual de la Experiencia
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {post.gallery.map((item, gIdx) => (
                      <figure
                        key={gIdx}
                        className="rounded-2xl overflow-hidden card-luxury border border-white/10 group flex flex-col justify-between"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 320px"
                          />
                        </div>
                        <figcaption className="p-3 text-[11px] text-[#8E9B93] bg-[#0A0D0C] border-t border-white/5">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {/* Conclusion */}
              <div className="mt-14 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-light text-[#F4F5F1] mb-3">En Conclusión</h3>
                <p className="text-base sm:text-lg text-[#8E9B93] font-light leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#8E9B93] flex items-center gap-1.5 mr-2">
                <Tag className="w-3.5 h-3.5 text-[#C5B49F]" />
                Etiquetas:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-[#8E9B93]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Inbound Conversion Box */}
            <div className="my-16 card-luxury rounded-3xl p-8 sm:p-12 border border-[#C5B49F]/40 bg-gradient-to-br from-[#18201B] to-[#0A0D0C] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5B49F]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5B49F]/20 text-[#C5B49F] text-xs uppercase tracking-wider font-semibold w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5B49F]" />
                  {post.inboundCta.badge}
                </span>

                <h3 className="text-2xl sm:text-4xl font-light text-[#F4F5F1]">
                  {post.inboundCta.title}
                </h3>

                <p className="text-sm sm:text-base text-[#8E9B93] font-light leading-relaxed max-w-2xl">
                  {post.inboundCta.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                  <Link
                    href={post.inboundCta.buttonHref}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C5B49F] hover:bg-[#d6c7b4] text-[#0A0D0C] text-xs uppercase tracking-wider font-semibold text-center transition-all shadow-[0_4px_16px_rgba(197,180,159,0.3)] inline-flex items-center justify-center gap-2"
                  >
                    <span>{post.inboundCta.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-2 pb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] hover:text-[#d6c7b4] font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a todas las publicaciones</span>
              </Link>
            </div>
          </div>

          {/* Sticky Sidebar: Rich Inbound & Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-4 2xl:col-span-4 sticky top-28 space-y-6">
            {/* Table of Contents */}
            <div className="card-luxury rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] font-semibold mb-4">
                <Bookmark className="w-3.5 h-3.5" />
                <span>En este artículo</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-xs text-[#8E9B93]">
                {post.content.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#seccion-${idx + 1}`}
                      className="hover:text-[#C5B49F] transition-colors line-clamp-1 block py-0.5"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Inbound Concierge Widget */}
            <div className="card-luxury rounded-2xl p-6 border border-[#C5B49F]/30 bg-gradient-to-br from-[#121714] to-[#0A0D0C]">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5B49F] font-semibold mb-2">
                <Flame className="w-3.5 h-3.5 text-[#C5B49F]" />
                <span>Escápate a la Montaña</span>
              </div>
              <h4 className="text-base font-light text-[#F4F5F1] leading-snug mb-2">
                Orgánico Hotel Boutique Ajusco
              </h4>
              <p className="text-xs text-[#8E9B93] leading-relaxed mb-4">
                A solo 45 minutos de CDMX. Suites privadas con chimenea, gastronomía Don Petro a las brasas y privacidad total.
              </p>

              <div className="flex flex-col gap-2 text-xs text-[#8E9B93] mb-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>3,000 metros de altitud</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Chimeneas de leña bajo disponibilidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Restaurante & Bar abiertos</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={HOTEL_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#C5B49F] hover:bg-[#d6c7b4] text-[#0A0D0C] text-xs uppercase tracking-wider font-semibold text-center transition-all shadow-[0_4px_16px_rgba(197,180,159,0.25)] flex items-center justify-center gap-1.5"
                >
                  <span>Reservar Suite</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="card-luxury rounded-2xl p-6 border border-white/10 text-xs text-[#8E9B93]">
              <span className="text-[11px] uppercase tracking-wider text-[#F4F5F1] font-semibold block mb-2">
                Ubicación & Contacto
              </span>
              <p className="mb-2 leading-relaxed">{HOTEL_INFO.location}</p>
              <p className="text-[#C5B49F]">Tel: {HOTEL_INFO.phones.landlines[0]?.display}</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts: Full Width Container */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 pt-20 mt-16 bg-[#060807]">
          <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold">
                  Sigue Explorando
                </span>
                <h3 className="text-2xl sm:text-4xl font-light text-[#F4F5F1] mt-1">
                  Artículos Relacionados
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs uppercase tracking-wider text-[#C5B49F] hover:underline hidden sm:inline-block"
              >
                Ver todos los artículos →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#C5B49F]/40 transition-all duration-300"
                >
                  <Link href={`/blog/${related.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0A0D0C]/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider text-[#C5B49F] font-medium">
                      {related.category}
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] text-[#8E9B93] block mb-2">
                        {related.readTime}
                      </span>
                      <Link href={`/blog/${related.slug}`}>
                        <h4 className="text-lg font-light text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h4>
                      </Link>
                    </div>

                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#C5B49F] font-medium mt-4 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Leer artículo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
