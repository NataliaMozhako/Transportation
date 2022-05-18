import React from 'react';
import classes from './InputWhite.module.css';

const InputWhite = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.inputWhite} {...props}/>
    );
});

export default InputWhite;