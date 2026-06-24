import { BUY, RESTOCK } from "../actions/CakeActions"

const cakeState = {
    cake : 0
}

export const cakeReducer = (state=cakeState,action)=>{
    switch(action.type){
        case RESTOCK:
            return {...state,cake:state.cake+1}
        case BUY:
            return {...state,cake:state.cake-1}
        default:
            return state
    }
}