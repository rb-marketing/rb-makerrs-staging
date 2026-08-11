// Generated from "Case Studies Visibility - Sheet1 (1).csv" (2026-08-10) + Slack follow-ups from Aaisha Singhal (AbisPro/Thelagram/Multiplier-Cobalt swap).
// Overrides WP tag membership, tab_order, and region per case study slug so the
// /work page reflects the sheet without depending on WordPress ACF edits.
//
// tabs.<tab>.region overrides the post-level `region` for that tab only — used when
// the same case study is India-only on one tab but Global-visible on another
// (e.g. REMOVE FROM GLOBAL VISIBILITY on Featured while still shown on Design).
export const workVisibilityOverrides = {
  // Transforming how Indian SMBs Hire
  'indeed-india-radhika-apte': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // 220% Organic YouTube Subscriber Growth in India
  'indeed-youtube-content': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      videos: { show: true },
    },
  },
  // Global Case Study Videos for Infosys
  'case-study-videos-infosys-wsj': {
    region: [],
    tabs: {
      featured: { show: true, order: 1 },
      videos: { show: true, order: 1 },
      campaign: { show: true, order: 3 },
    },
  },
  // Gordon Ritter on the Future of Software
  'thought-leadership-vymo-gordon-ritter': {
    region: [],
    tabs: {
      featured: { show: true, order: 2 },
      videos: { show: true, order: 2 },
    },
  },
  // Launching an AI-powered healthcare brand in record time
  'lillia-care-brand-launch': {
    region: [],
    tabs: {
      featured: { show: true, order: 3 },
      design: { show: true, order: 1 },
    },
  },
  // Never sweat the first game Campaign Films
  'my11circle-digital-ad-film': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // Campaign: When you can’t resist buying more
  'metro-wholesale-one-more': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // Sales Digitisation Campaign – Interactive Explainer
  'interactive-explainer-slb': {
    region: [],
    tabs: {
      featured: { show: true, order: 4 },
      videos: { show: true, order: 7 },
    },
  },
  // Cancer Care Non Profit Film, Romania
  'dara-explainer-video': {
    region: [],
    tabs: {
      featured: { show: true, order: 5 },
      videos: { show: true, order: 16 },
    },
  },
  // Campaign Explainer Video for HRM SAAS product
  'multiplier-explainer-video': {
    region: [],
    tabs: {
      featured: { show: true, order: 6 },
      videos: { show: true, order: 5 },
    },
  },
  // Exicom Brand Refresh: Choose Smart. Charge Smart.
  'exicom-ev-charger-rebrand': {
    region: [],
    tabs: {
      featured: { show: true, order: 7 },
      design: { show: true, order: 2 },
    },
  },
  // Global Leaders: a Hiring Campaign
  'infosys-global-employer-brand': {
    region: [],
    tabs: {
      featured: { show: true, order: 8 },
      videos: { show: true, order: 15 },
      campaign: { show: true, order: 1 },
    },
  },
  // Powering education in war-torn Ukraine, with Street Child
  'csr-video-infosys-street-child': {
    region: [],
    tabs: {
      featured: { show: true, order: 9 },
      videos: { show: true, order: 19 },
    },
  },
  // Crafting a Unified Employer Brand Across Continents
  'global-employer-branding': {
    region: [],
    tabs: {
      featured: { show: true, order: 10 },
      videos: { show: true, order: 6 },
      campaign: { show: true, order: 7 },
    },
  },
  // Immersive 3D Walkthrough for Infosys Topaz
  '3d-interactive-experience-infosys-topaz': {
    region: [],
    tabs: {
      featured: { show: true, order: 11 },
      design: { show: true, order: 5 },
      videos: { show: true, order: 12 },
    },
  },
  // Crafting a Symbol of Success in Hospitality
  'medalio-hotel-brand-identity': {
    region: [],
    tabs: {
      featured: { show: true, order: 12 },
      design: { show: true, order: 3 },
    },
  },
  // Action-packed launch film for Redmi Buds 6
  'xiaomi-buds': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // Branding and Launch Campaign for a Dessert Cafe
  'pudingding-cafe-design-launch': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // Augmented Reality that brought the automobile alive
  'bajaj-pulsar-augmented-reality': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      design: { show: true, order: 9, region: [] },
      campaign: { show: true },
    },
  },
  // Transforming relationships for SME banks in U.S.A
  'vymo-usa-banking': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      videos: { show: true },
      campaign: { show: true, order: 2, region: [] },
    },
  },
  // AI-Powered Campaign That Inspires Employees To Imagine Their Best Selves
  'employee-wellbeing-ai-experience': {
    region: ["IN"],
    tabs: {
      featured: { show: true },
      campaign: { show: true },
    },
  },
  // Social Media Campaign: Meet the AI-First Employees
  'animated-case-study-videos-infosys-employees': {
    region: [],
    tabs: {
      design: { show: true, order: 4 },
      videos: { show: true, order: 10 },
      campaign: { show: true, order: 5 },
    },
  },
  // ABIS Pro Brand Identity: Goodness. Guaranteed.
  'abis-pro-meats': {
    region: [],
    tabs: {
      design: { show: true, order: 6 },
    },
  },
  // Office Branding for Biocon’s Global Headquarters
  'biocon-office-branding': {
    region: [],
    tabs: {
      design: { show: true, order: 7 },
    },
  },
  // Branding for an Indulgent Dessert Café
  'pu-dingding-cafe': {
    region: [],
    tabs: {
      design: { show: true, order: 8 },
    },
  },
  // A Design Gallery on Sustainability
  'infosys-sustainability-gallery': {
    region: [],
    tabs: {
      design: { show: true, order: 10 },
    },
  },
  // Nationwide Activation Celebrating Customer Obsession
  'axis-bank-activation-campaign': {
    region: [],
    tabs: {
      design: { show: true, order: 11 },
    },
  },
  // Launching a Sports Brand logo with a 3D Billboard
  '3d-logo-animation-mumbai-indians': {
    region: ["IN"],
    tabs: {
      design: { show: true },
      videos: { show: true },
    },
  },
  // HIRING STEM EDUCATORS FOR INDONESIA
  'recruitment-video-colearn-education': {
    region: [],
    tabs: {
      videos: { show: true, order: 3 },
    },
  },
  // Unveiling Harmony Direct 2.0 – Electric Fleet Charger
  '3d-product-reveal-video-exicom': {
    region: [],
    tabs: {
      videos: { show: true, order: 4 },
    },
  },
  // Celebrating Rural Women in India’s Auto Manufacturing
  'tata-inclusion-auto-comp': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Launching the Cobalt Cloud Community
  'abstract-animation-video-infosys-cobalt-launch': {
    region: [],
    tabs: {
      videos: { show: true, order: 9 },
    },
  },
  // How Hansel Helps Brands Boost Conversions
  'saas-explainer-video-hansel': {
    region: [],
    tabs: {
      videos: { show: true, order: 8 },
    },
  },
  // Launching a brand that makes commerce human
  'infosys-equinox-launch-4': {
    region: [],
    tabs: {
      videos: { show: true, order: 11 },
      campaign: { show: true, order: 6 },
    },
  },
  // Celebrating Wipro’s journey and growth in Australia
  'wipro-australia-corporate-film': {
    region: [],
    tabs: {
      videos: { show: true, order: 13 },
    },
  },
  // IT Consulting firm delivers Business Agility Solution
  'stock-footage-video-infosys-business-agility': {
    region: [],
    tabs: {
      videos: { show: true, order: 14 },
    },
  },
  // Documentaries: Traditional Indian Handlooms and Weavers
  'documentary-taneira-fashion': {
    region: [],
    tabs: {
      videos: { show: true, order: 17 },
    },
  },
  // Documentaries: Indian Handcrafted Jewellery and Craftspeople
  'documentary-tanishq-jewels': {
    region: [],
    tabs: {
      videos: { show: true, order: 18 },
    },
  },
  // Anywhere chat support for Delivery Executives
  'app-walkthrough-swiggy-delivery': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Inspiring Campus Recruitment Video for a large IT Enterprise
  'recruitment-video-infosys-campus': {
    region: [],
    tabs: {
      videos: { show: true, order: 20 },
    },
  },
  // Shaanu Ka Viva – A GenAI Microdrama for Bharat
  'microdrama-shaanu-ka-viva': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // An ode to the Security Personnel who Guard our Homes
  'poetic-video-mygate': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Gen AI Ad for Single-Origin Coffee Range
  'ai-video-swiggy': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // High-energy rap music video on Tata Women’s Cricket Premiere League
  'rap-video-tata-womens-cricket-league': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Corporate Film for Aerospace Manufacturing giant in India
  'ge-aerospace-corporate-film': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Hiring for “Hotel Superhero”, hospitality SAAS
  'hiring-video-hotel-superhero': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // How a Healthtech Startup Gamified Workplace Wellness
  'employee-wellness-healthifyme-app-video': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Highlighting the impact of Dozee Beds in India’s Healthcare
  'video-report-dozee-public-health': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Koo Launches Self-Verification
  'explainer-video-koo': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // A hiring video with humor and heart
  'hiring-video-darwinbox': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Launching the Cyanotype clothing range
  'fashion-taneira-cyanotype': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Supporting young women in pursuit of a Future in STEM
  'women-in-stem-documentary': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // The Lakshmi Rebecca Show: YouTube Series on Impact Businesses
  'podcast-lakshmi-rebecca': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // A Vision for Sustainable Social Housing
  'sustainable-housing-documentary': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Building Pathways for Skilled Plumbers
  'csr-video-ashirvad': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Capturing the Story of Sanganeri Craft for Taneira
  'fashion-taneira-sanganeri': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // A Campaign film for Xiaomi Pocket Power Bank
  'xiaomi-pocket-power-bank': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
      campaign: { show: true },
    },
  },
  // #HeroesAtMyGate: Celebrating India’s Security Guards
  'mygate-rewards-recognition': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // HEALTHTECH AND INSURTECH CASE STUDY VIDEOS FOR HIMSS
  'healthcare-case-study-video-wipro': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Stories of Innovation & Impact at Texas instruments India
  'culture-videos-texas-instruments': {
    region: ["IN"],
    tabs: {
      videos: { show: true },
    },
  },
  // Digital Campaign videos for E-learning courses
  'unext-course-marketing': {
    region: [],
    tabs: {
      campaign: { show: true, order: 4 },
    },
  },
  // Campaign films: Season’s EXTRA Earnings
  'swiggy-extra-earnings': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Launch Campaign for Redmi A4 5G
  'xiaomi-a4-5g-phone': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Campaign film for Door Step Gold Loans
  'indiagold': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Trip Different with L74 Ciders
  'l74-ciders-social-media': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // A Trimmer Launch Campaign that’s as Sharp as the Product
  'xiaomi-beard-trimmer': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Launch Campaign for Redmi Buds 5C
  'xiaomi-buds-5c': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Campaign on Inclusive Lingerie
  'zivame-lingerie': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // 5 Star Quality at Wholesale Prices
  'metro-wholesale-5-star-quality': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // A Lead Management Product for Financial Services
  'vymo-lead-management': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // AI-powered Singalong Campaign that united a Global Workforce
  'ai-powered-singalong': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Campaign films: Winter Jackets
  'swiggy-winter-jackets': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Transforming Field Sales for Insurance Wholesalers in U.S.A
  'vymo-insurance-wholesale': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Turning Aspirations Into Admissions
  'aakash-360-campaign': {
    region: ["IN"],
    tabs: {
      campaign: { show: true },
    },
  },
  // Branding for a Desi Street Food Restaurant
  'thelagram-restaurant': {
    region: ["IN"],
    tabs: {
      design: { show: true },
    },
  },
}
