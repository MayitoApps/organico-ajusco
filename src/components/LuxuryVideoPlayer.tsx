'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface LuxuryVideoPlayerProps {
  videoId: string;
  title: string;
  posterSrc?: string;
  className?: string;
}

export default function LuxuryVideoPlayer({
  videoId,
  title,
  posterSrc = '/images/video-poster.webp',
  className = '',
}: LuxuryVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube embed URL with optimal parameters:
  // - rel=0: Show related videos ONLY from the same channel
  // - modestbranding=1: Remove YouTube logo
  // - iv_load_policy=3: Disable video annotations and cards
  // - playsinline=1: Inline playback on mobile
  // - vq=hd1080 & hd=1: Enforce highest available resolution (Full HD 1080p)
  // - autoplay=1: Start immediately when user clicks play
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&controls=1&vq=hd1080&hd=1`;

  return (
    <div
      className={`relative aspect-video w-full rounded-2xl overflow-hidden card-luxury border border-white/10 shadow-2xl shadow-black/80 group ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsPlaying(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsPlaying(true);
            }
          }}
          className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center select-none focus:outline-none focus:ring-2 focus:ring-[#C5B49F]"
          aria-label={`Reproducir video: ${title}`}
        >
          {/* High resolution poster image */}
          <Image
            src={posterSrc}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Dark Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D0C]/80 via-black/30 to-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Central Luxury Play Button */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <span className="absolute -inset-3 rounded-full bg-[#C5B49F]/20 animate-ping opacity-75 duration-1000" />
              {/* Middle glass ring */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0A0D0C]/80 backdrop-blur-xl border border-white/20 group-hover:border-[#C5B49F] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#C5B49F] flex items-center justify-center text-[#0A0D0C] shadow-lg pl-1 transition-colors group-hover:bg-[#E5D6C4]">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0A0D0C] text-[#0A0D0C]" />
                </div>
              </div>
            </div>

            {/* Label */}
            <div className="text-center">
              <span className="block text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-[#F4F5F1] group-hover:text-[#C5B49F] transition-colors">
                Reproducir Video
              </span>
              <span className="block text-[10px] text-[#8E9B93] tracking-widest uppercase mt-0.5">
                Alta Definición · Sonido Original
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
