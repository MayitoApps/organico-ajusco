'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Users, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { HOTEL_INFO, createWhatsAppUrl } from '@/data/hotelData';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  date: string;
  guests: string;
  message: string;
  privacyAccepted: boolean;
  website_hp: string; // Honeypot antispam
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: 'Reservaciones & Hospedaje',
  date: '',
  guests: '',
  message: '',
  privacyAccepted: true,
  website_hp: ''
};

const SUBJECT_OPTIONS = [
  'Reservaciones & Hospedaje',
  'Experiencias de Montaña',
  'Restaurante Don Petro / Gastronomía',
  'Eventos Empresariales & Retiros',
  'Bodas & Celebraciones Sociales',
  'Spa Origen & Terapias Holísticas',
  'Sesiones Fotográficas & Producción',
  'Consulta General o Especial'
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      setErrorMessage('Por favor, acepta el aviso de privacidad para continuar.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'No se pudo enviar el mensaje. Intenta de nuevo.');
      }

      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Ocurrió un error al enviar el formulario. Por favor comunícate directamente por WhatsApp.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const quickWaUrl = createWhatsAppUrl(
    `Hola Orgánico Ajusco, acabo de enviar un formulario desde la página web y me gustaría dar seguimiento a mi solicitud.`
  );

  return (
    <div className="w-full relative">
      {/* Decorative ambient backdrop */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-[#C5B49F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-[#1B2420]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
        {status === 'success' ? (
          <div className="py-12 px-4 flex flex-col items-center text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#C5B49F]/10 border border-[#C5B49F]/30 flex items-center justify-center text-[#C5B49F] mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold mb-2">
              Mensaje Enviado con Éxito
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#F4F5F1] mb-4">
              Hemos recibido tu solicitud
            </h3>
            <p className="text-sm font-light text-[#8E9B93] leading-relaxed mb-8">
              Tu mensaje ha sido recibido por nuestro equipo de hospitalidad y reservaciones.
              Uno de nuestros anfitriones se pondrá en contacto contigo a la brevedad posible.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black" size={16} />
                <span>Seguimiento por WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs uppercase tracking-wider text-[#F4F5F1] hover:bg-white/10 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Form Header */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5B49F] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Formulario Directo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#F4F5F1] tracking-tight">
                Escríbenos tu Consulta
              </h2>
              <p className="text-xs sm:text-sm text-[#8E9B93] font-light mt-1">
                Atención personalizada los 365 días del año. Envío directo al equipo de Orgánico.
              </p>
            </div>

            {/* Error Banner */}
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                <div className="flex-1">
                  <span className="font-medium block">Atención:</span>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Honeypot Hidden Input (Antispam) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_hp">No llenar este campo</label>
              <input
                type="text"
                id="website_hp"
                name="website_hp"
                value={formData.website_hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Form Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Nombre Completo *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej. Roberto Sánchez"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] placeholder-[#8E9B93]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              {/* Correo Electrónico */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Correo Electrónico *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej. roberto@empresa.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] placeholder-[#8E9B93]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              {/* Teléfono / WhatsApp */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Teléfono o WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ej. +52 55 1234 5678"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] placeholder-[#8E9B93]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              {/* Motivo o Interés */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Motivo de Interés *</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#0D1210] border border-white/10 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all cursor-pointer"
                >
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0D1210] text-[#F4F5F1]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fecha Tentativa */}
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Fecha Tentativa (Opcional)</span>
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>

              {/* Número de Personas */}
              <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C5B49F]" />
                  <span>Nº de Huéspedes / Asistentes (Opcional)</span>
                </label>
                <input
                  type="text"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Ej. 2 personas o 45 asistentes"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] placeholder-[#8E9B93]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-[#8E9B93] font-medium flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#C5B49F]" />
                <span>Mensaje o Detalles de tu Visita *</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu plan: tipo de suite deseada, requerimientos especiales de alimentación, detalles de tu evento o cualquier pregunta que tengas..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-[#F4F5F1] placeholder-[#8E9B93]/50 focus:outline-none focus:border-[#C5B49F] focus:ring-1 focus:ring-[#C5B49F] transition-all resize-y"
              />
            </div>

            {/* Checkbox Privacidad */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="w-4 h-4 mt-0.5 rounded border-white/20 text-[#C5B49F] bg-white/[0.05] focus:ring-[#C5B49F] cursor-pointer"
              />
              <label htmlFor="privacyAccepted" className="text-xs text-[#8E9B93] font-light leading-relaxed cursor-pointer">
                Acepto el tratamiento confidencial de mis datos personales para la atención exclusiva de mi consulta y reservación en Orgánico Hotel Boutique.
              </label>
            </div>

            {/* Botón de Envío */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 px-8 rounded-xl bg-[#C5B49F] hover:bg-[#d4c5b2] text-[#0A0D0C] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-[#C5B49F]/10 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0A0D0C]" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje a Orgánico</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            {/* Info badge */}
            <div className="pt-2 text-center text-[11px] text-[#8E9B93]/70">
              <span>Respuesta habitual en menos de 2 horas en horario de atención</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
