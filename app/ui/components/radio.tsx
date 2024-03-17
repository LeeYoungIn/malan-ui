import { ReactNode } from 'react'
import clsx from 'clsx'

import { InputProps } from '@ui/components/input'

type RadioProps = Omit<InputProps, 'type'>

export function Radio({ className, ...props }: RadioProps) {
  return <input type="radio" className={clsx('input-radio', className)} {...props}/>
}

export function LabelRadio({ label, containerClass, labelClass, ...props }: Omit<RadioProps, 'id'> & { id: string, label: ReactNode, containerClass?: string, labelClass?: string }) {
  return <div className={clsx('label-radio flex items-center gap-2', containerClass)}>
    <Radio {...props}/>
    <label htmlFor={props.id} className={labelClass}>{label}</label>
  </div>
}