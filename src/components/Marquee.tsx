'use client'

import { useReducedMotion } from 'framer-motion'
import { SERVICES } from '@/lib/services'

const EXTRA = ['Geprüft', 'Schnell', 'Zuverlässig', 'Unverbindlich']
const ITEMS = [...SERVICES.map((s) => s.label), ...EXTRA]

export default function Marquee() {
  const reduced = useReducedMotion()

  return (
    <div
      className="bg-brand-dark border-y border-white/6 py-5 overflow-hidden"
      aria-hidden="true"
    >
      <div className={`flex whitespace-nowrap ${reduced ? '' : 'animate-marquee'}`}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-7 text-[0.7rem] font-semibold text-white uppercase tracking-[0.22em]"
          >
            {item}
            <span className="w-[3px] h-[3px] rounded-full bg-white/18 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
