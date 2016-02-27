import React from 'react';
import Router, {DefaultRoute, NotFoundRoute} from 'react-router';
import ReactDOM from 'react-dom';

/* Routes */
import AppContainer from './components/AppContainer.jsx';
import Room from './components/Room/Room.jsx';

let Route = Router.Route;

let routes = (
    <Route name="app" path="/" handler={AppContainer}>
        <DefaultRoute handler={Room}/>
        <NotFoundRoute handler={AppContainer}/>
    </Route>
);

/* Module Exports */
export default {
    initRouter() {
        Router.run(routes, function(Handler, state) {
            ReactDOM.render(
                <Handler params={state.params}/>,
                document.getElementById('main')
            );
        });
    }
};
