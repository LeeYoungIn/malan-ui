import { TableHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

export function Table({ className, ...props }: TableProps) {
  return <table className={clsx('table w-full border-separate border-spacing-y-2', className)} {...props}>
  </table>
}