import React from 'react'
import { useState } from 'react'

const Child = ({onSend})=>{
    return(
        <div>
            <input type="text" onChange={(e)=>onSend(e.target.value)}/>
        </div>
    )
}

const Logical1 = () => {
    const [data,setData] = useState('')
  return (
    <div>
        <Child onSend = {setData}/>
        <h1>{data}</h1>      
    </div>
  )
}

export default Logical1
