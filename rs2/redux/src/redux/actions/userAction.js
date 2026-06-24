export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAIL ='FAIL'

export function request(){
    return{
        type:REQUEST
    }
}

export function success(users){
    return{
        type:SUCCESS,
        payload:users
    }
}

export function failed(err){
    return{
        type:FAIL,
        payload:err
    }
}