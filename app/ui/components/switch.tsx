'use client'
import { Children, cloneElement, PropsWithChildren, useMemo } from 'react'
import clsx from 'clsx'
import { InputProps } from '@ui/components/input'

export function Switch({ name, children, className }: PropsWithChildren & { name: string, className?: string }) {
  const list = useMemo(() => {
    return Children.toArray(children).map(child =>
      cloneElement(child as any, { name }))
  }, [name, children])

  return <div className={clsx('switch-group flex items-center gap-3 px-2 py-3', className)}>
    {list}
  </div>
}

export interface SwitchItemProps extends PropsWithChildren, Omit<InputProps, 'type'> {
  labelClassName?: string
}

export function SwitchItem({ children, className, labelClassName, ...props }: SwitchItemProps) {
  return <div className="switch-item">
    <input type="radio" className={clsx('peer hidden', className)} {...props}/>
    <label htmlFor={props.id} className={clsx('px-3 py-2.5 peer-checked:bg-stone-200 peer-checked:dark:bg-stone-800 rounded-lg', labelClassName)}>{children}</label>
  </div>
}