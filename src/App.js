import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Party from './components/Party';

import './App.css';

import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/party' component={Party}/>
      </Switch>
    );
  }
}

export default App;
