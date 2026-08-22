'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function CTABanner() {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 lg:py-32 bg-brand-dark overflow-hidden relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(179,246,0,0.08) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="text-signal text-xs font-semibold uppercase tracking-[0.2em] block mb-6">
            Bereit?
          </span>
          <h2 className="font-display font-extrabold text-hi leading-[1.04] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] mb-8 max-w-4xl mx-auto">
            Starten Sie jetzt —{' '}
            <span className="text-signal">kostenlos</span>{' '}
            und unverbindlich.
          </h2>
          <p className="text-mid text-lg leading-relaxed mb-12 max-w-[52ch] mx-auto">
            Beschreiben Sie Ihren Auftrag in wenigen Zeilen. Mentroo erledigt den Rest — schnell,
            geprüft, ohne Sucheaufwand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#auftrag"
              className="btn-dual group inline-flex items-center bg-signal hover:bg-signal-dark text-void font-semibold text-base rounded-full overflow-hidden transition-colors duration-250 shadow-[0_8px_32px_rgba(179,246,0,0.38)] hover:shadow-[0_12px_40px_rgba(179,246,0,0.48)]"
            >
              <span className="btn-icon-slot" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
              <span className="px-8 py-4 leading-none">Auftrag jetzt anfragen</span>
              <span
                className="flex items-center justify-center w-12 h-12 bg-black/10 flex-shrink-0"
                aria-hidden="true"
              >
                <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="#fachbetriebe"
              className="group inline-flex items-center gap-2 text-white/50 hover:text-white font-medium text-base transition-colors duration-200 px-3 py-4"
            >
              Als Fachbetrieb mitmachen
              <ArrowRight
                size={14}
                className="opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-200"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
