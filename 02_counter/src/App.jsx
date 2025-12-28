import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      count is {count}
      <button onClick={() => {
        setCount(prev => prev + 1)

      }}>inc</button>
      <button onClick={() => count > 0 ? setCount(prev => prev - 1) : setCount(prev => prev)}>dec</button>
    </>
  )
}

export default App
