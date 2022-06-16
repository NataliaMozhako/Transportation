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
import About from './components/pages/About';
import Services from './components/pages/Services';
import Feedbacks from './components/pages/Feedbacks';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/aboutPage" element={<About />} />
          <Route path="/servicesPage" element={<Services />} />
          <Route path="/feedbacksPage" element={<Feedbacks />} />
          <Route path="/profilePage" element={<Profile />} />
          <Route path="/profilePage/profileAbout" element={<ProfileAbout />} />
          <Route path="/profilePage/profileAuto" element={<ProfileAuto />} />
          <Route path="/profilePage/profileServices" element={<ProfileServices />} />
          <Route path="/profilePage/profileApplications" element={<ProfileApplications />} />
          <Route path="/profilePage/profileUsers" element={<ProfileUsers />} />
          <Route path="/profilePage/profileCompany" element={<ProfileCompany />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div> 
  );
}

export default App;
