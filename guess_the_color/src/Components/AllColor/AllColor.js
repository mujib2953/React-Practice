import React from 'react';
import './AllColor.css';

import Circle from '../Circle/Circle';

class AllColor extends React.Component {
    render() {
        return ( 
            <div className="allColors commonBlock">All color
                <Circle value="red" onClick={this.handleOnClick}/>
                <Circle value="blue" onClick={ this.handleOnClick }/>
            </div>
        );
    }
    handleOnClick(e) {
        console.log( e );
    }
};

export default AllColor;