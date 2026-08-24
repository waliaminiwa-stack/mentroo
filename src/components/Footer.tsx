import { company } from '../../config/company'
import { SERVICES } from '@/lib/services'

const footerLinks = {
  'Für Auftraggeber': [
    { label: 'Auftrag anfragen', href: '#auftrag' },
    { label: "So funktioniert's", href: '#so-funktionierts' },
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'FAQ', href: '#faq' },
  ],
  'Für Fachbetriebe': [
    { label: 'Als Fachbetrieb registrieren', href: '#kontakt' },
    { label: 'Aufträge erhalten', href: '#fachbetriebe' },
    { label: 'Netzwerk', href: '#fachbetriebe' },
  ],
  Dienstleistungen: SERVICES.map((s) => ({ label: s.title, href: '#leistungen' })),
  Mentroo: [
    { label: 'Über Mentroo', href: '#so-funktionierts' },
    { label: 'Kontakt', href: '#kontakt' },
    { label: 'FAQ', href: '#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4" aria-label="Mentroo Startseite">
              <img
                src="/logo/mentroo-logo.svg"
                alt="Mentroo"
                width={120}
                height={21}
                className="h-5 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Vermittlungsplattform zwischen Auftraggebern und qualifizierten Fachbetrieben.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/30">E-Mail: </span>
                <span className="text-white/60">{company.email}</span>
              </div>
              <div>
                <span className="text-white/30">Tel: </span>
                <span className="text-white/60">{company.phone}</span>
              </div>
              <div>
                <span className="text-white/30">Adresse: </span>
                <span className="text-white/60">
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">
                  {heading}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/28">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="hover:text-white/60 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white/60 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
