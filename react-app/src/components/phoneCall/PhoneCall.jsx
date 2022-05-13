import React from 'react';
import InputM from '../UI/inputM/inputM';
import MyButtonFour from '../UI/buttonFour/MyButtonFour';

const PhoneCall = (props) => {
    return (
        <form id='callform'>
            <div className='titlelable'>ВАШИ КОНТАКТЫ</div>
            <div className='callinputgroup'>
                <InputM id='callinputone'
                    type="text"
                    placeholder="Ваше имя"
                />
                <InputM id='callinputtwo'
                    type="text"
                    placeholder="Ваш мобильный номер"
                />
            </div>
            <MyButtonFour>ЗАКАЗАТЬ ЗВОНОК</MyButtonFour>
        </form>
    );
};

export default PhoneCall;