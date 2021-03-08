import React from 'react'
import {addProductToCart, removeProductFromCart, deleteProductFromCart} from "../../Redux/Cart/CartActions"
import {connect} from "react-redux"

const ProductCard = ({addProductToCart,...product}) => {
    var {title,cost} = product;
    return (
        <div>
            <h3>{title}-{cost}<button onClick={() => addProductToCart(product)}>Add to cart</button></h3>

        </div>
    )
}

var actions = {
    addProductToCart,
}

export default connect(null,actions)(ProductCard)
