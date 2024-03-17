import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Collapse, CollapseItem } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.collapse' })
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
        <Collapse>
          <CollapseItem id="item1" title="Title 1">
            <p>Hello Title 1</p>
          </CollapseItem>
          <CollapseItem id="item2 " title="Title 2">
            <p>Hello Title 2</p>
          </CollapseItem>
          <CollapseItem id="item3" title="Title 3">
            <p>Hello Title 3</p>
          </CollapseItem>
        </Collapse>
      </div>
    </section>
  </>
}