import { MetadataRoute } from 'next'
import { meta } from '@/content'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${meta.url}/sitemap.xml`,
  }
} 