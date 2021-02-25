import React from 'react'
import { connect } from 'react-redux'
import {googleSignin} from "../../Redux/Auth/AuthActions"


const GoogleSigninBtn = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin}>Sign in with google</button>
        </div>
    )
}

var actions = {
    googleSignin
}

export default connect(null,actions)(GoogleSigninBtn)
