import React from 'react'

const HocComponent = (Component)=>{
    return function enhanceComponent(){
        return(
            <div style={{border:'2px solid blue'}}>
                <Component/>
            </div>
        )
    }
}

const Button = ()=>{
    return(
        <div>
            <button>Click</button>
        </div>
    )
}


const Hoc = HocComponent(Button)

export default Hoc
