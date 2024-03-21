'use client'
import map from 'lodash/map'
import { Children, ReactNode, useMemo, useState } from 'react'
import clsx from 'clsx'

import { Button, ButtonProps } from '@ui/components/button'

type TapProp = { label: string, content?: ReactNode }

export interface TapsProps {
  list: TapProp[]
  variant?: ButtonProps['variant']
  tabClassName?: string
  className?: string
  children: ReactNode
}

export function Tabs({ list, variant = 'clean', className, tabClassName, children }: TapsProps) {
  const [current, setCurrent] = useState(0)

  const tabList = useMemo(() =>
    map(list, (item, idx) => <li key={item.label + idx}>
      <Button
        variant={current === idx ? variant : 'clean'}
        onClick={() => setCurrent(idx)}
        className={clsx({ 'active': current === idx }, tabClassName)}>
        {item.label}
      </Button>
    </li>), [current, list, variant, tabClassName])

  return <div className={clsx('tabs-container', variant, className)}>
    <ul className="flex flex-nowrap items-center">{tabList}</ul>
    {Children.map(children, (content, idx) => <div className={clsx('px-4 py-3', { 'hidden': idx !== current })}>
      {content}
    </div>)}
  </div>
}