import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Tabs } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata.tabs' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Default</h3>
      <div>
        <Tabs
          list={[
            { label: 'Tab 1' },
            { label: 'Tab 2' },
            { label: 'Tab 3' }
          ]}>
          <div>
            <p>Tab 1 Content</p>
          </div>
          <div>
            <p>Tab 2 Content</p>
          </div>
          <div>
            <p>Tab 3 Content</p>
          </div>
        </Tabs>
      </div>
    </section>

    <section>
      <h3>Buttons</h3>
      <div>
        <Tabs
          variant="tabs-button"
          tabClassName="[&:not(.active)]:dark:text-white"
          list={[
            { label: 'Tab 1' },
            { label: 'Tab 2' },
            { label: 'Tab 3' }
          ]}>
          <div>
            <p>Tab 1 Content</p>
          </div>
          <div>
            <p>Tab 2 Content</p>
          </div>
          <div>
            <p>Tab 3 Content</p>
          </div>
        </Tabs>
      </div>
    </section>
  </>
}