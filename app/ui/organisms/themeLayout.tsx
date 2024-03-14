'use client'
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<{ isDarkTheme: boolean, toggleThemeHandler: (theme?: 'light' | 'dark') => void }>({
  isDarkTheme: true,
  toggleThemeHandler: (_theme?: 'light' | 'dark') => {}
})
export const useTheme = () => useContext(ThemeContext)

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

  function toggleThemeHandler(theme?: 'light' | 'dark'): void {
    if (theme === 'dark') setIsDarkTheme(true)
    else if (theme === 'light') setIsDarkTheme(false)
    else {
      const isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!)
      setIsDarkTheme(!isDarkTheme)
    }

    toggleDarkClassToBody()
    setValueToLocalStorage()
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector('html')!.classList.toggle('dark')
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  return <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeContext