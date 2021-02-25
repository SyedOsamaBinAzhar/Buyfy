import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Authentication = () => {
    return (
        <div>
            <h1>Auth Page</h1>
            <SignupForm/>
            <SigninForm/>
           
        </div>
    )
}

export default Authentication
