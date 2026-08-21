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
  const subject = `Neue Anfrage: ${payload.service} — ${payload.firstName} ${payload.lastName}`
  const text = formatEmailBody(payload)

  if (process.env.RESEND_API_KEY) {
    await sendViaResendApi(subject, text, payload.email)
    return
  }

  // Development fallback: log to console
  console.log('[Mentroo Email]', {
    timestamp: new Date().toISOString(),
    subject,
    payload,
  })
}

function formatEmailBody(p: ContactPayload): string {
  return [
    'Neue Kontaktanfrage über Mentroo',
    '',
    `Name: ${p.firstName} ${p.lastName}`,
    p.company ? `Unternehmen: ${p.company}` : null,
    `E-Mail: ${p.email}`,
    `Telefon: ${p.phone}`,
    `Ort: ${p.postalCode} ${p.city}`,
    '',
    `Dienstleistung: ${p.service}`,
    `Zeitraum: ${p.timeframe ?? 'Keine Angabe'}`,
    '',
    'Beschreibung:',
    p.description,
    '',
    `Quelle: ${p.source}`,
    `Gesendet: ${new Date().toLocaleString('de-DE')}`,
  ]
    .filter((l): l is string => l !== null)
    .join('\n')
}

// Calls the Resend REST API directly — no SDK import needed at build time
async function sendViaResendApi(
  subject: string,
  text: string,
  replyTo: string
): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Mentroo <anfragen@mentroo.de>',
      to: [process.env.CONTACT_EMAIL ?? 'anfragen@mentroo.de'],
      reply_to: replyTo,
      subject,
      text,
    }),
  })
  if (!res.ok) {
    const detail = await res.text().catch(() => 'unknown')
    throw new Error(`Resend API error ${res.status}: ${detail}`)
  }
}
