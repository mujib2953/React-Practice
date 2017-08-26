import React from 'react';
import './GameName.css';

import AllColor from '../AllColor/AllColor';
import UsersChoice from '../UsersChoice/UsersChoice';
import OutputWindow from '../OutputWindow/OutputWindow';

class GameName extends React.Component {
    render() {
        return (
            <div className="gameNameParent">
                <div className="gameName">Guess the Color</div>
                <center className="gameNameCenter">
                    <AllColor />
                    <UsersChoice />
                    <OutputWindow />
                </center>
            </div>
        );
    }
};

export default GameName;