import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Contact from './components/contacts/Contacts';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Portofolio from './components/portofolio/Portofolio';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portofolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
