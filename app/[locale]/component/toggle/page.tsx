import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Toggle } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.toggle' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Default</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Toggle/>
      </div>
    </section>
  </>
}