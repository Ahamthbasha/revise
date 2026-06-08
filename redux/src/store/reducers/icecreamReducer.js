import { BUY_ICECREAM } from "../actions/icecreamAction"

const icecreamState = {
    icecream : 10
}

const icecreamReducer = (state=icecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,icecream:state.icecream-1}
        default:
            return state
    }
}

export default icecreamReducer