import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Vorname muss mindestens 2 Zeichen lang sein')
    .max(50, 'Vorname ist zu lang'),
  lastName: z
    .string()
    .min(2, 'Nachname muss mindestens 2 Zeichen lang sein')
    .max(50, 'Nachname ist zu lang'),
  company: z.string().max(100).optional(),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z
    .string()
    .min(6, 'Bitte geben Sie eine gültige Telefonnummer ein')
    .max(30),
  postalCode: z
    .string()
    .min(4, 'Bitte geben Sie eine gültige PLZ ein')
    .max(10),
  city: z.string().min(2, 'Bitte geben Sie Ihren Ort ein').max(80),
  service: z.string().min(1, 'Bitte wählen Sie eine Dienstleistung aus'),
  description: z
    .string()
    .min(20, 'Bitte beschreiben Sie Ihren Auftrag kurz (mind. 20 Zeichen)')
    .max(2000),
  timeframe: z.string().max(200).optional(),
  privacy: z.literal(true, {
    errorMap: () => ({ message: 'Bitte stimmen Sie der Datenschutzerklärung zu' }),
  }),
  website: z.string().max(0, 'Spam detected').optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const requestFlowSchema = z.object({
  category: z.string().min(1, 'Bitte wählen Sie eine Kategorie aus'),
  description: z
    .string()
    .min(20, 'Bitte beschreiben Sie Ihren Auftrag kurz (mind. 20 Zeichen)'),
  postalCode: z.string().min(4, 'Ungültige PLZ'),
  city: z.string().min(2, 'Bitte geben Sie Ihren Ort ein'),
  timeframe: z.string().max(200).optional(),
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(6, 'Ungültige Telefonnummer'),
})

export type RequestFlowData = z.infer<typeof requestFlowSchema>
