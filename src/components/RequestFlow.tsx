'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Check } from 'lucide-react'
import { REQUEST_FLOW_CATEGORIES, TIMEFRAME_OPTIONS } from '@/lib/services'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

type FormData = {
  category: string
  description: string
  postalCode: string
  city: string
  timeframe: string
  name: string
  email: string
  phone: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const STEPS = ['Kategorie', 'Beschreibung', 'Ort & Zeit', 'Kontakt', 'Absenden']

const inputBase =
  'input-light'

const inputError = 'border-red-400/60 !bg-red-50'

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10" aria-label="Fortschritt">
      {STEPS.map((label, i) => {
        const step = i + 1
        const done = current > step
        const active = current === step
        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display transition-all duration-300 ${
                done
                  ? 'bg-brand-dark/15 text-brand-dark'
                  : active
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'bg-shade text-ink-lo'
              }`}
              aria-label={`Schritt ${step}: ${label}${done ? ' (abgeschlossen)' : active ? ' (aktiv)' : ''}`}
            >
              {done ? <Check size={13} strokeWidth={2.5} /> : step}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px w-6 transition-colors duration-300 ${
                  current > step ? 'bg-brand-dark/40' : 'bg-ink/[0.12]'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs text-red-400">{msg}</p>
}

export default function RequestFlow() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({
    category: '',
    description: '',
    postalCode: '',
    city: '',
    timeframe: '',
    name: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')

  const set = (key: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validateStep = (): boolean => {
    const errs: FieldErrors = {}
    if (step === 1 && !data.category) errs.category = 'Bitte wählen Sie eine Kategorie aus.'
    if (step === 2 && data.description.length < 20)
      errs.description = 'Bitte beschreiben Sie Ihren Auftrag (mind. 20 Zeichen).'
    if (step === 3) {
      if (data.postalCode.length < 4) errs.postalCode = 'Ungültige PLZ.'
      if (data.city.length < 2) errs.city = 'Bitte geben Sie Ihren Ort ein.'
    }
    if (step === 4) {
      if (data.name.length < 2) errs.name = 'Bitte geben Sie Ihren Namen ein.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Ungültige E-Mail-Adresse.'
      if (data.phone.length < 6) errs.phone = 'Ungültige Telefonnummer.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateStep()) setStep((s) => s + 1)
  }

  const handleSubmit = async () => {
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.name.split(' ')[0] ?? data.name,
          lastName: data.name.split(' ').slice(1).join(' ') || '-',
          email: data.email,
          phone: data.phone,
          postalCode: data.postalCode,
          city: data.city,
          service: data.category,
          description: data.description,
          timeframe: data.timeframe || undefined,
          privacy: true,
          website: '',
        }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setServerError('Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auftrag" className="py-24 lg:py-32 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-signal-text text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
            01 — Anfrage
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-[1.08] tracking-tight">
            In fünf Schritten zur
            <br />
            Anfrage.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="bg-white border border-ink/[0.09] rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(21,37,61,0.08)]"
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-brand-dark/[0.08] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-brand-dark" />
                </div>
                <h3 className="font-display font-bold text-2xl text-ink mb-3">
                  Anfrage eingegangen
                </h3>
                <p className="text-ink-mid leading-relaxed max-w-sm mx-auto">
                  Ihre Anfrage ist eingegangen. Wir prüfen Ihre Angaben und kümmern uns darum,
                  den passenden Fachbetrieb für Ihren Auftrag zu finden.
                </p>
              </motion.div>
            ) : (
              <>
                <StepIndicator current={step} />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Step 1: Category */}
                    {step === 1 && (
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-1">
                          Was benötigen Sie?
                        </h3>
                        <p className="text-ink-lo text-sm mb-6">
                          Wählen Sie die passende Kategorie aus.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {REQUEST_FLOW_CATEGORIES.map((cat) => {
                            const Icon = cat.icon
                            const selected = data.category === cat.label
                            return (
                              <button
                                key={cat.label}
                                type="button"
                                onClick={() => set('category', cat.label)}
                                className={`flex flex-col items-center gap-2.5 rounded-xl border p-4 text-sm font-medium transition-all duration-200 ${
                                  selected
                                    ? 'border-2 border-brand-dark bg-brand-dark/[0.05] text-brand-dark'
                                    : 'border-ink/[0.12] text-ink-mid hover:border-brand-dark/30 hover:text-brand-dark bg-canvas'
                                }`}
                              >
                                <Icon size={22} strokeWidth={1.75} />
                                {cat.label}
                              </button>
                            )
                          })}
                        </div>
                        <FieldError msg={errors.category} />
                      </div>
                    )}

                    {/* Step 2: Description */}
                    {step === 2 && (
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-1">
                          Beschreiben Sie Ihren Auftrag
                        </h3>
                        <p className="text-ink-lo text-sm mb-6">
                          Je genauer Ihre Beschreibung, desto besser können wir vermitteln.
                        </p>
                        <textarea
                          value={data.description}
                          onChange={(e) => set('description', e.target.value)}
                          placeholder="Beispiel: Ich benötige eine Rohrreinigung im Keller unseres Hauses. Das Abflussrohr verstopft sich regelmäßig. Bitte so bald wie möglich."
                          rows={6}
                          className={`${inputBase} resize-none ${errors.description ? inputError : ''}`}
                        />
                        <div className="flex justify-between mt-1">
                          <FieldError msg={errors.description} />
                          <span className="text-xs text-ink-lo ml-auto">
                            {data.description.length} / 2000
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Location & Timeframe */}
                    {step === 3 && (
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-1">
                          Wo und wann?
                        </h3>
                        <p className="text-ink-lo text-sm mb-6">
                          Geben Sie Ihren Standort an und wählen Sie einen Wunschzeitraum.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-ink-mid mb-1.5">
                              PLZ
                            </label>
                            <input
                              type="text"
                              value={data.postalCode}
                              onChange={(e) => set('postalCode', e.target.value)}
                              placeholder="12345"
                              maxLength={10}
                              className={`${inputBase} ${errors.postalCode ? inputError : ''}`}
                            />
                            <FieldError msg={errors.postalCode} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-ink-mid mb-1.5">
                              Ort
                            </label>
                            <input
                              type="text"
                              value={data.city}
                              onChange={(e) => set('city', e.target.value)}
                              placeholder="Musterstadt"
                              className={`${inputBase} ${errors.city ? inputError : ''}`}
                            />
                            <FieldError msg={errors.city} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink-mid mb-1.5">
                            Gewünschter Zeitraum (optional)
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {TIMEFRAME_OPTIONS.map((option) => {
                              const selected = data.timeframe === option
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => set('timeframe', selected ? '' : option)}
                                  className={`text-left rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                                    selected
                                      ? 'border-2 border-brand-dark bg-brand-dark/[0.05] text-brand-dark font-semibold'
                                      : 'border-ink/[0.12] text-ink-mid bg-canvas hover:border-brand-dark/30 hover:text-brand-dark'
                                  }`}
                                >
                                  {option}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Contact */}
                    {step === 4 && (
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-1">
                          Wie können wir Sie erreichen?
                        </h3>
                        <p className="text-ink-lo text-sm mb-6">
                          Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage genutzt.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-ink-mid mb-1.5">
                              Name
                            </label>
                            <input
                              type="text"
                              value={data.name}
                              onChange={(e) => set('name', e.target.value)}
                              placeholder="Vor- und Nachname"
                              className={`${inputBase} ${errors.name ? inputError : ''}`}
                            />
                            <FieldError msg={errors.name} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-ink-mid mb-1.5">
                              E-Mail
                            </label>
                            <input
                              type="email"
                              value={data.email}
                              onChange={(e) => set('email', e.target.value)}
                              placeholder="ihre@email.de"
                              className={`${inputBase} ${errors.email ? inputError : ''}`}
                            />
                            <FieldError msg={errors.email} />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-ink-mid mb-1.5">
                              Telefon
                            </label>
                            <input
                              type="tel"
                              value={data.phone}
                              onChange={(e) => set('phone', e.target.value)}
                              placeholder="+49 123 456789"
                              className={`${inputBase} ${errors.phone ? inputError : ''}`}
                            />
                            <FieldError msg={errors.phone} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Summary & Submit */}
                    {step === 5 && (
                      <div>
                        <h3 className="font-display font-bold text-xl text-ink mb-1">
                          Zusammenfassung
                        </h3>
                        <p className="text-ink-lo text-sm mb-6">
                          Bitte prüfen Sie Ihre Angaben und senden Sie die Anfrage ab.
                        </p>
                        <div className="space-y-3 rounded-xl bg-shade border border-ink/[0.09] p-5 text-sm">
                          {[
                            { label: 'Kategorie', value: data.category },
                            {
                              label: 'Auftrag',
                              value:
                                data.description.length > 80
                                  ? data.description.slice(0, 80) + '…'
                                  : data.description,
                            },
                            { label: 'Ort', value: `${data.postalCode} ${data.city}` },
                            { label: 'Zeitraum', value: data.timeframe || 'Keine Angabe' },
                            { label: 'Name', value: data.name },
                            { label: 'E-Mail', value: data.email },
                            { label: 'Telefon', value: data.phone },
                          ].map(({ label, value }) => (
                            <div key={label} className="flex gap-3">
                              <span className="w-24 flex-shrink-0 text-ink-lo">{label}</span>
                              <span className="text-ink font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                        {serverError && (
                          <p className="mt-4 text-sm text-red-500">{serverError}</p>
                        )}
                        <p className="mt-5 text-xs text-ink-lo leading-relaxed">
                          Mit dem Absenden stimmen Sie zu, dass Ihre Daten zur Bearbeitung
                          Ihrer Anfrage genutzt werden.{' '}
                          <a href="/datenschutz" className="text-brand-dark font-medium hover:underline underline-offset-2">
                            Datenschutzerklärung
                          </a>
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink/[0.09]">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      disabled={loading}
                      className="text-ink-lo hover:text-ink text-sm font-medium transition-colors"
                    >
                      &larr; Zurück
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark active:scale-[0.98] text-void font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(179,246,0,0.3)]"
                    >
                      Weiter
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-signal hover:bg-signal-dark active:scale-[0.98] disabled:opacity-60 text-void font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(179,246,0,0.3)]"
                    >
                      {loading ? 'Wird gesendet…' : 'Anfrage absenden'}
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
