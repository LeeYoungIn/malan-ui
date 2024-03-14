import { Badge } from '@ui/components'

export default function () {
  return <div>
    <p>Color</p>
    <div className="flex flex-wrap items-center gap-4">
      <Badge>Default</Badge>
      <Badge className="bg-red-800 dark:bg-red-400 hover:bg-red-600 text-white">Red</Badge>
    </div>

    <p>Size</p>
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge>Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>

    <p>Icon</p>
    <div className="flex flex-wrap items-center gap-4">
      <Badge withIcon><i className="ki-outline ki-menu"></i>Icon</Badge>
    </div>
  </div>
}