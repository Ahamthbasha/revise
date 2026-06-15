export const REQUEST = 'REQUEST'

export const USER = 'USER'

export const FAIL = 'FAIL'

export function request(){
    return{
        type:REQUEST
    }
}

export function user(users){
    return{
        type:USER,
        payload:users
    }
}

export function fail(err){
    return{
        type:FAIL,
        payload:err
    }
}

export const fetchUser =  ()=>{
    return async (dispatch)=>{
        try {
            dispatch(request())

            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            const result = await response.json()

            dispatch(user(result))
        } catch (error) {
            dispatch(fail(error.message))
        }
    }
}