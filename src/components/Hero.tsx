'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const H1_LINES = [
  { text: 'Ihr Auftrag —', accent: false },
  { text: 'wir finden den', accent: false },
  { text: 'richtigen', accent: true },
  { text: 'Fachbetrieb.', accent: false },
]

function FlowStep({
  label,
  sub,
  delay,
  accent,
}: {
  label: string
  sub: string
  delay: number
  accent?: boolean
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      className={`relative rounded-2xl px-6 py-5 border ${
        accent
          ? 'bg-signal/10 border-signal/40 shadow-[0_0_48px_rgba(99,147,57,0.18)]'
          : 'bg-white/5 border-white/10'
      }`}
    >
      {accent && (
        <span className="absolute inset-0 rounded-2xl animate-pulse-ring bg-signal/5 pointer-events-none" />
      )}
      <span className="block text-xs font-medium text-white/35 uppercase tracking-[0.18em] mb-1.5">
        {sub}
      </span>
      <span
        className={`font-display font-bold text-2xl ${accent ? 'text-signal' : 'text-white'}`}
      >
        {label}
      </span>
    </motion.div>
  )
}

function FlowConnector({ delay }: { delay: number }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut', originY: 0 }}
      className="flex flex-col items-start pl-[2.9rem] gap-0.5"
      aria-hidden="true"
    >
      <div className="w-px h-3 bg-gradient-to-b from-white/15 to-signal/50" />
      <div className="w-1.5 h-1.5 rounded-full bg-signal/60 -ml-[0.1875rem]" />
      <div className="w-px h-3 bg-gradient-to-b from-signal/50 to-white/5" />
    </motion.div>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-[100dvh] bg-void flex items-center overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 100% 45%, rgba(99,147,57,0.07) 0%, transparent 65%), radial-gradient(ellipse 45% 55% at 5% 55%, rgba(21,37,61,0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-14 lg:gap-10 items-center py-36 lg:py-0 lg:min-h-[100dvh]">
        {/* ── Left: text ── */}
        <div>
          {/* Label */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="block w-8 h-px bg-signal/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">
              Auftragsvermittlung
            </span>
          </motion.div>

          {/* H1 — line-by-line reveal */}
          <h1 className="font-display font-extrabold text-white leading-[1.06] tracking-tight mb-8 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {H1_LINES.map((line, i) => (
              <div key={i} className="overflow-hidden" style={{ paddingBottom: '0.04em' }}>
                <motion.div
                  initial={reduced ? {} : { y: '108%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.72, delay: 0.18 + i * 0.13, ease: EASE }}
                >
                  {line.accent ? (
                    <span className="text-signal">{line.text}</span>
                  ) : (
                    line.text
                  )}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72, ease: EASE }}
            className="text-white/52 text-lg leading-relaxed mb-10 max-w-[42ch]"
          >
            Sie beschreiben, was erledigt werden soll. Mentroo prüft Ihren Bedarf und vermittelt
            den passenden Fachbetrieb — ohne Suche, ohne Telefonmarathon.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.88, ease: EASE }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            {/* Primary — dual-icon pill */}
            <a
              href="#auftrag"
              className="btn-dual group inline-flex items-center bg-signal hover:bg-signal-dark text-void font-semibold text-base rounded-full overflow-hidden transition-colors duration-250 shadow-[0_6px_28px_rgba(99,147,57,0.38)] hover:shadow-[0_8px_32px_rgba(99,147,57,0.48)]"
            >
              <span className="btn-icon-slot" aria-hidden="true">
                <ArrowRight size={16} />
              </span>
              <span className="px-7 py-3 leading-none">Auftrag anfragen</span>
              <span
                className="flex items-center justify-center w-11 h-11 bg-black/10 flex-shrink-0"
                aria-hidden="true"
              >
                <ArrowRight size={16} />
              </span>
            </a>

            {/* Secondary */}
            <a
              href="#fachbetriebe"
              className="group inline-flex items-center gap-2 text-white/55 hover:text-white font-medium text-base transition-colors duration-200 px-2 py-3"
            >
              Als Fachbetrieb mitmachen
              <ArrowRight
                size={14}
                className="opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all duration-200"
              />
            </a>
          </motion.div>
        </div>

        {/* ── Right: flow diagram ── */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="hidden lg:flex flex-col"
          role="img"
          aria-label="So funktioniert Mentroo: Ihr Auftrag – Mentroo prüft und matched – Fachbetrieb meldet sich"
        >
          <FlowStep label="Ihr Auftrag" sub="1 · Beschreiben" delay={0.7} />
          <FlowConnector delay={0.88} />
          <FlowStep label="Mentroo" sub="2 · Matching" delay={0.85} accent />
          <FlowConnector delay={1.05} />
          <FlowStep label="Fachbetrieb" sub="3 · Erledigt" delay={1.0} />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/25 text-[0.65rem] tracking-[0.28em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
