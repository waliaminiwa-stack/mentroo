'use client'

import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/services'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function ServiceCategories() {
  const reduced = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function onMouseDown(e: React.MouseEvent) {
    if (!scrollRef.current) return
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2
  }

  function onMouseUp() {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-shade overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="text-signal-text text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
              03 — Leistungen
            </span>
            <h2 className="font-display font-extrabold text-ink leading-[1.06] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              Was benötigen
              <br />
              Sie?
            </h2>
          </div>
          <p className="text-ink-mid max-w-xs text-sm leading-relaxed md:text-right">
            Für alle Dienstleistungen gilt dasselbe Prinzip: Sie beschreiben den Auftrag, wir
            finden den richtigen Betrieb.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide px-6"
        style={{ cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex gap-4 w-max pb-2">
          {SERVICES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                initial={reduced ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="card-light flex-shrink-0 w-[260px] sm:w-[290px] p-6 group select-none"
              >
                <div className="w-11 h-11 rounded-xl bg-signal/15 flex items-center justify-center mb-5 group-hover:bg-signal/20 transition-colors duration-300">
                  <Icon size={21} className="text-signal-text" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink mb-2 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-ink-mid text-xs leading-relaxed mb-5 line-clamp-2">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-ink/[0.07] text-ink-lo group-hover:bg-signal/15 group-hover:text-signal-text transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#auftrag"
                  className="inline-flex items-center gap-1.5 text-signal-text text-xs font-semibold opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200"
                >
                  Auftrag anfragen <ArrowRight size={12} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-ink-lo"
        >
          Ihre Dienstleistung ist nicht dabei?{' '}
          <a href="#kontakt" className="text-signal-text hover:underline underline-offset-2">
            Nehmen Sie Kontakt auf
          </a>{' '}
          — wir prüfen, ob wir helfen können.
        </motion.p>
      </div>
    </section>
  )
}
