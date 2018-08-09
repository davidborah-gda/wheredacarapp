import React, { Component } from 'react';
import './App.css';

//temporary for testing
import Find from './pages/Find';
import Park from './pages/Park';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Logo from './components/Logo';
import Map from './components/Map';
import MapContainer from './components/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Find />
        <Park />
        <Signup />
        <Login />
        <Home />
        <Logo />
        <Map />
        <MapContainer />
      </div>
    );
  }
}

export default App;
