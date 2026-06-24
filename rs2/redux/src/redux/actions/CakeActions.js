export const RESTOCK = 'RESTOCK'
export const BUY  = 'BUY'

export function restock(){
    return {
        type:RESTOCK
    }
}

export function buy(){
    return{
        type:BUY
    }
}