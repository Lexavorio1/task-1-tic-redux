import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todosReducer } from './reducers'
import { thunk } from 'redux-thunk'

const reducer = combineReducers({ 
    todosState: todosReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))