'use client'
import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react'
import clsx from 'clsx'

import { Link } from '@/navigation'

export const NavContext = createContext({ isOpen: false, toggleNavHandler: () => {} })
export const useNav = () => useContext(NavContext)

export default function () {
  const navCtx: { isOpen?: boolean; toggleNavHandler: (v?: boolean) => void } = useContext(NavContext)
  const { isOpen } = useNav()

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
        <li><Link href="/component/badge">Badge</Link></li>
        <li><Link href="/component/button">Button</Link></li>
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