import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class GameComponent extends React.Component {
    render() {
        return (
            <div className="gameBorad">
                <GameName />
            </div>
        );
    }
};

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

class UsersChoice extends React.Component {
    render() {
        return (
            <div className="userChoice commonBlock">user choice</div>
        );
    }
};

class OutputWindow extends React.Component {
    render() {
        return (
            <div className="outputWindow commonBlock">Out-put Window</div>
        );
    }
}

class Circle extends React.Component {
    render() {
        return (
            <div className={'circle ' + this.props.value} data={this.props.value} onClick={this.props.onClick}></div>
        );
    }
}

ReactDOM.render( <GameComponent />, document.getElementById( 'root' ) );