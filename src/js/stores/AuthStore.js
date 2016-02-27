import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import io from '../Socket';

// data storage
let _session = {};

// Private Functions
function login(user) {
    let socket = io.socket();
    socket.emit('login', user);
}

function startSession(session) {
    _session = session;
}

// Store Creation
const ArchiveStore = assign({}, BaseStore, {
    // public methods used by Controller-View to operate on data
    getSession() {
        return _session;
    },

    find(id, messages=this.getMessages()) {
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].id === id) {
                return messages[i];
            }
        }
        return false;
    },

    // register store with dispatcher, allowing actions to flow through
    dispatcherIndex: Dispatcher.register(function(payload) {
        let action = payload.action;

        switch (action.type) {
            case Constants.ActionTypes.USER_LOGIN:
                if (action.user) {
                    login(action.user);
                }
                break;
            case Constants.ActionTypes.START_SESSION:
                if (action.session) {
                    startSession(action.session);
                }
                break;
            default:
                break;
        }

        ArchiveStore.emitChange();
    })
});

export default ArchiveStore;
