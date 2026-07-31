/**
 * Canonical Organization + WebSite graph for makerrs.com.
 *
 * This is the single source of truth for the Makerrs entity. It is emitted once
 * per page from `_app.js`, so page-level schema must NOT redeclare the
 * organisation — reference it by `@id` instead:
 *
 *   provider:  { '@id': ORG_ID }
 *   publisher: { '@id': ORG_ID }
 *   isPartOf:  { '@id': WEBSITE_ID }
 */

export const SITE_URL = 'https://www.makerrs.com'

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const LOGO_ID = `${SITE_URL}/#logo`

export const ORG_DESCRIPTION =
  'Makerrs is a global creative agency specializing in brand strategy, brand identity design, creative marketing campaigns, video production, podcast production, AI-powered content and digital storytelling. We partner with businesses across the USA, India, the UK, Europe and Australia to create brand experiences, marketing content and scalable creative systems through a borderless network of strategists, designers, filmmakers and technologists.'

export const SAME_AS = [
  'https://www.linkedin.com/company/makerrsagency',
  'https://www.instagram.com/makerrsagency/',
  'https://www.youtube.com/@MakerrsAgency',
  'https://x.com/makerrsagency',
]

/** Countries Makerrs sells into — reused by the Service schema's areaServed. */
export const AREA_SERVED = [
  { '@type': 'Country', name: 'India' },
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'Canada' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'Ireland' },
  { '@type': 'Country', name: 'Netherlands' },
  { '@type': 'Country', name: 'Norway' },
  { '@type': 'Country', name: 'Germany' },
  { '@type': 'Country', name: 'Belgium' },
  { '@type': 'Country', name: 'Romania' },
  { '@type': 'Country', name: 'Switzerland' },
  { '@type': 'Country', name: 'Australia' },
  { '@type': 'Country', name: 'Singapore' },
]

const BENGALURU_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress:
    'CoWrks, Purva Premier, No 135/1, Residency Rd, Ward No.76, Ashok Nagar',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  postalCode: '560025',
  addressCountry: 'IN',
}

const OFFICES = [
  {
    '@type': 'Place',
    '@id': `${SITE_URL}/#office-bengaluru`,
    name: 'Makerrs — Bengaluru',
    address: BENGALURU_ADDRESS,
  },
  {
    '@type': 'Place',
    '@id': `${SITE_URL}/#office-sacramento`,
    name: 'Makerrs — Sacramento',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1401, 21st Street',
      addressLocality: 'Sacramento',
      addressRegion: 'California',
      postalCode: '95811',
      addressCountry: 'US',
    },
  },
  {
    '@type': 'Place',
    '@id': `${SITE_URL}/#office-singapore`,
    name: 'Makerrs — Singapore',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 North Bridge Road, #19-08 High Street Centre',
      addressLocality: 'Singapore',
      postalCode: '179094',
      addressCountry: 'SG',
    },
  },
]

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Makerrs',
      legalName: 'The Red Bangle Film Collaborative Pvt Ltd',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        '@id': LOGO_ID,
        url: `${SITE_URL}/makerrs_logo.png`,
        contentUrl: `${SITE_URL}/makerrs_logo.png`,
        width: 2214,
        height: 525,
        caption: 'Makerrs',
      },
      image: { '@id': LOGO_ID },
      description: ORG_DESCRIPTION,
      email: 'hello@makerrs.com',
      foundingDate: '2017',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 11,
        maxValue: 50,
      },
      address: BENGALURU_ADDRESS,
      location: OFFICES,
      areaServed: AREA_SERVED,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'hello@makerrs.com',
          contactType: 'sales',
          areaServed: ['IN', 'US', 'CA', 'GB', 'EU', 'AU', 'SG'],
          availableLanguage: ['en'],
        },
      ],
      sameAs: SAME_AS,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: 'Makerrs',
      description: ORG_DESCRIPTION,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en',
    },
  ],
}
