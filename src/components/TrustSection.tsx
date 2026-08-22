'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Search, UserCheck, MessageSquare, ShieldOff } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const statements = [
  {
    icon: Search,
    title: 'Kein Suchmarathon',
    body: 'Statt selbst in Branchenbüchern zu recherchieren und Betriebe anzurufen, übernimmt Mentroo die gesamte Suche und Vorauswahl.',
  },
  {
    icon: UserCheck,
    title: 'Geprüfte Fachbetriebe',
    body: 'Wir arbeiten ausschließlich mit Betrieben zusammen, die qualifiziert und für ihren Bereich fachlich geeignet sind.',
  },
  {
    icon: MessageSquare,
    title: 'Klare Kommunikation',
    body: 'Sie werden über den Status Ihrer Anfrage informiert. Kein Rätselraten, keine Warteschleife — direkte und ehrliche Rückmeldung.',
  },
  {
    icon: ShieldOff,
    title: 'Kein Risiko beim Anfragen',
    body: 'Eine Auftragsanfrage bei Mentroo ist kostenlos und unverbindlich. Sie entscheiden, ob und mit wem Sie zusammenarbeiten.',
  },
]

export default function TrustSection() {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 lg:py-32 bg-shade overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14 lg:mb-16"
        >
          <span className="text-signal-text text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            06 — Versprechen
          </span>
          <h2 className="font-display font-extrabold text-ink leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl">
            Qualität, die messbar ist.{' '}
            <span className="text-ink-mid font-semibold">Versprechen, die wir einhalten.</span>
          </h2>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {statements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: EASE }}
                className="card-light p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-signal/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={19} className="text-signal-text" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-base leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ink-mid text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
