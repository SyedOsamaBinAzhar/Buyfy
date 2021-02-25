import React from 'react'
import GoogleSigninBtn from '../../Components/GoogleSigninBtn/GoogleSigninBtn'
import SigninForm from '../../Components/SigninForm/SigninForm'
import Signout from '../../Components/Signout/Signout'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Authentication = () => {
    return (
        <div>
            <h1>Auth Page</h1>
            <SignupForm/>
            <SigninForm/>
            <Signout/>
            <GoogleSigninBtn/>
        </div>
    )
}

export default Authentication
