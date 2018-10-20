import openSocket from 'socket.io-client';

const beginSocketConnection = (address) => {
    openSocket(address);
}

export default {
    beginSocketConnection
}