import React from 'react';

class Experience extends React.Component {
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
    let work = "hidden";
    let skills = "hidden";
    let education = "hidden";
    let workButton = "small-4 columns button";
    let skillsButton = "small-4 columns button";
    let educationButton = "small-4 columns button";
    switch(this.state.selected) {
      case 1:
        work = "";
        workButton = workButton + " selected-button";
        break;
      case 2:
        skills = "";
        skillsButton = skillsButton + " selected-button";
        break;
      case 3:
        education = "";
        educationButton = educationButton + " selected-button";
        break;
    }

    return(
      <div>
        <h2>Experience</h2>
        <button className={workButton} onClick={() => this.handleSelect(1)}>Work</button>
        <button className={skillsButton} onClick={() => this.handleSelect(2)}>Skills</button>
        <button className={educationButton} onClick={() => this.handleSelect(3)}>Education</button>
        <div className="main-area">
          <div className={work}>Work</div>
          <div className={skills}>Skills</div>
          <div className={education}>Education</div>
        </div>
      </div>
    );
  }
};

export default Experience;
