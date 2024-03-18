'use client'
import clsx from 'clsx'

import { InputProps } from '@ui/components/input'

export interface ToggleProps extends Omit<InputProps, 'type'> {}

export function Toggle({ className, ...props }: ToggleProps) {
  return <input type="checkbox" className={clsx('input-toggle', className)} {...props}/>
}