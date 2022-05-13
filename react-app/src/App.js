import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
//import AppRouter from "./components/AppRouter";
import Main from './components/pages/Main';
import Footer from './components/UI/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
