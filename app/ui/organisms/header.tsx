'use client'
import { useCallback, useContext } from 'react'

import { Button } from '@ui/components'
import MyThemeContext from './themeLayout'
import { NavContext } from './navbar'

export default function Header() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)
  const navCtx: { isOpen?: boolean; toggleNavHandler: (v?: boolean) => void } = useContext(NavContext)

  const toggleThemeHandler = useCallback(() => {
    themeCtx.toggleThemeHandler()
  }, [themeCtx])
  const toggleNavHandler = useCallback(() => {
    navCtx.toggleNavHandler()
  }, [navCtx])

  return <header className="mb-8 py-2 border-b-[1px] border-stone-200 dark:border-stone-800">
    <div className="container grid grid-cols-[max-content,1fr,max-content] items-center">
      <div className="flex">
        <Button variant="clean" onClick={toggleNavHandler} className="smTo:block hidden">
          <i className="ki-outline ki-menu text-xl"></i>
        </Button>
        <Button
          className="bg-stone-800 text-white dark:bg-stone-200 dark:text-black"
          onClick={toggleThemeHandler}>
          Toggle Theme
        </Button>
      </div>
      <div>MALAN</div>
      <div>Header</div>
    </div>
  </header>
}