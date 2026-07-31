/**
 * Page-level schema for non-service pages: WebPage (or a subtype) plus a
 * BreadcrumbList.
 *
 * These replace the old per-page arrays that each redeclared the organisation
 * dozens of times under keyword names. The organisation is now emitted once
 * globally from `_app.js`; everything here references it by `@id`.
 */

import { SITE_URL, ORG_ID, WEBSITE_ID } from './organization'

const PAGES = [
  {
    slug: 'about-us',
    type: 'AboutPage',
    name: 'About Makerrs',
    breadcrumb: 'About Us',
    description:
      'Makerrs is a global creative agency built on a borderless network of strategists, designers, filmmakers and technologists, partnering with businesses across the USA, India, the UK, Europe and Australia.',
  },
  {
    slug: 'contact',
    type: 'ContactPage',
    name: 'Contact Makerrs',
    breadcrumb: 'Contact',
    description:
      'Talk to Makerrs about brand design, video production, podcast production and integrated marketing campaigns. Send us a brief and our team will get back to you.',
  },
  {
    slug: 'work',
    type: 'CollectionPage',
    name: 'Our Work',
    breadcrumb: 'Work',
    description:
      'Selected brand design, video production, podcast and campaign work by Makerrs for brands across the USA, India, the UK, Europe and Australia.',
  },
  {
    slug: 'blog',
    type: 'CollectionPage',
    name: 'Makerrs Blog',
    breadcrumb: 'Blog',
    description:
      'Ideas, craft notes and industry perspective on brand strategy, design, video production, podcasting and creative marketing from the team at Makerrs.',
  },
  {
    slug: 'careers',
    type: 'CollectionPage',
    name: 'Careers at Makerrs',
    breadcrumb: 'Careers',
    description:
      'Join Makerrs — a global creative collective of strategists, designers, filmmakers and technologists building brands and content for clients worldwide.',
  },
  {
    slug: 'freelance-gigs',
    type: 'WebPage',
    name: 'Freelance Gigs at Makerrs',
    breadcrumb: 'Freelance Gigs',
    description:
      'Collaborate with Makerrs as a freelance creator. Join our borderless network of filmmakers, designers, editors, animators and producers working on global brand projects.',
  },
  {
    slug: 'impact',
    type: 'WebPage',
    name: 'Impact & Social Responsibility',
    breadcrumb: 'Impact',
    description:
      'How Makerrs uses storytelling, design and production craft to support social impact, sustainability and community causes alongside our commercial work.',
  },
  {
    slug: 'creative-cloud-technology',
    type: 'WebPage',
    name: 'Creative Cloud Technology',
    breadcrumb: 'Creative Cloud Technology',
    description:
      'The Makerrs Creative Cloud platform brings briefing, production tracking, review and versioning into a single cloud workflow for large-scale content programmes.',
  },
]

const buildPageGraph = ({ slug, type, name, description, breadcrumb }) => {
  const pageUrl = `${SITE_URL}/${slug}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': type,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
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

/** Page schema keyed by slug, e.g. pageSchemas['about-us']. */
export const pageSchemas = Object.fromEntries(
  PAGES.map(page => [page.slug, buildPageGraph(page)])
)
