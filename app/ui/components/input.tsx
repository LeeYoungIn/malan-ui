import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ type = 'text', className, ...props }: InputProps) {
  return <input
    type={type} {...props}
    className={clsx(`input-${type}`, className)}/>
}

export function InputGroup({ prefix, suffix, containerClass, ...props }: InputProps & { prefix?: string, suffix?: string, containerClass?: string }) {
  return <div className={clsx('input-group', containerClass)}>
    {prefix && <span>{prefix}</span>}
    <Input {...props}/>
    {suffix && <span>{suffix}</span>}
  </div>
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ ...props }: TextareaProps) {
  return <textarea {...props}/>
}