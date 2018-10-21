import React, { Component } from "react";
import api from "../utils/api";

import "../App.css";

import Example from "./Example";

import ButtonExampleButton from "../Button";
import "semantic-ui-css/semantic.min.css";
import { Input, Form, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Landing extends Component {
  
  handleHost = () => {
    api.login();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example />

          <div className="Entry">
            <div className="Hosts">
              <p>Create a room:</p>

              <Button content="Create Room" onClick={this.handleHost} />
            </div>

            <div className="Users">
              <p>Enter room code:</p>

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

export default Landing;
