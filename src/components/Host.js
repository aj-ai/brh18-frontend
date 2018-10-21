import React from 'react';
import {
    
} from 'semantic-ui-react';
import qs from 'query-string';
import axios from 'axios';
import api from '../utils/api';

export default class Host extends React.Component {
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
}