import React from 'react'
import CartList from "../CartList/CartList"
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {generateOrder} from "../../Redux/Orders/OrdersActions"


const Cart = ({generateOrder}) => {
    return (
        <div>
            <CartList/>
            <Link to="/checkout"><button onClick={generateOrder }>Check out</button></Link>
        </div>
    )
}

var actions = {
  generateOrder
}
export default connect(null,actions)(Cart)