import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'lg'
}

export default function Button({ type = 'button', ...props }: ButtonProps) {
  return <button type={type} {...props}/>
}