/**
 * VideoObject schema for /work case studies.
 *
 * Which videos a page carries comes from WordPress — the same
 * workDetails.workJson.sources[] list that VideoGallery renders — so the
 * schema cannot drift from what is actually on the page. Duration, upload date
 * and fallback thumbnail come from vimeo-meta.json, a snapshot of Vimeo's
 * oEmbed data taken Sep 2026. Names and descriptions come from the client's
 * schema brief below; case studies the brief does not cover fall back to their
 * WordPress title and SEO description.
 *
 * Server-only: call from getStaticProps so none of this ships to the browser.
 */

import { SITE_URL, ORG_ID } from './organization'
import VIMEO_META from './vimeo-meta.json'

/**
 * Keyed by the `[slug]` segment of /work/[create]/[slug]. Where the brief put
 * a video under the wrong page URL, it is filed here under the page that
 * actually embeds it (ai-powered-singalong, metro-wholesale-one-more,
 * swiggy-winter-jackets).
 */
const CASE_STUDIES = {
  // Design work
  'lillia-care-brand-launch': {
    title: 'Branding for Healthcare',
    description:
      'Makerrs partnered with Lillia Care, an AI healthcare startup, to develop their brand identity design. This case study showcases our brand strategy, visual identity design and digital branding, and how we communicated cutting-edge healthcare technology as a human-centric story. From crafting a brand story on the concept of an AI Digital Twin and beautiful brand identity system to the website experience – every element was created to communicate innovation in patient care.',
  },
  'exicom-ev-charger-rebrand': {
    title: 'Branding EV Charging',
    description:
      'Makerrs partnered with Exicom to develop a future-ready brand identity system for a leading EV charging solutions company. This brand transformation case study showcases our brand strategy, brand positioning, creative direction and visual identity design, helping Exicom evolve into a modern, innovation-led brand in the electric vehicle charging industry. From creating a distinctive brand identity system and messaging framework to designing a cohesive visual language and editorial design every element was crafted to communicate intelligence, sustainability and technological leadership while strengthening engagement with B2B customers and design-conscious audiences.',
  },
  'pu-dingding-cafe': {
    title: 'Branding for Dessert Café',
    description:
      'Makerrs partnered with P.U. Dingding to create a distinctive dessert café brand. Our work included brand name, brand identity design and customer experience. This branding case study showcases how we transformed a dessert concept into a memorable cafe brand with a unique visual identity, mascot designs, packaging design, interior branding and digital storytelling. Every element was crafted to build emotional connections, celebrate joy and strengthen brand recognition, creating a personality-driven café experience that brings together desserts, creativity, nostalgia and community.',
  },
  'medalio-hotel-brand-identity': {
    title: 'Hospitality Brand Identity',
    description:
      "Makerrs partnered with Medalio by Treebo to create a distinctive hotel brand identity that reflects ambition, progress and exceptional guest experiences. This hospitality branding case study showcases our visual identity design and scalable brand identity system for a modern hotel brand. From defining the brand story and design language to developing a cohesive visual identity, every element was crafted to communicate elegance, warmth and aspiration, helping Medalio build a memorable hospitality brand for today's travelers.",
  },
  'thelagram-restaurant': {
    title: 'Branding for Street Food Restaurant',
    description:
      "Makerrs partnered with Thelagram to create a distinctive restaurant brand identity inspired by the vibrant culture of Indian street food. This restaurant branding case study showcases our brand identity design, environmental graphics and digital storytelling, transforming a street food concept into an immersive hospitality brand. Drawing inspiration from Indian typography, local street culture and nostalgic design elements, every touchpoint was crafted to create an authentic customer experience, strengthen brand recognition and celebrate the flavours, humour and community of India's neighbourhood food culture.",
  },
  'bajaj-pulsar-augmented-reality': {
    title: 'AR Experience for Automotive',
    description:
      'Makerrs partnered with Bajaj Auto to create an interactive WebAR experience for the launch of the Pulsar NS400Z, transforming traditional print advertising into an immersive digital marketing campaign. This augmented reality case study showcases our expertise in WebAR development, experiential marketing, 3D product visualization and interactive brand experiences. By enabling customers to explore the motorcycle in 3D directly through their mobile browsers, we combined creative technology, design and storytelling to increase customer engagement, strengthen brand recall and deliver an innovative automotive product launch experience.',
  },
  '3d-interactive-experience-infosys-topaz': {
    title: 'Interactive AI-Powered Experience for Infosys Topaz',
    description:
      'Makerrs partnered with Infosys to create an interactive 3D product experience for Infosys Topaz, an AI-first suite of enterprise AI solutions. This interactive technology case study showcases our expertise in 3D experience design, Unreal Engine development, AI-powered experiences, product demonstration and immersive storytelling. By combining MetaHuman technology, AI integrations and real-time 3D environments, we transformed complex AI capabilities into an engaging digital experience that helps businesses explore enterprise AI solutions, accelerate AI adoption and better understand the future of intelligent automation.',
  },
  '3d-logo-animation-mumbai-indians': {
    title: '3D Billboard Animation for Mumbai Indians',
    description:
      'Makerrs created a cinematic 3D billboard animation for the launch of the Mumbai Indians brand logo, transforming a traditional logo reveal into an immersive CGI brand experience. This 3D animation case study showcases our expertise in CGI animation, 3D motion graphics, photorealistic visual effects, logo animation and creative technology. Using advanced water simulations, dynamic camera movements and realistic environmental rendering around the Gateway of India, we delivered a high-impact sports marketing campaign that increased brand visibility, audience engagement and visual storytelling.',
  },
  'abis-pro-meats': {
    title: 'Trust-led FMCG Branding',
    description:
      'Makerrs partnered with ABIS Pro to create a distinctive food brand identity built on trust, quality and traceability. This food branding case study showcases our expertise in brand strategy, brand identity design, packaging design, visual identity and consumer brand storytelling for the food and FMCG industry. By developing a modern brand identity system, scalable packaging and clear brand communications, we helped transform everyday meat purchasing into a trusted consumer experience. Discover how strategic branding and design strengthened brand recognition, communicated product quality and reinforced ABIS Pro\'s promise of "Goodness. Guaranteed."',
  },

  // Campaign work
  'infosys-global-employer-brand': {
    title: 'Hiring Campaign for Infosys',
    description:
      "Makerrs partnered with Infosys to create the Global Leaders employer branding campaign, showcasing the stories of leaders driving innovation, inclusion and business growth across global markets. This employer branding case study highlights our expertise in employee value proposition (EVP) campaigns, leadership storytelling, corporate video production and talent brand marketing. Through authentic executive stories, regional perspectives and strategic employer branding, the campaign communicates Infosys' global workplace culture, strengthens employer reputation and inspires professionals to build meaningful careers with one of the world's leading technology companies.",
  },
  'indeed-youtube-content': {
    title: 'Organic YouTube Growth for Indeed India',
    description:
      "Makerrs partnered with Indeed India to develop a YouTube content strategy and do the end-to-end YouTube video production to gain traction with India’s light-skilled workers. The approach: help light-skilled job seekers build successful careers. This YouTube marketing case study showcases our expertise in audience research, content strategy, YouTube SEO, video production and educational content creation. From career advice videos and employee success stories to product tutorials and app walkthroughs, we produced a scalable YouTube content ecosystem optimized for search visibility, audience engagement and organic subscriber growth. The campaign increased organic subscribers by 220% while strengthening Indeed's position as a trusted career and recruitment platform for India’s light-skilled workers.",
  },
  'multiplier-explainer-video': {
    title: 'Explainer Video for SaaS',
    description:
      'Makerrs partnered with Multiplier to create an animated SaaS explainer video that simplifies global hiring, payroll and compliance for businesses expanding internationally. This explainer video case study showcases our expertise in product launch videos, SaaS video production, 2D animation, corporate storytelling and B2B explainer videos. By combining strategic messaging, an impactful script, clear visual storytelling and engaging animation, we transformed a complex HR technology platform into an easy-to-understand product experience–helping increase brand awareness, support lead generation and position Multiplier as a leader in global employment and payroll solutions.',
  },
  'unext-course-marketing': {
    title: 'Digital Campaign Videos for EdTech',
    description:
      'Makerrs is a creative advertising agency that partnered with Jigsaw Academy, now UNext, to create digital campaign videos for e-learning courses. The campaign used short marketing videos, product launch videos, motion graphics, voiceovers and stock footage to promote six professional education programs and show learners how the courses could help them advance their careers. Designed for digital advertising and online marketing, the video campaign created engaging content for prospective students and helped position UNext’s e-learning programs in a competitive EdTech market.',
  },
  'swiggy-extra-earnings': {
    title: 'Digital Campaign for Swiggy',
    description:
      'Makerrs is a creative agency that partnered with Swiggy to develop a digital marketing campaign promoting seasonal incentives and extra earnings for Delivery Partners. Building on the success of an existing Swiggy campaign, we brought back the relatable characters Pankaj and Sweety to create a series of engaging advertising videos that communicated the benefits of earning extra during the busy festive season. The campaign combined creative strategy, campaign development, storytelling and ad film production to drive Delivery Partner engagement and encourage new sign-ups on the Swiggy app.',
  },
  'global-employer-branding': {
    title: 'Global Employer Branding Campaign',
    description:
      'Makerrs is a creative agency that partnered with Infosys to develop a global employer branding campaign designed to attract local talent across international markets. We crafted a campaign featuring authentic career stories from Infosys across London, Paris, New York, Melbourne and Richardson. The campaign project involved creative strategy, campaign development, employee interviews and narratives, global video production, at-scale rapid post production and publishing-ready assets. The end-to-end campaign by Makerrs involved 16 campaign videos and 32 social media assets all conceptualised, crafted and delivered in 45 days to portray an impressive global employer brand.',
  },
  'xiaomi-a4-5g-phone': {
    title: 'Product Launch Campaign for Consumer Electronics',
    description:
      'For the Redmi A4 5G product launch campaign, Xiaomi partnered with Makerrs, an advertising agency. Makerrs crafted the digital marketing campaign around the ambitions of young consumers and small business owners in India, using relatable storytelling to showcase the smartphone’s features and value. From creative strategy and campaign development to ad film production, 3D animation, regional language adaptations and multi-format digital advertising assets, Makerrs delivered the complete campaign and 136 versions of the campaign film for various platforms and audiences.',
  },
  indiagold: {
    title: 'Digital Campaign for Fintech',
    description:
      "Makerrs is a creative agency and advertising agency commissioned by indiagold to develop a digital marketing campaign for doorstep gold loans. The campaign film used a relatable musical story to communicate Indiagold's low-interest gold loans, doorstep service and privacy benefits. Through creative strategy, campaign development, and campaign film production, we turned a complex financial service proposition into an engaging marketing campaign designed to build awareness and make gold loans more accessible and relatable to customers.",
  },
  'infosys-equinox-launch-4': {
    title: 'Brand Launch Campaign for Tech Enterprise',
    description:
      'Infosys partnered with Makerrs, a creative agency, to develop a brand launch campaign for Infosys Equinox, a digital commerce platform for global CPG and retail brands. The integrated marketing campaign brought the “Make Commerce Human” positioning to life through a brand reveal video, thought leadership content, e-book promo videos and client testimonial videos. From creative strategy and campaign development to video production, motion graphics, social media content and customer advocacy, Makerrs created a cohesive digital marketing campaign designed to build brand awareness, credibility and engagement for Infosys Equinox.',
  },
  'xiaomi-buds': {
    title: 'Product Launch Campaign for Consumer Electronics',
    description:
      'Xiaomi partnered with Makerrs, a creative agency, to craft a product launch campaign for the latest Redmi Buds 6. Makerrs crafted a unique campaign idea and a campaign film that leveraged live-action, GenAI visuals and 3D graphics to showcase the wireless earbuds’ features. Our high-impact product marketing video positioned the Redmi Buds 6 as an immersive audio experience for consumers.',
  },
  'my11circle-digital-ad-film': {
    title: 'Digital Advertising Campaign for Fantasy Sports',
    description:
      'Makerrs is a creative agency commissioned by My11Circle to create a digital advertising campaign for its fantasy sports platform. The “Never Sweat the First Game” campaign used cricket and Bollywood-inspired storytelling to promote My11Circle’s zero-loss first-game offer and drive new user trials. From creative strategy and campaign ideation to ad film production, Makerrs created an engaging advertising campaign designed to build awareness, differentiate the brand and drive new user acquisition.',
  },
  'pudingding-cafe-design-launch': {
    title: 'Brand Launch Campaign for Dessert Cafe',
    description:
      'DBS Ventures partnered with Makerrs, a creative agency, to develop the launch campaign for a new dessert and coffee cafe. The campaign combined brand strategy, social media marketing, creative content and launch videos to build brand awareness and create buzz among dessert and coffee lovers. From social media content to digital campaign videos, Makerrs created a distinctive F&B brand designed to drive engagement, customer interest and footfall.',
  },
  'l74-ciders-social-media': {
    title: 'Brand Launch Campaign for Cider Brand',
    description:
      'Wild Harvest Brewing Company partnered with Makerrs, a creative agency, to develop a brand positioning and digital launch campaign to position their L74 cider as a refreshing alternative to beer. Makerrs created the “Trip Different” campaign with a brand manifesto film and short-form social media videos designed to build awareness, showcase L74’s flavours and connect the brand with adventure-seeking consumers. The campaign combined creative strategy, brand positioning, campaign ideation, video production and social media content to differentiate L74 ciders in the competitive alcoholic beverages market.',
  },
  'xiaomi-beard-trimmer': {
    title: 'Product Launch Campaign for Beard Trimmer',
    description:
      'Xiaomi partnered with Makerrs, a creative agency, to develop a product launch campaign for the Xiaomi Beard Trimmer 2C. Makerrs created a 60-second digital ad film set in a cricket dressing room to showcase the trimmer’s grooming and styling capabilities in an engaging plot. The campaign combined creative strategy, product storytelling and end-to-end film production to launch the consumer electronic product and build awareness among style-conscious Indian male consumers.',
  },
  'employee-wellbeing-ai-experience': {
    title: 'AI-Powered Employee Engagement Campaign',
    description:
      'A Fortune 500 company partnered with Makerrs, a creative agency, to create an AI-powered employee engagement campaign for its organisation-wide wellness program. Makerrs developed a hyper-personalized digital experience that used an AI image generator to turn employees’ aspirations into personalized visuals, making the wellness initiative more relevant and engaging. The campaign combined creative strategy, digital experience design, prompt engineering and a personalized AI image generation engine to drive employee engagement and transform an internal communications campaign into an interactive employee experience.',
  },
  'xiaomi-buds-5c': {
    title: 'Product Launch Campaign for Redmi Buds 5C',
    description:
      'Xiaomi partnered with Makerrs, a creative agency, to create a product launch campaign for the Redmi Buds 5C wireless earbuds. Makerrs developed a high-energy digital ad film that showcased the earbuds’ noise cancellation by taking users from busy, noisy environments into their own immersive worlds of music. The campaign combined creative strategy, product storytelling, film production and multiple digital adapts to highlight key product features and everyday use cases.',
  },
  'zivame-lingerie': {
    title: 'Digital Campaign Videos for Inclusive Lingerie',
    description:
      'Zivame partnered with Makerrs, a creative agency, to create a digital campaign promoting its range of inclusive lingerie and innerwear designed for diverse women’s needs. Makerrs developed a series of short product videos highlighting adaptive innerwear, posture correction bras and anti-microbial innerwear through relatable and engaging storytelling. The campaign combined creative strategy, product marketing, video production and digital content to showcase Zivame’s inclusive product range and connect with women across different lifestyles and needs.',
  },
  'metro-wholesale-5-star-quality': {
    title: 'METRO Wholesale India TVC Campaign',
    description:
      'METRO Wholesale India partnered with Makerrs to create a TVC campaign showcasing 5-star quality products at attractive wholesale prices for kirana owners, hotel, restaurant and cafe businesses, and small and medium enterprises. The campaign featured actor Namit Das across four advertising films, using a sharp and relatable creative approach to challenge perceptions around quality and value in B2B wholesale. Shot inside a live METRO Wholesale store and adapted into eight regional languages, the campaign combined creative strategy, advertising film, TV campaign, video production and B2B brand communication to position METRO Wholesale as a trusted one-stop shop for high-quality products at competitive wholesale prices.',
  },
  'vymo-lead-management': {
    title: 'Explainer Video for Lead Management Software Solution',
    description:
      'Vymo partnered with Makerrs to create a dynamic marketing video showcasing its lead management solution for financial services. The explainer video demonstrates how Vymo helps financial institutions track, nurture and convert leads more efficiently. Makerrs developed the script and visual approach, combining contextual storytelling, seamless transitions, custom graphics and efficient video production to communicate the SaaS product’s value clearly. Produced in Bangalore with a global audience in mind, the campaign brings together creative strategy, product storytelling and scripting and explainer video production for B2B SaaS marketing.',
  },
  'xiaomi-pocket-power-bank': {
    title: 'Product Launch Film for Xiaomi Pocket Power Bank',
    description:
      'Xiaomi partnered with Makerrs to create a playful product launch film for the Xiaomi Pocket Power Bank, showcasing its compact, pocket-sized design and fast-charging capability. Inspired by a Western-style face-off, the 60-second advertising film turns a simple battery challenge into an engaging product story. Makerrs developed the creative concept, advertising film and digital campaign content, with multiple video cuts created to highlight specific product features and benefits across different audiences and digital platforms.',
  },
  'ai-powered-singalong': {
    title: 'AI-Powered Employee Engagement Campaign',
    description:
      'Makerrs created an AI-powered employee engagement campaign for a Fortune 500 company, bringing together a global workforce through a personalized Singalong music video. The campaign combined AI face-swap technology, global video production, an interactive website and hyper-personalized content to turn employees into the stars of their own videos. Employees could upload a selfie through a dedicated microsite and generate a personalized version of the Singalong video to download and share - generating over a million impressions and engaging thousands of employees worldwide.',
  },
  'metro-wholesale-one-more': {
    title: 'TVC Campaign for Metro Wholesale Anniversary',
    description:
      'METRO Wholesale India partnered with Makerrs to create the “One More” advertising campaign for its 17th anniversary sale, offering surprisingly low prices to B2B customers including kirana retailers, small and medium businesses, and restaurateurs. The TV campaign used humour, disbelief and irresistible appeal of a great deal to showcase METRO Wholesale’s anniversary offers and drive excitement among its business customers in India. The campaign combined creative strategy, advertising films, TV campaign content and retail marketing to communicate compelling wholesale deals in a relatable and engaging way.',
  },
  'swiggy-winter-jackets': {
    title: 'Digital Ad Campaign for Swiggy Delivery Partners',
    description:
      'Swiggy partnered with Makerrs to launch the “Swiggy Wali Jacket” campaign, promoting its winter jackets designed to keep Delivery Partners warm, comfortable and visible during North India’s harsh winters. The campaign featured three 30-second advertising films built around memorable characters, each highlighting a key product benefit including warmth, practical storage and affordability. Created for Swiggy’s Delivery Partner app, the digital campaign combined creative storytelling, product-focused advertising and snackable video content to drive awareness and jacket purchases among Delivery Partners.',
  },
  'vymo-insurance-wholesale': {
    title: 'Explainer Video for SaaS Enterprise',
    description:
      'Vymo partnered with Makerrs to create a marketing video showcasing how its sales engagement platform helps insurance wholesalers in the USA manage relationships, track leads and drive field sales more effectively. Produced in Bangalore, India, with a global audience in mind, the campaign explainer video uses industry-relevant personas, contextual storytelling, seamless visuals and custom graphics to demonstrate Vymo’s impact on insurance sales engagement.',
  },
  'aakash-360-campaign': {
    title: '360° Campaign for Scholarship Admissions Campaign',
    description:
      'Aakash partnered with Makerrs to create the “Kaash Nahi, Aakash” 360° campaign for iACST, Aakash’s scholarship and admission test, connecting with students and parents preparing for NEET and JEE. Built around the emotional insight behind the Hindi expression “Kaash” (“I wish”), the national campaign transformed aspirations and uncertainties into a memorable brand idea that positioned Aakash as the answer to students’ academic ambitions. Makerrs developed six primary films that expanded into 126+ video assets across languages, formats, durations and platforms, alongside print and digital campaign materials to help drive Aakash’s admissions communication across India.',
  },

  // Video work
  'thought-leadership-vymo-gordon-ritter': {
    title: 'Thought Leadership for Enterprise Software',
    description:
      'Makerrs is a video production agency that partnered with Vymo to create a thought leadership video featuring Gordon Ritter of Emergence Capital on the future of SaaS and enterprise software. This corporate video combines an expert interview, strategic storytelling and engaging visuals to explore the changing software landscape and emerging technology trends. The project showcases Makerrs’ expertise in thought leadership video production, corporate video production and B2B video content, helping AI and technology companies communicate complex ideas, build credibility and engage business audiences.',
  },
  'fashion-taneira-sanganeri': {
    title: 'Short Documentary for a Fashion Brand',
    description:
      'Makerrs is a video production agency that partnered with Taneira to create a documentary film showcasing the story of Sanganeri block printing and the artisans who preserve this traditional craft. The fashion documentary explores the history, techniques and cultural heritage of Sanganeri textiles, from block carving and dye preparation to hand printing and finishing. Through documentary storytelling, fashion video production and brand storytelling, the film brings Taneira’s work with artisans, sustainable practices and contemporary textile design to life, connecting India’s rich craft heritage with a modern fashion brand.',
  },
  'tata-inclusion-auto-comp': {
    title: 'Employer Branding for Automotive Manufacturing',
    description:
      'Makerrs is an employer branding agency and video production agency that partnered with TATA AutoComp to create an employer branding video focused on diversity and inclusion in the automotive manufacturing industry. Through authentic employee stories and corporate storytelling, the film highlights the experiences of women building careers in automotive manufacturing and the importance of creating inclusive workplaces. The project showcases Makerrs’ expertise in employer branding videos, employee storytelling, diversity and inclusion communications, and corporate video production for automotive and manufacturing brands.',
  },
  '3d-product-reveal-video-exicom': {
    title: '3D Product Video for EV Charging',
    description:
      'Makerrs is a video production agency that partnered with Exicom to create a 3D product reveal video for the launch of its Harmony Gen 2 DC fast charger. The product launch video uses premium 3D product animation, product visualization, motion graphics and visual storytelling to build anticipation and showcase the charger’s design, features and technology. Using a teaser-led reveal, dynamic lighting, camera movement, on-screen graphics and music, we created a high-impact 30-second marketing video designed to capture attention and build excitement among fleet operators, automotive companies and other EV industry decision-makers.',
  },
  'case-study-videos-infosys-wsj': {
    title: 'Global B2B Customer Case Study Videos',
    description:
      'Makerrs is a global video production agency that partnered with Infosys to create case study videos featuring real stories of digital transformation across industries and markets. The testimonial videos combined interviews, cinematic B-roll, motion graphics and branded storytelling to communicate complex technology solutions and business outcomes to a global audience. With a global network of video production crews across the US, Asia and Australia, we managed creative direction, production and post-production to deliver consistent, high-quality corporate videos at scale. The project produced 25 case study videos with an average 14-day turnaround, helping Infosys build brand credibility, engage business leaders and amplify its transformation stories across digital channels.',
  },
}

/** "1078232265/a073385a89" (unlisted, with privacy hash) or "1042873090". */
const VIMEO_ID = /^(\d+)(?:\/([0-9a-f]+))?$/

const plainText = value =>
  String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const absoluteUrl = src => {
  if (typeof src !== 'string' || !src) return null
  if (/^https?:\/\//.test(src)) return src
  return src.startsWith('/') ? `${SITE_URL}${src}` : null
}

const toIsoDuration = seconds => `PT${Math.floor(seconds / 60)}M${seconds % 60}S`

// Videos added in WordPress after the vimeo-meta.json snapshot are looked up
// live. Any failure just leaves that one video out of the schema — it must
// never fail the page.
const fetchVimeoMeta = async vimeoId => {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${vimeoId}`)}`,
      { signal: AbortSignal.timeout(5000) }
    )
    if (!res.ok) return null
    const { duration, upload_date, thumbnail_url } = await res.json()
    return { duration, uploadDate: upload_date?.slice(0, 10), thumbnailUrl: thumbnail_url }
  } catch {
    return null
  }
}

/**
 * Returns a JSON-LD @graph of VideoObjects for a case study, or null when the
 * page has no Vimeo videos. Never throws, and never returns `undefined` values
 * (getStaticProps cannot serialise them).
 */
export const buildVideoSchema = async ({ slug, create, work }) => {
  try {
    let workJson
    try {
      workJson = JSON.parse(work?.workDetails?.workJson || '{}')
    } catch {
      return null
    }
    // CommercialSection only renders the video gallery for this type.
    if (workJson?.commercials_type !== 'video' || !Array.isArray(workJson.sources)) {
      return null
    }

    // VideoGallery swaps SLB's Vimeo player for an interactive iframe, so that
    // Vimeo id never appears on the page.
    const sources = workJson.sources.filter(
      source => source?.company !== 'SLB' && VIMEO_ID.test(source?.vimeoId ?? '')
    )
    if (!sources.length) return null

    const pageUrl = `${SITE_URL}/work/${create}/${slug}`
    const brief = CASE_STUDIES[slug]
    const title = brief?.title ?? plainText(work?.title)
    const description =
      brief?.description ??
      (plainText(work?.workDetails?.seoDesc) || `${title} — a video by Makerrs.`)

    const videos = await Promise.all(
      sources.map(async (source, index) => {
        const [, id, hash] = source.vimeoId.match(VIMEO_ID)
        const meta = VIMEO_META[id] ?? (await fetchVimeoMeta(source.vimeoId))
        const thumbnailUrl = absoluteUrl(source.thumbnail?.src) ?? absoluteUrl(meta?.thumbnailUrl)

        // uploadDate and thumbnailUrl are required by Google; without them the
        // node would be flagged invalid, so leave the video out instead.
        if (!meta?.uploadDate || !thumbnailUrl || !title) return null

        const sourceName = plainText(source.name)
        return {
          '@type': 'VideoObject',
          '@id': `${pageUrl}#video-${index + 1}`,
          name: sources.length > 1 && sourceName ? `${title} – ${sourceName}` : title,
          description,
          thumbnailUrl,
          uploadDate: meta.uploadDate,
          ...(Number.isInteger(meta.duration) && meta.duration > 0
            ? { duration: toIsoDuration(meta.duration) }
            : {}),
          embedUrl: `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}` : ''}`,
          creator: { '@id': ORG_ID },
          publisher: { '@id': ORG_ID },
          inLanguage: 'en',
        }
      })
    )

    const graph = videos.filter(Boolean)
    return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null
  } catch (err) {
    console.warn(`buildVideoSchema: skipped video schema for "${slug}"`, err?.message ?? err)
    return null
  }
}
