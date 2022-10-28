import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

// const STYLES: Array that holds values for different button styles
const STYLES = ['btn--primary', 'btn--outline']

//const SIZES: Array that holds values for different button sizes
const SIZES = ['btn--medium', 'btn--large', 'btn--test'];


// exports button functions
export const EmailButton = ({children,
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {

    // changes button size and style based on pagesize
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

     return (
        <div id='btn-container'>
            <Link className='btn-mobile' to='/Signup'>
                
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
            </Link>
        </div>

    );
}

export default EmailButton;