import React from 'react';
import classes from './MyButtonTree.module.css';

const MyButtonTree = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtnTree}>
            {children}
        </button>
    );
};

export default MyButtonTree;