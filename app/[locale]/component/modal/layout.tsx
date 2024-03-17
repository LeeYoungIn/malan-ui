import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.modal' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function ({ children }: any) {
  return children
}