import join from 'lodash/join'
import createMiddleware from 'next-intl/middleware'
import { locales } from '@/navigation'

export default createMiddleware({
  locales,
  defaultLocale: locales[0]
})

export const config = {
  matcher: ['/', `/(${join(locales, '|')})/:path*`]
}