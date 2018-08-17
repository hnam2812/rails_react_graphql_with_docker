import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root'

export default createStore(rootReducer, applyMiddleware(thunk))