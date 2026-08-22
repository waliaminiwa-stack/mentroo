'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FAQS } from '@/lib/faq'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-canvas">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="text-signal-text text-xs font-semibold uppercase tracking-[0.2em]">
            09 — FAQ
          </span>
          <h2 className="font-display font-extrabold text-ink text-4xl sm:text-5xl mt-4 leading-[1.08] tracking-tight">
            Häufige Fragen.
          </h2>
        </motion.div>

        {/* Accordion — individual cards */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-250 ${
                  isOpen
                    ? 'border-brand-dark/20 bg-brand-dark/[0.03] shadow-[0_2px_12px_rgba(20,50,95,0.08)]'
                    : 'border-ink/[0.09] bg-white hover:border-ink/[0.16] shadow-[0_1px_3px_rgba(21,37,61,0.05)]'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/40 rounded-xl"
                >
                  <span
                    className={`font-medium text-sm sm:text-base transition-colors duration-200 ${
                      isOpen ? 'text-signal-text' : 'text-ink'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? 'text-signal-text' : 'text-ink-lo'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="px-5 pb-5 text-ink-mid text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-ink-lo"
        >
          Weitere Fragen?{' '}
          <a href="#kontakt" className="text-signal-text hover:underline underline-offset-2">
            Schreiben Sie uns
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
