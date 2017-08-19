import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calci extends React.Component {
    render() {
        return (
            <div>
                Calculator.
            </div>
        );
    }
};
ReactDOM.render( <Calci />, document.getElementById( 'root' ) );