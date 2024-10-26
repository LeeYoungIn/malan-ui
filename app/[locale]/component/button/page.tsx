import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Button, ButtonGroup } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata.button' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Size</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    <section>
      <h3>Color</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Button>Default</Button>
        <Button className="bg-red-800 dark:bg-red-400 hover:bg-red-600 text-white">Red</Button>
      </div>
    </section>

    <section>
      <h3>Icon</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Button withIcon><i className="ki-outline ki-menu"></i>Icon</Button>
        <Button onlyIcon><i className="ki-outline ki-menu"></i></Button>
      </div>
    </section>

    <section>
      <h3>Group</h3>
      <div className="flex flex-wrap items-center gap-4">
        <ButtonGroup>
          <ButtonGroup.Item>Default</ButtonGroup.Item>
          <ButtonGroup.Item>Center</ButtonGroup.Item>
          <ButtonGroup.Item>Red</ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </section>
  </>
}