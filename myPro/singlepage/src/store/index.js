import {createStore,applyMiddleware} from 'redux'
import reducers from "./reducer"
import createSagaMiddleware from 'redux-saga'
import sagas from "./sagas"
const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducers,applyMiddleware(createSagaMiddleware));
export default store;