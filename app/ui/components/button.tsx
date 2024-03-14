import { ButtonHTMLAttributes, Children } from 'react'
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg' | 'base'
  variant?: 'clean' | string
}

export function Button({ type = 'button', size = 'base', variant, className, ...props }: ButtonProps) {
  return <button
    type={type} {...props}
    className={clsx('btn',
      {
        'bg-neutral-200 dark:bg-white hover:bg-neutral-300 dark:disabled:bg-neutral-400': variant !== 'clean',
        'px-3 py-2.5 text-sm': size === 'sm',
        'px-5 py-3 text-lg': size === 'lg'
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