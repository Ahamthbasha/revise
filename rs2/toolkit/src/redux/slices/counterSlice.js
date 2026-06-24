import { createSlice } from "@reduxjs/toolkit"

const counterState = {
    count:0
}

const counterSlice = createSlice({
    name:'count',
    initialState:counterState,
    reducers:{
        increment:(state)=>{
            state.count += 1
        },
        decrement:(state)=>{
            state.count -= 1
        },
        reset:(state)=>{
            state.count = 0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer