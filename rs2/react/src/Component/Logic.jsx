import React from 'react'
import { useState } from 'react'

const Child = ({onInput})=>{
    return(
        <div>
            <input type="text" onChange={(e)=>onInput(e.target.value)} />
        </div>
    )
}

const Logic = () => {
    const [input,setInput] = useState()
  return (
    <div>
        <Child onInput={setInput}/>
      <h1>{input}</h1>
    </div>
  )
}

export default Logic
