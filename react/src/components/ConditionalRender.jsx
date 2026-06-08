import React from 'react'
import { useState } from 'react'

const ConditionalRender = () => {
    const [toggle,setToggle] = useState(false)
    const changeToggle = ()=>{
        setToggle(!toggle)
    }

    // if(toggle){
    //     return <p>Loading...</p>
    // }

  return (
    <div>
        {/* {toggle ? "Loading..." : "click to load"} */}
        {toggle && <p>Loading...</p>}
        <button onClick={changeToggle}>click</button>  
    </div>
  )
}

export default ConditionalRender
