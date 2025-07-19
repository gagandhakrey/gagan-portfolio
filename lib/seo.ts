import { meta } from '@/content';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gagan Dhakrey',
    url: meta.url,
    jobTitle: 'Backend Engineer & Systems Architect',
    description: meta.description,
    sameAs: [
      meta.linkedin,
      meta.github,
      meta.twitter
    ]
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: meta.title,
    url: meta.url,
    description: meta.description,
    author: {
      '@type': 'Person',
      name: meta.author
    }
  };
}

export function generateMetadata() {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.join(', '),
    authors: [{ name: meta.author }],
    creator: meta.author,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      siteName: meta.title,
      type: 'website',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@gagandhakrey'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1
      }
    }
  };
} 