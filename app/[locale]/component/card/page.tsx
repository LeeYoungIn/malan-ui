import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Button, Card, Dropdown } from '@ui/components'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.card' })
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
        <Card title="Default Title">
          <p>{STR}</p>
        </Card>
      </div>
    </section>

    <section>
      <h3>With Header Tools</h3>
      <div className="grid gap-4">
        <Card
          title="Title"
          header={<Dropdown toggler="Menu"/>}>
          <p>{STR}</p>
        </Card>
      </div>
    </section>

    <section>
      <h3>With Footer</h3>
      <div className="grid gap-4">
        <Card
          title="Title"
          header={<Dropdown toggler="Menu"/>}
          footer={<Button size="sm">Small</Button>}>
          <p>{STR}</p>
        </Card>
      </div>
    </section>
  </>
}

const STR = 'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.'