export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

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

export function failure(msg){
    return{
        type:FAILURE,
        payload:msg
    }
}

export const userFetch = ()=>{
    return async function(dispatch){
        try {
            dispatch(request())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            dispatch(success(result))
        } catch (error) {
            dispatch(failure(error.message))
        }
    }
}