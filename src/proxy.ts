import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import REDIRECTS from './redirects.json'

/**
 * Static redirect map
 * key = OLD path
 * value = NEW path
 */

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  /**
   * 0️⃣ WEBP AUTO-SERVE — rewrite PNG/JPG requests to .webp for supporting browsers.
   *    All /public/img/ images have pre-generated .webp counterparts.
   */
  if (/\/img\/.+\.(png|jpe?g)$/i.test(pathname)) {
    const accept = request.headers.get('accept') || ''
    if (accept.includes('image/webp')) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.replace(/\.(png|jpe?g)$/i, '.webp')
      return NextResponse.rewrite(url)
    }
  }

  /**
   * 1️⃣ GLOBAL REDIRECT LOGIC (ALL PATHS)
   */
  if (REDIRECTS[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = REDIRECTS[pathname]

    return NextResponse.redirect(url, 301)
  }

  /**
   * 2️⃣ WORK PAGE COOKIE LOGIC (ONLY /work/*)
   */
  if (pathname.startsWith('/work')) {
    let country =
      request.headers.get('cloudfront-viewer-country') ||
      request.headers.get('CloudFront-Viewer-Country')

    if (!country && process.env.NODE_ENV === 'development') {
      country = 'IN'
    }

    if (!country) {
      country = 'UNKNOWN'
    }

    const response = NextResponse.next()

    response.cookies.set('user-country', country, {
      path: '/',
      sameSite: 'lax',
    })

    return response
  }

  /**
   * 3️⃣ DEFAULT
   */
  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
