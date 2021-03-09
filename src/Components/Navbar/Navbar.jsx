import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import {connect} from "react-redux"
import {signout} from "../../Redux/Auth/AuthActions"


const MenuItem = ({children,to="#", ...restProps}) => {
    return (<div>
    
    <div {...restProps} className="menuItem" >
        <Link to={to}>
        <Header style={{cursor:"pointer",display:"inline"}} fontSize={24} fontweight="bold">{children}</Header>
        
        </Link>

    </div>
    
    </div>)
}


const Navbar = ({auth,signout}) => {
    return (
        <div className="navbar">
        <MenuItem to="/">LOGO</MenuItem>
        <MenuItem to="/categories">SHOP</MenuItem>
        <MenuItem>CART</MenuItem>
        {auth? <MenuItem to="/authentication" onCLick={signout}>LOGOUT</MenuItem> : <MenuItem to="/authentication">LOGIN</MenuItem>}



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
