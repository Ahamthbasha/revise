export const INCREASE = 'increase'
export const DECREASE = 'decrease'

export function increase(){
    return{
        type:INCREASE
    }
}

export function decrease(){
    return{
        type:DECREASE
    }
}