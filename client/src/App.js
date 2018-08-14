import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import Find from './pages/Find';
import Park from './pages/Park';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Logo from './components/Logo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/park" component={Park} />
          <Route path="/find" component={Find} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
