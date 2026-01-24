import React, { useState } from "react";
import useCounter,{hello } from "./customHooks/counter";
export default function App() {
  const { count, increase, decrease, clear } = useCounter(100);
  const [temp,settemp] = useState("")
  return (
    <div>
      {count}

      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={clear}>clear</button>
      <div>{temp}</div>
      <button onClick={()=>settemp(()=>hello())}>hello</button>
    </div>
  );
}
