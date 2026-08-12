import dayjs from 'dayjs'
import {
  getReadTime
} from './readTime'
import workImageManifest from './workImageManifest.json'
import { workVisibilityOverrides } from './workOverrides'
const BLOG_DATE_FORMATE = 'MMM DD, YYYY'
const DATE_FORMATE = 'DD/MM/YYYY'
/**
 *
 * @param {*} date number(milliseconds)
 */
export const formateDate = (date) => {
  return dayjs(date).format(DATE_FORMATE)
}

/**
 *
 * @param {*} time number(seconds)
 */
export const formateDuration = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  const hours = Math.floor(time / 3600)
  let arr = []
  if (hours != 0) arr.push(hours.toString().padStart(2, '0'))
  arr.push(minutes.toString().padStart(2, '0'))
  arr.push(seconds.toString().padStart(2, '0'))
  return arr.join(':')
}

/**
 *
 * @param {image} featuredImage node from wordpress
 * @returns
 */
export const formatWpImage = (image) => ({
  alt: image?.altText ?? '',
  src: image?.sourceUrl ?? '',
  srcSet: image?.srcSet ?? '',
})

/**
 *
 * @param {works} formate work play list data
 * @returns
 */
// export const formatPlayPosts = (works = []) =>
//   works.map((w) => ({
//     title: w.title,
//     slug: w.slug,
//     categories: w?.categories?.nodes ?? [],
//     tags: w?.tags?.nodes ?? [],
//     company: w?.companies?.nodes?.length ? w?.companies?.nodes[0] : null,
//     featuredImage: formatWpImage(w?.featuredImage?.node),
// workDetails: JSON.parse(w?.workDetails?.workJson ?? "[]")
//   }))
const TAB_LABELS = {
  featured: 'Featured',
  design: 'Design',
  videos: 'Videos',
  campaign: 'Campaign',
}

// The four tabs the visibility sheet governs. Ordering within each is tiered
// so the sheet always wins: sheet-numbered entries sort by their real number,
// sheet-listed-but-blank entries sort next, and any case study the sheet
// never mentions — still appearing purely because of its own pre-existing
// WordPress tab_order — sorts last, below every sheet-covered entry.
const SHEET_TABS = ['featured', 'design', 'videos', 'campaign']
const DOC_BLANK_TIER = 100000
const WP_ONLY_TIER_BASE = 1000000

// Applies the manually-curated India/Global visibility + ordering sheet on top
// of (or in place of, if WP data is missing/malformed) the CMS-driven fields.
//
// A case study's region is normally whole-post (one `region` array), but some
// entries are India-only on one tab while still Global-visible on another
// (e.g. removed from Global Featured but kept on Global Design) — tab_order
// alone can't express that, so tabRegions carries a per-tab region override
// that the /work page filter consults ahead of the post-level `region`.
const applyVisibilityOverride = (slug, tabs, workJson) => {
  const override = workVisibilityOverrides[slug]

  let nextTabs = tabs
  const nextTabOrder = { ...workJson.tab_order }
  const nextIndiaTabOrder = {}
  const tabRegions = {}

  if (override) {
    for (const [tabKey, cfg] of Object.entries(override.tabs)) {
      const label = TAB_LABELS[tabKey]
      const hasTab = nextTabs.some(t => t.toLowerCase() === tabKey)

      if (cfg.show) {
        if (!hasTab) nextTabs = [...nextTabs, label]
        // No order given in the sheet → rank after every sheet-numbered
        // entry in this tab, not wherever a stale WP tab_order would put it.
        nextTabOrder[tabKey] = cfg.order != null ? cfg.order : DOC_BLANK_TIER
        // India ordering is independent of Global — it follows the sheet's
        // literal row sequence, not the "Order of Appearance" numbers.
        if (cfg.indiaOrder != null) nextIndiaTabOrder[tabKey] = cfg.indiaOrder
        tabRegions[tabKey] = cfg.region ?? override.region
      } else if (hasTab) {
        nextTabs = nextTabs.filter(t => t.toLowerCase() !== tabKey)
      }
    }
  }

  // Case studies the sheet never mentions for a given tab still render there
  // (untouched, per the sheet's scope) but must rank below every sheet-driven
  // entry, so push any of their own pre-existing WP tab_order into the lowest tier.
  for (const tabKey of SHEET_TABS) {
    if (override?.tabs?.[tabKey]) continue
    if (!nextTabs.some(t => t.toLowerCase() === tabKey)) continue
    if (nextTabOrder[tabKey] != null) nextTabOrder[tabKey] += WP_ONLY_TIER_BASE
  }

  return {
    tabs: nextTabs,
    workJson: {
      ...workJson,
      region: override?.region ?? workJson.region,
      tab_order: nextTabOrder,
      indiaTabOrder: nextIndiaTabOrder,
      tabRegions,
    },
  }
}

export const formatPlayPosts = (works = []) =>
  works.map((w, index) => {

    let workJson = {}

    try {
      workJson = JSON.parse(w?.workDetails?.workJson || "{}")
    } catch (e) {
      workJson = {}
    }

    const rawTabs = w?.tags?.nodes?.map(tag => tag.name) || []
    const { tabs, workJson: finalWorkJson } = applyVisibilityOverride(w.slug, rawTabs, workJson)

    // Local manifest images are pre-compressed WebP; the WordPress fallback is a
    // full-size original served as-is (<Image> runs unoptimized here because
    // /_next/image isn't available on Netlify). Callers use isLocalImage to avoid
    // preloading the heavy remote fallback — see work.jsx.
    const localImage = workImageManifest[w.slug]

    return {
      key: index,
      name: w.title || "",
      company: w?.companies?.nodes?.length ? w?.companies?.nodes[0].name : null,
      image: localImage || w?.featuredImage?.node?.sourceUrl || "",
      isLocalImage: Boolean(localImage),
      alt: w?.featuredImage?.alt || w.title || "",
      tabs,
      tags: w?.categories?.nodes?.map(cat => cat.name) || [],
      case_study_title: w.slug,
      workDetails: finalWorkJson,
      logo: w?.workDetails?.logo?.sourceUrl || "",
      banner: w?.workDetails?.banner?.sourceUrl || "",
      seo_title: w?.workDetails?.seoTitle || "",
      seo_desc: w?.workDetails?.seoDesc || ""
    }
  })

export const formateBlogPostFunc = (node) => ({
  slug: node?.slug,
  title: node?.title,
  excerpt: node?.excerpt,
  date: dayjs(node?.date).format(BLOG_DATE_FORMATE),
  primaryCategory: node?.primary_category?.primaryCategory ?? null,
  secondaryCategory: node?.primary_category?.secondaryCategory ?? null,
  tertiaryCategory: node?.primary_category?.tertiaryCategory ?? null,
  featuredImage: formatWpImage(node?.featuredImage?.node),
  author: `${node?.author?.node?.firstName} ${node?.author?.node?.lastName}`,
  authorAbout: node?.author?.node?.description ?? null,
  avatar: {
    src: node?.author?.node?.avatar?.url ?? '/img/blog-thumb.jpg',
    width: node?.author?.node?.avatar?.width ?? '618',
    height: node?.author?.node?.avatar?.height ?? '315',
  },
  categories: node?.categories?.nodes ?? [],
  tags: node?.tags?.nodes ?? [],
  content: node?.content ?? null,
  readTime: node?.content ? getReadTime(node?.content) : null,
})
export const formatBlogPosts = (edges) =>
  edges.map(({
    node
  }) => formateBlogPostFunc(node))