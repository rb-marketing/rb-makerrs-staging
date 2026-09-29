import { isWpImage, pickLargestSource, wpImageProps } from '@/utils/wpImage'

/**
 * Drop-in for <img> that serves WordPress images as WebP through the Next.js
 * image optimizer, using the same URLs <Image> generates. The element, classes
 * and styles stay exactly as the caller wrote them, so existing layouts are
 * unaffected. Anything that isn't a WordPress JPG/PNG (local files, Vimeo
 * thumbnails, SVGs) renders untouched.
 *
 * `wpSizes` is the rendered width hint for the optimized srcset (like <Image
 * sizes>). It only applies to WordPress images, so a local image's own
 * srcSet/sizes keep behaving exactly as before.
 */
export const WpImg = ({ src, srcSet, sizes, wpSizes, width, height, ...rest }) => {
  const source = pickLargestSource(src, srcSet)

  if (!isWpImage(source)) {
    return <img src={src} srcSet={srcSet || undefined} sizes={sizes} width={width} height={height} {...rest} />
  }

  const optimized = wpImageProps({ src: source, width, height, sizes: sizes || wpSizes })
  return (
    <img
      decoding="async"
      {...rest}
      width={width}
      height={height}
      src={optimized.src}
      srcSet={optimized.srcSet}
      sizes={optimized.sizes}
    />
  )
}
