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
  ]
}
