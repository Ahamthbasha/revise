import { BUY_CAKE } from "../actions/cakeAction"

const initialState = {
    cake:10
}

const cakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {...state,cake:state.cake-1}
        default:
            return state
    }
}

export default cakeReducer