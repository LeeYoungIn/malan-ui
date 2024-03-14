'use client'
import { useCallback, useContext } from 'react'

import { Button, ButtonGroup } from '@ui/components'
import ThemeContext, { useTheme } from './themeLayout'
import { NavContext } from './navbar'

export default function Header() {
  const themeCtx = useContext(ThemeContext)
  const navCtx = useContext(NavContext)
  const { isDarkTheme } = useTheme()

  const toggleThemeHandler = useCallback((theme: 'light' | 'dark') => {
    themeCtx.toggleThemeHandler(theme)
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
      </div>
      <div>MALAN</div>
      <div>
        <ButtonGroup>
          <ButtonGroup.Item
            className={clsx(!isDarkTheme && THEME_ACTIVE)}
            onClick={() => toggleThemeHandler('light')}>
            <i className="ki-outline ki-night-day"></i>
          </ButtonGroup.Item>
          <ButtonGroup.Item
            className={clsx(isDarkTheme && THEME_ACTIVE)}
            onClick={() => toggleThemeHandler('dark')}>
            <i className="ki-outline ki-moon"></i>
          </ButtonGroup.Item>
        </ButtonGroup>
      </div>
    </div>
  </header>
}

const THEME_ACTIVE = 'bg-stone-100 dark:bg-stone-900'