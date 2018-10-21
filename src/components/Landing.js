import React, { Component } from 'react';

import '../App.css';

import Example from './Example';

import ButtonExampleButton from '../Button';
import 'semantic-ui-css/semantic.min.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />

          <div className="Entry">
            <div className="Hosts">
              <p>
                Create a room:
              </p>
              <Button content="Create Room" />
            </div>

            <div className="Users">
              <p>
                Enter room code:
              </p>

              <Form fluid>
                <Form.Input placeholder="Room code..." name="room" />
                <Button content="Submit" />
              </Form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
