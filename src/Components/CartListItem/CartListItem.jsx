import React from 'react'
import {connect} from "react-redux"
import {addProductToCart, removeProductFromCart,deleteProductFromCart} from "../../Redux/Cart/CartActions"
import Paragraph from '../Paragraph/Paragraph'
import "./CartListItem.css"


const CartListItem = ({deleteProductFromCart,removeProductFromCart,addProductToCart,...product}) => {
    
    var {title,quantity,cost,id,coverPhoto} = product
    // console.log(coverPhoto)
    
    return (
        <div className="cartListItem">
            <div stle={{background: `url(${coverPhoto})`}} className="cartItemImage"></div>
            <div className="cartItemDesc">
                <Paragraph fontSize={17} fontweight = "semiBold">{title}</Paragraph>
                <div style={{display:"flex"}}>
                <Paragraph fontweight = "regular">{cost} x {quantity}</Paragraph>   <Paragraph>{cost * quantity}</Paragraph>
                </div>
            </div>
            {/* <h1>{title} - {cost} - <button onClick={() => deleteProductFromCart(id)}>X</button> </h1>
            <h3><button onClick={() => addProductToCart(product)}>+</button>  {quantity}  <button onClick={() => removeProductFromCart(id)}>-</button></h3>
             */}

        </div>
    )
}

var actions = {
    addProductToCart,
    removeProductFromCart,
    deleteProductFromCart
}

export default connect(null,actions)(CartListItem)
