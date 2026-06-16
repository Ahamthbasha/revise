import React, { createContext, useState } from 'react'

export const shareContext = createContext()

const Context = ({children}) => {

    const [toggle,setToggle] = useState(false)

    const changeToggle = ()=>{
        setToggle((toggle)=>!toggle)
    }

  return (
    <shareContext.Provider value={{toggle,changeToggle}}>
      {children}
    </shareContext.Provider>
  )
}

export default Context
