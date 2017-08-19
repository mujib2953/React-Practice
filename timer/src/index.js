import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timer extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            secondsElapsed: 0
        };
    }

    render() {
        return (
            <div>
                This is Timer div. <br />
                Seconds elapsed { this.state.secondsElapsed }
            </div>
        );
    };

    componentDidMount() {
        this.interval = setInterval( () => {
            this.tick();
        }, 1000 );
    };

    componentWillUnmount() {
        clearInterval( this.interval );
    };

    tick() {
        this.setState( (prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }) );
    }
};


ReactDOM.render( <Timer />, document.getElementById( 'root' ) );