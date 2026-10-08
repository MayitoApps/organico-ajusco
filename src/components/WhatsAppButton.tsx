import React from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { createWhatsAppUrl } from '@/data/hotelData';

interface WhatsAppButtonProps {
  message: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  iconColor?: 'black' | 'white' | 'green';
}

export default function WhatsAppButton({
  message,
  label = "Reservar por WhatsApp",
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
  iconColor,
}: WhatsAppButtonProps) {
  const url = createWhatsAppUrl(message);

  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium tracking-wider uppercase transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C5B49F]/50 focus:ring-offset-2 focus:ring-offset-[#0A0D0C]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-xs font-semibold sm:text-sm"
  }[size];

  const variantStyles = {
    primary: "bg-[#C5B49F] text-[#0A0D0C] hover:bg-[#D8C7B3] hover:shadow-lg hover:shadow-[#C5B49F]/20 active:scale-[0.98]",
    secondary: "bg-[#18201B] text-[#F4F5F1] border border-white/10 hover:border-[#C5B49F]/40 hover:bg-[#202923] active:scale-[0.98]",
    outline: "bg-transparent text-[#F4F5F1] border border-[#C5B49F]/60 hover:bg-[#C5B49F] hover:text-[#0A0D0C] active:scale-[0.98]",
    amber: "bg-[#D98A53] text-[#0A0D0C] hover:bg-[#E59A64] hover:shadow-lg hover:shadow-[#D98A53]/20 active:scale-[0.98]"
  }[variant];

  // Buttons with clear/light backgrounds (primary, amber) use black icon
  const resolvedColor: 'black' | 'white' | 'green' = iconColor || (
    variant === 'primary' || variant === 'amber' ? 'black' : 'white'
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      aria-label={`${label} - Abre chat de WhatsApp para Orgánico Ajusco`}
    >
      {showIcon && <WhatsAppIcon className="w-4 h-4 shrink-0" size={18} color={resolvedColor} />}
      <span>{label}</span>
    </a>
  );
}
