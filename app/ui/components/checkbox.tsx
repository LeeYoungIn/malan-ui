import { ReactNode } from 'react'
import clsx from 'clsx'

import { InputProps } from '@ui/components/input'

type CheckboxProps = Omit<InputProps, 'type'>

export function Checkbox({ ...props }: CheckboxProps) {
  return <input type="checkbox" {...props}/>
}

export function LabelCheckbox({ label, containerClass, labelClass, ...props }: Omit<CheckboxProps, 'id'> & { id: string, label: ReactNode, containerClass?: string, labelClass?: string }) {
  return <div className={clsx('label-checkbox flex items-center gap-2', containerClass)}>
    <input type="checkbox" {...props}/>
    <label htmlFor={props.id} className={labelClass}>{label}</label>
  </div>
}