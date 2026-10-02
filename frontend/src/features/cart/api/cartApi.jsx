import api from '../../../app/api/api.jsx'

export const getCartApi = async() => {
    try {
        const cart  = await api.get('/cart/');

        return cart.data
    } catch (error) {
        console.log(error)
    }
} 

export const addToCartApi = async({ productId, size, quantity }) => {
    try {
        await api.post('/cart/addtocart', {
            productId,
            quantity,
            size
        })
    } catch (error) {
        console.log(error);
    }
}

export const removeItemsFromCartApi = async({ productId, size, quantity = 1 }) => {

    try {
        await api.delete('/cart/remove', {
            data: {
                productId,
                size,
                quantity
            }
        }) 
    } catch (error) {
        console.log(error)
    }
} 

export const incItemQty = async ({ productId, size, quantity }) => {
    try {
        await api.post('/cart/addtocart', {
            productId,
            size,
            quantity
        });
    } catch (error) {
        console.log(error);
    }
}

export const decItemQty = async ({ productId, size, quantity }) => {
    try {
        await api.post('/cart/decrease', {
            productId,
            size,
            quantity
        })
    } catch (error) {
        console.log(error)
    }
}