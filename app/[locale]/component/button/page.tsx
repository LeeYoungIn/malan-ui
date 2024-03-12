import { Button } from '@ui/components'

export default function () {
  return <div>
    <p>Size</p>
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Size sm</Button>
      <Button>Default</Button>
      <Button size="lg">Size lg</Button>
    </div>

    <p>Color</p>
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button className="bg-red-800 dark:bg-red-400 hover:bg-red-600 text-white">Red</Button>
    </div>
  </div>
}