import { Droplets, Building2, Wrench, Flame, Truck, Hammer, ShieldCheck, Zap, HelpCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ServiceDef = {
  icon: LucideIcon
  label: string
  title: string
  description: string
  tags: string[]
}

export const SERVICES: ServiceDef[] = [
  {
    icon: Droplets,
    label: 'Reinigung',
    title: 'Reinigung',
    description:
      'Gebäudereinigung, Tankreinigung, Industriereinigung, Glasreinigung, Unterhaltsreinigung und Sonderreinigungen.',
    tags: ['Gebäude', 'Tank', 'Glas', 'Industrie'],
  },
  {
    icon: Building2,
    label: 'Sanierung',
    title: 'Sanierung',
    description:
      'Schimmelsanierung, Wasserschadensanierung, Brandschadensanierung und Feuchtigkeitsschutz.',
    tags: ['Schimmel', 'Wasserschaden', 'Brandschaden'],
  },
  {
    icon: Wrench,
    label: 'Rohr & Sanitär',
    title: 'Rohr & Sanitär',
    description:
      'Rohrreinigung, Rohrsanierung, Dichtheitstest, Leckageortung und Sanitärinstallation.',
    tags: ['Rohrreinigung', 'Leckage', 'Installation'],
  },
  {
    icon: Flame,
    label: 'Heizung',
    title: 'Heizung & Energie',
    description:
      'Heizungsinstallation, Wartung, Reparatur, Brennerwechsel und Heizungsoptimierung.',
    tags: ['Installation', 'Wartung', 'Reparatur'],
  },
  {
    icon: Truck,
    label: 'Transport',
    title: 'Transport & Logistik',
    description:
      'Umzüge, Entrümpelungen, Schwertransporte, Möbellieferung und betriebliche Transporte.',
    tags: ['Umzug', 'Entrümpelung', 'Transport'],
  },
  {
    icon: Hammer,
    label: 'Renovierung',
    title: 'Renovierung & Ausbau',
    description:
      'Malerarbeiten, Trockenbau, Bodenbeläge, Fliesen, Innenausbau und Reparaturarbeiten.',
    tags: ['Maler', 'Trockenbau', 'Fliesen'],
  },
  {
    icon: ShieldCheck,
    label: 'Versicherung',
    title: 'Versicherung',
    description:
      'Vermittlung an geprüfte Versicherungspartner für Gebäude-, Haftpflicht- oder Schadensfälle.',
    tags: ['Gebäude', 'Haftpflicht', 'Schadenfall'],
  },
  {
    icon: Zap,
    label: 'Energie (Strom/Gas)',
    title: 'Energie (Strom/Gas)',
    description:
      'Anfragen rund um Strom- und Gasversorgung, Anbieterwechsel und Energieberatung.',
    tags: ['Strom', 'Gas', 'Energieberatung'],
  },
]

export const REQUEST_FLOW_CATEGORIES = [
  ...SERVICES.map((s) => ({ icon: s.icon, label: s.label })),
  { icon: HelpCircle, label: 'Sonstiges' } as { icon: LucideIcon; label: string },
]

export const CONTACT_FORM_LABELS = [...SERVICES.map((s) => s.label), 'Sonstiges']

export const TIMEFRAME_OPTIONS = [
  'So schnell wie möglich',
  'Innerhalb der nächsten 2 Wochen',
  'Innerhalb des nächsten Monats',
  'Flexibel / noch offen',
]
