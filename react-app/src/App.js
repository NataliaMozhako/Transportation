import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AdminNavbar from './components/UI/adminNavbar/AdminNavbar';
//import AppRouter from "./components/AppRouter";
import Main from './components/pages/Main';
import Footer from './components/UI/footer/Footer';
import ProfileAbout from './components/pages/ProfileAbout';
import ProfileAuto from './components/pages/ProfileAuto';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AdminNavbar/>
      <ProfileAuto/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
