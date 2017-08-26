import React from 'react';

import './UsersChoice.css';
class UsersChoice extends React.Component {
    render() {
        return (
            <div className="userChoice commonBlock">
                { this.props.state.gameText.tabs[ 1 ] }
            </div>
        );
    }
};

export default UsersChoice;