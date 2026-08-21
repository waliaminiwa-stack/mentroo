'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: "So funktioniert's", href: '#so-funktionierts' },
  { label: 'Für Fachbetriebe', href: '#fachbetriebe' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08090A]/85 backdrop-blur-xl border-b border-white/6 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — always white on dark */}
          <a href="#" className="flex items-center" aria-label="Mentroo Startseite">
            <img
              src="/logo/mentroo-logo.svg"
              alt="Mentroo"
              width={120}
              height={21}
              className="h-5 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mid hover:text-hi transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA — dual-icon pill */}
          <a
            href="#auftrag"
            className="btn-dual group hidden md:inline-flex items-center bg-signal hover:bg-signal-dark text-void text-sm font-semibold rounded-full overflow-hidden transition-colors duration-250 shadow-[0_4px_20px_rgba(99,147,57,0.25)] hover:shadow-[0_6px_28px_rgba(99,147,57,0.35)]"
          >
            <span className="btn-icon-slot !h-9" aria-hidden="true">
              <ArrowRight size={14} />
            </span>
            <span className="px-5 py-2.5 leading-none">Auftrag anfragen</span>
            <span
              className="flex items-center justify-center w-9 h-9 bg-black/10 flex-shrink-0"
              aria-hidden="true"
            >
              <ArrowRight size={14} />
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-mid hover:text-hi hover:bg-white/6 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#08090A]/97 backdrop-blur-xl pt-16 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-0 pt-8" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  className="text-hi/80 hover:text-hi text-3xl font-display font-bold py-4 border-b border-white/6 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href="#auftrag"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center bg-signal text-void font-semibold py-4 rounded-full text-lg shadow-[0_4px_24px_rgba(99,147,57,0.35)]"
              >
                Auftrag anfragen
              </a>
              <a
                href="#fachbetriebe"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center border border-white/12 text-mid hover:text-hi font-medium py-4 rounded-full text-base transition-colors"
              >
                Als Fachbetrieb mitmachen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
