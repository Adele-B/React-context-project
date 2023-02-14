import './App.css';
import { useContext } from "react"
import ThemeToggleButton from './components/ThemeToggleButton';
import { ThemeContext } from "./context/themeContext"
import CatFacts from './components/CatFacts';

const App = () => {
  const { themeClass } = useContext(ThemeContext);

  return (
    <main className={themeClass}>
      <div className="flex">
        <h1>Cat facts</h1>
        <ThemeToggleButton />
      </div>
      <CatFacts />
    </main>
  );
}

export default App;
