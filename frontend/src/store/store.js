import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { elementReducer } from './element.reducer.js'

const rootReducer = combineReducers({
    elementModule: elementReducer,
})

// REDUX_DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// For debug only!
store.subscribe(() => {
    console.log('Store state is:', store.getState())
})
