import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './saga/rootSaga'
import storeReducer from './reducer/storeReducer'
import productReducer from './reducer/productReducer'


const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    // tất cả reducer sẽ định nghĩa tại đây
    storeReducer,
    productReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga))
middleWareSaga.run(rootSaga)

export default store