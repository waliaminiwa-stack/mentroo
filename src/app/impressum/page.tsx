import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Mentroo-Website gemäß § 5 TMG.',
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white min-h-screen">

        {/* Page header */}
        <div className="bg-brand-dark text-white py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white/80 transition-colors mb-8 group"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
              Zurück zur Startseite
            </a>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
              Impressum
            </h1>
          </div>
        </div>

        {/* Legal content */}
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">

          {/* 1. Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              Angaben gemäß § 5 TMG
            </h2>
            <dl className="space-y-3 text-base text-ink-mid leading-relaxed">
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Unternehmen</dt>
                <dd>Mentroo</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Tätigkeitsbeschreibung</dt>
                <dd>Vermittlung geprüfter Dienstleistungsaufträge</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Inhaber</dt>
                <dd>U. Amini</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Rechtsform</dt>
                <dd>Einzelunternehmen</dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Anschrift</dt>
                <dd>
                  Barmbeker Straße 9a<br />
                  22303 Hamburg<br />
                  Deutschland
                </dd>
              </div>
            </dl>
          </section>

          {/* 2. Kontakt */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              Kontakt
            </h2>
            <dl className="space-y-3 text-base text-ink-mid leading-relaxed">
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Telefon</dt>
                <dd>
                  <a href="tel:+491605074395" className="hover:text-ink transition-colors">
                    0160 5074395
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">E-Mail</dt>
                <dd>
                  <a href="mailto:info@mentroo.de" className="hover:text-ink transition-colors">
                    info@mentroo.de
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-4">
                <dt className="font-medium text-ink">Website</dt>
                <dd>mentroo.de</dd>
              </div>
            </dl>
          </section>

          {/* 3. Umsatzsteuer-IdNr. */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              Umsatzsteuer
            </h2>
            <p className="text-base text-ink-mid leading-relaxed">
              {/* TODO: USt-IdNr. ergänzen, sobald vorhanden */}
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: <span className="text-ink font-medium">wird nachgetragen.</span>
            </p>
          </section>

          {/* 4. Inhaltlich verantwortlich */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              Inhaltlich verantwortlich
            </h2>
            <p className="text-base text-ink-mid leading-relaxed">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </p>
            <p className="text-base text-ink-mid leading-relaxed mt-3">
              U. Amini<br />
              Barmbeker Straße 9a<br />
              22303 Hamburg
            </p>
          </section>

          {/* 5. EU-Streitschlichtung */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              EU-Streitschlichtung
            </h2>
            <p className="text-base text-ink-mid leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:underline font-medium"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="text-base text-ink-mid leading-relaxed mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* 6. Haftungsausschluss */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              Haftungsausschluss
            </h2>

            <h3 className="font-display font-semibold text-lg text-ink mb-3">
              Haftung für Inhalte
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-base text-ink-mid leading-relaxed mb-6">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3">
              Haftung für Links
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-base text-ink-mid leading-relaxed mb-6">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3">
              Urheberrecht
            </h3>
            <p className="text-base text-ink-mid leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
