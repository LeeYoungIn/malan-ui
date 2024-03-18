import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Switch, SwitchItem } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.switch' })
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
        <Switch name="test">
          <SwitchItem id="switch1" defaultChecked>Item 1</SwitchItem>
          <SwitchItem id="switch2">Item 2</SwitchItem>
          <SwitchItem id="switch3">Item 3</SwitchItem>
        </Switch>
      </div>
    </section>
  </>
}