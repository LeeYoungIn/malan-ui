import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'lg' | 'base'
  variant?: 'clean' | string
  withIcon?: boolean
}

export function Badge({ size = 'base', variant, withIcon = false, className, ...props }: BadgeProps) {
  return <div
    {...props}
    className={clsx('badge font-light rounded-full text-black',
      {
        'px-3 py-1 text-sm': !withIcon && size === 'base',
        'px-2 py-0.5': withIcon || size === 'sm',
        'px-4 py-1 text-base': size === 'lg',
        'text-xs': size === 'sm',
        'flex items-center gap-1 [&>i]:text-sm': withIcon,
        'bg-stone-200 dark:bg-white hover:bg-stone-300 dark:disabled:bg-stone-400': variant !== 'clean'
      },
      className)}/>
}