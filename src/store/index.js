import reducers from './reducers'
import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))