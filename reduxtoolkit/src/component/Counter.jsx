import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice'

const Counter = () => {
    const {count} = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    const increase = ()=>{
        dispatch(increment())
    }

    const decrease = ()=>{
        dispatch(decrement())
    }


  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>  
    </div>
  )
}

export default Counter
