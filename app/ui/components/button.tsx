import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg' | 'base'
  variant?: 'clean' | string
}

export default function Button({ type = 'button', size = 'base', variant, className, ...props }: ButtonProps) {
  return <button
    type={type} {...props}
    className={clsx('btn', `btn-size-${size}`, !!variant && `btn-${variant}`, className)}/>
}