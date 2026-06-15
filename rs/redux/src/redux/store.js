import { createStore,applyMiddleware } from "redux";
import {createLogger} from 'redux-logger'
import rootReducer from "./reducers/combineReducers";
import {thunk} from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk,createLogger()))

export default store