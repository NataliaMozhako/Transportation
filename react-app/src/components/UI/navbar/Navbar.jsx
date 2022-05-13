import React from 'react';
import {Link} from "react-router-dom";
import MyButtonTwo from "../buttonTwo/MyButtonTwo";
//import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className='navbarcontainer'>
            <div className="navbar">
                <div className="navbar__links">
                    <Link id="navlink" to="/mainpage#about">О КОМПАНИИ</Link>
                    <Link id="navlink" to="/mainpage#service">УСЛУГИ</Link>
                    <Link id="navlink" to="/mainpage#feedback">ОТЗЫВЫ</Link>
                    <Link id="navlink" to="/mainpage#contacts">КОНТАКТЫ</Link>
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