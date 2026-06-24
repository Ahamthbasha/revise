import React from 'react'
import { Children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const contextCreation = createContext()

const ContextCreate = ({children}) => {
    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }
  return (
    <contextCreation.Provider value={{toggle,changeToggle}}>
      {children}
    </contextCreation.Provider>
  )
}

export default ContextCreate
