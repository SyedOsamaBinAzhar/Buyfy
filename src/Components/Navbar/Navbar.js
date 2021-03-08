import "./Navbar.css"

import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"><Link to="/home"><h1>Logo</h1></Link></div>
            
            <div className="navItemContainer">
            <div>
            <Link to="/categories">
            <h3 className="navItem">Categories</h3>
            </Link>

            </div>  
            
            <div>
            <Link to="/authentication">
            <h3 className="navItem">Auth</h3>
            </Link>
            </div>

            <div>
            <Link to="/test">
            <h3 className="navItem">Test</h3>
            </Link>
            </div>

            </div>

        </div>


    )
}

export default Navbar
