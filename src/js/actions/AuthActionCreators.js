import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
    login(name) {
        let user = {
            name: name
        };

        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.USER_LOGIN,
            user: user
        });
    },

    connect() {
        Dispatcher.handleViewAction({
            type: Constants.ActionTypes.CONNECT
        });
    },

    startSession(session) {
        Dispatcher.handleServerAction({
            type: Constants.ActionTypes.START_SESSION,
            session: session
        });
    }
};
