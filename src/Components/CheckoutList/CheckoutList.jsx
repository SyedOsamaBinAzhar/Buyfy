import React from 'react'
import {connect} from "react-redux"
import CartListItem from '../CartListItem/CartListItem'
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem'
import Paragraph from '../Paragraph/Paragraph'
import "./CheckoutList.css"


const CheckoutList = ({cartItems}) => {
    console.log(cartItems)
    return (
        <div className="checkoutList">
            <div className="checkoutListItem checkoutListItem-extends">
                <Paragraph fontSize={20} fontweight="semiBold">Product</Paragraph>
                <Paragraph fontSize={20} fontweight="semiBold">Quantity</Paragraph>
                <Paragraph fontSize={20} fontweight="semiBold">Price</Paragraph>

            
            </div>
            {cartItems.map((item) => <CheckoutListItem key={item.id} {...item}/>)}
        </div>
    )


}

var mapState = (state) => ({
    cartItems : state.cart
})

export default connect(mapState)(CheckoutList)
