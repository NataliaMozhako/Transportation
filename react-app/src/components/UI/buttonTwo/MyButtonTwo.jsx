import React from 'react';
import classes from './MyButtonTwo.module.css';

const MyButtonTwo = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtnTwo}>
            {children}
        </button>
    );
};

export default MyButtonTwo;