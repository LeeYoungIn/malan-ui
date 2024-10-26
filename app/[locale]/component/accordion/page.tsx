import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Accordion, AccordionItem } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
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
        <Accordion title="Default">
          <AccordionItem>Item 1</AccordionItem>
          <AccordionItem>Item 2</AccordionItem>
          <AccordionItem>Item 3</AccordionItem>
        </Accordion>
      </div>
    </section>
  </>
}