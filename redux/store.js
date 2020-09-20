import { combineReducers, createStore } from 'redux'
import foodReducer from './reducers/foodReducer'

export const store = createStore(foodReducer)
