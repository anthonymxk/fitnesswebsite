import React from 'react';
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import './styles.css';

function App() {

  return (
    <div id='container'>
      <Navbar/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
