import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ type = 'text', className, ...props }: InputProps) {
  return <input
    type={type} {...props}
    className={clsx(`input-default input-${type}`, className)}/>
}

export function InputRow({ error, desc, ...props }: InputProps & { error?: string, desc?: string }) {
  return <div className={clsx('input-row', { 'hasError [&_input]:border-red-500': !!error })}>
    <Input aria-description={desc} {...props}/>
    <p className={clsx('mt-1 font-light text-sm', { 'text-stone-500': !error, 'text-red-500': !!error })}>
      &nbsp;&nbsp;{error || desc}
    </p>
  </div>
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