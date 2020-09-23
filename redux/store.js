import { combineReducers, createStore } from 'redux'
import { FoodReducer, RootReducer, HomeReducer } from './reducers'

export const store = createStore(
  combineReducers({ HomeReducer, RootReducer, FoodReducer })
)
