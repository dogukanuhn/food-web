import { applyMiddleware, combineReducers, createStore } from 'redux'
import { FoodReducer, RootReducer, HomeReducer } from './reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
export const store = createStore(
  combineReducers({ HomeReducer, RootReducer, FoodReducer }),
  composeWithDevTools()
)
