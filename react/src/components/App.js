import React from 'react';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id) {
    this.setState({ selected: id});
  }

  render() {
    let aboutMe = "hidden";
    let experience = "hidden";
    let projects = "hidden";
    let contact = "hidden";
    let aboutMeButton = "button";
    let experienceButton = "button";
    let projectsButton = "button";
    let contactButton = "button";
    switch(this.state.selected) {
      case 1:
        aboutMe = "";
        aboutMeButton = aboutMeButton + " selected-button";
        break;
      case 2:
        experience = "";
        experienceButton = aboutMeButton + " selected-button";
        break;
      case 3:
        projects = "";
        projectsButton = aboutMeButton + " selected-button";
        break;
      case 4:
        contact = "";
        contactButton = aboutMeButton + " selected-button";
        break;
    }

    return(
      <div>
        <h1>Dino Dourountoudakis</h1>
        <div className="small-3 columns">
          <button className={aboutMeButton} onClick={() => this.handleSelect(1)}>About Me</button>
        </div>
        <div className="small-3 columns">
          <button className={experienceButton} onClick={() => this.handleSelect(2)}>Experience</button>
        </div>
        <div className="small-3 columns">
          <button className={projectsButton} onClick={() => this.handleSelect(3)}>Projects</button>
        </div>
        <div className="small-3 columns">
          <button className={contactButton} onClick={() => this.handleSelect(4)}>Contact</button>
        </div>
        <div className="main-area">
          <div className={aboutMe}><AboutMe /></div>
          <div className={experience}><Experience /></div>
          <div className={projects}><Projects /></div>
          <div className={contact}><Contact /></div>
        </div>
      </div>
    )
  }
};


export default App;
