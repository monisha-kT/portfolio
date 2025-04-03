import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
function App() {
  return (
    <div >
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certifications /> 
    <Experience />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;