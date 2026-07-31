/**
 * Per-service-page schema: Service + WebPage + BreadcrumbList.
 *
 * The organisation itself is emitted once globally from `_app.js` — these nodes
 * only reference it via `@id`. Keyed by page slug; see `serviceSchemas`.
 */

import { SITE_URL, ORG_ID, WEBSITE_ID, AREA_SERVED } from './organization'

const SERVICES = [
  {
    slug: 'brand-design-agency',
    name: 'Brand Design',
    serviceType: 'Design',
    breadcrumb: 'Brand Design',
    description:
      'Makerrs is a global brand design agency offering brand identity design, branding systems, experiential design, event branding, editorial design, illustration, motion graphics and brand collateral design. We help businesses build distinctive brands, create consistent brand experiences and connect meaningfully with customers across digital and physical touchpoints.',
  },
  {
    slug: 'video-production',
    name: 'Video Production',
    serviceType: 'Video Production',
    breadcrumb: 'Video Production',
    description:
      'From marketing video production to corporate video production, recruitment and culture videos, and YouTube content – Makerrs is your end-to-end video production company. We combine content strategy, scripting, storyboarding, production, animation, editing, video SEO and video marketing to help brands engage with and grow audiences through high-quality videos.',
  },
  {
    slug: 'podcast-production-services',
    name: 'Podcast Production',
    serviceType: 'Podcast',
    breadcrumb: 'Podcast Production',
    description:
      'Makerrs is a podcast production company offering end-to-end podcast production services across the USA, India and rest of the world for businesses and brands. Talk to us for business podcasts, marketing podcasts and corporate podcasts. Go from podcast strategy and concept development to podcast branding, podcast recording, podcast editing, podcast distribution, podcast marketing and audience growth. Build branded thought leadership and engaged communities with us.',
  },
  {
    slug: 'advertising-agency',
    name: 'Brand Campaigns',
    serviceType: 'Brand Campaigns',
    breadcrumb: 'Advertising & Campaigns',
    description:
      'Makerrs is a global advertising and creative agency that develops integrated marketing campaigns for businesses and brands. From brand awareness campaigns, product launch campaigns and seasonal marketing campaigns to employer branding and ESG campaigns, we combine strategy, creative storytelling, design and content production to deliver campaigns that grab attention and spark conversations.',
  },
  {
    slug: 'video-production-near-me',
    name: 'Book A Crew',
    serviceType: 'On-demand video crews',
    breadcrumb: 'Book A Crew',
    description:
      'Makerrs provides on-demand professional video production crews and local video production in more than 100 cities worldwide, including London, New York, San Francisco, Amsterdam, Oslo, Singapore, Tokyo, Sydney, Bangalore, Manilla and Shanghai. Talk to us for film crew hire and camera crew hire for your corporate video production and branded content production. We are an international video production company.',
  },
]

const buildServiceGraph = ({ slug, name, serviceType, description, breadcrumb }) => {
  const pageUrl = `${SITE_URL}/${slug}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name,
        serviceType,
        description,
        url: pageUrl,
        provider: { '@id': ORG_ID },
        areaServed: AREA_SERVED,
        // Pricing is quote-based, so no price is asserted — the offer simply
        // points at the enquiry route rather than fabricating a figure.
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/contact`,
          availability: 'https://schema.org/InStock',
          seller: { '@id': ORG_ID },
        },
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': `${pageUrl}#service` },
        primaryImageOfPage: { '@id': `${SITE_URL}/#logo` },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: breadcrumb, item: pageUrl },
        ],
      },
    ],
  }
}

/** Service page schema keyed by slug, e.g. serviceSchemas['video-production']. */
export const serviceSchemas = Object.fromEntries(
  SERVICES.map(service => [service.slug, buildServiceGraph(service)])
)
