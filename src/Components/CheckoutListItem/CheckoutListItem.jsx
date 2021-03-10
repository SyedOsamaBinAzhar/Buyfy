import React from 'react'
import {connect} from "react-redux"
import {addProductToCart, removeProductFromCart,deleteProductFromCart} from "../../Redux/Cart/CartActions"
import Paragraph from '../Paragraph/Paragraph'
import Button from "../Button/Button"
import "./CheckoutListItem.css"
const CheckoutListItem = ({deleteProductFromCart,removeProductFromCart,addProductToCart,...product}) => {
    
    var {title,quantity,cost,id,coverPhoto} = product
    
    return (
        <div className="checkout-list-item">
            <div className="checkout-item-product">
                <div className="checkout-item-product-image" style={{backgroundSize: `url(${coverPhoto})`}}></div>
                <Paragraph fontSize={20} fontweight="semiBold">{title}</Paragraph>
            </div>
            <div  className="checkout-item-quantity center" style={{flexFlow:"row"}} >
                <Button onClick={() => addProductToCart(product)} color="black" background="white"  style={{borderTopLeftRadius:"20px" , borderBottmLeftRadius:"20px", transform:"translateX(5px)" }}>+</Button><Button color="black" background="white">{quantity}</Button><Button onClick={() => deleteProductFromCart(id)}  color="black" background="white" style={{borderTopRightRadius:"20px" , borderBottomRighttRadius:"20px", transform:"translateX(-5px)" }}>-</Button>
            </div>
            <div className="checkout-item-price center">
                <Paragraph fontSize={26} fontweight="semiBold">{cost}</Paragraph>
            </div>
            <div className="checkout-item-cross">
            <Paragraph onClick={() => deleteProductFromCart(product)} fontSize={30} fontweight="semiBold">x</Paragraph>

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

export default connect(null,actions)(CheckoutListItem)
