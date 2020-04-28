import React from 'react';

import './Sign-in.style.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value}) 
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an Account.</h2>
                <span>Signin with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <input

                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    required
                    />
                    <label>Email</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password</label>
                    <input type="submit" value="submit form"/>
                </form>
            </div>
        )
    }
}

export default SignIn;