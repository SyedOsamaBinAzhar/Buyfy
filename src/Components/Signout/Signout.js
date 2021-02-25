import React from 'react'

import {signout} from "../../Redux/Auth/AuthActions" 
import {connect} from "react-redux"

const Signout = ({signout}) => {
    return (
        <div>
            <button onClick={signout}>SIGNOUT</button>
        </div>
    )
}

var actions={
    signout
}

export default connect(null,actions)(Signout)
