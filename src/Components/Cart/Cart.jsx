import React from 'react'
import CartList from "../CartList/CartList"
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {generateOrder} from "../../Redux/Orders/OrdersActions"
import "./Cart.css"

const Cart = ({generateOrder, cart}) => {
    return (
        <div className="cart">
            <CartList/>
            <Link to="/checkout"><button  disabled={cart.length > 0 ? false : true} onClick={generateOrder}>Check out</button></Link>
        </div>
    )
}

var actions = {
  generateOrder
}

var mapState= (state) => ({
    cart: state.cart
})
export default connect(mapState,actions)(Cart)
