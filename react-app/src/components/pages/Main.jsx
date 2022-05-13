import React from 'react';
import MyButton from "../UI/button/MyButton";
import Services from './Services';
import InputS from '../UI/inputS/InputS';
import MyButtonFour from '../UI/buttonFour/MyButtonFour';
import InputM from '../UI/inputM/inputM';
import Feedbacks from './Feedbacks';

const Main = () => {
    return (
        <div id="main">
            <div className='firstsection'>
                <div className='firstsectioncontext'>
                    <div id="mainlabel">ГРУЗОВЫЕ АВТОПЕРЕВОЗКИ</div>
                    <div id="sublabel">Перевозки грузов по Республике Беларусь и Российской Федерации</div>
                    <div className='mainBtnGroup'>
                        <MyButton>ЗАКАЗАТЬ ЗВОНОК</MyButton>
                        <MyButton>ОФОРМИТЬ ЗАЯВКУ</MyButton>
                    </div>
                    <div className='lowBtn'>
                        <MyButton>РАССЧИТАТЬ СТОИМОСТЬ</MyButton>
                    </div>
                </div>
            </div>

            <div id="about" className='aboutsection'>
                <div className='aboutsectioncontext'>
                    <div id="namelabel">О КОМПАНИИ</div>
                    <div id="abouttext">Наша компания оказывает услуги по перевозке грузов по Беларуси,  из Беларуси в Россию и из России в Беларусь. Мы предоставляем страхование CMR, которое обеспечивает защиту груза в процессе транспортировки и покрывает риски с момента получения перевозчиком товара и до тех пор, пока он не будет передан получателю. Залог нашей успешной деятельности – это качественный сервис и индивидуальный подход к клиентам. Мы гарантируем качество, оптимальные сроки доставки и приемлемую стоимость транспортных услуг. </div>
                    <a id="aboutlink" href="https://drive.google.com/file/d/19N3noFa4PaG5xygjgGbtTzod9ylIcVFg/view?usp=sharing" target="blank">Свидетельство о гос. регистрации</a>
                    <div id="aboutsublabel">Мы работаем по алгоритму:</div>
                    <div className='algocontainer'>
                        <div className='step'> 1
                            <div className='stepname'>ЗАЯВКА И РАССЧЕТ СТОИМОСТИ</div>
                            <div className='stepdescr'>Позвоните или оставьте заявку — мы оперативно ответим.</div>
                        </div>
                        <div className='step'> 2
                            <div className='stepname'>СОГЛАСОВАНИЕ УСЛОВИЙ И СОСТАВЛЕНИЕ ДОГОВОРА</div>
                        </div>
                        <div className='step'> 3
                            <div className='stepname'>ПОЛУЧЕНИЕ И ДОСТАВКА ГРУЗА</div>
                        </div>
                        <div className='step'> 4
                            <div className='stepname'>ОПЛАТА ПО ФАКТУ ПОЛУЧЕНИЯ</div>
                            <div className='stepdescr'>Наличная и безналичная формы оплат.</div>
                        </div>
                    </div>
                </div>        
            </div>

            <div id="service">
                <div id="namelabel">УСЛУГИ</div>
                <Services/>
            </div>

            <div id="price">
                <div id="namelabel">РАССЧИТАТЬ СТОИМОСТЬ</div>
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
            </div>

            <div id="appsection">
                <div id="namelabel">ОФОРМИТЬ ЗАЯВКУ</div>
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
            </div>

            <div id="feedbacksection">
                <div id="namelabel">ОТЗЫВЫ</div>
                <Feedbacks/>
            </div>
        </div>       
    );
};

export default Main;