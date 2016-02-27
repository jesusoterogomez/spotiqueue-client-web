import React, {PropTypes} from 'react';
import App from './App.jsx';

export default class AppContainer extends React.Component {
    render() {
        return (
            <App routeParams={this.props.params}/>
        );
    }
}

AppContainer.propTypes = {params: PropTypes.object};
