# Mentroo Design System

## 1. Markenkernbotschaft & Zielgruppen

**Kernbotschaft**: „Ihr Auftrag — wir finden den richtigen Fachbetrieb."
Mentroo startet beim konkreten Auftrag, nicht bei der Suche nach einem Unternehmen.

**Zielgruppe 1 — Auftraggeber**
Privatpersonen und Unternehmen, die eine Dienstleistung benötigen.
CTA: „Auftrag anfragen" / „Fachbetrieb finden"

**Zielgruppe 2 — Fachbetriebe**
Handwerksbetriebe und Dienstleister, die neue Aufträge suchen.
CTA: „Aufträge erhalten" / „Als Fachbetrieb registrieren"

---

## 2. Informationsarchitektur & User Journey

**Primäre Journey (Auftraggeber)**:
Hero → HowItWorks → ServiceCategories → RequestFlow → TrustSection → FAQ → ContactForm

**Sekundäre Journey (Fachbetriebe)**:
Hero (CTA) → ForBusinesses → FAQ → ContactForm

**Scroll-Story**:
1. Hero — sofortiges Verständnis der Kernidee
2. HowItWorks — 4 Schritte, wie die Vermittlung funktioniert
3. ServiceCategories — Breite des Leistungsspektrums
4. ForCustomers / ForBusinesses — Split für beide Zielgruppen
5. RequestFlow — Conversion-Moment: Auftrag platzieren
6. TrustSection — Vertrauensaufbau ohne Fake-Daten
7. FAQ — Hürden nehmen
8. ContactForm — Vollständige Anfrage

---

## 3. Farbpalette (CI-Farben)

| Name         | Hex       | Tailwind Token      | Verwendung                                          |
|--------------|-----------|---------------------|-----------------------------------------------------|
| Brand Dark   | `#14325F` | `brand.dark`        | Primäre Dunkelfarbe; Headlines, dunkle Sections     |
| CI-Grün      | `#B3F600` | `signal` / `signal.DEFAULT` | CTAs (Fläche), dunkle Sections, Akzent-Icons |
| CI-Grün Hover| `#9cd600` | `signal.dark`       | CTA Hover auf dunklem Hintergrund                   |
| Void         | `#08090A` | `void`              | Sektionshintergründe dunkel, Footer                 |
| Error        | `#EF4444` | (Tailwind red-500)  | Fehlermeldungen                                     |

### Kontrast-Regel CI-Grün (WCAG AA)

**Das helle CI-Grün (`#B3F600`) darf auf hellen/weißen Hintergründen NICHT als Text- oder dünne Border-Farbe verwendet werden.**
Grund: Kontrastverhältnis Limone/Weiß ≈ 1.6:1 — weit unter WCAG AA (4.5:1 Text, 3:1 UI).

| Kontext | Erlaubt | Nicht erlaubt |
|---------|---------|---------------|
| Dunkler Hintergrund (`bg-brand-dark`, `bg-void`) | `text-signal`, `border-signal` | — |
| CTA-Button (großflächig) | `bg-signal text-void` | — |
| Heller Hintergrund (weiß, `canvas`, `shade`) | `bg-signal text-void` (Fläche), Akzent-Icons (dekorativ) | `text-signal`, `border-signal` als Text/dünne Border |

**Auf hellen Hintergründen für aktive/ausgewählte Zustände stattdessen verwenden:**
- Border: `border-2 border-brand-dark` (2 px, min. 12:1 Kontrast)
- Text: `text-brand-dark` (12:1 auf Weiß)
- Hintergrund-Tint: `bg-brand-dark/5` bis `bg-brand-dark/8`
- Input-Fokus-Ring: `border-brand-dark` + `box-shadow: 0 0 0 3px rgba(20,50,95,0.12)`

---

## 4. Typografie

**Display-Schrift**: Syne (Google Fonts, 700, 800)
— Charaktervolle geometrische Groteskschrift; prägnant, modern, unverwechselbar
— Einsatz: H1, H2, große Statements, Sektionsüberschriften

**Body-Schrift**: Inter (Google Fonts, 400, 500, 600)
— Hochlesbares UI-Font; neutral, professionell, klar
— Einsatz: Fließtext, UI-Elemente, Buttons, Labels

**Typoskala**:
| Token        | Desktop    | Mobile    | Weight    | Verwendung        |
|--------------|------------|-----------|-----------|-------------------|
| Hero         | 72–88px    | 44–52px   | 800       | H1 im Hero        |
| Display      | 52px       | 36px      | 700       | Sektions-H2       |
| Title        | 36px       | 28px      | 700       | Karten-H3         |
| Heading      | 24px       | 20px      | 600       | Unterabschnitte   |
| Subheading   | 18px       | 16px      | 500       | Leads, Bylines    |
| Body         | 16px       | 16px      | 400       | Fließtext         |
| Small        | 14px       | 14px      | 400/500   | Labels, Captions  |

**Line-Height**: 1.15–1.2 für Headlines, 1.6–1.7 für Body

---

## 5. Spacing-Scale

Tailwind defaults (4px-Basis). Charakteristische Abstände:
- Sektions-Padding vertikal: `py-24` (96px) Desktop, `py-16` (64px) Mobile
- Innerer Container: `max-w-7xl mx-auto px-6` (Desktop), `px-4` (Mobile)
- Karten-Padding: `p-6` bis `p-8`
- Karten-Gap: `gap-6` bis `gap-8`

---

## 6. Border-Radius, Schatten, Buttons

**Border-Radius**:
- Buttons: `rounded-full` (Pill-Form)
- Karten: `rounded-2xl`
- Input-Felder: `rounded-xl`
- Tags/Badges: `rounded-full`

**Schatten**:
- Karte soft: `shadow-[0_4px_20px_rgba(0,0,0,0.08)]`
- Karte medium: `shadow-[0_8px_40px_rgba(0,0,0,0.12)]`
- CTA-Button: `shadow-[0_8px_30px_rgba(20,184,166,0.35)]`

**Primär-Button**:
- Hintergrund: `bg-signal` (`#14B8A6`)
- Hover: `bg-signal-dark` + `shadow-teal`
- Text: `text-white font-semibold`
- Form: `rounded-full px-6 py-3`
- Transition: 250ms ease-out

**Sekundär-Button**:
- Hintergrund: transparent
- Rahmen: `border border-white/20` (dark bg) / `border-gray-200` (hell)
- Text: `text-white` / `text-void`

---

## 7. Motion-System

**Easing**: `[0.21, 0.47, 0.32, 0.98]` (Apple-ähnliche Deceleration)
— Alternativ für Akkordeon: `easeInOut`

**Durations**:
- Mikro (Hover, Focus): 200–250ms
- Standard (Reveal, Fade): 500–600ms
- Seitenebene (Hero, Intro): 800–1000ms
- Stagger-Delay zwischen Kinder: 0.1s

**Scroll-Reveal Pattern** (`whileInView`):
- `initial: { opacity: 0, y: 24 }`
- `whileInView: { opacity: 1, y: 0 }`
- `viewport: { once: true, margin: '-80px' }`

**Signatur-Animation (Hero Flow)**:
- Drei Karten erscheinen mit Stagger (0.2s Delay je)
- SVG-Pfadlinien zeichnen sich mit `pathLength` 0→1
- Mentroo-Karte erhält subtilen Teal-Glow-Puls

**prefers-reduced-motion**: Alle Framer-Motion-Animationen respektieren
automatisch das Systempräferenzsignal.

---

## 8. Responsive Breakpoints

| Name    | Tailwind | Breite    |
|---------|----------|-----------|
| Mobile  | default  | 360px+    |
| Tablet  | `md`     | 768px+    |
| Laptop  | `lg`     | 1024px+   |
| Desktop | `xl`     | 1280px+   |
| Wide    | `2xl`    | 1536px+   |

---

## 9. Seitenstruktur & Komponentenliste

```
Navbar             — Sticky mit Scroll-Transform (transparent → white/blur)
Hero               — Dark-Section mit animiertem Flow-Diagramm (Signatur)
HowItWorks         — 4-Schritt-Prozess, Scroll-Reveal
ServiceCategories  — 6 Kategorien, interaktive Hover-Karten
ForCustomers       — Split-Layout: Bild + Benefits + CTA
ForBusinesses      — Dark-Section, Benefits für Fachbetriebe + CTA
RequestFlow        — 5-Schritt-Stepper, interaktiv, API-Anbindung
TrustSection       — 4 Statement-Karten, ehrliche Aussagen
FAQ                — Akkordeon, AnimatePresence
ContactForm        — Vollformular, Zod-Validierung, API-Route
Footer             — Multi-Column, Platzhalter-Kontakt
```

---

## 10. Statisch vs. Konfigurierbar

**Statisch** (im Code):
- Design-Tokens (Farben, Fonts, Spacing)
- Seitenstruktur, Komponentenreihenfolge
- Motion-Konfiguration
- FAQ-Inhalte, Dienstleistungsliste

**Konfigurierbar** (`config/company.ts`):
- Firmenname, E-Mail, Telefon, Adresse
- Impressum-Daten
- Meta-Tags (Title, Description)

**Über API konfigurierbar** (`src/lib/email.ts`):
- E-Mail-Provider (Resend / SendGrid / Log-Fallback)
- Empfänger-Adresse für Formular-Submissions

---

## Ästhetische Risikoentscheidung

Teal (`#14B8A6`) als einzige Akzentfarbe im deutschen Fachbetrieb-Markt
ist eine bewusste Gegenentscheidung zu den branchenüblichen Blau- und
Orangetönen. Die Wahl positioniert Mentroo als moderne Digitalplattform,
nicht als klassisches Branchenbuch. Kombiniert mit der Syne-Schrift entsteht
eine visuelle Sprache, die in diesem Markt unverwechselbar ist.
