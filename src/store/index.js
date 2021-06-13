import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line import/no-extraneous-dependencies

import rootReducer from '../modules'

const middlewares = [thunk, logger]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
