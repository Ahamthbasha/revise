import React from 'react'
import { useState } from 'react'

const Commonfn = ({children})=>{
    const [count,setCount] = useState(0)
    
    const increment = ()=>{
        setCount((count)=>count+1)
    }

    const decrement = ()=>{
        setCount((count)=>count-1)
    }

    const reset = ()=>{
        setCount(0)
    }

    return children(count,increment,decrement,reset)
}

const RenderProps = () => {
  return(
    <Commonfn>
        {(count,increment,decrement,reset)=>(
            <div>
                <h1>Count is : {count}</h1>
                <button onClick={increment}>Increase</button>
                <button onClick={decrement}>Decrease</button>
                <button onClick={reset}>Reset</button>
            </div>
        )}
    </Commonfn>
  )
}

export default RenderProps
