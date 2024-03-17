import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Progress } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.progress' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Default</h3>
      <div className="grid gap-4">
        <Progress max={10} value={3}/>
        <Progress max={10} value={6}/>
        <Progress max={10} value={8}/>
      </div>
    </section>
  </>
}