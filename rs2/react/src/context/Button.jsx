import React from 'react'
import { useContext } from 'react'
import { contextCreation } from './ContextCreate'

const Button = () => {
    const {changeToggle} = useContext(contextCreation)
  return (
    <div>
      <button onClick={changeToggle}>toggle</button>
    </div>
  )
}

export default Button
