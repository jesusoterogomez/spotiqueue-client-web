import keyMirror from 'keymirror';

export default {
    // API Credentials
    API_URL: "test",

    // event name triggered from store, listened to by views
    CHANGE_EVENT: 'change',

    // Each time you add an action, add it here... They should be past-tense
    ActionTypes: keyMirror({
        MESSAGE_ADDED: null
    }),

    ActionSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
