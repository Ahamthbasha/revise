import React from 'react'
import { useEffect } from 'react'

const PreventEntireClick = () => {
    const handleRightClick = (e)=>{
        alert('right Click wont work')
        e.preventDefault()
    }

    useEffect(()=>{
        document.addEventListener('contextmenu',handleRightClick)

        return()=>{
            document.removeEventListener('contextmenu',handleRightClick)
        }
    },[])
  return (
    <div>
      <h1>Try to click rightClick</h1>
    </div>
  )
}

export default PreventEntireClick
