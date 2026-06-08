import { createSlice } from "@reduxjs/toolkit"
import fetchUser from "../asyncTasks/userFetch"

const initialState = {
    loading:false,
    users:[],
    error:''
}

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error =action.payload
        })
    }
})

export default userSlice.reducer