import { getTranslations } from 'next-intl/server'
import { getMetadata } from '@lib/metadata'
import { Switch, SwitchItem } from '@ui/components'

export async function generateMetadata(props: LocaleParams) {
  const params = await props.params
  const { locale } = params
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
        <Switch id="switch-default" name="test">
          <SwitchItem defaultChecked>Item 1</SwitchItem>
          <SwitchItem>Item 2</SwitchItem>
          <SwitchItem>Item 3</SwitchItem>
        </Switch>
      </div>
    </section>

    <section>
      <h3>With Icon</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Switch id="switch-with" name="with-icons" withIcon>
          <SwitchItem defaultChecked onlyIcon>
            <i className="ki-outline ki-night-day text-xl"></i>
          </SwitchItem>
          <SwitchItem onlyIcon>
            <i className="ki-outline ki-moon text-xl"></i>
          </SwitchItem>
          <SwitchItem>Item 3</SwitchItem>
        </Switch>
      </div>
    </section>

    <section>
      <h3>Only Icon</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Switch id="switch-icon" name="icons" onlyIcon>
          <SwitchItem defaultChecked>
            <i className="ki-outline ki-night-day text-xl"></i>
          </SwitchItem>
          <SwitchItem>
            <i className="ki-outline ki-moon text-xl"></i>
          </SwitchItem>
          <SwitchItem>
            <i className="ki-outline ki-moon text-xl"></i>
          </SwitchItem>
        </Switch>
      </div>
    </section>
  </>
}