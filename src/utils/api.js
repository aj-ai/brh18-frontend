import openSocket from 'socket.io-client';
import axios from 'axios';

const beginSocketConnection = (address) => {
    openSocket(address);
}

const login = () => {
    axios.get('https://localhost:3001/auth/spotify').then((res) => {
        console.log("yo!")
    });
}

export default {
    beginSocketConnection,
    login
}