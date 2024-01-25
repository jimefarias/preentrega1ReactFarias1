import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from "./NavBar"
import ItemListContainer from "./componentes"

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <NavBar>
      <ItemListContainer gretting={Bienvenidos} />

    </NavBar>


  )
}

export default App
