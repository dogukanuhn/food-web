import { applyMiddleware, combineReducers, createStore } from 'redux'
import { RootReducer } from './reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
export const store = createStore(
  combineReducers({ RootReducer }),
  composeWithDevTools()
)
