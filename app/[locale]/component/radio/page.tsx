import { LabelRadio, Radio } from '@ui/components'

export default function () {
  return <>
    <section>
      <h3>Default</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Radio/>
        <Radio defaultChecked/>
      </div>
    </section>

    <section>
      <h3>Disabled</h3>
      <div className="flex flex-wrap items-center gap-4">
        <Radio disabled/>
        <Radio defaultChecked disabled/>
      </div>
    </section>

    <section>
      <h3>Group</h3>
      <div className="grid gap-3 mt-4">
        <Radio name="group"/>
        <LabelRadio id="label1" name="group" label="Option 2"/>
        <LabelRadio id="label2" name="group" label="Option 3 Label" defaultChecked/>
        <LabelRadio id="label3" name="group" label="Option 4 Disabled" disabled/>
        <LabelRadio id="label4" name="group" label="Option 5 Disabled" disabled defaultChecked/>
      </div>
    </section>
  </>
}