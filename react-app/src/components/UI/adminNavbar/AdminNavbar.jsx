import React from 'react';
import {Link} from "react-router-dom";
import MyButtonTwo from "../buttonTwo/MyButtonTwo";
//import { HashLink as Link } from 'react-router-hash-link';

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
                <div className="admin__navbar__links">
                    <Link id="anavlink" to="/mainpage#about">Мои данные</Link>
                    <Link id="anavlink" to="/mainpage#service">Автомобили</Link>
                    <Link id="anavlink" to="/mainpage#feedback">Услуги</Link>
                    <Link id="anavlink" to="/mainpage#contacts">Заявки</Link>
                    <Link id="anavlink" to="/mainpage#contacts">Пользователи</Link>
                    <Link id="anavlink" to="/mainpage#contacts">Компания</Link>
                </div>
        </div>        
    );
};

export default AdminNavbar;