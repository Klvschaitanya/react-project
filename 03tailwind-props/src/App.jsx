import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 text-white p-6 rounded-xl'>tailwind test</h1>
    </>
  )
}

export default App
