import React from 'react';
import classes from './MyButtonFive.module.css';

const MyButtonFive = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtnFive}>
            {children}
        </button>
    );
};

export default MyButtonFive;