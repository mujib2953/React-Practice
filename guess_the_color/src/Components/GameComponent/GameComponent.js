import React from 'react';
import './GameComponent.css'

import GameName from '../GameName/GameName'

class GameComponent extends React.Component {

    constructor( props ) {
        super( props );

        this.handleClick = this.handleClick.bind( this );
        this.states = {
            gameText: {
                title: 'Guess the Color.',
                tabs:[
                    'All colors',
                    'User Choice',
                    'Output window'
                ]
            },
            handleClick: this.handleClick
        };

    }

    handleClick() {
        console.log( 'From Game comp' );
    }

    render() {
        return (
            <div className="gameBorad">
                <GameName state={this.states}/>
            </div>
        );
    }
};

export default GameComponent;