'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const benefits = [
  'Kein langwieriges Suchen in Branchenbüchern',
  'Keine Kaltakquise bei unbekannten Betrieben',
  'Geprüfte Fachbetriebe, kein Zufallsprinzip',
  'Anfrage kostenlos und unverbindlich',
  'Schnelle Rückmeldung nach der Anfrage',
  'Für Privatpersonen und Unternehmen geeignet',
]

export default function ForCustomers() {
  const reduced = useReducedMotion()

  return (
    <section id="auftraggeber" className="py-24 lg:py-32 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial section title — full width */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-signal text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            04 — Auftraggeber
          </span>
          <h2 className="font-display font-extrabold text-ink leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-5xl">
            Sie haben einen Auftrag.{' '}
            <span className="text-ink-mid font-semibold">Wir erledigen den Rest.</span>
          </h2>
        </motion.div>

        {/* Split layout: image placeholder + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Gray image placeholder */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/6] bg-surface-3 flex flex-col items-start justify-end p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 to-transparent" />
            <div className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-signal/10 flex items-center justify-center">
              <Check size={24} className="text-signal" strokeWidth={1.5} />
            </div>

            <div className="relative z-10 bg-surface-1/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                <span className="text-sm font-semibold text-hi">Für Auftraggeber</span>
              </div>
              <p className="text-xs text-mid mt-0.5">Privatpersonen &amp; Unternehmen</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE }}
          >
            <p className="text-ink-mid text-lg leading-relaxed mb-8">
              Statt stundenlang nach dem richtigen Fachbetrieb zu suchen, beschreiben Sie
              einfach, was getan werden soll — Mentroo übernimmt die Vermittlung. Ob
              Privatperson oder Unternehmen, ob kleiner Reparaturauftrag oder großer
              Dienstleistungsvertrag.
            </p>

            <ul className="space-y-3 mb-10 border-t border-ink/[0.09] pt-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={reduced ? {} : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: EASE }}
                  className="flex items-start gap-3.5"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-signal/12 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-signal" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-mid text-sm leading-snug">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#auftrag"
              className="btn-dual group inline-flex items-center bg-signal hover:bg-signal-dark text-void font-semibold text-base rounded-full overflow-hidden transition-colors duration-250 shadow-[0_6px_25px_rgba(99,147,57,0.32)] hover:shadow-[0_8px_30px_rgba(99,147,57,0.42)]"
            >
              <span className="btn-icon-slot" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
              <span className="px-7 py-3.5 leading-none">Auftrag jetzt anfragen</span>
              <span
                className="flex items-center justify-center w-11 h-11 bg-black/10 flex-shrink-0"
                aria-hidden="true"
              >
                <ArrowRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
