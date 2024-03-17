import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales } from '@/navigation'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()
  return {
    timeZone: 'Asia/Seoul',
    messages: await getMessages(locale)
  }
})

export const getMessages = async (locale: any) => ({
  ...(await import (`./messages/${locale}.json`)).default
  // ...(await import(`./messages/${locale}.ts`)).default
})