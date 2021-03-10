import React from 'react'
import {connect} from "react-redux"
import CartListItem from '../CartListItem/CartListItem'
import "./CartList.css"
const CartList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="cartList">
            {cartItems.map((item) => <CartListItem key={item.id} {...item}></CartListItem>)}
         
        </div>
    )


}

var mapState = (state) => ({
    cartItems : state.cart
})

export default connect(mapState)(CartList)
