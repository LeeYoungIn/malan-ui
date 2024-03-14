import { ButtonHTMLAttributes, Children } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg' | 'base'
  variant?: 'clean' | string
  withIcon?: boolean
}

export function Button({ type = 'button', size = 'base', variant, withIcon = false, className, ...props }: ButtonProps) {
  return <button
    type={type} {...props}
    className={clsx('btn',
      {
        'px-4 py-3': !withIcon && size === 'base',
        'px-3 py-2.5': withIcon || size === 'sm',
        'px-5 py-3 text-lg': size === 'lg',
        'text-sm': size === 'sm',
        'flex items-center gap-2': withIcon,
        'bg-stone-200 dark:bg-white hover:bg-stone-300 dark:disabled:bg-stone-400': variant !== 'clean'
      },
      className)}/>
}

export function ButtonGroup({ children, className }: Pick<ButtonProps, 'children' | 'className'>) {
  return <div className={clsx('btn-group', className)}>
    {Children.map(children, child => <div>
      {child}
    </div>)}
  </div>
}

ButtonGroup.Item = ({ variant = 'clean', ...props }: ButtonProps) => {
  return <Button variant={variant} {...props}/>
}