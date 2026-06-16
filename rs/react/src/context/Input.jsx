import React, { useContext } from 'react'
import { shareContext } from './Context'

const Input = () => {
    const {toggle} = useContext(shareContext)

  return (
    <div>
        <input type="checkbox" checked={toggle} />  
    </div>
  )
}

export default Input
