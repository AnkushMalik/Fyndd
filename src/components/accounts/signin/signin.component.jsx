import React from 'react'

import { FormInput } from '../../form-input/forminput.component'
import { CustomButton } from '../../custom-button/custom-button.component'
import { signInWithGoogle } from '../../../firebase/firebase.utils'
import './signin.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            < div className="sign-in" >
                <h2>I already have an account</h2>
                <span className='title'>Sign In with your registered email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <div className="buttons">
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooglebtn='Googlebtn'> Google </CustomButton>
                    </div>
                </form>
            </div >
        )
    }
}
export default SignIn