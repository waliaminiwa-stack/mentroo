'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TrendingUp, Clock, Target, Shield, ArrowRight, Check } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const benefits = [
  { icon: TrendingUp, title: 'Mehr Aufträge', description: 'Passende Anfragen direkt in Ihr Unternehmen — ohne eigene Werbekampagnen.' },
  { icon: Clock, title: 'Weniger Akquise', description: 'Kein Zeitaufwand für Neukundensuche. Mentroo bringt die Auftraggeber zu Ihnen.' },
  { icon: Target, title: 'Passende Anfragen', description: 'Nur Aufträge, die zu Ihrem Leistungsspektrum und Einzugsgebiet passen.' },
  { icon: Shield, title: 'Geprüfte Auftraggeber', description: 'Wir prüfen die Anfragen vorab — Sie erhalten konkrete, ernst gemeinte Aufträge.' },
]

const processSteps = [
  'Betrieb registrieren und Leistungsspektrum angeben',
  'Passende Anfragen werden direkt weitergeleitet',
  'Kontakt aufnehmen und Auftrag prüfen',
  'Auftrag ausführen — Mentroo koordiniert im Hintergrund',
]

export default function ForBusinesses() {
  const reduced = useReducedMotion()

  return (
    <section id="fachbetriebe" className="py-24 lg:py-32 bg-brand-dark overflow-hidden">
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
            05 — Fachbetriebe
          </span>
          <h2 className="font-display font-extrabold text-hi leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-5xl">
            Mehr Aufträge.{' '}
            <span className="text-white/40 font-semibold">Weniger Akquise.</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: gray placeholder visual */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/6] bg-surface-3 flex flex-col items-start justify-end p-6"
          >
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-6 left-6 flex flex-col gap-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? {} : { opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: EASE }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-5 h-5 rounded-full border border-signal/50 bg-signal/10 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-signal" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-white/50 leading-snug">{step}</span>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="relative z-10 bg-surface-1/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                <span className="text-sm font-semibold text-hi">Für Fachbetriebe</span>
              </div>
              <p className="text-xs text-mid mt-0.5">Geprüfte Betriebe im Netzwerk</p>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.72, ease: EASE }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Als Fachbetrieb im Mentroo-Netzwerk erhalten Sie Auftragsanfragen, die zu Ihrem
              Betrieb passen — ohne teure Werbekosten, ohne Telefonakquise und ohne Zeitverlust
              bei unpassenden Anfragen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={reduced ? {} : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: EASE }}
                    className="rounded-2xl bg-white/4 border border-white/6 p-5 hover:bg-white/7 hover:border-signal/20 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-signal/10 flex items-center justify-center mb-3 group-hover:bg-signal/18 transition-colors">
                      <Icon size={17} className="text-signal" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-white/45 text-xs leading-relaxed">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="pt-2">
              <p className="text-white/35 text-xs leading-relaxed mb-6">
                Die genauen Konditionen für Fachbetriebe besprechen wir persönlich — nehmen Sie
                Kontakt auf.
              </p>
              <a
                href="#kontakt"
                className="btn-dual group inline-flex items-center bg-signal hover:bg-signal-dark text-void font-semibold text-base rounded-full overflow-hidden transition-colors duration-250 shadow-[0_6px_25px_rgba(99,147,57,0.32)] hover:shadow-[0_8px_30px_rgba(99,147,57,0.42)]"
              >
                <span className="btn-icon-slot" aria-hidden="true">
                  <ArrowRight size={16} />
                </span>
                <span className="px-7 py-3.5 leading-none">Als Fachbetrieb mitmachen</span>
                <span
                  className="flex items-center justify-center w-11 h-11 bg-black/10 flex-shrink-0"
                  aria-hidden="true"
                >
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
