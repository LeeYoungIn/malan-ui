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

// import createMiddleware from 'next-intl/middleware'
// import { NextResponse } from 'next/server'
//
// import { auth } from '@/libs/auth'
// import { routing } from './i18n/routing'
//
// const intlMiddleware = createMiddleware(routing)
// const publicPaths = ['/signin']
// const PUBLIC_PATH = RegExp(
//   `^(/(${routing.locales.join('|')}))?(${publicPaths.join('|')})$`,
//   'i')
//
// export default auth(req => {
//   if (PUBLIC_PATH.test(req.nextUrl.pathname) || req.auth) return intlMiddleware(req)
//   else return NextResponse.redirect(new URL(`/signin?callbackUrl=${req.nextUrl.pathname}`, req.url))
// })
//
// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico|images|site.webmanifest|manifest.json).*)',
//     '/:locale((?!api|_next|static|favicon.ico|images|site.webmanifest|manifest.json).*)',
//     '/:locale/(public|protected)/:path*'
//   ],
//   unstable_allowDynamic: [
//     '**/node_modules/lodash*/**/*.js'
//   ]
// }