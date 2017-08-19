import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class ToDoApp extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            items: [], //--- will contains all todo task
            text: '' //--- will have the user input text
        }

        this.handleFormSubmit = this.handleFormSubmit.bind( this );
        this.handleTextChange = this.handleTextChange.bind( this );
    }

    render() {
        return (
            <div>
                <h3>My ToDo App</h3>
                <ToDoList items={ this.state.items } />
                <form onSubmit={ this.handleFormSubmit }>
                    <input type="text" onChange={ this.handleTextChange } value={ this.state.text }/>
                    <button>{ 'Add #' + ( this.state.items.length + 1 ) }</button>
                </form>
            </div>
        );
    }

    // ------------- Handler ------------------------
    handleFormSubmit( e ) {
        console.log( 'The form is submitted.' );
        e.preventDefault();

        if( this.state.text.trim() === '' ) {
            console.warn( 'Please enter task Name.' );
            return;
        }

        var newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState( ( prevState ) => ({
            items: prevState.items.concat( newItem ),
            text: ''
        }) );

        console.log( this.state );
    }

    handleTextChange( e ) {
        console.log( 'You are typing :: ' + e.target.value );
        this.setState( {
            text: e.target.value
        } );
    }
};

class ToDoList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.items.map( item => (
                    <li key={ item.id }>{ item.text }</li>
                ) )}
            </ul>
        );
    }
};

ReactDom.render( <ToDoApp />, document.getElementById( 'root' ) );