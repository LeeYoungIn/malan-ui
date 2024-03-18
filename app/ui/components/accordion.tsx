'use client'
import { PropsWithChildren, useCallback, useState } from 'react'
import clsx from 'clsx'

import { Button, ButtonProps } from '@ui/components/button'

export interface AccordionProps {
  title: string
  buttonProps?: ButtonProps
  className?: string
  children: any
}

export function Accordion({ title, buttonProps, children, className }: AccordionProps) {
  const [open, setOpen] = useState(true)

  const toggle = useCallback(() => setOpen(v => !v), [])

  return <div aria-expanded={open} className={clsx('accordion', className)}>
    <Button onClick={toggle} className="px-6" {...buttonProps}>
      <span className="flex-1">{title}&nbsp;&nbsp;</span>
    </Button>
    <ul>
      {children}
    </ul>
  </div>
}

export function AccordionItem({ children }: PropsWithChildren) {
  return <li className="px-6 py-2">
    {children}
  </li>
}