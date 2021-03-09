import React from 'react'
import {addProductToCart, removeProductFromCart, deleteProductFromCart} from "../../Redux/Cart/CartActions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import "./ProductCard.css"
import Header from '../Header/Header'
import Button from '../Button/Button'


const ProductCard = ({addProductToCart,...product}) => {
    var {title,cost,id,coverPhoto} = product;
    return (
        <div className="product_card center">
            {/* <h3> <Link to={`/product/${id}`}>{title}</Link> -{cost}<button onClick={() => addProductToCart(product)}>Add to cart</button></h3> */}
           
            <div className="productCardHover center">
                <Button onClick={()=> addProductToCart(product)} fontSize={16} background="(0,0,0,0.8)" fontweight="regular">ADD TO CART</Button>
            </div>
            <div style={{background:`url(${coverPhoto})`, backgroundSize:"100%,100%,cover"}} className="productCardImage"></div>
            <Header style={{alignSelf: "flex-start" , marginTop:"0.5em"}} fontSize={18} fontweight="bold">{title}</Header>
            <Header style={{alignSelf: "flex-start"}} fontSize={18} fontweight="regular">{cost}</Header>

        </div>
    )
}

var actions = {
    addProductToCart,
}

export default connect(null,actions)(ProductCard)
