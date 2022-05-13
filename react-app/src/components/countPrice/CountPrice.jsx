import React from 'react';
import InputS from '../UI/inputS/InputS';
import MyButtonFour from '../UI/buttonFour/MyButtonFour';

const CountPrice = (props) => {
    return (
        <div className='pricecontainer'>
                    <form id="priceform">
                        <div className='titlelable'>МАРШРУТ</div>
                        <div className='routelabelcontainer'>
                            <div className='routelabel'>ОТКУДА</div>
                            <div className='routelabel'>КУДА</div>
                        </div>
                        <div className='routecontainer'>
                            <InputS
                                type="text"
                                placeholder="Укажите город"
                            />
                            <InputS
                                type="text"
                                placeholder="Укажите город"
                            />
                        </div>
                        <div className='titlelable'>ДАННЫЕ О ГРУЗЕ</div>
                        <div className='cargolabelcontainer'>
                            <div className='cargolabelcontainerone'>Габариты груза<span className='paramEnd'> / м.</span></div>
                            <div className='cargolabelcontainertwo'>
                                <div className='cargolabelone'>Вес груза<span className='paramEnd'> / кг.</span></div>
                                <div className='cargolabeltwo'>Объем груза<span className='paramEnd'> / м3</span></div>
                            </div>
                        </div>
                        <div className='cargocontainer'>
                            <div className='cargocontainerone'>
                                <InputS id='inputSH'
                                    type="text"
                                    placeholder="Высота"
                                />
                                <InputS id='inputSW'
                                    type="text"
                                    placeholder="Ширина"
                                />
                                <InputS id='inputSL'
                                    type="text"
                                    placeholder="Длина"
                                />
                            </div>
                            <div className='cargocontainertwo'>
                                <InputS
                                    type="text"
                                    placeholder="Вес"
                                /><InputS
                                    type="text"
                                    placeholder="Объем"
                                />
                            </div>
                        </div>
                        <div className='titlelable'>ОКАЗЫВАЕМАЯ УСЛУГА</div>
                        <select id='cargoselect'>
                            <option disabled>Выберите услугу из списка</option>
                            <option>ПЕРЕВОЗКА СТАНДАРТНЫХ ГРУЗОВ</option>
                            <option>ПЕРЕВОЗКА СБОРНЫХ ГРУЗОВ</option>
                        </select>
                        <MyButtonFour>РАССЧИТАТЬ СТОИМОСТЬ</MyButtonFour>
                    </form>
        </div>
    );
};

export default CountPrice;