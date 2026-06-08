import React from 'react'
import { useContext } from 'react'
import { contextCreation } from './Context'

const Button = () => {
    const {changeToggle} = useContext(contextCreation)
  return (
    <div>
      <button onClick={changeToggle}>Change</button>
    </div>
  )
}

export default Button
