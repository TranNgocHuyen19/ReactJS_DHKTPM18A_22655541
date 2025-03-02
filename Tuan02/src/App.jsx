import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai01 from './components/Bai01'
import Bai02 from './components/Bai02'
import Bai03 from './components/Bai03'
import Bai04 from './components/Bai04'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Bai01/> */}
      {/* <Bai02 /> */}
      {/* <Bai03 /> */}
      <Bai04 />
    </>
  )
}

export default App
