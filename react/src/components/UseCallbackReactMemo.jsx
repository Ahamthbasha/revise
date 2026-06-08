import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const Child = React.memo(({onIncrease})=>{
    return(
        <div>
            <button onClick={onIncrease}>increment</button>
        </div>
    )
})

const UseCallbackReactMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment =useCallback(()=>{
        setCount((count)=>count+1)
    },[])

    return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <h1>Count is : {count}</h1>
      <Child onIncrease = {increment}/>
    </div>
  )
}

export default UseCallbackReactMemo
