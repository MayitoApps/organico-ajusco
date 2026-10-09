import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Correo de destino requerido por el cliente
const DEFAULT_RECEIVER_EMAIL = 'artes.grupoorganico@gmail.com';

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

    // 1. Antispam Honeypot: advertencia si viene lleno pero sin descartar el correo (evita falsos positivos de autofill)
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

    const emailSubject = `[Web Orgánico Ajusco] ${cleanSubject} - ${cleanName}`;

    // Plantilla HTML de lujo para el correo
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0D0C; color: #F4F5F1; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background-color: #121715; border: 1px solid #2A3630; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #0A0D0C 0%, #1A231F 100%); padding: 32px 28px; border-bottom: 2px solid #C5B49F; text-align: center; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 300; letter-spacing: 0.2em; text-transform: uppercase; color: #C5B49F; }
          .header p { margin: 6px 0 0 0; font-size: 12px; color: #8E9B93; letter-spacing: 0.1em; text-transform: uppercase; }
          .content { padding: 32px 28px; }
          .badge { display: inline-block; padding: 4px 12px; background: rgba(197, 180, 159, 0.15); border: 1px solid #C5B49F; border-radius: 999px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #C5B49F; font-weight: 600; margin-bottom: 20px; }
          .grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .grid td { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 14px; }
          .label { color: #8E9B93; width: 38%; font-weight: 400; text-transform: uppercase; font-size: 11px; letter-spacing: 0.08em; }
          .value { color: #F4F5F1; font-weight: 500; }
          .value a { color: #C5B49F; text-decoration: none; }
          .message-box { background: rgba(255,255,255,0.03); border-left: 3px solid #C5B49F; padding: 18px 20px; border-radius: 8px; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #E0E2DE; white-space: pre-wrap; }
          .btn-container { text-align: center; margin: 28px 0 10px 0; }
          .reply-btn { display: inline-block; background-color: #C5B49F; color: #0A0D0C; padding: 12px 28px; border-radius: 8px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; }
          .footer { background-color: #0A0D0C; padding: 20px 28px; text-align: center; font-size: 11px; color: #6E7B74; border-top: 1px solid rgba(255,255,255,0.05); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Orgánico Hotel Boutique</h1>
            <p>San Miguel Ajusco · 3,000 msnm</p>
          </div>
          <div class="content">
            <span class="badge">Nuevo Mensaje de Contacto</span>
            <table class="grid">
              <tr>
                <td class="label">Remitente:</td>
                <td class="value"><strong>${cleanName}</strong></td>
              </tr>
              <tr>
                <td class="label">Correo Electrónico:</td>
                <td class="value"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td class="label">Teléfono / WhatsApp:</td>
                <td class="value"><a href="tel:${cleanPhone}">${cleanPhone}</a></td>
              </tr>
              <tr>
                <td class="label">Interés o Motivo:</td>
                <td class="value" style="color: #C5B49F;">${cleanSubject}</td>
              </tr>
              ${cleanDate !== 'No especificada' ? `
              <tr>
                <td class="label">Fecha Estimada:</td>
                <td class="value">${cleanDate}</td>
              </tr>` : ''}
              ${cleanGuests !== 'No especificado' ? `
              <tr>
                <td class="label">Huéspedes / Personas:</td>
                <td class="value">${cleanGuests}</td>
              </tr>` : ''}
            </table>

            <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #8E9B93;">Mensaje recibido:</p>
            <div class="message-box">${cleanMessage}</div>

            <div class="btn-container">
              <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)} - Orgánico Hotel Boutique Ajusco" class="reply-btn">
                Responder a ${cleanName}
              </a>
            </div>
          </div>
          <div class="footer">
            Recibido el ${timestamp} desde el formulario oficial del sitio web.<br>
            Destinatario configurado: ${recipient}
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
        // Si hay error en dominio de envío no verificado en Resend (ej: "from" no permitido), intentar fallback o reportar
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

    // 5. Modo de Desarrollo / Fallback Seguro cuando aún no se configuran variables de entorno
    console.log('----------------------------------------------------');
    console.log('📬 [AVISO CONTACTO WEB]: Nuevo mensaje recibido.');
    console.log(`Destinatario previsto: ${recipient}`);
    console.log(`De: ${cleanName} <${cleanEmail}>`);
    console.log(`Teléfono: ${cleanPhone}`);
    console.log(`Asunto: ${cleanSubject}`);
    console.log(`Fecha: ${cleanDate} | Asistentes: ${cleanGuests}`);
    console.log(`Mensaje: ${cleanMessage}`);
    console.log('⚠️ [NOTA]: Para envío en vivo a tu bandeja de correo, añade RESEND_API_KEY o SMTP_USER y SMTP_PASS en Vercel o en .env.local.');
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
