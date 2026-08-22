'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ClipboardList, Zap, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Auftrag beschreiben',
    description:
      'Schildern Sie in wenigen Sätzen, was getan werden soll. Welche Dienstleistung benötigen Sie? Wo? Bis wann? Keine Fachkenntnis erforderlich — einfach beschreiben, was Sie brauchen.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Mentroo prüft',
    description:
      'Wir analysieren Ihre Anfrage, klären bei Bedarf Details und wählen den am besten geeigneten Fachbetrieb aus unserem geprüften Netzwerk aus.',
  },
  {
    number: '03',
    icon: PhoneCall,
    title: 'Fachbetrieb meldet sich',
    description:
      'Der vermittelte Fachbetrieb nimmt Kontakt mit Ihnen auf, bespricht die Details Ihres Auftrags und erstellt bei Bedarf ein Angebot.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Auftrag erledigt',
    description:
      'Sie erhalten die gewünschte Leistung — vom richtigen Betrieb, für Ihren konkreten Auftrag. Ohne Suchaufwand, ohne mehrere Angebote einholen zu müssen.',
  },
]

export default function HowItWorks() {
  const reduced = useReducedMotion()

  return (
    <section id="so-funktionierts" className="py-24 lg:py-32 bg-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-20 lg:mb-24"
        >
          <span className="text-signal text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            02 — Prozess
          </span>
          <h2 className="font-display font-extrabold text-ink leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl">
            Von der Anfrage zum{' '}
            <span className="text-ink-mid font-semibold">Fachbetrieb</span>
            {' '}in vier Schritten.
          </h2>
        </motion.div>

        {/* Stacked steps */}
        <div className="border-t border-ink/[0.09]">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={reduced ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 py-12 border-b border-ink/[0.09] group overflow-hidden"
              >
                {/* Signal left accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Left: number + icon */}
                <div className="flex lg:flex-col items-center lg:items-start gap-5 lg:gap-4 lg:pl-4 group-hover:pl-6 transition-all duration-300">
                  <span className="font-display font-extrabold text-7xl lg:text-8xl text-ink/20 group-hover:text-signal/20 transition-colors duration-500 leading-none select-none tabular-nums">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-signal/10 flex items-center justify-center group-hover:bg-signal/18 transition-colors duration-300 flex-shrink-0">
                    <Icon size={20} className="text-signal" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Right: content */}
                <div className="lg:pt-3">
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-ink-mid text-base leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="mt-14"
        >
          <a
            href="#auftrag"
            className="btn-dual group inline-flex items-center bg-signal hover:bg-signal-dark text-void font-semibold text-base rounded-full overflow-hidden transition-colors duration-250 shadow-[0_6px_25px_rgba(179,246,0,0.32)] hover:shadow-[0_8px_30px_rgba(179,246,0,0.42)]"
          >
            <span className="btn-icon-slot" aria-hidden="true">
              <ArrowRight size={16} />
            </span>
            <span className="px-7 py-3.5 leading-none">Jetzt Auftrag anfragen</span>
            <span
              className="flex items-center justify-center w-11 h-11 bg-black/10 flex-shrink-0"
              aria-hidden="true"
            >
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
