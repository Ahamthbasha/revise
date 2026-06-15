import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
    reducer:{
        count:counterReducer,
        user:userReducer
    }
})

export default store