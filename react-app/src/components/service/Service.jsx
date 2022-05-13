import React from 'react';
import classes from './Service.module.css';
import MyButtonTree from "../UI/buttonTree/MyButtonTree";

const Service = ({children, ...props}) => {
    return (
        <div {...props} className={classes.serv}>
            <div className={classes.servName}>{children}</div>
            <MyButtonTree>ПОДРОБНЕЕ</MyButtonTree>
        </div>
        
    );
};

export default Service;