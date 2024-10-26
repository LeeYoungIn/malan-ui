import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Loading, LoadingSpin } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata.loading' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Dots</h3>
      <div className="grid grid-cols-[max-content_1fr] items-center gap-4">
        <Loading/>
        <div>Default</div>
        <Loading dotClassName="text-red-800"/>
        <div>Color</div>
      </div>
    </section>

    <section>
      <h3>Spinner</h3>
      <div className="grid grid-cols-[max-content_1fr] items-center gap-4">
        <LoadingSpin/>
        <div>Outline(Default)</div>
        <LoadingSpin type="solid"/>
        <div>Solid</div>
        <LoadingSpin sizeClassName="text-2xl"/>
        <div>Size</div>
        <LoadingSpin colorClassName="text-red-800"/>
        <div>Color</div>
      </div>
    </section>
  </>
}