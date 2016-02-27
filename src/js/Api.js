// import Constants from './Constants';
// import {notify} from 'react-notify-toast';
// import AuthActions from './actions/AuthActionCreators';
// import AuthStore from './stores/AuthStore';

// let WorkflowApi = new Penneo({
//     url: Constants.PENNEO_API_URL,
//     auth: 'JWT'
// });

// let SigningApi = new Penneo({
//     url: Constants.PENNEO_SIGNING_URL,
//     auth: 'JWT'
// });

// let _targets = {
//     workflow: WorkflowApi,
//     signing: SigningApi
// };

// function getAuthToken() {
//     return AuthStore.getToken();
// }

// function handleRequest(method, endpoint, data, target='workflow') {
//     let API = _targets[target];

//     let token = getAuthToken();
//     API.setToken(token);

//     return API[method](endpoint, data).then(response => {
//         return response.data;
//     }).catch(error => {
//         console.log(error);
//         handleRequestError(error);
//     });
// }

// function handleRequestError(error) {
//     switch (error.status) {
//         case 401:
//             AuthActions.handleAuthenticationError();
//             break;
//         default:
//             notifyError(error);
//             break;
//     }
// }

// function notifyError(error) {
//     let notification = error.statusText + ' - ' + error.status;
//     notify.show(notification, 'error');
// }

// let interceptors = {
//     get: handleRequest.bind(this, 'get'),
//     post: handleRequest.bind(this, 'post'),
//     put: handleRequest.bind(this, 'put'),
//     patch: handleRequest.bind(this, 'patch'),
//     'delete': handleRequest.bind(this, 'delete'),
//     getAuthToken: getAuthToken
// };

// export default interceptors;
