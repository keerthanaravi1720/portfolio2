// Layout.js
import React from 'react';
import About from './About';
import Contact from './Contacts';
import Resume from './Resume';
import Projects from './Projects';


const Home = () => {
  return (
    <div>
      <div id="about-section">
        <About />
      </div>
      <div id="resume-section">
        <Resume/>
      </div>
      <div id="projects-section">
        <Projects/>
      </div>

      <div id="contact-section">
        <Contact />
      </div>

    </div>
  );
};

export default Home;
