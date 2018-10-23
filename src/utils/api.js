import openSocket from 'socket.io-client';
import axios from 'axios';

const beginSocketConnection = (address) => {
    openSocket(address);
}

export default {
    beginSocketConnection,
    login, 
    setAuthToken,
    getPlaylists
}

const login = () => {
    axios.get('http://localhost:3001/auth/spotify').then((res) => {
    });
}

const setAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
}

const getPlaylists = async (component) => {
    var res = await axios.get('http://localhost:3001/host/playlists');
    return await res.json();
}



