'use client'
import { Children, cloneElement, PropsWithChildren, useMemo } from 'react'
import clsx from 'clsx'

import { ButtonProps } from '@ui/components/button'
import { InputProps } from '@ui/components/input'

export interface SwitchProps extends PropsWithChildren, Pick<ButtonProps, 'onlyIcon' | 'withIcon'> {
  id: string
  name: string
  className?: string
}

export function Switch({ id, name, onlyIcon, withIcon, children, className }: SwitchProps) {
  const list = useMemo(() => {
    return Children.toArray(children).map((child, idx) =>
      cloneElement(child as any, { id: id + idx, name, parentOnlyIcon: onlyIcon }))
  }, [id, name, onlyIcon, children])

  return <div
    className={clsx('switch-group flex items-center',
      {
        'gap-3 px-2 py-3': !onlyIcon && !withIcon,
        'gap-2 p-2': withIcon,
        'gap-2 p-1.5': onlyIcon
      }, className)}>
    {list}
  </div>
}

export interface SwitchItemProps extends PropsWithChildren, Omit<InputProps, 'type'>, Pick<ButtonProps, 'onlyIcon'> {
  parentOnlyIcon?: boolean
  labelClassName?: string
}

export function SwitchItem({ onlyIcon, parentOnlyIcon, children, className, labelClassName, ...props }: SwitchItemProps) {
  return <div className="switch-item">
    <input type="radio" className={clsx('peer hidden', className)} {...props}/>
    <label
      htmlFor={props.id}
      className={clsx('peer-checked:bg-stone-200 peer-checked:dark:bg-stone-800 rounded-lg',
        {
          'px-3 py-2.5': !onlyIcon && !parentOnlyIcon,
          'p-2 flex items-center justify-center aspect-square leading-[100%] *:leading-[100%]': onlyIcon || parentOnlyIcon
        }, labelClassName)}>{children}</label>
  </div>
}