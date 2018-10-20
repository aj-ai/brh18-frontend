import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Party from './components/Party';

import './App.css';

import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/party' component={Party}/>
      </Switch>
    );
  }
}

export default App;
