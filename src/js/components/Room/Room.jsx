import React from 'react';

export default React.createClass({
    propTypes: {
        session: React.PropTypes.object
    },

    render() {
        let {session} = this.props;

        return (
            <div className="room">
                User {session.name}
            </div>
        );
    }
});
