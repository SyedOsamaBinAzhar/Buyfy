import React from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { calculateTotal } from '../../Utility/CheckoutUtility'
import {connect} from "react-redux"

const Checkout = ({total}) => {
    console.log(total)
    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            <button>Pay Now</button>
        </div>
    )
}

var mapState = (state) => ({
    total : calculateTotal(state.cart)
})

export default connect(mapState)(Checkout)
