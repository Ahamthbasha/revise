import {combineReducers} from 'redux'
import { counterReducer } from './counterReducer'
import { cakeReducer } from './cakeReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
    count:counterReducer,
    cake:cakeReducer,
    user:userReducer
})

export default rootReducer