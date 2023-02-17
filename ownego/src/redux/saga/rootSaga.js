import { all } from 'redux-saga/effects'
import { productSaga } from './productSaga'
import { storeSaga } from './storeSaga'

export function* rootSaga() {
    yield all([
        // xử lý gì đó....
        storeSaga(),
        productSaga()
    ])
}