'use client'
import { useContext } from 'react'

import { Button } from '@ui/components'
import MyThemeContext from './themeLayout'

export default function Header() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(MyThemeContext)

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler()
  }

  return <header className="grid grid-cols-[max-content,1fr,max-content] items-center p-4 *:p-4">
    <Button
      size="lg"
      className="bg-stone-800 text-white dark:bg-stone-200 dark:text-black"
      onClick={toggleThemeHandler}>
      Toggle Theme
    </Button>
    <div>MALAN</div>
    <div>Header</div>
    <div>Etc</div>
  </header>
}