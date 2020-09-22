import { combineReducers, createStore } from 'redux'
import { FoodReducer, RootReducer } from './reducers'

export const store = createStore(combineReducers({ RootReducer, FoodReducer }))
