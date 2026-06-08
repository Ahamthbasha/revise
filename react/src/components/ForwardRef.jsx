import React from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'

const Child = forwardRef((props,ref)=>{
    const focus = ()=>{
        ref.current.focus()
    }
    return(
        <div>
            <input type="text" ref={ref}/>
            <button onClick={focus}>Focus</button>
        </div>
    )
})

const ForwardRef = () => {
    const inputRef = useRef()
  return (
    <div>
      <Child ref={inputRef}/>
    </div>
  )
}

export default ForwardRef
