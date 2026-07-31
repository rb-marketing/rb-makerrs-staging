/**
 * VideoObject schema for work case studies that showcase a film.
 *
 * Keyed by the `[slug]` segment of /work/[create]/[slug]. Pages not listed here
 * simply emit no video schema.
 */

import { SITE_URL, ORG_ID } from './organization'

const VIDEOS = {
  'lillia-care-brand-launch': {
    path: '/work/brand-design/lillia-care-brand-launch',
    name: 'Branding for Healthcare',
    description:
      'Makerrs partnered with Lillia Care, an AI healthcare startup, to develop their brand identity design. This case study showcases our brand strategy, visual identity design and digital branding, and how we communicated cutting-edge healthcare technology as a human-centric story. From crafting a brand story on the concept of an AI Digital Twin and beautiful brand identity system to the website experience – every element was created to communicate innovation in patient care.',
    thumbnailUrl:
      'https://blogs.makerrs.com/wp-content/uploads/2026/03/lillia-video-thumbanail.jpg',
    uploadDate: '2026-03-19',
    duration: 'PT1M3S',
    embedUrl: 'https://player.vimeo.com/video/1078232265',
  },
  'exicom-ev-charger-rebrand': {
    path: '/work/brand-designs/exicom-ev-charger-rebrand',
    name: 'Rebranding Smart EV Charging',
    description:
      'Makerrs partnered with Exicom to develop a future-ready brand identity system for a leading EV charging solutions company. This brand transformation case study showcases our brand strategy, brand positioning, creative direction and visual identity design, helping Exicom evolve into a modern, innovation-led brand in the electric vehicle charging industry. From creating a distinctive brand identity system and messaging framework to designing a cohesive visual language and editorial design every element was crafted to communicate intelligence, sustainability and technological leadership while strengthening engagement with B2B customers and design-conscious audiences.',
    thumbnailUrl:
      'https://blogs.makerrs.com/wp-content/uploads/2026/03/exicom_work_thubnail.jpg',
    uploadDate: '2026-03-20',
    duration: 'PT1M23S',
    // TODO: embedUrl intentionally omitted. The schema brief supplied Vimeo id
    // 1078232265 for this case study, but that is the same id given for
    // lillia-care-brand-launch above. Publishing it would tell Google two
    // different case studies share one video. Add the correct Vimeo id here
    // once confirmed — the rest of the VideoObject is valid without it.
  },
}

export const buildVideoSchema = (slug) => {
  const video = VIDEOS[slug]
  if (!video) return null

  const pageUrl = `${SITE_URL}${video.path}`

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video`,
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    contentUrl: pageUrl,
    creator: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  }
}
