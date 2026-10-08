import React from 'react';
import Image from 'next/image';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  color?: 'black' | 'white' | 'green';
}

export default function WhatsAppIcon({
  className = "w-4 h-4",
  size = 20,
  color = 'green'
}: WhatsAppIconProps) {
  const iconSrc = {
    black: '/images/icons/whatsapp-black.png',
    white: '/images/icons/whatsapp-white.png',
    green: '/images/icons/whatsapp.png',
  }[color];

  return (
    <Image
      src={iconSrc}
      alt="WhatsApp"
      width={size}
      height={size}
      style={{ width: 'auto', height: 'auto' }}
      className={`shrink-0 object-contain inline-block ${className}`}
    />
  );
}
