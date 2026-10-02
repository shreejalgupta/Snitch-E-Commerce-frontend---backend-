import axios from "axios"
import api from '../../app/api/api.jsx'

export const getAllProductApi = async() => {
    try {
        const res = await api.get('/products');
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getSingleProduct = async(id) => {
    try {
        const res = await api.get(`/products/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}