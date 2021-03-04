import React from 'react'
import {addProductToCart, removeProductFromCart} from "../../Redux/Cart/CartActions"
import {connect} from "react-redux"

const ProductCard = ({removeProductFromCart,addProductToCart,...product}) => {
    var {title,cost} = product;
    return (
        <div>
            <h3>{title}-{cost}<button onClick={() => addProductToCart(product)}>Add to cart</button> <button onClick={() => removeProductFromCart(product.id)}>Remove item</button></h3>

        </div>
    )
}

var actions = {
    addProductToCart,
    removeProductFromCart
}

export default connect(null,actions)(ProductCard)
