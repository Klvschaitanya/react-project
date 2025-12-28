import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}></div>
      <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button style={{backgroundColor:'red'}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("Red")}>Red</button>
          <button style={{backgroundColor:'green'}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("green")}>Green</button>
          <button style={{backgroundColor:'violet'}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("violet")}>Violet</button>
          <button style={{backgroundColor:'black'}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("black")}>Black</button>
          <button style={{backgroundColor:'lightblue'}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'  onClick={()=>setColor("lightblue")}>lightblue</button>
        </div>
      </div>
    </>
  )
}

export default App
