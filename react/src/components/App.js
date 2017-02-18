import React from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const App = props => {
  return(
    <div>
      <h1>Dino Dourountoudakis</h1>
      <button className="small-3 columns button">About Me</button>
      <button className="small-3 columns button">Experience</button>
      <button className="small-3 columns button">Projects</button>
      <button className="small-3 columns button">Contact</button>
      <div className="main-area">
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
};


export default App;
