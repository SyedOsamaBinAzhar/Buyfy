import React from 'react'
import {addProductToCart, removeProductFromCart, deleteProductFromCart} from "../../Redux/Cart/CartActions"
import {connect} from "react-redux"

const ProductCard = ({removeProductFromCart,addProductToCart,deleteProductFromCart,...product}) => {
    var {title,cost} = product;
    return (
        <div>
            <h3>{title}-{cost}<button onClick={() => addProductToCart(product)}>Add to cart</button> <button onClick={() => removeProductFromCart(product.id)}>Remove item</button> <button onClick={() => deleteProductFromCart(product.id)}>delete item</button></h3>

        </div>
    )
}

var actions = {
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart
}

export default connect(null,actions)(ProductCard)
