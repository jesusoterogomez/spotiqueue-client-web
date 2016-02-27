import React from 'react';
import AuthActions from '../../actions/AuthActionCreators';

export default React.createClass({
    getInitialState() {
        return {
            name: null
        };
    },

    changeNameHandler(event) {
        event.preventDefault();
        this.setState({name: event.target.value});
    },

    loginHandler(event) {
        event.preventDefault();
        let {name} = this.state;

        if (name) {
            AuthActions.login(name);
        }
    },

    render() {
        return (
            <div className="login">
                <input type="name" onChange={this.changeNameHandler}/>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
});
