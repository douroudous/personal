import React from 'react';
import About from './About';
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
    let about = "hidden";
    let experience = "hidden";
    let projects = "hidden";
    let contact = "hidden";
    let aboutButton = "";
    let experienceButton = "";
    let projectsButton = "";
    let contactButton = "";
    switch(this.state.selected) {
      case 1:
        about = "";
        aboutButton = aboutButton + " selected-link selected-about";
        break;
      case 2:
        experience = "";
        experienceButton = experienceButton + " selected-link selected-experience";
        break;
      case 3:
        projects = "";
        projectsButton = projectsButton + " selected-link selected-projects";
        break;
      case 4:
        contact = "";
        contactButton = contactButton + " selected-link selected-contact";
        break;
    }

    return(
      <div className="top-buttons">
        <h1>Dino Dourountoudakis</h1>
        <div className="link">
          <span className={aboutButton} onClick={() => this.handleSelect(1)}>About Me</span>
        </div>
        <div className="link">
          <span className={experienceButton} onClick={() => this.handleSelect(2)}>Experience</span>
        </div>
        <div className="link">
          <span className={projectsButton} onClick={() => this.handleSelect(3)}>Projects</span>
        </div>
        <div className="link">
          <span className={contactButton} onClick={() => this.handleSelect(4)}>Contact</span>
        </div>
        <div className="centered">
          <div className={about}><About /></div>
          <div className={experience}><Experience /></div>
          <div className={projects}><Projects /></div>
          <div className={contact}><Contact /></div>
        </div>
      </div>
    )
  }
};


export default App;
