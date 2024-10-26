'use client'
import { useCallback, useContext } from 'react'
import clsx from 'clsx'

import { Link } from '@/navigation'
import { Button, Switch, SwitchItem } from '@ui/components'
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

  const toggleThemeSwitch = useCallback((e: any) => {
    switch (e.target.id) {
      case 'is-dark-theme0':
        toggleThemeHandler('light')
        break
      case 'is-dark-theme1':
        toggleThemeHandler('dark')
        break
    }
  }, [toggleThemeHandler])

  return <header className="mb-8 py-2 border-b-[1px] border-stone-200 dark:border-stone-800">
    <div className="container grid grid-cols-[max-content_1fr_max-content] items-center">
      <div className="flex">
        <Button variant="clean" onClick={toggleNavHandler} className="smTo:block hidden">
          <i className="ki-outline ki-menu text-xl"></i>
        </Button>
      </div>
      <Link href="/">MALAN</Link>
      <div>
        <Switch id="is-dark-theme" name="is-dark-theme" onlyIcon>
          <SwitchItem
            checked={!isDarkTheme}
            className={clsx(!isDarkTheme && THEME_ACTIVE)}
            onChange={toggleThemeSwitch}>
            <i className="ki-outline ki-night-day text-xl"></i>
          </SwitchItem>
          <SwitchItem
            checked={isDarkTheme}
            className={clsx(isDarkTheme && THEME_ACTIVE)}
            onChange={toggleThemeSwitch}>
            <i className="ki-outline ki-moon text-xl"></i>
          </SwitchItem>
        </Switch>
      </div>
    </div>
  </header>
}

const THEME_ACTIVE = 'bg-stone-100 dark:bg-stone-900'