import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDir, decrement, increment } from '../redux/slices/logicSlice'

const Logical = () => {
    const {count,dir} = useSelector((state)=>state.logic)
    console.log(count,dir)
    const dispatch = useDispatch()
    const AutoIncOrDec = ()=>{
        if(count == 0){
            dispatch(increment())
            dispatch(changeDir('UP'))
        }
        else if(count == 10){
            dispatch(decrement())
            dispatch(changeDir('DOWN'))
        }
        else{
            dir == 'UP' ? dispatch(increment()) : dispatch(decrement()) 
        }
    }
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={AutoIncOrDec}>AutoIncOrDec</button>
    </div>
  )
}

export default Logical
