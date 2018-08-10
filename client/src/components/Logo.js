import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    render() {
        return(
            <div className="Logo-Container">
                <img src="http://via.placeholder.com/350x100" className="Logo" />
            </div>
        );
    }
}

export default Logo;