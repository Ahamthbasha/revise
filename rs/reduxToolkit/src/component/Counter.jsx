import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/counterSlice'

const Counter = () => {
    const count = useSelector((state)=>state.count.count)

    const dispatch = useDispatch()

    return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>dispatch(increment())}>inc</button> 
        <button onClick={()=>dispatch(decrement())}>dec</button>
        <button onClick={()=>dispatch(reset())}>Res</button>     
    </div>
  )
}

export default Counter
