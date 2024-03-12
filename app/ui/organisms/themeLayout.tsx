'use client'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {}
})

export function ThemeContextProvider(props: PropsWithChildren) {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  useEffect(() => initialThemeHandler())

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem('isDarkTheme')
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document!.querySelector('html')!.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!)
      isDarkTheme && document!.querySelector('html')!.classList.add('dark')
      setIsDarkTheme(() => {
        return isDarkTheme
      })
    }
  }

  function toggleThemeHandler(): void {
    const isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!)
    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToBody()
    setValueToLocalStorage()
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector('html')!.classList.toggle('dark')
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  return <MyThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
    {props.children}
  </MyThemeContext.Provider>
}

export default ThemeContext