import React from 'react'

const Enhance = (Component)=>{
    return function enhancedComponent(){
        return (
            <div style={{border:'2px solid blue'}}>
                <Component/>
            </div>
        )
    }
}

const Button = ()=>{
    return(
        <button>Click</button>
    )
}

const Hoc = Enhance(Button)

export default Hoc
