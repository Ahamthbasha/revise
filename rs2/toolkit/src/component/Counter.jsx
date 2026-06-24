import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/counterSlice'

const Counter = () => {
    const {count} = useSelector((state)=>state.counter)

    const dispatch = useDispatch()

    const increase = ()=>{
        dispatch(increment())
    }

    const decrease = ()=>{
        dispatch(decrement())
    }

    const backToZero = ()=>{
        dispatch(reset())
    }

  return (
    <div>
        <h1>Count is : {count}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={backToZero}>Reset</button>  
    </div>
  )
}

export default Counter
