'use client'

import { useState, FormEvent, useId } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CONTACT_FORM_LABELS, TIMEFRAME_OPTIONS } from '@/lib/services'
import { company } from '../../config/company'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

type FormState = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  postalCode: string
  city: string
  service: string
  description: string
  timeframe: string
  privacy: boolean
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const empty: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  postalCode: '',
  city: '',
  service: '',
  description: '',
  timeframe: '',
  privacy: false,
}

function Field({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
  id: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-mid">
        {label}
        {required && <span className="text-signal-text ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const uid = useId()
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validate = (): boolean => {
    const e: FieldErrors = {}
    if (form.firstName.length < 2) e.firstName = 'Mindestens 2 Zeichen.'
    if (form.lastName.length < 2) e.lastName = 'Mindestens 2 Zeichen.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ungültige E-Mail-Adresse.'
    if (form.phone.length < 6) e.phone = 'Ungültige Telefonnummer.'
    if (form.postalCode.length < 4) e.postalCode = 'Ungültige PLZ.'
    if (form.city.length < 2) e.city = 'Bitte Ort angeben.'
    if (!form.service) e.service = 'Bitte Dienstleistung auswählen.'
    if (form.description.length < 20) e.description = 'Mind. 20 Zeichen.'
    if (!form.privacy) e.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: '' }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      setForm(empty)
    } catch {
      setServerError(
        'Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: keyof FormState) =>
    `input-light ${errors[field] ? 'border-red-400/60 !bg-red-50' : ''}`

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-shade">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2"
          >
            <span className="text-signal-text text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              08 — Kontakt
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-[1.08] tracking-tight mb-5">
              Vollständige Anfrage stellen.
            </h2>
            <p className="text-ink-mid leading-relaxed mb-8">
              Nutzen Sie dieses Formular für ausführliche Anfragen, wiederkehrende Aufträge
              oder wenn Sie uns als Fachbetrieb ansprechen möchten. Alle Felder mit{' '}
              <span className="text-signal-text">*</span> sind Pflichtfelder.
            </p>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-ink-lo">E-Mail</span>
                <br />
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink font-medium hover:text-signal-text transition-colors"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <span className="text-ink-lo">Telefon</span>
                <br />
                <a
                  href={`tel:+49${company.phone.replace(/^0/, '').replace(/\s/g, '')}`}
                  className="text-ink font-medium hover:text-signal-text transition-colors"
                >
                  {company.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="lg:col-span-3"
          >
            {success ? (
              <div className="rounded-2xl bg-white border border-ink/[0.09] p-10 text-center shadow-[0_4px_20px_rgba(21,37,61,0.07)]">
                <div className="w-14 h-14 rounded-full bg-signal/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-signal-text" />
                </div>
                <h3 className="font-display font-bold text-2xl text-ink mb-2">Vielen Dank!</h3>
                <p className="text-ink-mid leading-relaxed max-w-sm mx-auto">
                  Ihre Anfrage ist eingegangen. Wir prüfen Ihre Angaben und kümmern uns darum,
                  den passenden Fachbetrieb für Ihren Auftrag zu finden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                  <input
                    tabIndex={-1}
                    name="website"
                    autoComplete="off"
                    value=""
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Vorname" required error={errors.firstName} id={`${uid}-fn`}>
                    <input
                      id={`${uid}-fn`}
                      type="text"
                      value={form.firstName}
                      onChange={(e) => set('firstName', e.target.value)}
                      placeholder="Max"
                      className={inputClass('firstName')}
                      autoComplete="given-name"
                    />
                  </Field>
                  <Field label="Nachname" required error={errors.lastName} id={`${uid}-ln`}>
                    <input
                      id={`${uid}-ln`}
                      type="text"
                      value={form.lastName}
                      onChange={(e) => set('lastName', e.target.value)}
                      placeholder="Mustermann"
                      className={inputClass('lastName')}
                      autoComplete="family-name"
                    />
                  </Field>
                </div>

                <Field label="Unternehmen (optional)" error={errors.company} id={`${uid}-co`}>
                  <input
                    id={`${uid}-co`}
                    type="text"
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Muster GmbH"
                    className={inputClass('company')}
                    autoComplete="organization"
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="E-Mail" required error={errors.email} id={`${uid}-em`}>
                    <input
                      id={`${uid}-em`}
                      type="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      placeholder="max@beispiel.de"
                      className={inputClass('email')}
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Telefon" required error={errors.phone} id={`${uid}-ph`}>
                    <input
                      id={`${uid}-ph`}
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      placeholder="+49 123 456789"
                      className={inputClass('phone')}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="PLZ" required error={errors.postalCode} id={`${uid}-plz`}>
                    <input
                      id={`${uid}-plz`}
                      type="text"
                      value={form.postalCode}
                      onChange={(e) => set('postalCode', e.target.value)}
                      placeholder="12345"
                      maxLength={10}
                      className={inputClass('postalCode')}
                      autoComplete="postal-code"
                    />
                  </Field>
                  <Field label="Ort" required error={errors.city} id={`${uid}-city`}>
                    <input
                      id={`${uid}-city`}
                      type="text"
                      value={form.city}
                      onChange={(e) => set('city', e.target.value)}
                      placeholder="Musterstadt"
                      className={inputClass('city')}
                      autoComplete="address-level2"
                    />
                  </Field>
                </div>

                <Field
                  label="Gewünschte Dienstleistung"
                  required
                  error={errors.service}
                  id={`${uid}-svc`}
                >
                  <select
                    id={`${uid}-svc`}
                    value={form.service}
                    onChange={(e) => set('service', e.target.value)}
                    className={`${inputClass('service')} appearance-none cursor-pointer`}
                  >
                    <option value="">Bitte auswählen...</option>
                    {CONTACT_FORM_LABELS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Beschreibung Ihres Auftrags"
                  required
                  error={errors.description}
                  id={`${uid}-desc`}
                >
                  <textarea
                    id={`${uid}-desc`}
                    value={form.description}
                    onChange={(e) => set('description', e.target.value)}
                    rows={5}
                    placeholder="Beschreiben Sie bitte Ihren Auftrag: Was soll getan werden, wo, bis wann und was ist zu beachten?"
                    className={`${inputClass('description')} resize-none`}
                  />
                  <span className="text-xs text-lo text-right">{form.description.length} / 2000</span>
                </Field>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-ink-mid">
                    Gewünschter Zeitraum (optional)
                  </label>
                  <select
                    id={`${uid}-tf`}
                    value={form.timeframe}
                    onChange={(e) => set('timeframe', e.target.value)}
                    className="input-light appearance-none cursor-pointer"
                  >
                    <option value="">Bitte auswählen...</option>
                    {TIMEFRAME_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Privacy */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => set('privacy', e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-signal cursor-pointer"
                    />
                    <span className="text-sm text-ink-mid leading-snug">
                      Ich habe die{' '}
                      <a
                        href="/datenschutz"
                        className="text-signal-text hover:underline underline-offset-2"
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
                      Anfrage zu.
                      <span className="text-signal-text ml-0.5">*</span>
                    </span>

                  </label>
                  {errors.privacy && (
                    <p className="mt-1 text-xs text-red-400">{errors.privacy}</p>
                  )}
                </div>

                {serverError && <p className="text-sm text-red-400">{serverError}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-dark active:scale-[0.98] disabled:opacity-60 text-void font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_6px_25px_rgba(179,246,0,0.3)] hover:shadow-[0_8px_30px_rgba(179,246,0,0.4)]"
                >
                  {loading ? 'Wird gesendet…' : 'Anfrage absenden'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
