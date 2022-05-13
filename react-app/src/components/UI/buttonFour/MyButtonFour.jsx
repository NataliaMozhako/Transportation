import React from 'react';
import classes from './MyButtonFour.module.css';

const MyButtonFour = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtnFour}>
            {children}
        </button>
    );
};

export default MyButtonFour;