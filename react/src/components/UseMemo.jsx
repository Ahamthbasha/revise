import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0)
    const [input,setInput] = useState('')

    const square = useMemo(()=>{
        console.log('recalculations')
        return count * count
    },[count])

    const increment = ()=>{
        setCount((count)=>count+1)
    }

  return (
    <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

    <h1>Count is :{count}</h1>
    <h2>Square is :{square}</h2>  
    <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseMemo
