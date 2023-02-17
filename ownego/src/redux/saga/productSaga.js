import { takeLatest, put } from 'redux-saga/effects'
import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_SAGA } from '../type/ProductType'
import { getAllProduct } from '../../servicce/productService'


function* getAllProductSaga(action) {
    try {
        const promise = yield getAllProduct()
        yield put({
            type: GET_ALL_PRODUCT,
            data: promise.data
        })
    } catch (err) {

    }
}


export function* productSaga() {
    yield takeLatest(GET_ALL_PRODUCT_SAGA, getAllProductSaga)
}