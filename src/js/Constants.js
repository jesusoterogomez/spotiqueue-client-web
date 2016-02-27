import keyMirror from 'keymirror';

export default {
    // API Credentials
    API_URL: "test",
    SOCKET_SERVER_URL: "http://localhost:5000",

    // event name triggered from store, listened to by views
    CHANGE_EVENT: 'change',

    // Actions
    ActionTypes: keyMirror({
        MESSAGE_ADDED: null,

        // Auth
        CONNECT: null,
        USER_LOGIN: null,
        START_SESSION: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
