import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {
    const initialState = {
        count : 0
    }

    const dispatchFn = (state=initialState,action)=>{
        switch(action.type){
            case 'INCREMENT':
               return {...state,count:state.count+1}
            case 'DECREMENT':
                return {...state,count:state.count-1}
            case 'RESET':
                return {...state,count:0}
        }
    }

    const [state,dispatch] = useReducer(dispatchFn,initialState)

  return (
    <div>
    <h1>count:{state.count}</h1>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>Increase</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrease</button>
    <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default UseReducer
