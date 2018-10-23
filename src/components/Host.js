
import React, { Component } from 'react';

import '../App.css';

import Example from './Example';

import ButtonExampleButton from '../Button';
import 'semantic-ui-css/semantic.min.css';
import { Input, Form, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import {
    
} from 'semantic-ui-react';
import qs from 'query-string';
import axios from 'axios';
import api from '../utils/api';

class Host extends Component {
  constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        var {token} = qs.parse(this.props.location.search);
        api.setAuthToken(token);
        
        api.getPlaylists().then((res) => {
            console.log(res);
        });
    }

    render() {
        return (<h1>Host</h1>);
    }

  render() {
    var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
    var spotifyApi = new SpotifyWebApi({
      clientId: '9b6fe2815db3417da370c2f83fd48e95',
      clientSecret: '64465dd992fc4d8f883061f24530cd0c',
      });
    var num = Math.random()*10000;
    var n = num.toFixed(0);
    var yesCount = 0;
    var noCount = 0;
    var spotifyApi = new SpotifyWebApi();
    return (
      <div className="App">
        <div className="App-header">
          <br />
          <h1>Welcome to room {n}</h1>

          <div className="search">
            <Form fluid>
              <Form.Input placeholder="Search..." name="room" />
            </Form>
          </div>

          <div className="App-header">
            <div className="ulist">
              <ul>
                <li>yeetz</li>
                <li>yeetz2</li>
                <li>superyeetz</li>
                <li>yeeted</li>
              </ul>
            </div>
            <div className="vote">
              <h2>this is a song</h2>
              <Form fluid>
                <Button onClick={yesCount++} content="Yes" />
                <Button onClick={noCount++} content="No" />
              </Form>
              <h2>{yesCount}</h2>
              <h2>{noCount}</h2>
            </div>
            <div className="col">
              <ol>
                <li>yeetz song</li>
                <li>yeetz</li>
                <li>yeetz</li>
                <li>yeetz</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Host;

