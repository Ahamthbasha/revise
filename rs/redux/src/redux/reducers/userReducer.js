import { FAIL, REQUEST, USER } from "../actions/userAction"

const initialState = {
    loading:false,
    users:[],
    error:''
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case REQUEST:
            return {...state,loading:true}
        case USER:
            return {...state,loading:false,users:action.payload,error:""}
        case FAIL:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}