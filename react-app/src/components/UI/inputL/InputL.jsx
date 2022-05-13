import React from 'react';
import classes from './InputL.module.css';

const InputL = React.forwardRef((props, ref) => {
    return (
        <textarea rows="3" ref={ref} className={classes.inputL} {...props}/>
    );
});

export default InputL;