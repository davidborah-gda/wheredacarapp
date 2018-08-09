import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="Home-Page-Main-Container">
                <button className="Find-Btn">Find</button>
                <button className="Park-Btn">Park</button>
                <button className="UnPark-Btn">UnPark</button>
            </div>
        );
    }
}

export default Home;