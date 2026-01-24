  import  {useState} from "react"
  export default function useCounter(initial = 10) {
    const [count, setCount] = useState(initial);
    function increase() {
      setCount((prev) => prev + 1);
    }
    function decrease() {
      setCount((prev) => prev - 1);
    }
    function clear() {
      setCount(0);
    }

    return { count, increase, decrease, clear };
  }

 export function hello(){
    return "hello"
  }

  