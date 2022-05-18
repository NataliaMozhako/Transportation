import React from 'react';
import classes from './ProfileLableS.module.css';

const ProfileLableS = ({children}) => {
    return (
        <label className={classes.myLabelS}>
            {children}
        </label>
    );
};

export default ProfileLableS;