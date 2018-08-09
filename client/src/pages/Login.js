import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return(
            <div>
                <h1>Login:</h1>
                <input className="Email-Address-input" placeholder="Email Address" />
                <input className="Password-input" placeholder="Password" />
                <button className="Login-Btn">Login</button>
            </div>
        );
    }
}

export default Login;