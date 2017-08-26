import React from 'react';
import './GameComponent.css'

import GameName from '../GameName/GameName'

class GameComponent extends React.Component {
    render() {
        return (
            <div className="gameBorad">
                <GameName />
            </div>
        );
    }
};

export default GameComponent;