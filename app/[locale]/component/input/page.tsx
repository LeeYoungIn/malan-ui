import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Input, InputGroup, InputRow, Textarea } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
  const t = await getTranslations({ locale, namespace: 'metadata.input' })
  return getMetadata({
    title: t('title'),
    description: t('description')
  })
}

export default function () {
  return <>
    <section>
      <h3>Input</h3>
      <div className="grid gap-3 mt-4">
        <Input placeholder="Placeholder..."/>
        <Input type="number" placeholder="Number..."/>
        <Input placeholder="Disable..." disabled/>
      </div>
    </section>

    <section>
      <h3>Input Rows</h3>
      <div className="grid gap-3 mt-4">
        <InputRow desc="Description" placeholder="Placeholder..."/>
        <InputRow error="Required" placeholder="Error..."/>
      </div>
    </section>

    <section>
      <h3>Input Group</h3>
      <div className="grid gap-3 mt-4">
        <InputGroup prefix="@" placeholder="Placeholder..."/>
        <InputGroup prefix="https://" suffix=".com" placeholder="Placeholder..."/>
        <InputGroup suffix=".00" placeholder="Placeholder..."/>
      </div>
    </section>

    <section>
      <h3>TextArea</h3>
      <div className="grid gap-3 mt-4">
        <Textarea placeholder="Text Placeholder..."/>
      </div>
    </section>
  </>
}