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

    const emailSubject = `Orgánico Hotel Boutique Ajusco - ${cleanName}`;

    // Plantilla HTML de lujo 100% Mobile-First Responsive (Compatible con Gmail, Apple Mail, Outlook y Android)
    const emailHtml = `
<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <meta name="color-scheme" content="dark only">
  <meta name="supported-color-schemes" content="dark only">
  <title>Orgánico Hotel Boutique Ajusco - ${cleanName}</title>
  <style>
    :root { color-scheme: dark only; supported-color-schemes: dark only; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background-color: #0A0D0C !important;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
      color: #F4F5F1 !important;
      -webkit-font-smoothing: antialiased !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
      width: 100% !important;
    }
    table, td {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    * { box-sizing: border-box !important; }
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    u + #body a {
      color: inherit !important;
      text-decoration: none !important;
    }
    #MessageViewBody a {
      color: inherit !important;
      text-decoration: none !important;
    }
    @media only screen and (max-width: 600px) {
      .mobile-padding { padding: 12px 6px !important; }
      .mobile-content { padding: 16px 14px 20px !important; }
      .mobile-header { padding: 20px 14px 16px !important; }
      .brand-title { font-size: 17px !important; letter-spacing: 0.8px !important; }
      .card-item { padding: 11px 13px !important; margin-bottom: 8px !important; }
      .card-value { font-size: 14px !important; }
      .cta-btn {
        display: block !important;
        width: 100% !important;
        padding: 14px 12px !important;
        font-size: 12px !important;
        text-align: center !important;
      }
      .mobile-footer { padding: 18px 12px !important; font-size: 11px !important; }
    }
  </style>
</head>
<body id="body" style="margin: 0; padding: 0; background-color: #0A0D0C; color: #F4F5F1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <!-- Master Outer Table -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; width: 100%; margin: 0; padding: 0; background-color: #0A0D0C;">
    <tr>
      <td align="center" class="mobile-padding" style="padding: 24px 10px; background-color: #0A0D0C;">
        
        <!-- Main Email Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 580px; width: 100%; margin: 0 auto; background-color: #121815; border: 1px solid #2B3830; border-radius: 14px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
          
          <!-- Encabezado Institucional -->
          <tr>
            <td class="mobile-header" style="background-color: #18221D; border-bottom: 2px solid #C5B49F; padding: 24px 20px 20px; text-align: center;">
              <div style="font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #C5B49F; margin-bottom: 6px;">
                Nueva Consulta · Sitio Web
              </div>
              <h1 class="brand-title" style="margin: 0; font-size: 19px; letter-spacing: 1.2px; text-transform: uppercase; color: #F4F5F1; font-weight: 600; line-height: 1.3;">
                Orgánico Hotel Boutique
              </h1>
              <div style="font-size: 11px; color: #8E9B93; margin-top: 4px; letter-spacing: 0.5px;">
                San Miguel Ajusco, Ciudad de México
              </div>
            </td>
          </tr>

          <!-- Contenido Principal -->
          <tr>
            <td class="mobile-content" style="padding: 22px 22px 26px;">
              
              <!-- Ficha 1: Nombre del Remitente (Destacado) -->
              <div class="card-item" style="background-color: #19241E; border: 1px solid #2E3E34; border-left: 4px solid #C5B49F; border-radius: 8px; padding: 13px 15px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 3px;">
                  Nombre del Remitente
                </div>
                <div class="card-value" style="font-size: 16px; color: #F4F5F1; font-weight: 600; word-break: break-word; line-height: 1.3;">
                  ${cleanName}
                </div>
              </div>

              <!-- Ficha 2: Correo Electrónico -->
              <div class="card-item" style="background-color: #141C19; border: 1px solid #233028; border-radius: 8px; padding: 12px 15px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                  Correo Electrónico
                </div>
                <div class="card-value" style="font-size: 14.5px; word-break: break-word;">
                  <a href="mailto:${cleanEmail}" style="color: #C5B49F; text-decoration: none; font-weight: 600;">
                    ${cleanEmail}
                  </a>
                </div>
              </div>

              <!-- Ficha 3: Teléfono / WhatsApp -->
              <div class="card-item" style="background-color: #141C19; border: 1px solid #233028; border-radius: 8px; padding: 12px 15px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                  Teléfono de Contacto
                </div>
                <div class="card-value" style="font-size: 14.5px; color: #F4F5F1; word-break: break-word;">
                  <a href="tel:${cleanPhone}" style="color: #F4F5F1; text-decoration: none; font-weight: 600;">
                    ${cleanPhone}
                  </a>
                  ${
                    waUrl
                      ? '<span style="display: inline-block; margin-left: 8px; font-size: 11px; color: #25D366; font-weight: 600;">(WhatsApp Disponible)</span>'
                      : ''
                  }
                </div>
              </div>

              <!-- Ficha 4: Motivo de Interés -->
              <div class="card-item" style="background-color: #141C19; border: 1px solid #233028; border-radius: 8px; padding: 12px 15px; margin-bottom: 10px;">
                <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                  Motivo de Consulta
                </div>
                <div class="card-value" style="font-size: 14.5px; color: #F4F5F1; font-weight: 500; word-break: break-word;">
                  ${cleanSubject}
                </div>
              </div>

              <!-- Ficha 5: Huéspedes / Personas (Si está especificado) -->
              ${
                cleanGuests && cleanGuests !== 'No especificado'
                  ? `<div class="card-item" style="background-color: #141C19; border: 1px solid #233028; border-radius: 8px; padding: 12px 15px; margin-bottom: 10px;">
                      <div style="font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; color: #8E9B93; font-weight: 600; margin-bottom: 3px;">
                        Huéspedes / Personas
                      </div>
                      <div class="card-value" style="font-size: 14px; color: #F4F5F1; font-weight: 500;">
                        ${cleanGuests}
                      </div>
                    </div>`
                  : ''
              }

              <!-- Ficha 6: Mensaje del Cliente -->
              <div style="margin-top: 14px; margin-bottom: 20px;">
                <div style="font-size: 10.5px; letter-spacing: 1.2px; text-transform: uppercase; color: #C5B49F; font-weight: 700; margin-bottom: 6px;">
                  Mensaje del Cliente
                </div>
                <div style="background-color: #0A0F0D; border: 1px solid #24322A; border-left: 4px solid #C5B49F; border-radius: 8px; padding: 15px 16px; font-size: 14px; line-height: 1.6; color: #E7EBE5; white-space: pre-wrap; word-break: break-word;">
                  ${cleanMessage}
                </div>
              </div>

              <!-- Botones de Acción Táctiles (Mobile First) -->
              <div style="margin-top: 22px;">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center" style="padding-bottom: 10px;">
                      <a href="mailto:${cleanEmail}?subject=Re:%20[Org%C3%A1nico%20Ajusco]%20${encodeURIComponent(cleanSubject)}" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #C5B49F; color: #0A0D0C; text-decoration: none; font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 700; padding: 14px 16px; border-radius: 8px; text-align: center;">
                        ✉ Responder por Correo
                      </a>
                    </td>
                  </tr>
                  ${
                    waUrl
                      ? `<tr>
                          <td align="center">
                            <a href="${waUrl}" target="_blank" class="cta-btn" style="display: block; width: 100%; box-sizing: border-box; background-color: #142219; color: #25D366; text-decoration: none; font-size: 12px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 600; padding: 13px 16px; border-radius: 8px; text-align: center; border: 1px solid #25D366;">
                              💬 Escribir por WhatsApp
                            </a>
                          </td>
                        </tr>`
                      : ''
                  }
                </table>
                <p style="margin: 12px 0 0 0; font-size: 11px; color: #728178; text-align: center; line-height: 1.4;">
                  Al responder este correo, tu mensaje se dirigirá automáticamente a <strong style="color: #C5B49F;">${cleanEmail}</strong>.
                </p>
              </div>

            </td>
          </tr>

          <!-- Pie de Página Institucional -->
          <tr>
            <td class="mobile-footer" style="background-color: #0A0D0C; border-top: 1px solid #1D2822; padding: 20px 20px; text-align: center; font-size: 11px; color: #728178; line-height: 1.5;">
              <p style="margin: 0; font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase; color: #8E9B93; font-weight: 600;">
                Orgánico Hotel Boutique · Ajusco
              </p>
              <p style="margin: 6px 0 0 0;">
                Recibido el ${timestamp} desde el sitio oficial.<br>
                Destinatario configurado: ${recipient}
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
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
          from: `"Orgánico Hotel Boutique Ajusco" <${smtpUser.trim()}>`,
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
    console.log(`Asistentes: ${cleanGuests}`);
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
