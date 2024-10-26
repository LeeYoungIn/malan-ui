import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Badge } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata.badge' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Color</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Badge>Default</Badge>
        <Badge className="bg-red-800 dark:bg-red-400 hover:bg-red-600 text-white">Red</Badge>
      </div>
    </section>

    <section>
      <h3>Size</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Badge size="sm">Small</Badge>
        <Badge>Default</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </section>

    <section>
      <h3>Icon</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Badge withIcon><i className="ki-outline ki-menu"></i>Icon</Badge>
      </div>
    </section>
  </>
}