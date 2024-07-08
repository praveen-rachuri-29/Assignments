import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddSuperHero from './compontes/AddSuperHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddSuperHero/>
    </>
  )
}

export default App
