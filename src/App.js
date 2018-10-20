import React, { Component } from 'react';

import './App.css';

import Example from './components/Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />

          <p>
            Enter room code:
          </p>
          <form method="post">
            <input type="text" name="room" />
            <input type="submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
