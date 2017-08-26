import React from 'react';
import './AllColor.css';

import Circle from '../Circle/Circle';

class AllColor extends React.Component {
    constructor( props ) {
        super( props );

        this.handleOnClick = this.handleOnClick.bind( this );
    }
    render() {
        return ( 
            <div className="allColors commonBlock">
                { this.props.state.gameText.tabs[ 0 ] }
                <Circle value="red" onClick={ this.props.state.handleOnClick }/>
                <Circle value="green" onClick={ this.handleOnClick }/>
                <Circle value="blue" onClick={ this.handleOnClick }/>
                <Circle value="pink" onClick={ this.handleOnClick }/>
                <Circle value="yellow" onClick={ this.handleOnClick }/>
            </div>
        );
    }
    handleOnClick(e) {
        console.log( this );
    }
};

export default AllColor;