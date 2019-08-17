import React from 'react'

import { FormInput } from '../../form-input/forminput.component'
import { CustomButton } from '../../custom-button/custom-button.component'
import { signInWithGoogle } from '../../../firebase/firebase.utils'
import './signup.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            display_name: ''
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
            < div className="sign-up" >
                <h2>New to Fyndd Store?</h2>
                <span className='title'>Create your Account</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    {/* <FormInput
                        name='displayName'
                        label='Display Name'
                        type='text'
                        value={this.state.display_name}
                        handleChange={this.handleChange}
                    /> */}
                    <FormInput
                        name='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    {/* <FormInput
                        name='repeatPassword'
                        label='Repeat Password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    /> */}
                    <div className="buttons">
                        <CustomButton type='submit'> Sign Up </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooglebtn='Googlebtn'> Google </CustomButton>
                    </div>
                </form>
            </div >
        )
    }
}
export default SignUp