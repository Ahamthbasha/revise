import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../store/actions/counterActions'

const Count = () => {
    const {count} = useSelector((state)=>state.count)
    const dispatch = useDispatch()

    const incre = ()=>{
        dispatch(increase())
    }

    const decre = ()=>{
        dispatch(decrease())
    }
    
  return (
    <div>
        <h1>Counter</h1>
        <h2>Count value is :{count}</h2>
        <button onClick={incre}>increment</button>
        <button onClick={decre}>decrement</button>  
    </div>
  )
}

export default Count
