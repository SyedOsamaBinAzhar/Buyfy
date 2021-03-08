import React from 'react'
import CartList from "../CartList/CartList"
import {Link} from "react-router-dom";



const Cart = () => {
    return (
        <div>
            <CartList/>
            <Link to="/checkout"><button>Check out</button></Link>
        </div>
    )
}

export default Cart
