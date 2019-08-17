import React from 'react'

import SignIn from '../../components/accounts/signin/signin.component'
import SignUp from '../../components/accounts/signup/signup.component'
import './Login.styles.scss'

export const Login = () => (
    <div className="login-page">
        <SignIn />
        <SignUp />
    </div>
)