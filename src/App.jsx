import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameStart from './compnents/GameStart'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <GameStart/>
   </>
    
  )
}

export default App
