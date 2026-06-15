export const RESTOCK_CAKE = 'RESTOCK_CAKE'

export const BUY_CAKE = 'BUY_CAKE'

export function restockCake(){
    return{
        type:RESTOCK_CAKE
    }
}

export function buyCake(){
    return{
        type:BUY_CAKE
    }
}