import type { MetadataRoute } from 'next'
import { company } from '../../config/company'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.meta.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${company.meta.url}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${company.meta.url}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
