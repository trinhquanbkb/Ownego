import { GET_ALL_STORE, GET_ALL_STORE_AND_PRODUCT } from "../type/StoreType"

const store = {
    listStore: [],
    listStoreAndProduct: [],
    status: null
}

const storeReducer = (state = store, action) => {
    switch (action.type) {
        case GET_ALL_STORE: {
            let arrayStore = action.data
            state.listStore = [...arrayStore]
            return { ...state }
        }
        case GET_ALL_STORE_AND_PRODUCT: {
            let arrayStoreProduct = action.data
            state.listStoreAndProduct = [...arrayStoreProduct]
            return { ...state }
        }
        case 'SET_STATUS_NAV': {
            state.status = action.data
            return {...state}
        }
        default: {
            return { ...state }
        }
    }
}

export default storeReducer