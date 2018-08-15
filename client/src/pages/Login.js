import React, { Component } from 'react';
import auth from '../services/auth';
import './Login.css';

class Login extends Component {
    state = {
        error: null
    }
    async login(evt){
        evt.preventDefault();
        const form = evt.target;
        const inputs = Array.from(form.elements)
                            .filter(element => element.tagName === 'INPUT');
        const [ email, password ] = inputs.map(input => input.value);
        try {
            await auth.login(email, password);
            this.props.history.push({
                pathname: '/'
            });
        } catch (error) {
            this.setState({
                error: "Your Username or Password is incorrect"
            });
            form.reset();
        }
    }
    render() {
        return(
            <div className="Login-Page-Main-Container">
                <h1>Login:</h1>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <form onSubmit={this.login.bind(this)}>
                <div>
                    <input className="Email-Address-input" placeholder="Email Address" />
                </div>
                    <input type="password" className="Password-input" placeholder="Password" />
                <div>
                    <button type="submit" className="Login-Btn">Login</button>
                </div>
                </form>
                Don't have an account? <a href="/Signup">Sign Up</a>
            </div>
        );
    }
}

export default Login;