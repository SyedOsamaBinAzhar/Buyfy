import React from 'react'
import {connect} from "react-redux"
import CartListItem from '../CartListItem/CartListItem'

const CartList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div>
            {cartItems.map((item) => <CartListItem key={item.id} {...item}></CartListItem>)}
        </div>
    )


}

var mapState = (state) => ({
    cartItems : state.cart
})

export default connect(mapState)(CartList)
