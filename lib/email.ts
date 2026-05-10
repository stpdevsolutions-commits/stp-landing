import { Resend } from "resend";
import type { ContactFormData } from "./validation";

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  const resend = getResend();
  const { name, email, phone, message } = data;

  await Promise.all([
    resend.emails.send({
      from: "STP Soluciones <noreply@stpsoluciones.com>",
      to: ["proyectos@stpsoluciones.com"],
      subject: `Nueva consulta de ${name}`,
      html: internalEmailTemplate({ name, email, phone, message }),
    }),
    resend.emails.send({
      from: "STP Soluciones <noreply@stpsoluciones.com>",
      to: [email],
      subject: "Hemos recibido tu consulta - STP Soluciones",
      html: confirmationEmailTemplate({ name }),
    }),
  ]);
}

function internalEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Consulta - STP</title>
</head>
<body style="margin:0;padding:0;background:#F8F9FA;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F9FA;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#1B8B5F,#1E3A5F);padding:32px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">STP Soluciones</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Nueva consulta recibida</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 24px;color:#1E3A5F;font-size:18px;">Datos del contacto</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E2E8F0;">
                    <span style="color:#718096;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Nombre</span><br>
                    <strong style="color:#2D3748;font-size:15px;">${escapeHtml(data.name)}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E2E8F0;">
                    <span style="color:#718096;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Email</span><br>
                    <strong style="color:#1B8B5F;font-size:15px;">${escapeHtml(data.email)}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #E2E8F0;">
                    <span style="color:#718096;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Teléfono</span><br>
                    <strong style="color:#2D3748;font-size:15px;">${escapeHtml(data.phone)}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 0 0;">
                    <span style="color:#718096;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Mensaje</span><br>
                    <p style="margin:8px 0 0;color:#2D3748;font-size:15px;line-height:1.6;background:#F8F9FA;padding:16px;border-radius:8px;border-left:3px solid #1B8B5F;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background:#F8F9FA;border-top:1px solid #E2E8F0;">
              <p style="margin:0;color:#718096;font-size:13px;">Este correo fue generado automáticamente. Por favor responde directamente al cliente.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function confirmationEmailTemplate({ name }: { name: string }): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación - STP Soluciones</title>
</head>
<body style="margin:0;padding:0;background:#F8F9FA;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F9FA;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:linear-gradient(135deg,#1B8B5F,#1E3A5F);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">STP</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;">Soluciones Técnicas Profesionales</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;text-align:center;">
              <div style="width:64px;height:64px;background:#E8F5EE;border-radius:50%;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;">
                <span style="font-size:28px;">✓</span>
              </div>
              <h2 style="margin:0 0 16px;color:#1E3A5F;font-size:22px;">¡Mensaje recibido, ${escapeHtml(name)}!</h2>
              <p style="margin:0 0 24px;color:#718096;font-size:15px;line-height:1.7;max-width:420px;margin-left:auto;margin-right:auto;">
                Gracias por contactarnos. Hemos recibido tu consulta y uno de nuestros especialistas se pondrá en contacto contigo en las próximas <strong>24-48 horas hábiles</strong>.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td style="background:#1B8B5F;border-radius:8px;padding:14px 28px;">
                    <a href="https://stpsoluciones.com" style="color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;">Visitar nuestro sitio</a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#A0AEC0;font-size:13px;">Si tienes una urgencia, llámanos al <strong style="color:#1E3A5F;">809-537-6566</strong></p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background:#F8F9FA;border-top:1px solid #E2E8F0;text-align:center;">
              <p style="margin:0;color:#718096;font-size:13px;">Calle Bonanza #58, Loyola, Santo Domingo Oeste, RD</p>
              <p style="margin:8px 0 0;color:#A0AEC0;font-size:12px;">© ${new Date().getFullYear()} STP Soluciones Técnicas Profesionales. Todos los derechos reservados.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
