import React from 'react';
import classes from './ProfileLable.module.css';

const ProfileLable = ({children}) => {
    return (
        <label className={classes.myLabel}>
            {children}
        </label>
    );
};

export default ProfileLable;