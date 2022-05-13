import React, {useState} from 'react';
import CountPrice from '../countPrice/CountPrice';
import MakeApplication from '../makeApplication/MakeApplication';
import PhoneCall from '../phoneCall/PhoneCall';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button/MyButton';

const StartSection = (props) => {
    const [modalOne, setModalOne] = useState(false);
    const [modalTwo, setModalTwo] = useState(false);
    const [modalTree, setModalTree] = useState(false);

    return (
                <div className='firstsectioncontext'>
                    <div id="mainlabel">ГРУЗОВЫЕ АВТОПЕРЕВОЗКИ</div>
                    <div id="sublabel">Перевозки грузов по Республике Беларусь и Российской Федерации</div>
                    <div className='mainBtnGroup'>
                        <MyButton onClick={() => setModalOne(true)}>ЗАКАЗАТЬ ЗВОНОК</MyButton>
                        <MyModal visible={modalOne} setVisible={setModalOne}>
                            <PhoneCall/>
                        </MyModal>
                        <MyButton onClick={() => setModalTwo(true)}>ОФОРМИТЬ ЗАЯВКУ</MyButton>
                        <MyModal visible={modalTwo} setVisible={setModalTwo}>
                            <MakeApplication/>   
                        </MyModal>
                    </div>
                    <div className='lowBtn'>
                        <MyButton onClick={() => setModalTree(true)}>РАССЧИТАТЬ СТОИМОСТЬ</MyButton>
                        <MyModal visible={modalTree} setVisible={setModalTree}>
                            <CountPrice/>
                        </MyModal>
                    </div>
                </div>
    );
};

export default StartSection;