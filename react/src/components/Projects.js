import React from 'react';

class Projects extends React.Component {
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
    let youtab = "hidden";
    let solemate = "hidden";
    let youtabButton = "button";
    let solemateButton = "button";
    switch(this.state.selected) {
      case 1:
        youtab = "";
        youtabButton = youtabButton + " selected-button";
        break;
      case 2:
        solemate = "";
        solemateButton = solemateButton + " selected-button";
        break;
    }

    return(
      <div>
        <h2>Projects</h2>
        <div className="project-buttons">
          <div className="small-6 columns">
            <button className={youtabButton} onClick={() => this.handleSelect(1)}>YouTab</button>
          </div>
          <div className="small-6 columns">
            <button className={solemateButton} onClick={() => this.handleSelect(2)}>SoleMate</button>
          </div>
        </div>
        <div className="main-area">
          <div className={youtab}>YouTab</div>
          <div className={solemate}>Solemate</div>
        </div>
      </div>
    );
  }
};

export default Projects;
