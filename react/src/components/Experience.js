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

     let skillsList = ["Ruby", "Ruby on Rails", "JavaScript", "ReactJS", "HTML", "CSS", "PostgreSQL"];
     let skillsElements = skillsList.map (skill => {
       return(<div>{skill}</div>)
     })

     let workList = [
       {name: "Launch Academy", dates: "Nov 2016 - Feb 2017", position: "Programmer/Analyst"},
       {name: "Meditech", dates: "Aug 2012 - Nov 2016", position: "Programmer/Analyst"}
     ];
     let workElements = workList.map (work => {
       return(<div>
                <div>{work.name}</div>
                <div>{work.dates}</div>
                <div>{work.position}</div>
              </div>)
     })

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
          <div className={work}>
            {workElements}
          </div>
          <div className={skills}>
            {skillsElements}
          </div>
          <div className={education}>
            <div>2012</div>
            <div>BS in Physics</div>
            <div>Bridgewater State University</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Experience;
