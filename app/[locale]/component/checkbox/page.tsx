import { Checkbox, LabelCheckbox } from '@ui/components'

export default function () {
  return <>
    <section>
      <h3>Default</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Checkbox/>
        <Checkbox defaultChecked/>
      </div>
    </section>

    <section>
      <h3>Disabled</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Checkbox disabled/>
        <Checkbox defaultChecked disabled/>
      </div>
    </section>

    <section>
      <h3>Label</h3>
      <div className="grid gap-3 mt-4">
        <LabelCheckbox id="label1" label="Label 1"/>
        <LabelCheckbox id="label2" label="Label 2" defaultChecked/>
        <LabelCheckbox id="label3" label="Disabled 1" disabled/>
        <LabelCheckbox id="label4" label="Disabled 2" disabled defaultChecked/>
      </div>
    </section>
  </>
}