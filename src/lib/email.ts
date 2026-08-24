import { Resend } from 'resend'

export interface ContactPayload {
  firstName: string
  lastName: string
  company?: string
  email: string
  phone: string
  postalCode: string
  city: string
  service: string
  description: string
  timeframe?: string
  source: 'contact-form' | 'request-flow'
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const subject = `Neue Anfrage über Mentroo – ${payload.service}`

  if (!process.env.RESEND_API_KEY) {
    // Development fallback: log to console
    console.log('[Mentroo Email] No RESEND_API_KEY — logging instead:', {
      timestamp: new Date().toISOString(),
      subject,
      payload,
    })
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: 'Mentroo <anfragen@mentroo.de>',
    to: ['info@mentroo.de'],
    replyTo: payload.email,
    subject,
    html: buildHtml(payload),
    text: buildText(payload),
  })

  if (error) {
    throw new Error(`Resend error: ${error.message}`)
  }
}

function buildText(p: ContactPayload): string {
  return [
    'Neue Kontaktanfrage über Mentroo',
    '================================',
    '',
    `Name:            ${p.firstName} ${p.lastName}`,
    p.company ? `Unternehmen:     ${p.company}` : null,
    `E-Mail:          ${p.email}`,
    `Telefon:         ${p.phone}`,
    `Ort:             ${p.postalCode} ${p.city}`,
    '',
    `Dienstleistung:  ${p.service}`,
    `Gewünschter Zeitraum: ${p.timeframe ?? 'Keine Angabe'}`,
    '',
    'Beschreibung:',
    p.description,
    '',
    `Formular:        ${p.source === 'contact-form' ? 'Kontaktformular' : 'Anfrage-Assistent'}`,
    `Gesendet:        ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}`,
  ]
    .filter((l): l is string => l !== null)
    .join('\n')
}

function buildHtml(p: ContactPayload): string {
  const sourceLabel = p.source === 'contact-form' ? 'Kontaktformular' : 'Anfrage-Assistent'
  const sentAt = new Date().toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const companyRow = p.company
    ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:160px">Unternehmen</td><td style="padding:6px 0;font-size:14px;color:#111827">${esc(p.company)}</td></tr>`
    : ''

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr><td style="background:#14325F;border-radius:12px 12px 0 0;padding:32px 40px 28px">
          <div style="display:inline-block;width:48px;height:4px;background:#B3F600;border-radius:2px;margin-bottom:16px"></div>
          <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px">Neue Anfrage</h1>
          <p style="margin:8px 0 0;font-size:15px;color:rgba(255,255,255,0.65)">${esc(p.service)}</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:36px 40px">

          <!-- Contact details -->
          <h2 style="margin:0 0 20px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af">Kontaktdaten</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:160px">Name</td><td style="padding:6px 0;font-size:14px;color:#111827;font-weight:500">${esc(p.firstName)} ${esc(p.lastName)}</td></tr>
            ${companyRow}
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px">E-Mail</td><td style="padding:6px 0;font-size:14px"><a href="mailto:${esc(p.email)}" style="color:#14325F;text-decoration:none">${esc(p.email)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px">Telefon</td><td style="padding:6px 0;font-size:14px;color:#111827">${esc(p.phone)}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px">Ort</td><td style="padding:6px 0;font-size:14px;color:#111827">${esc(p.postalCode)} ${esc(p.city)}</td></tr>
          </table>

          <!-- Request details -->
          <h2 style="margin:28px 0 20px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af">Auftragsdetails</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #e5e7eb">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:160px">Dienstleistung</td><td style="padding:6px 0;font-size:14px;color:#111827;font-weight:500">${esc(p.service)}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px">Zeitraum</td><td style="padding:6px 0;font-size:14px;color:#111827">${esc(p.timeframe ?? 'Keine Angabe')}</td></tr>
          </table>

          <!-- Description -->
          <h2 style="margin:28px 0 12px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af">Beschreibung</h2>
          <div style="background:#f9fafb;border-radius:8px;padding:16px 20px;font-size:14px;color:#374151;line-height:1.6;white-space:pre-wrap">${esc(p.description)}</div>

          <!-- Reply CTA -->
          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;text-align:center">
            <a href="mailto:${esc(p.email)}?subject=Re: Ihre Anfrage bei Mentroo – ${esc(p.service)}"
               style="display:inline-block;background:#14325F;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px">
              Anfrage beantworten
            </a>
          </div>

        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#f9fafb;border-radius:0 0 12px 12px;padding:20px 40px;border-top:1px solid #e5e7eb">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="font-size:12px;color:#9ca3af">Formular: ${sourceLabel}</td>
              <td align="right" style="font-size:12px;color:#9ca3af">${sentAt}</td>
            </tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// Escape HTML special characters to prevent injection in email body
function esc(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
