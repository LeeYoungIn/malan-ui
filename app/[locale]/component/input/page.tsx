import { Input, InputGroup, Textarea } from '@ui/components'

export default function () {
  return <>
    <section>
      <p>Input</p>
      <div className="grid gap-2">
        <Input placeholder="Placeholder..."/>
        <Input type="number" placeholder="Number..."/>
        <Input placeholder="Disable..." disabled/>
      </div>
    </section>

    <section>
      <p>Input Group</p>
      <div className="grid gap-2">
        <InputGroup prefix="@" placeholder="Placeholder..."/>
        <InputGroup prefix="://" suffix=".00" placeholder="Placeholder..."/>
      </div>
    </section>

    <section>
      <p>TextArea</p>
      <div className="grid gap-2">
        <Textarea placeholder="Text Placeholder..."/>
      </div>
    </section>
  </>
}