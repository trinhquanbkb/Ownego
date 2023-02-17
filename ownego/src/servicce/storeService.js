import Axios from 'axios'
import { DOMAIN_SERVER } from '../util/constant'

export const getAllStore = async () => {
    return await Axios.get(`${DOMAIN_SERVER}store/getAllStore`)
}

export const getAllStoreAndProduct = async () => {
    return await Axios.get(`${DOMAIN_SERVER}store/getAllStoreAndProduct`)
}