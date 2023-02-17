import Axios from 'axios'
import { DOMAIN_SERVER } from '../util/constant'

export const getAllProduct = async () => {
    return await Axios.get(`${DOMAIN_SERVER}product/getAllProduct`)
}
