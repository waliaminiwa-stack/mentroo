import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Mentroo-Website gemäß DSGVO.',
  robots: { index: true, follow: true },
}

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
          </div>
        </div>

        {/* Legal content */}
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">

          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              1. Verantwortlicher
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <address className="text-base text-ink-mid leading-relaxed not-italic">
              <strong className="text-ink font-semibold">U. Amini</strong><br />
              Mentroo<br />
              Barmbeker Straße 9a<br />
              22303 Hamburg<br />
              Deutschland<br />
              <br />
              Telefon:{' '}
              <a href="tel:+491605074395" className="hover:text-ink transition-colors">
                0160 5074395
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:info@mentroo.de" className="hover:text-ink transition-colors">
                info@mentroo.de
              </a>
            </address>
          </section>

          {/* 2. Allgemeines */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
              erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der
              folgenden Rechtsgrundlagen der DSGVO:
            </p>
            <ul className="list-disc list-inside text-base text-ink-mid leading-relaxed space-y-2 ml-2">
              <li>
                <strong className="text-ink">Art. 6 Abs. 1 lit. a DSGVO</strong> – Einwilligung der
                betroffenen Person
              </li>
              <li>
                <strong className="text-ink">Art. 6 Abs. 1 lit. b DSGVO</strong> – Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen
              </li>
              <li>
                <strong className="text-ink">Art. 6 Abs. 1 lit. c DSGVO</strong> – Erfüllung einer
                rechtlichen Verpflichtung
              </li>
              <li>
                <strong className="text-ink">Art. 6 Abs. 1 lit. f DSGVO</strong> – Wahrung
                berechtigter Interessen des Verantwortlichen oder eines Dritten
              </li>
            </ul>
          </section>

          {/* 3. Hosting */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              3. Hosting
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Diese Website wird bei{' '}
              <strong className="text-ink">Vercel Inc.</strong>, 340 Pine Street, Suite 701,
              San Francisco, CA 94104, USA, gehostet.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Server-Logfiles
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Bei jedem Aufruf unserer Website erfasst der Hosting-Anbieter automatisch Informationen
              in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dabei handelt
              es sich um folgende Daten:
            </p>
            <ul className="list-disc list-inside text-base text-ink-mid leading-relaxed space-y-1.5 ml-2 mb-4">
              <li>IP-Adresse des anfragenden Geräts (ggf. anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene URL / Seite</li>
              <li>Verwendeter Browser und Betriebssystem</li>
              <li>Herkunftswebsite (Referrer)</li>
              <li>Übertragene Datenmenge</li>
            </ul>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Diese Daten werden ausschließlich zum Zweck des sicheren und störungsfreien Betriebs der
              Website verarbeitet und nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              <strong className="text-ink">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Drittlandtransfer
            </h3>
            <p className="text-base text-ink-mid leading-relaxed">
              Vercel Inc. hat seinen Sitz in den USA und verarbeitet Daten damit in einem
              Drittland außerhalb der EU/EWR. Für diesen Transfer bestehen angemessene
              Garantien gemäß Art. 46 DSGVO (insbesondere EU-Standardvertragsklauseln). Nähere
              Informationen zum Datenschutz von Vercel finden Sie unter{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:underline font-medium"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          {/* 4. Kontaktformular */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              4. Kontaktformular und Anfrageformular
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Auf unserer Website stehen zwei Formulare zur Verfügung: ein allgemeines
              <strong className="text-ink"> Kontaktformular</strong> sowie ein mehrstufiger
              <strong className="text-ink"> Anfrage-Assistent</strong> (RequestFlow), über den
              Nutzer konkrete Dienstleistungsanfragen stellen können.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Verarbeitete Daten
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-3">
              Beim Absenden eines der Formulare werden folgende Daten verarbeitet:
            </p>
            <ul className="list-disc list-inside text-base text-ink-mid leading-relaxed space-y-1.5 ml-2 mb-4">
              <li>Vorname und Nachname</li>
              <li>Unternehmen (optional)</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Postleitzahl und Ort</li>
              <li>Gewünschte Dienstleistung</li>
              <li>Beschreibung des Auftrags</li>
              <li>Gewünschter Zeitraum (optional)</li>
            </ul>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Zweck der Verarbeitung
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Die übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage
              sowie zur Vermittlung an einen geeigneten Fachbetrieb aus unserem Netzwerk
              verwendet. Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Erfüllung
              der Vermittlungsleistung erforderlich ist.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Rechtsgrundlage
            </h3>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da
              die Verarbeitung der Anbahnung bzw. Durchführung eines Vertragsverhältnisses
              (Vermittlung) dient. Soweit Sie vor dem Absenden ausdrücklich in die
              Datenschutzbestimmungen eingewilligt haben, gilt zusätzlich Art. 6 Abs. 1
              lit. a DSGVO als Rechtsgrundlage.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Spam-Schutz
            </h3>
            <p className="text-base text-ink-mid leading-relaxed">
              Die Formulare verwenden technische Maßnahmen zum Schutz vor automatisierten
              Anfragen (z. B. Honeypot-Feld). Hierbei werden keine personenbezogenen Daten
              an Drittanbieter übertragen.
            </p>
          </section>

          {/* 5. Resend */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              5. E-Mail-Versand über Resend
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Für die Weiterleitung eingehender Formularanfragen per E-Mail nutzen wir den
              Dienst <strong className="text-ink">Resend</strong> (Resend Inc., San Francisco,
              CA, USA). Dabei werden die im Formular angegebenen Daten (Name, E-Mail,
              Telefon, Anfrageinhalt) an Resend übermittelt, damit diese als E-Mail an unsere
              interne Postfachadresse zugestellt werden.
            </p>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Resend verarbeitet die Daten ausschließlich im Auftrag und nach unserer Weisung
              (Auftragsverarbeitung gemäß Art. 28 DSGVO). Eine eigenständige Nutzung durch
              Resend findet nicht statt.
            </p>

            <h3 className="font-display font-semibold text-lg text-ink mb-3 mt-6">
              Drittlandtransfer
            </h3>
            <p className="text-base text-ink-mid leading-relaxed">
              Resend Inc. hat seinen Sitz in den USA. Für den damit verbundenen Drittlandtransfer
              bestehen angemessene Garantien gemäß Art. 46 DSGVO (insbesondere
              EU-Standardvertragsklauseln). Nähere Informationen finden Sie unter{' '}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark hover:underline font-medium"
              >
                resend.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          {/* 6. Cookies & Tracking */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              6. Cookies und Tracking
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Auf dieser Website werden <strong className="text-ink">keine Analyse- oder
              Marketing-Cookies</strong> und kein Web-Tracking-Dienst (z. B. Google Analytics,
              Meta Pixel, Hotjar o. Ä.) eingesetzt. Es findet keine Auswertung Ihres
              Nutzungsverhaltens durch Drittanbieter statt.
            </p>
            <p className="text-base text-ink-mid leading-relaxed">
              Technisch notwendige Cookies (z. B. zur Sicherung von Formulareingaben oder
              Ratenbegrenzung bei Anfragen) können verwendet werden, sofern dies zum
              Betrieb der Website erforderlich ist. Diese speichern keine
              personenbezogenen Daten dauerhaft und werden nach dem Schließen des Browsers
              gelöscht (Session-Cookies).
            </p>
            {/* TODO: Diesen Abschnitt aktualisieren, sobald ein Analyse- oder Tracking-Tool eingebunden wird (z. B. Vercel Analytics, Plausible). In diesem Fall sind Einwilligungsmechanismus und Rechtsgrundlage zu ergänzen. */}
          </section>

          {/* 7. Speicherdauer */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              7. Speicherdauer
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für den
              jeweiligen Verarbeitungszweck erforderlich ist. Sobald der Zweck entfällt und
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen, werden die Daten
              gelöscht oder so anonymisiert, dass ein Personenbezug nicht mehr möglich ist.
            </p>
            <p className="text-base text-ink-mid leading-relaxed">
              Für Anfragedaten (Formulardaten, E-Mail-Korrespondenz) gelten handels- und
              steuerrechtliche Aufbewahrungsfristen von bis zu zehn Jahren (§ 257 HGB, § 147 AO),
              sofern die Anfrage zu einem Geschäftsvorfall führt.
            </p>
          </section>

          {/* 8. Rechte der betroffenen Person */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              8. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-5">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="space-y-4 text-base text-ink-mid leading-relaxed">
              <li>
                <strong className="text-ink">Auskunftsrecht (Art. 15 DSGVO):</strong>{' '}
                Sie können Auskunft darüber verlangen, ob und welche personenbezogenen Daten
                wir über Sie verarbeiten.
              </li>
              <li>
                <strong className="text-ink">Recht auf Berichtigung (Art. 16 DSGVO):</strong>{' '}
                Sie können die Berichtigung unrichtiger oder die Vervollständigung
                unvollständiger Daten verlangen.
              </li>
              <li>
                <strong className="text-ink">Recht auf Löschung (Art. 17 DSGVO):</strong>{' '}
                Sie können die Löschung Ihrer personenbezogenen Daten verlangen, sofern die
                Voraussetzungen des Art. 17 DSGVO vorliegen.
              </li>
              <li>
                <strong className="text-ink">
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
                </strong>{' '}
                Sie können die Einschränkung der Verarbeitung verlangen, z. B. während
                einer Überprüfung der Richtigkeit Ihrer Daten.
              </li>
              <li>
                <strong className="text-ink">
                  Recht auf Datenübertragbarkeit (Art. 20 DSGVO):
                </strong>{' '}
                Sie können verlangen, dass wir Ihnen die Sie betreffenden Daten in einem
                strukturierten, maschinenlesbaren Format übermitteln.
              </li>
              <li>
                <strong className="text-ink">Widerspruchsrecht (Art. 21 DSGVO):</strong>{' '}
                Sie können der Verarbeitung Ihrer Daten auf Basis unseres berechtigten
                Interesses (Art. 6 Abs. 1 lit. f DSGVO) jederzeit widersprechen.
              </li>
              <li>
                <strong className="text-ink">
                  Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO):
                </strong>{' '}
                Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie diese
                jederzeit mit Wirkung für die Zukunft widerrufen, ohne dass die
                Rechtmäßigkeit der bisherigen Verarbeitung berührt wird.
              </li>
              <li>
                <strong className="text-ink">
                  Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):
                </strong>{' '}
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
                beschweren. Zuständig ist in der Regel die Behörde am Ort Ihres gewöhnlichen
                Aufenthalts oder Arbeitsplatzes. Für Hamburg ist dies der{' '}
                <a
                  href="https://www.datenschutz-hamburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark hover:underline font-medium"
                >
                  Hamburgische Beauftragte für Datenschutz und Informationsfreiheit
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 9. Kontakt für Datenschutzanfragen */}
          <section>
            <h2 className="font-display font-bold text-2xl text-ink tracking-tight mb-6 pb-3 border-b border-ink/[0.09]">
              9. Kontakt für Datenschutzanfragen
            </h2>
            <p className="text-base text-ink-mid leading-relaxed mb-4">
              Für Fragen zum Datenschutz, zur Geltendmachung Ihrer Betroffenenrechte oder für
              sonstige datenschutzrechtliche Anliegen wenden Sie sich bitte an:
            </p>
            <address className="text-base text-ink-mid leading-relaxed not-italic">
              <strong className="text-ink font-semibold">U. Amini</strong><br />
              Mentroo<br />
              Barmbeker Straße 9a<br />
              22303 Hamburg<br />
              <br />
              E-Mail:{' '}
              <a href="mailto:info@mentroo.de" className="text-brand-dark hover:underline font-medium">
                info@mentroo.de
              </a>
            </address>
          </section>

          {/* Timestamp note */}
          <p className="text-sm text-ink/30 pt-6 border-t border-ink/[0.06]">
            Stand: August 2026
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}
