'use client'
import { useContext } from 'react'

import { Button } from '@ui/components'
import MyThemeContext from './themeLayout'

export default function Header() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }

  return <header className="mb-8 py-2 border-b-[1px] border-stone-200 dark:border-stone-800">
    <div className="container grid grid-cols-[max-content,1fr,max-content] items-center">
      <Button
        className="bg-stone-800 text-white dark:bg-stone-200 dark:text-black"
        onClick={toggleThemeHandler}>
        Toggle Theme
      </Button>
      <div>MALAN</div>
      <div>Header</div>
    </div>
  </header>
}