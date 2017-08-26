import React from 'react';

import './Circle.css';

class Circle extends React.Component {
    render() {
        return (
            <div className={'circle ' + this.props.value} data={this.props.value} onClick={this.props.onClick}></div>
        );
    }
}
export default Circle;