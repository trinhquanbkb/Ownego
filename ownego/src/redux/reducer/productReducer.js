import { GET_ALL_PRODUCT } from "../type/ProductType"

const product = {
    listProduct: []
}

const productReducer = (state = product, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT: {
            let arrayProduct = action.data
            state.listProduct = [...arrayProduct]
            return { ...state }
        }
        default: {
            return { ...state }
        }
    }
}

export default productReducer