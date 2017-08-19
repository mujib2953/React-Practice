import React from 'react';

import Button from './Button';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
    render() {
        return (
            <div className='component-button-panel' >
                <div>
                    <Button name="AC" clickHandler={ this.handleClick } />
                    <Button name="+/-" clickHandler={ this.handleClick } />
                    <Button name="%" clickHandler={ this.handleClick } />
                    <Button name="÷" clickHandler={ this.handleClick } orange />
                </div>

                <div>
                    <Button name="7" clickHandler={ this.handleClick } />
                    <Button name="8" clickHandler={ this.handleClick } />
                    <Button name="9" clickHandler={ this.handleClick } />
                    <Button name="x" clickHandler={ this.handleClick } orange />
                </div>

                <div>
                    <Button name="4" clickHandler={ this.handleClick } />
                    <Button name="5" clickHandler={ this.handleClick } />
                    <Button name="6" clickHandler={ this.handleClick } />
                    <Button name="-" clickHandler={ this.handleClick } orange />
                </div>

                <div>
                    <Button name="1" clickHandler={ this.handleClick } />
                    <Button name="2" clickHandler={ this.handleClick } />
                    <Button name="3" clickHandler={ this.handleClick } />
                    <Button name="+" clickHandler={ this.handleClick } orange />
                </div>

                <div>
                    <Button name="0" clickHandler={ this.handleClick } wide />
                    <Button name="." clickHandler={ this.handleClick } />
                    <Button name="=" clickHandler={ this.handleClick } orange />
                </div>

            </div>
        );
    }

    handleClick = ( p_btnName ) => {
        this.props.clickHandler( p_btnName );
    }
};
ButtonPanel.propTypes = {
    clickHandler: React.PropTypes.func,
}
export default ButtonPanel;