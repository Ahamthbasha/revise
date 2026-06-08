import { createStore,applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducer";
import {createLogger} from 'redux-logger'
import {thunk} from 'redux-thunk'

const store = createStore(rootReducers,applyMiddleware(createLogger(),thunk))

export default store