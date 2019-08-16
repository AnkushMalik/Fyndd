import React from 'react'

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
                <span>Sign In with your registered email</span>
                <form onSubmit={this.handleSubmit}>
                    <h5>Email</h5>
                    <input
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <h5>Password</h5>
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='submit' />

                </form>
            </div >
        )
    }
}
export default SignIn