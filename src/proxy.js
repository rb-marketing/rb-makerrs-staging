import { NextResponse } from 'next/server'
import REDIRECTS from './redirects.json'

export function proxy(request) {
  const { pathname } = request.nextUrl

  if (/\/img\/.+\.(png|jpe?g)$/i.test(pathname)) {
    const accept = request.headers.get('accept') || ''
    if (accept.includes('image/webp')) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.replace(/\.(png|jpe?g)$/i, '.webp')
      return NextResponse.rewrite(url)
    }
  }

  if (REDIRECTS[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = REDIRECTS[pathname]
    return NextResponse.redirect(url, 301)
  }

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

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
