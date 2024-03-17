import { ProgressHTMLAttributes } from 'react'

export function Progress({ ...props }: ProgressHTMLAttributes<HTMLProgressElement>) {
  return <progress {...props}/>
}