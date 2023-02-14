import { createContext, useState, useEffect } from "react";

export const themes = {
  light: {
    name: 'Light mode',
  },
  dark: {
    name: 'Dark mode',
  }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState([])
  const [themeClass, setThemeClass] = useState({})

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('themes'))

    if (!currentTheme) {
      localStorage.setItem('themes', JSON.stringify(themes.light))
      setTheme(themes.light)
      setThemeClass('light-mode')
    }

    if (currentTheme) {
      if (currentTheme.name === 'Light mode') {
        localStorage.setItem('themes', JSON.stringify(themes.light))
        setTheme(themes.light)
        setThemeClass('light-mode')
      } else {
        localStorage.setItem('themes', JSON.stringify(themes.dark))
        setTheme(themes.dark)
        setThemeClass('dark-mode')
      }
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeClass, setThemeClass }} >
      {children}
    </ThemeContext.Provider>
  )
}