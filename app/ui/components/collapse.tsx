import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export type CollapseItemType = { id: string, title: ReactNode, children: ReactNode }

export interface CollapseProps extends HTMLAttributes<HTMLUListElement> {
  className?: string
}

export function Collapse({ className, children, ...props }: CollapseProps) {
  return <ul className={clsx('collapse-container', className)} {...props}>
    {children}
  </ul>
}

export function CollapseItem({ id, title, children }: CollapseItemType) {
  return <li className="overflow-hidden">
    <input id={id} type="checkbox" className="peer hidden relative z-10"/>
    <label htmlFor={id} className="relative z-10 block w-full bg-stone-50 p-4 peer-checked:pb-3 peer-checked:after:-rotate-180">
      {title}&nbsp;&nbsp;
    </label>
    <div className="w-full bg-stone-50 transition-accordion peer-checked:transition-accordion duration-200 max-h-0 peer-checked:max-h-full -translate-y-full peer-checked:translate-y-0">
      <div className="px-4 pb-4">{children}</div>
    </div>
  </li>
}