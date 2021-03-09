import React from 'react'
import {connect} from "react-redux"
import {addProductToCart, removeProductFromCart,deleteProductFromCart} from "../../Redux/Cart/CartActions"

const CheckoutListItem = ({deleteProductFromCart,removeProductFromCart,addProductToCart,...product}) => {
    
    var {title,quantity,cost,id} = product
    
    return (
        <div>
            <h1>{title} - {cost} - <button onClick={() => deleteProductFromCart(id)}>X</button> </h1>
            <h3><button onClick={() => addProductToCart(product)}>+</button>  {quantity}  <button onClick={() => removeProductFromCart(id)}>-</button></h3>
            

        </div>
    )
}

var actions = {
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart
}

export default connect(null,actions)(CheckoutListItem)
