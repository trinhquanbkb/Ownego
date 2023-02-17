import { takeLatest, put } from 'redux-saga/effects'
import { getAllStore, getAllStoreAndProduct } from '../../servicce/storeService'
import { GET_ALL_STORE, GET_ALL_STORE_AND_PRODUCT, GET_ALL_STORE_AND_PRODUCT_SAGA, GET_ALL_STORE_SAGA } from '../type/StoreType'

function* getAllStoreSaga(action) {
    try {
        const promise = yield getAllStore()
        yield put({
            type: GET_ALL_STORE,
            data: promise.data
        })
    } catch (err) {

    }
}

function* getAllStoreAndProductSaga(action) {
    try {
        const promise = yield getAllStoreAndProduct()
        yield put({
            type: GET_ALL_STORE_AND_PRODUCT,
            data: promise.data
        })
    } catch (err) {

    }
}


export function* storeSaga() {
    yield takeLatest(GET_ALL_STORE_SAGA, getAllStoreSaga)
    yield takeLatest(GET_ALL_STORE_AND_PRODUCT_SAGA, getAllStoreAndProductSaga)
}