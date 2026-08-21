'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const items = [
  {
    icon: CheckCircle2,
    label: 'Kostenlos anfragen',
    sub: 'Für Auftraggeber immer unverbindlich',
  },
  {
    icon: Zap,
    label: 'Schnelle Vermittlung',
    sub: 'Geprüfter Fachbetrieb in kürzester Zeit',
  },
  {
    icon: ShieldCheck,
    label: 'Geprüfte Fachbetriebe',
    sub: 'Qualifizierte Betriebe im Netzwerk',
  },
]

export default function IntroStrip() {
  const reduced = useReducedMotion()

  return (
    <div className="bg-brand-dark border-y border-white/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={reduced ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="flex items-center gap-5 py-9 px-5 sm:px-8 first:pl-0 last:pr-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-signal/12 flex items-center justify-center">
                  <Icon size={21} className="text-signal" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-base">{item.label}</p>
                  <p className="text-white/38 text-xs leading-snug mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
