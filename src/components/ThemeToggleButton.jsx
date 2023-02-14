import { useContext } from "react"
import { ThemeContext, themes } from "../context/themeContext"

const ThemeToggleButton = () => {
  const { theme, setTheme, themeClass, setThemeClass } = useContext(ThemeContext);

  console.log(themeClass)

  const handleClick = () => {
    const currentTheme = JSON.parse(localStorage.getItem('themes'))
    setTheme(theme === themes.light ? themes.dark : themes.light);
    setThemeClass(theme === themes.light ? 'dark-mode' : 'light-mode')

    if (currentTheme) {
      localStorage.setItem('themes', JSON.stringify(currentTheme.name === 'Light mode' ? themes.dark : themes.light))
    } else {
      localStorage.setItem('themes', JSON.stringify(themes.light))
    }
  }

  return (
    <button className={`toggle-btn ${themeClass === 'light-mode' ? 'dark-mode' : 'light-mode'}`} onClick={handleClick}>{(theme === themes.light ? themes.dark.name : themes.light.name)}</button>
  )
}

export default ThemeToggleButton;