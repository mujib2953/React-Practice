import React from 'react';
import './GameName.css';

import AllColor from '../AllColor/AllColor';
import UsersChoice from '../UsersChoice/UsersChoice';
import OutputWindow from '../OutputWindow/OutputWindow';

class GameName extends React.Component {
    render() {
        console.log( this.props );
        return (
            <div className="gameNameParent">
                <div className="gameName">{ this.props.state.gameText.title }</div>
                <center className="gameNameCenter">
                    <AllColor state={ this.props.state }/>
                    <UsersChoice state={ this.props.state }/>
                    <OutputWindow state={ this.props.state }/>
                </center>
            </div>
        );
    }
};

export default GameName;