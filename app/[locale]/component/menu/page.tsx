import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Dropdown } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.menu' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Dropdown</h3>
      <div>
        <Dropdown toggler="Menu"/>
      </div>
    </section>
  </>
}