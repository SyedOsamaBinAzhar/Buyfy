import React, { useState } from 'react'
import CheckoutList from '../../Components/CheckoutList/CheckoutList'
import { calculateTotal } from '../../Utility/CheckoutUtility'
import {connect} from "react-redux"
import OrderForm from '../../Components/OrderForm/OrderForm'
import "./Checkout.css"
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'


const Checkout = ({total}) => {
    // console.log(total)
    var [shipFormShown, setShipFormShown] = useState(false);


    return (
        <div className="checkoutPageCont">
          <div className="checkout">
          {/* <h1>Checkout</h1> */}
          <Header fontSize={40} fontweight="bold">Shopping Cart</Header>
          <CheckoutList/>
          <div className="checkoutBottomContent">
          <Header fontSize={40} fontweight="bold">Total - 490$</Header>
            <Button style={{justifySelf: "end" , borderRadius: "20px"}} fontSize={30} fontweight="semiBold">Proceed AND PAY</Button>
          </div>
          <h3>Total Amount - {total}</h3>
                {/*
            
           
            { shipFormShown &&  <OrderForm/>}
            <button onClick={() => setShipFormShown(!shipFormShown)}>Proceed And Pay</button> */}
          </div>
            
        </div>
    )
}

var mapState = (state) => ({
    total : calculateTotal(state.cart)
})

export default connect(mapState)(Checkout)
