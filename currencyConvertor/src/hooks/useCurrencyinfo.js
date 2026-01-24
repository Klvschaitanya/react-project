import { useEffect, useState } from "react"
function useCurrencyInfo(currency){
const [data,setData] = useState({})
useEffect(()=>{
    fetch(`https://currencyrateapi.com/api/latest?base_currency=${currency.toUpperCase()}`)
.then
(res=>res.json())
.then(res=>setData(res.result)) 

},[currency])

return data
}

export default useCurrencyInfo