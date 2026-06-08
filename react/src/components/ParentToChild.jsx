import React from 'react'
import { useState } from 'react'

const Children = ({props})=>{
    const {count,increment,decrement,reset} = props
    return(
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

const ParentToChild = () => {
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

  return (
    <div>
        <Children props={{count,increment,decrement,reset}}/>  
    </div>
  )
}


export default ParentToChild
