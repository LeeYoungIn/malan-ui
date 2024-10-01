import { HtmlHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps extends CardHeaderProps {
  bodyClassName?: string
  header?: ReactNode
  headerClassName?: string
  footer?: ReactNode
  footerClassName?: string
}

export function Card({ title, bodyClassName, header, headerClassName, footer, footerClassName, className, children, ...props }: CardProps) {
  return <div className={clsx('card *:px-4 border border-gray-300 dark:border-stone-800 rounded-xl', className)} {...props}>
    <CardHeader title={title} className={clsx('first:pt-3', headerClassName)}>
      {header}
    </CardHeader>
    <CardBody className={clsx('pt-0.5 first:pt-3 pb-3', bodyClassName)}>
      {children}
    </CardBody>
    {footer && <CardFooter className={clsx('pt-3 pb-3', footerClassName)}>{footer}</CardFooter>}
  </div>
}

interface CardHeaderProps extends PropsWithChildren {
  title: string
  className?: string
}

export function CardHeader({ title, className, children, ...props }: CardHeaderProps) {
  return <div className={clsx('card-header flex items-center justify-between', className)} {...props}>
    <h4 className="text-lg font-semibold">{title}</h4>
    <div>{children}</div>
  </div>
}

export function CardBody({ className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('card-body', className)} {...props}/>
}

export function CardFooter({ className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('card-footer flex items-center justify-center border-t border-gray-300 dark:border-stone-800', className)} {...props}/>
}