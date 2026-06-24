import React from 'react'
import { useContext } from 'react'
import { contextCreation } from './ContextCreate'

const Input = () => {
    const {toggle} = useContext(contextCreation)
  return (
    <div>
      <input type='checkbox' checked={toggle}/>
    </div>
  )
}

export default Input
