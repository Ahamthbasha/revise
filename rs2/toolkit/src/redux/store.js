import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import logicalReducer from './slices/logicSlice'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        user:userReducer,
        logic:logicalReducer
    }
})

export default store