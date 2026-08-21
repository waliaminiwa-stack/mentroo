'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const EASE = [0.21, 0.47, 0.32, 0.98] as const

const faqs = [
  {
    q: 'Was ist Mentroo?',
    a: 'Mentroo ist eine Vermittlungsplattform, die Auftraggeber — Privatpersonen und Unternehmen — mit qualifizierten Fachbetrieben zusammenbringt. Das Besondere: Mentroo startet beim konkreten Auftrag, nicht bei der Suche nach einem Unternehmen. Sie beschreiben, was getan werden soll. Wir finden den passenden Betrieb.',
  },
  {
    q: 'Wie funktioniert die Vermittlung?',
    a: 'Sie stellen Ihre Anfrage über unser Formular oder den Auftrags-Stepper. Mentroo prüft Ihren Bedarf, klärt bei Bedarf Details und sucht den geeignetsten Fachbetrieb aus unserem Netzwerk. Dieser meldet sich dann bei Ihnen und bespricht die Details Ihres Auftrags.',
  },
  {
    q: 'Welche Dienstleistungen kann ich anfragen?',
    a: 'Wir vermitteln Betriebe für Reinigungsdienstleistungen (Gebäude, Tanks, Glas, Industrie), Sanierungen (Schimmel, Wasserschaden, Brand), Rohr- und Sanitärarbeiten, Heizungsarbeiten, Transport und Logistik sowie Renovierungs- und Ausbauarbeiten. Bei Unsicherheit: Fragen Sie einfach an — wir prüfen, ob wir helfen können.',
  },
  {
    q: 'Was kostet eine Anfrage?',
    a: 'Die Auftragsanfrage über Mentroo ist für Auftraggeber kostenlos und unverbindlich. Sie zahlen nichts für die Vermittlung selbst. Die Kosten für die eigentliche Dienstleistung werden direkt zwischen Ihnen und dem Fachbetrieb vereinbart.',
  },
  {
    q: 'Wie schnell wird mein Auftrag vermittelt?',
    a: 'Das hängt von der Art des Auftrags und der Verfügbarkeit passender Betriebe in Ihrem Gebiet ab. Wir bemühen uns um eine schnelle Rückmeldung. Für dringende Aufträge empfehlen wir, dies in der Beschreibung zu erwähnen.',
  },
  {
    q: 'Kann ich als Unternehmen einen Auftrag einstellen?',
    a: 'Ja. Mentroo richtet sich sowohl an Privatpersonen als auch an Unternehmen. Das Kontaktformular enthält ein optionales Unternehmensfeld. Bei regelmäßigem Bedarf oder Rahmenverträgen nehmen Sie am besten direkt Kontakt mit uns auf.',
  },
  {
    q: 'Wie kann ich als Fachbetrieb mitmachen?',
    a: 'Registrieren Sie Ihr Unternehmen über das Kontaktformular unter „Als Fachbetrieb registrieren". Wir melden uns bei Ihnen, um Ihr Leistungsspektrum und Ihr Einzugsgebiet zu besprechen. Nach der Aufnahme ins Netzwerk erhalten Sie passende Anfragen direkt zugespielt.',
  },
  {
    q: 'Was passiert mit meinen Daten?',
    a: 'Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Wir geben Ihre Kontaktdaten nur an den vermittelten Fachbetrieb weiter, wenn dies für die Auftragsabwicklung notwendig ist. Details regelt unsere Datenschutzerklärung.',
  },
]

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
          <span className="text-signal text-xs font-semibold uppercase tracking-[0.2em]">
            07 — FAQ
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
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-xl border overflow-hidden transition-all duration-250 ${
                  isOpen
                    ? 'border-signal/25 bg-signal/[0.03] shadow-[0_2px_12px_rgba(99,147,57,0.08)]'
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
                      isOpen ? 'text-signal' : 'text-ink'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? 'text-signal' : 'text-ink-lo'
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
          <a href="#kontakt" className="text-signal hover:underline underline-offset-2">
            Schreiben Sie uns
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
