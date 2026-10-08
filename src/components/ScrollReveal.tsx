'use client';

import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'fade' | 'scale' | 'left' | 'right';
  stagger?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay,
  direction = 'up',
  stagger = false,
}: ScrollRevealProps) {
  const dirClass =
    direction === 'fade'
      ? 'reveal-fade'
      : direction === 'scale'
      ? 'reveal-scale'
      : direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : 'reveal';

  const style = delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      data-reveal
      className={`${dirClass} ${stagger ? 'reveal-stagger' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
