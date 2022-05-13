import React, {useState} from 'react';
import classes from './Service.module.css';
import AboutService from '../aboutService/AboutService';
import MyButtonTree from "../UI/buttonTree/MyButtonTree";
import MyModal from '../UI/MyModal/MyModal';

const Service = (props) => {
    const [modal, setModal] = useState(false);

    return (
        <div {...props} className={classes.serv}>
            <div className={classes.servName}>{props.service.title}</div>
            <MyButtonTree onClick={() => setModal(true)}>ПОДРОБНЕЕ</MyButtonTree>
            <MyModal visible={modal} setVisible={setModal}>
                <AboutService service={props.service}/>
            </MyModal>
        </div>
        
    );
};

export default Service;