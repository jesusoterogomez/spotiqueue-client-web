import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';

// data storage
let _messages = [];

// Private Functions
function addMessage(message) {
    _messages.push(message);
}

// Store Creation
const ArchiveStore = assign({}, BaseStore, {
    // public methods used by Controller-View to operate on data
    getMessages() {
        return _messages;
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
            case Constants.ActionTypes.MESSAGE_ADDED:
                if (action.message) {
                    addMessage(action.message);
                }
                break;
            default:
                break;
        }

        ArchiveStore.emitChange();
    })
});

export default ArchiveStore;
