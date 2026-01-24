import { useState, useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPasword] = useState('')
  
  //ref hook
  const passwordRef = useRef(null)

  const p = useCallback(generatePassword, [length, number, characters])
  function generatePassword() {
    let stuff = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) stuff += "1234567890";
    if (characters) stuff += "!@#$%^&*(){}[]|\:;"
    let temp =""
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * stuff.length)
      temp += stuff[index]
    }
   setPasword(temp)
  }

  function copyPasswordToclipBoard(){
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }
  
useEffect(()=>{
p()
},[length,number,characters
])
  return (
    <>
      <div className='container'>
        <h3 style={{color:"antiquewhite"}}>Password Generator</h3>
        <div className='input-contianer'>
          <input className='input' type="text" value={password} ref={passwordRef} name="" id="" placeholder='password' readOnly/>
           <button onClick={copyPasswordToclipBoard} className='copy-button'>copy</button>
        </div>
        <div className='input-down-container'>
          <div>
          <input type="range" min={8} max={50} onChange={(e)=>setLength(e.target.value)} value={length} />
          <label>Length:{length}</label>
        </div>
        <div >
          <input className='check-boxes' type="checkbox" name="number" id='number' onClick={()=>setNumber(prev=>!prev)} checked={number}  />
          <label htmlFor="#number">Number</label>
          <input className='check-boxes' type="checkbox" onClick={()=>setCharacters(prev=>!prev)} checked={characters} name="" id="char" />
               <label htmlFor="#char">characters</label>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
