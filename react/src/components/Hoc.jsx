import React from 'react'

const Enhance = (Given)=>{
    return function enhance(){
        return(
            <div style={{border:"2px solid green"}}>            
                <Given/>
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
