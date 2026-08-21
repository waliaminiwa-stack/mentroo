import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler', issues: result.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const data = result.data

  // Honeypot check — bots fill the hidden website field
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ success: true }, { status: 200 })
  }

  try {
    await sendContactEmail({
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      postalCode: data.postalCode,
      city: data.city,
      service: data.service,
      description: data.description,
      timeframe: data.timeframe,
      source: 'contact-form',
    })
  } catch (err) {
    console.error('[API /contact] Email delivery failed:', err)
    return NextResponse.json(
      { error: 'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
