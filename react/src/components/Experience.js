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
    let workButton = "";
    let skillsButton = "";
    let educationButton = "";
    switch(this.state.selected) {
      case 1:
        work = "";
        workButton = workButton + " selected-link selected-experience";
        break;
      case 2:
        skills = "";
        skillsButton = skillsButton + " selected-link selected-experience";
        break;
      case 3:
        education = "";
        educationButton = educationButton + " selected-link selected-experience";
        break;
    }

    return(
      <div>
        <div className="link">
          <span className={workButton} onClick={() => this.handleSelect(1)}>Work</span>
        </div>
        <div className="link">
          <span className={skillsButton} onClick={() => this.handleSelect(2)}>Skills</span>
        </div>
        <div className="link">
          <span className={educationButton} onClick={() => this.handleSelect(3)}>Education</span>
        </div>
        <div className="section">
          <div className={work}>Work</div>
          <div className={skills}>Skills</div>
          <div className={education}>Education</div>
        </div>
      </div>
    );
  }
};

export default Experience;
