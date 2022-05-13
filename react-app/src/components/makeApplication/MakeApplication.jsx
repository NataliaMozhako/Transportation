import React from 'react';
import InputM from '../UI/inputM/inputM';
import MyButtonFour from '../UI/buttonFour/MyButtonFour';

const MakeApplication = (props) => {
    return (
        <form id='appform'>
                    <div className='titlelable'>ВАШИ КОНТАКТЫ</div>
                        <div className='appinputgroup'>
                            <InputM id='appinputone'
                                type="text"
                                placeholder="Ваше имя"
                            />
                            <InputM id='appinputtwo'
                                type="text"
                                placeholder="Ваша фамилия"
                            />
                        </div>
                        <InputM id='appinputtree'
                            type="text"
                            placeholder="Ваша электронная почта"
                        />
                        <MyButtonFour>ОФОРМИТЬ ЗАЯВКУ</MyButtonFour>
        </form>
    );
};

export default MakeApplication;