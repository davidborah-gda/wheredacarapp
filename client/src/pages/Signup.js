import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
        return(
            <div className="Signup-Page-Main-Container">
                <input className="Email-input" placeholder="Email Address" />
                <input className="Password-input" placeholder="Password" />
                <button className="Signup-Btn">Signup</button>
            </div>
        );
    }
}

export default Signup;