import { ReactNode } from 'react'
import clsx from 'clsx'

import { InputProps } from '@ui/components/input'

export type CheckboxProps = Omit<InputProps, 'type'>

export function Checkbox({ className, ...props }: CheckboxProps) {
  return <input type="checkbox" className={clsx('input-checkbox', className)} {...props}/>
}

export function LabelCheckbox({ label, containerClass, labelClass, ...props }: Omit<CheckboxProps, 'id'> & { id: string, label: ReactNode, containerClass?: string, labelClass?: string }) {
  return <div className={clsx('label-checkbox flex items-center gap-2', containerClass)}>
    <Checkbox {...props}/>
    <label htmlFor={props.id} className={labelClass}>{label}</label>
  </div>
}