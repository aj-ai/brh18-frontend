import React from 'react';
import api from '../utils/api';

export default class Party extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            partyId: this.props.partyId,
            socketConnection: api.beginSocketConnection("http://localhost:3001/"),
            pollOpen: false,
            hasVoted: false,
        }
    }

    render() {
        return (<h1>Party</h1>);
    }
}