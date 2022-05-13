import React from 'react';
import MyButtonTwo from "./UI/buttonTwo/MyButtonTwo";

const FeedbackItem = (props) => {
    return (
        <div className="feedback">
            <div className='fbdata'>
                <div className="feedbacksender">
                    <div className='fbusername'>Имя</div>
                    <div className='fbsurname'>Фамилия</div> 
                </div>
                <div className='fbdate'>ДД.ММ.ГГГГ    ЧЧ.ММ</div>
            </div>
                
            <div className='feedbacktext'>
                    {props.feedback.body}
            </div>

            <div className="feedbackbtn">
                <MyButtonTwo onClick={() => props.remove(props.feedback)}>
                    Удалить
                </MyButtonTwo>
            </div>

        </div>
    );
};

export default FeedbackItem;