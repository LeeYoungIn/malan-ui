import { Input, InputGroup, Textarea } from '@ui/components'

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