import io from 'socket.io-client';
import Constants from './Constants.js';

let _socket = null;

function connect() {
    _socket = io.connect(
        Constants.SOCKET_SERVER_URL,
        {autoConnect: true}
    );
}

function socket() {
    return _socket;
}

export default {
    socket,
    connect: connect
};

// export default class Socket {
//     constructor() {
//         this.socket = null;
//     }

//     connect() {
//         this.socket = io.connect(
//             Constants.SOCKET_SERVER_URL,
//             {autoConnect: true}
//         );
//     }

//     socket() {
//         return this.socket;
//     }
// }

