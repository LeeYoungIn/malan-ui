'use client'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'
import clsx from 'clsx'

import { Link, usePathname } from '@/navigation'

export const NavContext = createContext({ isOpen: false, toggleNavHandler: () => {} })
export const useNav = () => useContext(NavContext)

export default function () {
  const navCtx: { isOpen?: boolean; toggleNavHandler: (v?: boolean) => void } = useContext(NavContext)
  const { isOpen } = useNav()

  const pathname = usePathname()
  const menu = useMemo(() => sortBy(map([
    { url: '/component/accordion', label: 'Accordion' },
    { url: '/component/badge', label: 'Badge' },
    { url: '/component/button', label: 'Button' },
    { url: '/component/checkbox', label: 'Checkbox' },
    { url: '/component/collapse', label: 'Collapse' },
    { url: '/component/input', label: 'Input' },
    { url: '/component/loading', label: 'Loading' },
    { url: '/component/menu', label: 'Menu' },
    { url: '/component/modal', label: 'Modal' },
    { url: '/component/progress', label: 'Progress' },
    { url: '/component/radio', label: 'Radio' }
  ], item => ({ ...item, active: pathname === item.url })), 'url'), [pathname])

  const toggleNavHandler = useCallback(() => {
    navCtx.toggleNavHandler(false)
  }, [navCtx])

  return <>
    <div
      className={clsx('hidden fixed inset-0 col-span-full backdrop-blur-sm', { 'smTo:block': isOpen })}
      onClick={toggleNavHandler}></div>
    <nav
      className={clsx('w-60 [&_ul]:mx-4 [&_ul]:mb-4 [&_p]:px-4 [&_p]:py-2.5 [&_p]:font-medium bg-stone-50 dark:bg-stone-950', { 'smTo:left-0': isOpen })}>
      <p>Theme</p>
      <ul>
        <li><Link href="https://tailwindcss.com/docs/customizing-colors" target="_blank">Colors</Link></li>
      </ul>
      <p>Components</p>
      <ul>
        {map(menu, item => <li key={item.url}>
          <Link href={item.url} className={clsx({ active: item.active })}>{item.label}</Link>
        </li>)}
      </ul>
    </nav>
  </>
}

export function NavProvider({ children }: PropsWithChildren) {
  const [isOpen, toggleOpen] = useState(false)

  const toggleNavHandler = useCallback((v: boolean = true) => toggleOpen(v), [])

  return <NavContext.Provider value={{ isOpen, toggleNavHandler }}>
    {children}
  </NavContext.Provider>
}