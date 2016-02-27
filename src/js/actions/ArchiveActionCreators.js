import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
    addMessage(message) {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.MESSAGE_ADDED,
            message: message
        });
    }

};
