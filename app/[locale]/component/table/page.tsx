import { Button } from '@ui/components'
import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Table } from '@ui/components/table'

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'metadata.table' })
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
        <Table className="table-default">
          <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
            <th className="!text-right">Actions</th>
          </tr>
          </thead>
          <tbody>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
          </tbody>
        </Table>
      </div>
    </section>

    <section>
      <h3>Default</h3>
      <div>
        <Table className="table-line">
          <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
            <th className="!text-right">Actions</th>
          </tr>
          </thead>
          <tbody>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
          <Row/>
          </tbody>
        </Table>
      </div>
    </section>
  </>
}

function Row() {
  return <tr>
    <td>Brad</td>
    <td>+82 1234 1234</td>
    <td>test@malan.kr</td>
    <td>Description</td>
    <td className="!pr-0">
      <div className="flex items-center justify-end gap-2">
        <Button onlyIcon><i className="ki-outline ki-pencil text-lg"/></Button>
        <Button onlyIcon><i className="ki-outline ki-trash text-lg"/></Button>
      </div>
    </td>
  </tr>
}