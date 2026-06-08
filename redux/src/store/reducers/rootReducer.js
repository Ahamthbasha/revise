import {combineReducers} from 'redux'
import { counterReducer } from './counterReducer'
import userReducer from './userReducer'
import cakeReducer from './cakeReducer'
import icecreamReducer from './icecreamReducer'

const rootReducers = combineReducers({
    count:counterReducer,
    user:userReducer,
    cake:cakeReducer,
    icecream:icecreamReducer
})

export default rootReducers