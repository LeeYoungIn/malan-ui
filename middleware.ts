import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { localePrefix, locales } from '@/navigation'

const PUBLIC_PAGES = ['/', 'api', '_next/static', '_next/image', 'favicon.ico', 'logo`.svg', 'next.svg', 'vercel.svg']

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ko'
})

export default async function middleware(req: NextRequest) {
  const PUBLIC_FILE = RegExp(
    `^(/(${locales.join('|')}))?(${PUBLIC_PAGES.join('|')})?/?$`,
    'i'
  )

  const intlResponse = intlMiddleware(req)
  if (PUBLIC_FILE.test(req.nextUrl.pathname))
    return intlResponse
}

export const config = {
  matcher: [
    `/(${locales.join('|')})/:path*`,
    `/((?!${PUBLIC_PAGES.join('|')}).*)`
  ]
}