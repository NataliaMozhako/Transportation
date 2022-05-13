import React from 'react';
import classes from './inputM.module.css';

const InputM = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.inputM} {...props}/>
    );
});

export default InputM;