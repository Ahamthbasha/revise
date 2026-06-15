import { BUY_CAKE, RESTOCK_CAKE } from "../actions/cakeActions"

const initialState ={
    cake:0
}

export const cakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case RESTOCK_CAKE:
            return {...state,cake:state.cake+1}
        case BUY_CAKE:
            return {...state,cake:state.cake-1}
        default:
            return state
    }
}