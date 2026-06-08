import React from 'react'
import { useState } from 'react'

const Children = ({onSend})=>{

    const send = ()=>{
        onSend("baby daddys home")
    }

    return(
        <div>
            <button onClick={send}>send To Parent</button>
        </div>
    )
}


const ChildToParent = () => {
    const [data,setData] = useState()

    const receivedData = (msg)=>{
        setData(msg)
    }

  return (
    <div>
        <h1>Data from child component{data}</h1>
        <Children onSend={receivedData}/>  
    </div>
  )
}

export default ChildToParent
