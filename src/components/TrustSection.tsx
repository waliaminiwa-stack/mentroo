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
          className="mb-20 lg:mb-24"
        >
          <span className="text-signal text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            06 — Versprechen
          </span>
          <h2 className="font-display font-extrabold text-ink leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl">
            Qualität, die messbar ist.{' '}
            <span className="text-ink-mid font-semibold">Versprechen, die wir einhalten.</span>
          </h2>
        </motion.div>

        {/* Editorial list */}
        <div className="border-t border-ink/[0.09]">
          {statements.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-20 py-10 border-b border-ink/[0.09] group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-signal/10 flex items-center justify-center group-hover:bg-signal/18 transition-colors duration-300 mt-0.5">
                    <Icon size={19} className="text-signal" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-bold text-ink text-xl lg:text-2xl leading-tight pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-ink-mid text-base leading-relaxed lg:pt-1.5 max-w-2xl">
                  {item.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
