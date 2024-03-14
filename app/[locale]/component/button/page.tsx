import { Button, ButtonGroup } from '@ui/components'

export default function () {
  return <div>
    <p>Size</p>
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>

    <p>Color</p>
    <div className="flex flex-wrap items-center gap-4">
      <Button>Default</Button>
      <Button className="bg-red-800 dark:bg-red-400 hover:bg-red-600 text-white">Red</Button>
    </div>

    <p>Icon</p>
    <div className="flex flex-wrap items-center gap-4">
      <Button withIcon><i className="ki-outline ki-menu"></i>Icon</Button>
      <Button onlyIcon><i className="ki-outline ki-menu"></i></Button>
    </div>

    <p>Group</p>
    <div className="flex flex-wrap items-center gap-4">
      <ButtonGroup>
        <ButtonGroup.Item>Default</ButtonGroup.Item>
        <ButtonGroup.Item>Center</ButtonGroup.Item>
        <ButtonGroup.Item>Red</ButtonGroup.Item>
      </ButtonGroup>
    </div>
  </div>
}