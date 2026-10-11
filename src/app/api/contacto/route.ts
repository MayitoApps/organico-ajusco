import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Correo de destino requerido por el cliente
const DEFAULT_RECEIVER_EMAIL = 'artes.grupoorganico@gmail.com';

function cleanPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 10) {
    return `52${digits}`;
  }
  return digits;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject = 'Consulta General',
      date,
      guests,
      message,
      website_hp // Honeypot antispam
    } = body;

    // 1. Antispam Honeypot
    if (website_hp) {
      console.warn('[Honeypot Warning]: website_hp estaba lleno pero se procesará el correo de:', email);
    }

    // 2. Validaciones básicas
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Por favor, ingresa tu nombre completo.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Por favor, ingresa un correo electrónico válido.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Por favor, escribe un mensaje detallando tu consulta.' },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = (phone || 'No especificado').trim();
    const cleanSubject = (subject || 'Consulta General').trim();
    const cleanDate = (date || 'No especificada').trim();
    const cleanGuests = (guests || 'No especificado').trim();
    const cleanMessage = message.trim();

    // Fecha y hora local de la Ciudad de México
    const timestamp = new Intl.DateTimeFormat('es-MX', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'America/Mexico_City'
    }).format(new Date());

    const waPhone = cleanPhoneNumber(cleanPhone);
    const waText = encodeURIComponent(
      `Hola ${cleanName}, gracias por contactar a Orgánico Hotel Boutique Ajusco respecto a: ${cleanSubject}. Con gusto te atendemos.`
    );
    const waUrl = waPhone ? `https://wa.me/${waPhone}?text=${waText}` : null;

    const emailSubject = `[Web Orgánico Ajusco] ${cleanSubject} - ${cleanName}`;

    // Plantilla HTML de lujo 100% Mobile-First Responsive
    const emailHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <meta name="color-scheme" content="dark only">
  <meta name="supported-color-schemes" content="dark only">
  <title>Nuevo Mensaje - Orgánico Ajusco</title>
  <style>
    :root { color-scheme: dark only; supported-color-schemes: dark only; }
    body {
      margin: 0 !important;
      padding: 0 !important;
      background-color: #0A0D0C !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      color: #F4F5F1 !important;
      -webkit-font-smoothing: antialiased !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
    }
    table, td { border-collapse: collapse !important; mso-table-lspace: 0pt !important; mso-table-rspace: 0pt !important; }
    * { box-sizing: border-box !important; }
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 10px 8px !important; }
      .email-container { max-width: 100% !important; border-radius: 14px !important; }
      .email-header { padding: 26px 16px 20px !important; }
      .brand-title { font-size: 20px !important; letter-spacing: 2px !important; }
      .brand-subtitle { font-size: 11px !important; letter-spacing: 1.5px !important; }
      .email-content { padding: 18px 14px 22px !important; }
      .field-card { padding: 12px 14px !important; margin-bottom: 8px !important; }
      .field-value { font-size: 14px !important; }
      .cta-btn {
        display: block !important;
        width: 100% !important;
        margin: 8px 0 !important;
        padding: 14px 16px !important;
        font-size: 12px !important;
        text-align: center !important;
      }
      .email-footer { padding: 20px 14px !important; font-size: 11px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0A0D0C; color: #F4F5F1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div class="email-wrapper" style="width: 100%; background-color: #0A0D0C; padding: 30px 12px; box-sizing: border-box;">
    <div class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #121715; border: 1px solid rgba(197, 180, 159, 0.28); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);">
      
      <!-- Encabezado de Marca -->
      <div class="email-header" style="background: linear-gradient(180deg, #18201D 0%, #121715 100%); padding: 34px 24px 24px; text-align: center; border-bottom: 1px solid rgba(197, 180, 159, 0.18);">
        <p style="margin: 0 0 6px 0; font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600;">
          Grupo Orgánico · Hoteles Boutique
        </p>
        <h1 class="brand-title" style="margin: 0; font-size: 22px; letter-spacing: 2.5px; text-transform: uppercase; color: #F4F5F1; font-weight: 400;">
          Orgánico Hotel Boutique
        </h1>
        <p class="brand-subtitle" style="margin: 6px 0 0 0; font-size: 11.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93;">
          San Miguel Ajusco · 3,000 msnm
        </p>
        <div style="display: inline-block; background-color: rgba(197, 180, 159, 0.12); border: 1px solid rgba(197, 180, 159, 0.35); border-radius: 999px; padding: 5px 14px; font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600; margin-top: 14px;">
          ★ Nueva Solicitud de Contacto &amp; Experiencias
        </div>
      </div>

      <!-- Contenido Principal -->
      <div class="email-content" style="padding: 24px 24px 28px;">
        
        <!-- Ficha 1: Interés / Asunto Destacado -->
        <div class="field-card" style="background-color: #18221E; border: 1px solid rgba(197, 180, 159, 0.35); border-left: 4px solid #C5B49F; border-radius: 10px; padding: 14px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 3px;">
            Interés o Motivo
          </div>
          <div class="field-value" style="font-size: 16px; color: #F4F5F1; font-weight: 600; word-break: break-word;">
            ${cleanSubject}
          </div>
        </div>

        <!-- Ficha 2: Remitente -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Nombre del Remitente
          </div>
          <div class="field-value" style="font-size: 15px; color: #F4F5F1; font-weight: 500; word-break: break-word;">
            ${cleanName}
          </div>
        </div>

        <!-- Ficha 3: Correo Electrónico -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Correo Electrónico
          </div>
          <div class="field-value" style="font-size: 15px; word-break: break-word;">
            <a href="mailto:${cleanEmail}" style="color: #C5B49F; text-decoration: none; font-weight: 500;">
              ${cleanEmail}
            </a>
          </div>
        </div>

        <!-- Ficha 4: Teléfono / WhatsApp -->
        <div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 10px;">
          <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
            Teléfono de Contacto
          </div>
          <div class="field-value" style="font-size: 15px; color: #F4F5F1; word-break: break-word;">
            <a href="tel:${cleanPhone}" style="color: #F4F5F1; text-decoration: none; font-weight: 500;">
              ${cleanPhone}
            </a>
            ${
              waUrl
                ? '<span style="display: inline-block; margin-left: 8px; font-size: 11px; color: #25D366; font-weight: 600;">(WhatsApp Disponible)</span>'
                : ''
            }
          </div>
        </div>

        <!-- Ficha 5: Fecha Estimada & Huéspedes -->
        ${
          cleanDate !== 'No especificada' || cleanGuests !== 'No especificado'
            ? `<div class="field-card" style="background-color: #151C19; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 13px 16px; margin-bottom: 12px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding: 0 6px 0 0; vertical-align: top; width: 50%;">
                      <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                        Fecha Estimada
                      </div>
                      <div class="field-value" style="font-size: 14px; color: #F4F5F1; font-weight: 500;">
                        ${cleanDate}
                      </div>
                    </td>
                    <td style="padding: 0 0 0 6px; vertical-align: top; width: 50%;">
                      <div style="font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                        Huéspedes / Personas
                      </div>
                      <div class="field-value" style="font-size: 14px; color: #F4F5F1; font-weight: 500;">
                        ${cleanGuests}
                      </div>
                    </td>
                  </tr>
                </table>
              </div>`
            : ''
        }

        <!-- Ficha 6: Mensaje o Requerimientos -->
        <div style="margin-top: 16px; margin-bottom: 22px;">
          <div style="font-size: 10.5px; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; font-weight: 600; margin-bottom: 8px;">
            Mensaje del Cliente
          </div>
          <div style="background-color: #0A0D0C; border: 1px solid rgba(197, 180, 159, 0.22); border-left: 3px solid #C5B49F; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #E8EBE6; white-space: pre-wrap; word-break: break-word;">
            ${cleanMessage}
          </div>
        </div>

        <!-- Botones de Acción Táctiles (Mobile Responsive) -->
        <div style="margin-top: 26px;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding-bottom: 10px;">
                <a href="mailto:${cleanEmail}?subject=Re:%20${encodeURIComponent(cleanSubject)}%20-%20Org%C3%A1nico%20Hotel%20Boutique%20Ajusco" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #C5B49F; color: #0A0D0C; text-decoration: none; font-size: 12.5px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; padding: 14px 20px; border-radius: 8px; text-align: center;">
                  ✉ Responder Directo a ${cleanName}
                </a>
              </td>
            </tr>
            ${
              waUrl
                ? `<tr>
                    <td align="center">
                      <a href="${waUrl}" target="_blank" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #152219; color: #25D366; text-decoration: none; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; padding: 13px 20px; border-radius: 8px; text-align: center; border: 1px solid #25D366;">
                        💬 Escribir al Huésped por WhatsApp
                      </a>
                    </td>
                  </tr>`
                : ''
            }
          </table>
          <p style="margin: 14px 0 0 0; font-size: 11px; color: #6E7B74; text-align: center; line-height: 1.4;">
            Al responder desde tu gestor de correo, el remitente ya está preconfigurado como <strong style="color: #C5B49F;">${cleanEmail}</strong>.
          </p>
        </div>

      </div>

      <!-- Pie de Página Institucional -->
      <div class="email-footer" style="background-color: #0A0D0C; border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 22px 24px; text-align: center; font-size: 11px; color: #6E7B74; line-height: 1.5;">
        <p style="margin: 0; font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #8E9B93;">
          Orgánico Hotel Boutique · Ajusco
        </p>
        <p style="margin: 6px 0 0 0;">
          Recibido el ${timestamp} desde el formulario oficial.<br>
          Destinatario configurado: ${recipient}
        </p>
      </div>

    </div>
  </div>
</body>
</html>
`;

    // 3. Envío con Resend si está configurado RESEND_API_KEY
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.EMAIL_FROM || 'Orgánico Ajusco <contacto@organicohotelboutique.com>';

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: recipient,
        replyTo: cleanEmail,
        subject: emailSubject,
        html: emailHtml
      });

      if (error) {
        console.error('[Resend Error]:', error);
        return NextResponse.json(
          {
            success: false,
            error: 'No fue posible enviar el correo mediante Resend. Por favor verifica las credenciales de envío.'
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: '¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.',
        id: data?.id
      });
    }

    // 4. Envío con Nodemailer si están configuradas credenciales SMTP
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (smtpUser && smtpPass) {
      const isGmail = (process.env.SMTP_SERVICE === 'gmail') || smtpUser.includes('@gmail.com');
      const cleanPass = smtpPass.trim().replace(/\s+/g, '');

      const transporter = isGmail
        ? nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: smtpUser.trim(),
              pass: cleanPass
            }
          })
        : nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
            auth: {
              user: smtpUser.trim(),
              pass: cleanPass
            }
          });

      try {
        await transporter.sendMail({
          from: `"Web Orgánico Ajusco" <${smtpUser.trim()}>`,
          to: recipient,
          replyTo: cleanEmail,
          subject: emailSubject,
          html: emailHtml
        });

        return NextResponse.json({
          success: true,
          message: '¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.'
        });
      } catch (mailError: unknown) {
        console.error('[Nodemailer Send Error]:', mailError);
        const errMsg = mailError instanceof Error ? mailError.message : 'Error al conectar con el servidor de correo.';
        return NextResponse.json(
          {
            success: false,
            error: `No fue posible entregar el correo por Gmail: ${errMsg}. Verifica que la Contraseña de Aplicación de Google sea correcta.`
          },
          { status: 500 }
        );
      }
    }

    if (smtpUser && !smtpPass) {
      console.warn('[Configuración Incompleta]: SMTP_USER está definido pero falta SMTP_PASS en Vercel.');
      return NextResponse.json(
        {
          success: false,
          error: 'El servicio de correo requiere la Contraseña de Aplicación de Gmail (variable SMTP_PASS en Vercel).'
        },
        { status: 500 }
      );
    }

    // 5. Fallback Simulado
    console.log('----------------------------------------------------');
    console.log('📬 [AVISO CONTACTO WEB]: Nuevo mensaje recibido.');
    console.log(`Destinatario previsto: ${recipient}`);
    console.log(`De: ${cleanName} <${cleanEmail}>`);
    console.log(`Teléfono: ${cleanPhone}`);
    console.log(`Asunto: ${cleanSubject}`);
    console.log(`Fecha: ${cleanDate} | Asistentes: ${cleanGuests}`);
    console.log(`Mensaje: ${cleanMessage}`);
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      simulated: true,
      message: '¡Gracias por contactarnos! Tu mensaje ha sido registrado exitosamente.'
    });

  } catch (error: unknown) {
    console.error('[Error Contact API]:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
    return NextResponse.json(
      {
        success: false,
        error: 'Ocurrió un error al procesar tu solicitud. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.',
        detail: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
