'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion or if IntersectionObserver is not supported
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal, [data-reveal], .card-luxury').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    let observer: IntersectionObserver | null = null;

    const scanAndObserve = () => {
      // 1. Any container with .reveal-stagger automatically equips all direct children
      document.querySelectorAll<HTMLElement>('.reveal-stagger').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        children.forEach((child, idx) => {
          const hasVariant =
            child.classList.contains('reveal') ||
            child.classList.contains('reveal-scale') ||
            child.classList.contains('reveal-fade') ||
            child.classList.contains('reveal-left') ||
            child.classList.contains('reveal-right');
          if (!hasVariant) {
            child.classList.add('reveal');
          }
          if (!child.style.transitionDelay) {
            const delay = (idx % 8) * 110;
            child.style.transitionDelay = `${delay}ms`;
          }
        });
      });

      // 2. Automatically add .reveal to .card-luxury and elements with [data-reveal]
      document.querySelectorAll<HTMLElement>('.card-luxury:not(.no-reveal), [data-reveal]').forEach((el) => {
        const hasVariant =
          el.classList.contains('reveal') ||
          el.classList.contains('reveal-scale') ||
          el.classList.contains('reveal-fade') ||
          el.classList.contains('reveal-left') ||
          el.classList.contains('reveal-right');
        if (!hasVariant) {
          el.classList.add('reveal');
        }
      });

      // 3. Setup intersection observer
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer?.unobserve(entry.target);
              }
            });
          },
          {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.08,
          }
        );
      }

      // 4. Register all target elements
      const targets = document.querySelectorAll<HTMLElement>(
        '.reveal, .reveal-scale, .reveal-fade, .reveal-left, .reveal-right, [data-reveal]'
      );

      targets.forEach((el) => {
        if (el.classList.contains('is-revealed')) return;

        const rect = el.getBoundingClientRect();
        // Reveal immediately only if element is already scrolled past or in the top hero viewport
        const isInitialTopFold = rect.top < window.innerHeight * 0.65 && rect.bottom > 0;
        if (rect.bottom < 50 || isInitialTopFold) {
          el.classList.add('is-revealed');
        } else {
          observer?.observe(el);
        }
      });
    };

    // Execute scans immediately and after micro-tasks
    scanAndObserve();
    const frameId = requestAnimationFrame(() => scanAndObserve());
    const timer1 = setTimeout(() => scanAndObserve(), 250);
    const timer2 = setTimeout(() => scanAndObserve(), 750);

    // Safety fallback: ensure nothing stays hidden after 4s
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.reveal, [data-reveal], .card-luxury').forEach((el) => {
        el.classList.add('is-revealed');
      });
    }, 4000);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(safetyTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
