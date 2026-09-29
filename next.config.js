const { WP_IMAGE_HOSTS } = require('./src/utils/wpImageHosts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static generation defaulted to 15 parallel workers, and each case study page
  // fires its own WordPress GraphQL query. That burst was enough to take the WP
  // server down mid-build (measured: healthy 10/10 immediately before a build,
  // dead 0/6 immediately after), which then failed the build. Throttle the fan-out
  // so the CMS survives it — builds are slower but they finish.
  experimental: {
    cpus: 2,
  },

  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:file(.*\\.mp4)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/:file(.*\\.webp)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:file(.*\\.avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  turbopack: {},

  webpack: (config, options) => {
    const { isServer } = options

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      layers: true,
    }

    // 🔑 FIX: DO NOT use 'auto' in browser builds
    if (!isServer) {
      config.output.publicPath = '/_next/'
    }

    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: 'rbGroup',
    //     remotes: {
    //       rbIndia: `rbIndia@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    //       rbGlobal: `rbGlobal@${process.env.NEXT_PUBLIC_HOST_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    //     },
    //     filename: 'static/chunks/remoteEntry.js',
    //     extraOptions: {
    //       exposePages: true,
    //     },
    //     shared: {
    //       tailwindcss: { singleton: true, eager: true },
    //       postcss: { singleton: true, eager: true },
    //       autoprefixer: { singleton: true, eager: true },
    //     },
    //   })
    // )

    return config
  },

  images: {
    // WordPress images are converted to WebP by the optimizer; the host list is
    // shared with src/utils/wpImage.js so both always agree.
    remotePatterns: [
      ...WP_IMAGE_HOSTS.map((hostname) => ({ protocol: 'https', hostname })),
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
    ],
    // 90 is WP_IMAGE_QUALITY (near-lossless for WordPress images); 75 is the default.
    qualities: [75, 90],
    // A re-uploaded WordPress image gets a new URL, so each converted size is
    // kept for a year instead of being re-encoded every 4 hours (the default).
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig
