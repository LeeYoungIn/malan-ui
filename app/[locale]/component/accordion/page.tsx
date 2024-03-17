import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Accordion } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.accordion' })
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
        <Accordion title="Default">Default</Accordion>
      </div>
    </section>
  </>
}