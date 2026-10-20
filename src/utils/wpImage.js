import { getImageProps } from 'next/image'
import { WP_IMAGE_HOSTS } from './wpImageHosts'

// WordPress originals stay JPG/PNG; the site shows them as WebP through the
// Next.js image optimizer. 90 keeps them visually identical to the original
// (the default 75 visibly softens text-heavy banners). Must be listed in
// images.qualities in next.config.js.
export const WP_IMAGE_QUALITY = 90

// WebP is deliberately absent: WordPress's Apache serves .webp with no
// Content-Type header, and Amplify's image optimizer rejects such sources
// ("400 Unsupported image format") — every WP WebP on the site broke. They are
// already WebP, so they load directly from WordPress instead.
const RASTER = /\.(jpe?g|png)$/i

const wpUrl = (src) => {
  if (typeof src !== 'string' || !src) return null
  try {
    const url = new URL(src)
    return url.protocol === 'https:' && WP_IMAGE_HOSTS.includes(url.hostname) ? url : null
  } catch {
    return null
  }
}

/** True for a WordPress-hosted JPG/PNG the optimizer is allowed to fetch. */
export const isWpImage = (src) => {
  const url = wpUrl(src)
  return !!url && RASTER.test(url.pathname)
}

/** True for a WordPress WebP, which <Image> must render `unoptimized` (see RASTER). */
export const isWpWebp = (src) => {
  const url = wpUrl(src)
  return !!url && /\.webp$/i.test(url.pathname)
}

/**
 * WordPress often hands over a downscaled variant (…-1024x683.jpg) as `src`
 * with the full-size file only in `srcset`. Optimize from the largest
 * candidate so high-DPI screens don't get an upscaled small variant.
 */
export const pickLargestSource = (src, srcSet) => {
  let best = src
  let bestWidth = 0
  for (const candidate of (srcSet || '').split(',')) {
    const [url, descriptor] = candidate.trim().split(/\s+/)
    const width = parseInt(descriptor, 10)
    if (url && descriptor?.endsWith('w') && width > bestWidth) {
      best = url
      bestWidth = width
    }
  }
  return best
}

/**
 * The src / srcSet / sizes that <Image> would render for a WordPress image,
 * for places that can't use the component (plain <img> layouts, WordPress HTML).
 * With known dimensions it yields a 1x/2x srcset at that width; otherwise a
 * responsive srcset described by `sizes`. The optimizer never upscales, so a
 * small original is served at its own size.
 */
export const wpImageProps = ({ src, width, height, sizes }) => {
  const w = parseInt(width, 10)
  const h = parseInt(height, 10)
  const dims = w > 0 && h > 0 && !sizes ? { width: w, height: h } : { fill: true, sizes: sizes || (w > 0 ? `(max-width: ${w}px) 100vw, ${w}px` : '100vw') }
  const { props } = getImageProps({ src, alt: '', quality: WP_IMAGE_QUALITY, ...dims })
  return { src: props.src, srcSet: props.srcSet, sizes: props.sizes }
}

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
const decodeAttr = (value) => value?.replace(/&amp;/g, '&').replace(/&#038;/g, '&')

const getAttr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'))
  return match ? decodeAttr(match[2] ?? match[3]) : undefined
}

const setAttr = (tag, name, value) => {
  const pattern = new RegExp(`\\s${name}\\s*=\\s*("[^"]*"|'[^']*')`, 'i')
  if (value == null) return tag.replace(pattern, '')
  const attr = ` ${name}="${escapeAttr(value)}"`
  return pattern.test(tag) ? tag.replace(pattern, attr) : tag.replace(/^<img\b/i, `<img${attr}`)
}

/**
 * Rewrites every WordPress <img> in a block of post/case-study HTML to load
 * through the optimizer. Only src/srcset/sizes change — classes, width/height
 * and inline styles are untouched, so the layout is exactly as before.
 * Deterministic, so it's safe on both server and client render.
 */
export const optimizeWpHtml = (html) => {
  if (!html || typeof html !== 'string') return html
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const source = pickLargestSource(getAttr(tag, 'src'), getAttr(tag, 'srcset'))
    if (!isWpImage(source)) return tag
    const optimized = wpImageProps({
      src: source,
      width: getAttr(tag, 'width'),
      height: getAttr(tag, 'height'),
      sizes: getAttr(tag, 'sizes'),
    })
    let out = setAttr(tag, 'src', optimized.src)
    out = setAttr(out, 'srcset', optimized.srcSet)
    out = setAttr(out, 'sizes', optimized.sizes)
    return out
  })
}
