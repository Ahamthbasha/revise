import React, { useContext } from 'react'
import { shareContext } from './Context'

const Button = () => {
    const {changeToggle} = useContext(shareContext) 
  return (
    <div>
      <button onClick={changeToggle}>change</button>
    </div>
  )
}

export default Button
