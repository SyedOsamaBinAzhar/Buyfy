import React, { useState } from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { calculateTotal } from '../../Utility/CheckoutUtility'
import {connect} from "react-redux"
import OrderForm from '../../Components/OrderForm/OrderForm'

const Checkout = ({total}) => {
    // console.log(total)
    var [shipFormShown, setShipFormShown] = useState(false);


    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutList/>
            <h3>Total Amount - {total}</h3>
            { shipFormShown &&  <OrderForm/>}
            <button onClick={() => setShipFormShown(!shipFormShown)}>Proceed And Pay</button>
            
        </div>
    )
}

var mapState = (state) => ({
    total : calculateTotal(state.cart)
})

export default connect(mapState)(Checkout)
