import React from 'react';
import Services from './Services';
import Feedbacks from './Feedbacks';
import About from './About';
import StartSection from '../startSection/StartSection';

const Main = () => {
    return (
        <div id="main">
            <div className='firstsection'>
                <StartSection/>
            </div>

            <div id="about" className='aboutsection'>
                <About/>
            </div>

            <div id="service">
                <div id="namelabel">УСЛУГИ</div>
                <Services/>
            </div>

            <div id="feedbacksection">
                <div id="namelabel">ОТЗЫВЫ</div>
                <Feedbacks/>
            </div>
        </div>       
    );
};

export default Main;