import React from 'react';

import './OutputWindow.css';

class OutputWindow extends React.Component {
    render() {
        return (
            <div className="outputWindow commonBlock">
                { this.props.state.gameText.tabs[ 2 ] }
            </div>
        );
    }
}

export default OutputWindow;