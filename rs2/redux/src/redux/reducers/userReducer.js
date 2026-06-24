import { FAIL, failed, request, REQUEST, success, SUCCESS } from "../actions/userAction"

const userState = {
    loading:false,
    users:[],
    error:''
}

export const userReducer = (state=userState,action)=>{
    switch(action.type){
        case REQUEST:
            return {...state,loading:true}
        case SUCCESS:
            return {...state,loading:false,users:action.payload,error:''}
        case FAIL:
            return {...state,loading:false,users:[],error:action.payload}
        default:
            return state
    }
}

export const fetchUser = ()=>{
    return async (dispatch)=>{
        try {
            dispatch(request())
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await response.json()
            dispatch(success(result))
        } catch (error) {
            dispatch(failed(error.message))
        }
        finally{
            console.log("async task done")
        }
    }
}