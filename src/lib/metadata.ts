import { Metadata } from 'next';

const siteUrl = 'https://cnenterprise.com';
const siteName = 'C&N Enterprise';
const siteDescription = 'Professional automotive electrical repair shop specializing in alternators, starter motors, and wiring diagnostics in Sandakan. Over 20 years of trusted service.';

export function generateMetadata({
  title,
  description = siteDescription,
  keywords,
  path = '',
  image,
}: {
  title: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_MY',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateAutomotiveBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'C&N Enterprise',
    description: siteDescription,
    url: siteUrl,
    telephone: '+60168029559',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Sandakan',
      addressRegion: 'Sabah',
      postalCode: '90000',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '5.8398',
      longitude: '118.1139',
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 08:00-14:00',
    ],
    priceRange: '$$',
    areaServed: [
      'Sandakan',
      'Sabah',
      'Tawau',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automotive Electrical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Alternator Repair',
            description: 'Professional alternator repair and replacement services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Starter Motor Repair',
            description: 'Expert starter motor diagnosis and repair services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Diagnostics',
            description: 'Advanced automotive electrical diagnostics and repair',
          },
        },
      ],
    },
  };
}