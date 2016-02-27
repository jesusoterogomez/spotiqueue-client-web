import React from 'react';
import io from '../Socket';
import Promise from 'es6-promise';
import {RouteHandler} from 'react-router';
import AuthStore from '../stores/AuthStore';
import AuthActions from '../actions/AuthActionCreators';
import Login from './Auth/Login.jsx';

Promise.polyfill(); // Polyfill for ES5 Environments

export default React.createClass({
    getInitialState() {
        return {
            session: null
        };
    },

    componentWillMount() {
        io.connect();
        this._attachSocketEvents();
    },

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    },

    _attachSocketEvents() {
        let socket = io.socket();
        socket.on('login success', AuthActions.startSession);
    },

    _onChange() {
        this.setState({
            session: AuthStore.getSession()
        });
    },

    render() {
        let {session} = this.state;

        if (!session) {
            return <Login />;
        }

        return (
            <div className="main">
                {/* Child content is loaded here */}
                <div className="main-content">
                    <RouteHandler session={session} />
                </div>
            </div>
        );
    }
});
