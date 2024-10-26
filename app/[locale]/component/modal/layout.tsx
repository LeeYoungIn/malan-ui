import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const t = await getTranslations({ locale: params.locale, namespace: 'metadata.modal' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function ({ children }: any) {
  return children
}