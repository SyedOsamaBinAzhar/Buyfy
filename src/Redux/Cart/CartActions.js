import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "./CartConstants"

export var addProductToCart = (product) => async (dispatch) => {
    try {
        // console.log(product)
        dispatch({
            type: ADD_PRODUCT_TO_CART,
            payload : {product}
        })
    } catch (error) {
        console.log(error)
    }
} 


export var removeProductFromCart = (productId) => async (dispatch) => {
    try {
        // console.log(productId)
        dispatch({
            type: REMOVE_PRODUCT_FROM_CART,
            payload: {productId}
        })
    } catch (error) {
        console.log(error)
    }
}

export var deleteProductFromCart = (productId) => async(dispatch) => {
    try {
        //  console.log(productId)
        // return existingProducts.filter((existingProduct) => existingProduct.id !== upcomingProductId)
        dispatch({
            type: DELETE_PRODUCT_FROM_CART,
            payload: {
                productId
            }
        })

    } catch (error) {
        console.log(error)
    }
}