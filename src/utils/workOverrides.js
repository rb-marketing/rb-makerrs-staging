// Generated from "Case Studies Visibility - Sheet1.csv" + "Sheet1 (1).csv" + Slack follow-ups.
// Overrides WP tag membership, tab_order, and region per case study slug so the
// /work page reflects the sheet without depending on WordPress ACF edits.
//
// tabs.<tab>.region overrides the post-level `region` for that tab only — used when
// the same case study is India-only on one tab but Global-visible on another
// (e.g. REMOVE FROM GLOBAL VISIBILITY on Featured while still shown on Design).
//
// tabs.<tab>.order drives GLOBAL ordering only (the numeric "Order of Appearance"
// column). tabs.<tab>.indiaOrder is a SEPARATE value driving INDIA ordering only —
// India sees the literal top-to-bottom row order of the original sheet, mixing
// numbered Global rows and unordered India/REMOVE rows exactly as interleaved in
// the sheet, not the Global priority order. See formate.js / work.jsx for how
// each is applied per-viewer.
export const workVisibilityOverrides = {
  // Transforming how Indian SMBs Hire
  'indeed-india-radhika-apte': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 1 },
      campaign: { show: true, indiaOrder: 1 },
    },
  },
  // 220% Organic YouTube Subscriber Growth in India
  'indeed-youtube-content': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 2 },
      videos: { show: true, indiaOrder: 2 },
    },
  },
  // Global Case Study Videos for Infosys
  'case-study-videos-infosys-wsj': {
    region: [],
    tabs: {
      featured: { show: true, order: 1, indiaOrder: 3 },
      videos: { show: true, order: 1, indiaOrder: 1 },
      campaign: { show: true, order: 3, indiaOrder: 4 },
    },
  },
  // Gordon Ritter on the Future of Software
  'thought-leadership-vymo-gordon-ritter': {
    region: [],
    tabs: {
      featured: { show: true, order: 2, indiaOrder: 15 },
      videos: { show: true, order: 2, indiaOrder: 3 },
    },
  },
  // Launching an AI-powered healthcare brand in record time
  'lillia-care-brand-launch': {
    region: [],
    tabs: {
      featured: { show: true, order: 3, indiaOrder: 8 },
      design: { show: true, order: 1, indiaOrder: 1 },
    },
  },
  // Never sweat the first game Campaign Films
  'my11circle-digital-ad-film': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 6 },
      campaign: { show: true, indiaOrder: 13 },
    },
  },
  // Campaign: When you can’t resist buying more
  'metro-wholesale-one-more': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 7 },
      campaign: { show: true, indiaOrder: 25 },
    },
  },
  // Sales Digitisation Campaign – Interactive Explainer
  'interactive-explainer-slb': {
    region: [],
    tabs: {
      featured: { show: true, order: 4, indiaOrder: 13 },
      videos: { show: true, order: 7, indiaOrder: 9 },
    },
  },
  // Cancer Care Non Profit Film, Romania
  'dara-explainer-video': {
    region: [],
    tabs: {
      featured: { show: true, order: 5, indiaOrder: 10 },
      videos: { show: true, order: 16, indiaOrder: 18 },
    },
  },
  // Campaign Explainer Video for HRM SAAS product
  'multiplier-explainer-video': {
    region: [],
    tabs: {
      featured: { show: true, order: 6, indiaOrder: 20 },
      videos: { show: true, order: 5, indiaOrder: 11 },
    },
  },
  // Exicom Brand Refresh: Choose Smart. Charge Smart.
  'exicom-ev-charger-rebrand': {
    region: [],
    tabs: {
      featured: { show: true, order: 7, indiaOrder: 14 },
      design: { show: true, order: 2, indiaOrder: 2 },
    },
  },
  // Global Leaders: a Hiring Campaign
  'infosys-global-employer-brand': {
    region: [],
    tabs: {
      featured: { show: true, order: 8, indiaOrder: 4 },
      videos: { show: true, order: 15, indiaOrder: 17 },
      campaign: { show: true, order: 1, indiaOrder: 2 },
    },
  },
  // Powering education in war-torn Ukraine, with Street Child
  'csr-video-infosys-street-child': {
    region: [],
    tabs: {
      featured: { show: true, order: 9, indiaOrder: 12 },
      videos: { show: true, order: 19, indiaOrder: 22 },
    },
  },
  // Crafting a Unified Employer Brand Across Continents
  'global-employer-branding': {
    region: [],
    tabs: {
      featured: { show: true, order: 10, indiaOrder: 19 },
      videos: { show: true, order: 6, indiaOrder: 8 },
      campaign: { show: true, order: 7, indiaOrder: 8 },
    },
  },
  // Immersive 3D Walkthrough for Infosys Topaz
  '3d-interactive-experience-infosys-topaz': {
    region: [],
    tabs: {
      featured: { show: true, order: 11, indiaOrder: 17 },
      design: { show: true, order: 5, indiaOrder: 6 },
      videos: { show: true, order: 12, indiaOrder: 14 },
    },
  },
  // Crafting a Symbol of Success in Hospitality
  'medalio-hotel-brand-identity': {
    region: [],
    tabs: {
      featured: { show: true, order: 12, indiaOrder: 11 },
      design: { show: true, order: 3, indiaOrder: 4 },
    },
  },
  // Action-packed launch film for Redmi Buds 6
  'xiaomi-buds': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 5 },
      campaign: { show: true, indiaOrder: 12 },
    },
  },
  // Branding and Launch Campaign for a Dessert Cafe
  'pudingding-cafe-design-launch': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 9 },
      campaign: { show: true, indiaOrder: 14 },
    },
  },
  // Augmented Reality that brought the automobile alive
  'bajaj-pulsar-augmented-reality': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 16 },
      design: { show: true, order: 9, indiaOrder: 5, region: [] },
      campaign: { show: true, indiaOrder: 19 },
    },
  },
  // Transforming relationships for SME banks in U.S.A
  'vymo-usa-banking': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 18 },
      videos: { show: true, indiaOrder: 35 },
      campaign: { show: true, order: 2, indiaOrder: 3, region: [] },
    },
  },
  // AI-Powered Campaign That Inspires Employees To Imagine Their Best Selves
  'employee-wellbeing-ai-experience': {
    region: ["IN"],
    tabs: {
      featured: { show: true, indiaOrder: 21 },
      campaign: { show: true, indiaOrder: 17 },
    },
  },
  // Social Media Campaign: Meet the AI-First Employees
  'animated-case-study-videos-infosys-employees': {
    region: [],
    tabs: {
      design: { show: true, order: 4, indiaOrder: 8 },
      videos: { show: true, order: 10, indiaOrder: 12 },
      campaign: { show: true, order: 5, indiaOrder: 6 },
    },
  },
  // ABIS Pro Brand Identity: Goodness. Guaranteed.
  'abis-pro-meats': {
    region: [],
    tabs: {
      design: { show: true, order: 6, indiaOrder: 12 },
    },
  },
  // Office Branding for Biocon’s Global Headquarters
  'biocon-office-branding': {
    region: [],
    tabs: {
      design: { show: true, order: 7, indiaOrder: 11 },
    },
  },
  // Branding for an Indulgent Dessert Café
  'pu-dingding-cafe': {
    region: [],
    tabs: {
      design: { show: true, order: 8, indiaOrder: 3 },
    },
  },
  // A Design Gallery on Sustainability
  'infosys-sustainability-gallery': {
    region: [],
    tabs: {
      design: { show: true, order: 10, indiaOrder: 10 },
    },
  },
  // Nationwide Activation Celebrating Customer Obsession
  'axis-bank-activation-campaign': {
    region: [],
    tabs: {
      design: { show: true, order: 11, indiaOrder: 7 },
    },
  },
  // Launching a Sports Brand logo with a 3D Billboard
  '3d-logo-animation-mumbai-indians': {
    region: ["IN"],
    tabs: {
      design: { show: true, indiaOrder: 9 },
      videos: { show: true, indiaOrder: 41 },
    },
  },
  // HIRING STEM EDUCATORS FOR INDONESIA
  'recruitment-video-colearn-education': {
    region: [],
    tabs: {
      videos: { show: true, order: 3, indiaOrder: 4 },
    },
  },
  // Unveiling Harmony Direct 2.0 – Electric Fleet Charger
  '3d-product-reveal-video-exicom': {
    region: [],
    tabs: {
      videos: { show: true, order: 4, indiaOrder: 5 },
    },
  },
  // Celebrating Rural Women in India’s Auto Manufacturing
  'tata-inclusion-auto-comp': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 6 },
    },
  },
  // Launching the Cobalt Cloud Community
  'abstract-animation-video-infosys-cobalt-launch': {
    region: [],
    tabs: {
      videos: { show: true, order: 9, indiaOrder: 7 },
    },
  },
  // How Hansel Helps Brands Boost Conversions
  'saas-explainer-video-hansel': {
    region: [],
    tabs: {
      videos: { show: true, order: 8, indiaOrder: 10 },
    },
  },
  // Launching a brand that makes commerce human
  'infosys-equinox-launch-4': {
    region: [],
    tabs: {
      videos: { show: true, order: 11, indiaOrder: 13 },
      campaign: { show: true, order: 6, indiaOrder: 11 },
    },
  },
  // Celebrating Wipro’s journey and growth in Australia
  'wipro-australia-corporate-film': {
    region: [],
    tabs: {
      videos: { show: true, order: 13, indiaOrder: 15 },
    },
  },
  // IT Consulting firm delivers Business Agility Solution
  'stock-footage-video-infosys-business-agility': {
    region: [],
    tabs: {
      videos: { show: true, order: 14, indiaOrder: 16 },
    },
  },
  // Documentaries: Traditional Indian Handlooms and Weavers
  'documentary-taneira-fashion': {
    region: [],
    tabs: {
      videos: { show: true, order: 17, indiaOrder: 19 },
    },
  },
  // Documentaries: Indian Handcrafted Jewellery and Craftspeople
  'documentary-tanishq-jewels': {
    region: [],
    tabs: {
      videos: { show: true, order: 18, indiaOrder: 20 },
    },
  },
  // Anywhere chat support for Delivery Executives
  'app-walkthrough-swiggy-delivery': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 21 },
    },
  },
  // Inspiring Campus Recruitment Video for a large IT Enterprise
  'recruitment-video-infosys-campus': {
    region: [],
    tabs: {
      videos: { show: true, order: 20, indiaOrder: 23 },
    },
  },
  // Shaanu Ka Viva – A GenAI Microdrama for Bharat
  'microdrama-shaanu-ka-viva': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 24 },
    },
  },
  // An ode to the Security Personnel who Guard our Homes
  'poetic-video-mygate': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 25 },
    },
  },
  // Gen AI Ad for Single-Origin Coffee Range
  'ai-video-swiggy': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 26 },
    },
  },
  // High-energy rap music video on Tata Women’s Cricket Premiere League
  'rap-video-tata-womens-cricket-league': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 27 },
    },
  },
  // Corporate Film for Aerospace Manufacturing giant in India
  'ge-aerospace-corporate-film': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 28 },
    },
  },
  // Hiring for “Hotel Superhero”, hospitality SAAS
  'hiring-video-hotel-superhero': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 29 },
    },
  },
  // How a Healthtech Startup Gamified Workplace Wellness
  'employee-wellness-healthifyme-app-video': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 30 },
    },
  },
  // Highlighting the impact of Dozee Beds in India’s Healthcare
  'video-report-dozee-public-health': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 31 },
    },
  },
  // Koo Launches Self-Verification
  'explainer-video-koo': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 32 },
    },
  },
  // A hiring video with humor and heart
  'hiring-video-darwinbox': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 33 },
    },
  },
  // Launching the Cyanotype clothing range
  'fashion-taneira-cyanotype': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 34 },
    },
  },
  // Supporting young women in pursuit of a Future in STEM
  'women-in-stem-documentary': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 36 },
    },
  },
  // The Lakshmi Rebecca Show: YouTube Series on Impact Businesses
  'podcast-lakshmi-rebecca': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 37 },
    },
  },
  // A Vision for Sustainable Social Housing
  'sustainable-housing-documentary': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 38 },
    },
  },
  // Building Pathways for Skilled Plumbers
  'csr-video-ashirvad': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 39 },
    },
  },
  // Capturing the Story of Sanganeri Craft for Taneira
  'fashion-taneira-sanganeri': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 40 },
    },
  },
  // A Campaign film for Xiaomi Pocket Power Bank
  'xiaomi-pocket-power-bank': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 42 },
      campaign: { show: true, indiaOrder: 23 },
    },
  },
  // #HeroesAtMyGate: Celebrating India’s Security Guards
  'mygate-rewards-recognition': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 43 },
    },
  },
  // HEALTHTECH AND INSURTECH CASE STUDY VIDEOS FOR HIMSS
  'healthcare-case-study-video-wipro': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 44 },
    },
  },
  // Stories of Innovation & Impact at Texas instruments India
  'culture-videos-texas-instruments': {
    region: ["IN"],
    tabs: {
      videos: { show: true, indiaOrder: 45 },
    },
  },
  // Digital Campaign videos for E-learning courses
  'unext-course-marketing': {
    region: [],
    tabs: {
      campaign: { show: true, order: 4, indiaOrder: 5 },
    },
  },
  // Campaign films: Season’s EXTRA Earnings
  'swiggy-extra-earnings': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 7 },
    },
  },
  // Launch Campaign for Redmi A4 5G
  'xiaomi-a4-5g-phone': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 9 },
    },
  },
  // Campaign film for Door Step Gold Loans
  'indiagold': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 10 },
    },
  },
  // Trip Different with L74 Ciders
  'l74-ciders-social-media': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 15 },
    },
  },
  // A Trimmer Launch Campaign that’s as Sharp as the Product
  'xiaomi-beard-trimmer': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 16 },
    },
  },
  // Launch Campaign for Redmi Buds 5C
  'xiaomi-buds-5c': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 18 },
    },
  },
  // Campaign on Inclusive Lingerie
  'zivame-lingerie': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 20 },
    },
  },
  // 5 Star Quality at Wholesale Prices
  'metro-wholesale-5-star-quality': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 21 },
    },
  },
  // A Lead Management Product for Financial Services
  'vymo-lead-management': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 22 },
    },
  },
  // AI-powered Singalong Campaign that united a Global Workforce
  'ai-powered-singalong': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 24 },
    },
  },
  // Campaign films: Winter Jackets
  'swiggy-winter-jackets': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 26 },
    },
  },
  // Transforming Field Sales for Insurance Wholesalers in U.S.A
  'vymo-insurance-wholesale': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 27 },
    },
  },
  // Turning Aspirations Into Admissions
  'aakash-360-campaign': {
    region: ["IN"],
    tabs: {
      campaign: { show: true, indiaOrder: 28 },
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
