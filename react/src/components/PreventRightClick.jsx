import React from 'react'

const PreventRightClick = () => {
    const handleMouseDown = (e)=>{
        if(e.button == 2){
            e.preventDefault()
            return
        }
        console.log(e.button)
    }
  return (
    <div>
      <button onMouseDown={handleMouseDown} onContextMenu={(e)=>e.preventDefault()}>click</button>
    </div>
  )
}

export default PreventRightClick
