import React from 'react';
import {Link} from "react-router-dom";
import MyButtonTwo from "../buttonTwo/MyButtonTwo";
//import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className='navbarcontainer'>
            <div className="navbar">
                <div className="navbar__links">
                    <Link className="navlink" to="/aboutPage">О КОМПАНИИ</Link>
                    <Link className="navlink" to="/servicesPage">УСЛУГИ</Link>
                    <Link className="navlink" to="/feedbacksPage">ОТЗЫВЫ</Link>
                </div>

                <div>
                    <MyButtonTwo> 
                        Регистрация
                    </MyButtonTwo>
                    <MyButtonTwo> 
                        Войти
                    </MyButtonTwo>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;