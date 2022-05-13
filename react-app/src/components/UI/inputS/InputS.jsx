import React from 'react';
import classes from './InputS.module.css';

const InputS = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.inputS} {...props}/>
    );
});

export default InputS;