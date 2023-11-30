
import React from 'react';

import Navbar from '../component/Navbar';
import { Element } from 'react-scroll';
import '../App.css';
import About from './About';
import Resume from './Resume';
import Contact from './Contacts';
import Projects from './Projects';



function Sepage() {

  
  return (
    <>
   
      <Navbar />
      <Element name="about">
        <section id="about">
          {/* About section content */}
          <About />
        </section>
      </Element>
      <Element name="resume">
        <section id="resume">
          <Resume />
        </section>
      </Element>
      <Element name="projects">
        <section id="projects">
          <Projects />

        </section>
      </Element>
      <Element name="contact">
        <section id="contact">
          <Contact />
        </section>
      </Element>
     

     
    </>
  );
}

export default Sepage;





