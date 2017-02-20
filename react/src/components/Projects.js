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
    let personal = "hidden";
    let solemate = "hidden";
    let youtabButton = "";
    let personalButton = "";
    let solemateButton = "";
    switch(this.state.selected) {
      case 1:
        youtab = "";
        youtabButton = youtabButton + " selected-link selected-projects";
        break;
      case 2:
        personal = "";
        personalButton = personalButton + " selected-link selected-projects";
        break;
      case 3:
        solemate = "";
        solemateButton = solemateButton + " selected-link selected-projects";
        break;
    }

    return(
      <div>
        <div className="link">
          <span className={youtabButton} onClick={() => this.handleSelect(1)}>YouTab</span>
        </div>
        <div className="link">
          <span className={personalButton} onClick={() => this.handleSelect(2)}>Personal Website</span>
        </div>
        <div className="link">
          <span className={solemateButton} onClick={() => this.handleSelect(3)}>SoleMate</span>
        </div>
        <div className="section">
          <div className={youtab}>YouTab</div>
          <div className={personal}>Personal</div>
          <div className={solemate}>Solemate</div>
        </div>
      </div>
    );
  }
};

export default Projects;
