import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
