import { ButtonHTMLAttributes, Children, forwardRef } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg' | 'base'
  variant?: 'clean' | string
  onlyIcon?: boolean
  withIcon?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type = 'button', size = 'base', variant, onlyIcon = false, withIcon = false, className, ...props }, ref) => {
  return <button
    ref={ref}
    type={type} {...props}
    className={clsx('btn',
      {
        'p-3 flex items-center justify-center': onlyIcon,
        'px-4 py-3': !onlyIcon && !withIcon && size === 'base',
        'px-3 py-2.5': !onlyIcon && withIcon || size === 'sm',
        'px-5 py-3 text-lg': size === 'lg',
        'text-sm': size === 'sm',
        'flex items-center gap-2': withIcon,
        'bg-stone-200 dark:bg-white hover:bg-stone-300 hover:dark:bg-stone-200 dark:disabled:bg-stone-400': variant !== 'clean'
      },
      className)}/>
})

export function ButtonGroup({ onlyIcon, children, className }: Pick<ButtonProps, 'onlyIcon' | 'children' | 'className'>) {
  return <div className={clsx('btn-group', className)}>
    {Children.map(children, child => <div className={clsx({ 'flex aspect-square': onlyIcon })}>
      {child}
    </div>)}
  </div>
}

ButtonGroup.Item = ({ ...props }: ButtonProps) => {
  return <Button {...props}/>
}