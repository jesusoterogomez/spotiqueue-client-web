import React from 'react';
import {RouteHandler} from 'react-router';
import Promise from 'es6-promise';

Promise.polyfill(); // Polyfill for ES5 Environments

export default React.createClass({
    render() {
        return (
            <div className="main">
                {/* Child content is loaded here */}
                <div className="main-content">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});
