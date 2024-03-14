import { Input, InputGroup, Textarea } from '@ui/components'

export default function () {
  return <>
    <section>
      <p>Input</p>
      <div className="grid gap-2 mt-4">
        <Input placeholder="Placeholder..."/>
        <Input type="number" placeholder="Number..."/>
        <Input placeholder="Disable..." disabled/>
      </div>
    </section>

    <section>
      <p>Input Group</p>
      <div className="grid gap-2 mt-4">
        <InputGroup prefix="@" placeholder="Placeholder..."/>
        <InputGroup prefix="https://" suffix=".com" placeholder="Placeholder..."/>
        <InputGroup suffix=".00" placeholder="Placeholder..."/>
      </div>
    </section>

    <section>
      <p>TextArea</p>
      <div className="grid gap-2 mt-4">
        <Textarea placeholder="Text Placeholder..."/>
      </div>
    </section>
  </>
}