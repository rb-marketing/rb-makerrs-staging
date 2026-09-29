// Hosts whose images are served through the Next.js image optimizer (WebP).
// CommonJS so next.config.js can require the same list the components use —
// the optimizer rejects any host missing from images.remotePatterns, so the two
// must never drift apart.
//
// NEXT_PUBLIC_WORDPRESS is the GraphQL endpoint of whichever WordPress this
// environment talks to (local, dev, staging, production); its host is added so
// a new environment works without touching this file.
const KNOWN_WP_IMAGE_HOSTS = ['blogs.makerrs.com', 'staging.blogs.makerrs.com']

const envHost = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_WORDPRESS).hostname
  } catch {
    return null
  }
})()

const WP_IMAGE_HOSTS = [...new Set([...KNOWN_WP_IMAGE_HOSTS, envHost].filter(Boolean))]

module.exports = { WP_IMAGE_HOSTS }
