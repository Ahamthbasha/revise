import {createSlice} from '@reduxjs/toolkit'

const logicalState = {
    count:0,
    dir : 'UP'
}

const logicalSlice = createSlice({
    name:'logic',
    initialState:logicalState,
    reducers:{
        increment : (state)=>{state.count+=1},
        decrement : (state)=>{state.count-=1},
        changeDir : (state,action)=>{state.dir = action.payload}
    }
})

export const {increment,decrement,changeDir} = logicalSlice.actions

export default logicalSlice.reducer