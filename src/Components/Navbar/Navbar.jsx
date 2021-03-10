import "./Navbar.css"

import React,{useState} from 'react'
import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import {connect} from "react-redux"
import {signout} from "../../Redux/Auth/AuthActions"
import Cart from "../Cart/Cart"


const MenuItem = ({children,to="#", ...restprops}) => {

    return (
    <div>
    
    <div {...restprops} className="menuItem" >
        <Link to={to}>
        <Header style={{cursor:"pointer",display:"inline"}} fontSize={24} fontweight="bold">{children}</Header>
        
        </Link>

    </div>
    
    </div>)
}


const Navbar = ({auth,signout}) => {
    var [isNavbarVisibile,setNavbarVisibility] = useState(false);

    return (
        <div className="navbar">
        <MenuItem to="/">LOGO</MenuItem>
        <MenuItem to="/categories">SHOP</MenuItem>
        <div>
        <Header style={{cursor:"pointer",display:"inline"}} fontSize={24} fontweight="bold" onClick={() => setNavbarVisibility(!isNavbarVisibile)}>CART</Header>
        { isNavbarVisibile ? <Cart/> : null}
        </div>
        {/* <MenuItem>CART</MenuItem> */}
        <MenuItem to="/test">TEST</MenuItem>

        {auth? <MenuItem to="/authentication" onClick={signout}>LOGOUT</MenuItem> : <MenuItem to="/authentication">LOGIN</MenuItem>}



        </div>


    )
}

var actions = {
    signout
}

var mapState = (state) => ({
    auth: state.auth
})

export default connect(mapState,actions)(Navbar)
