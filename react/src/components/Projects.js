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
    let youtabButton = "button";
    let personalButton = "button";
    let solemateButton = "button";
    switch(this.state.selected) {
      case 1:
        youtab = "";
        youtabButton = youtabButton + " selected-button";
        break;
      case 2:
        personal = "";
        personalButton = personalButton + " selected-button";
        break;
      case 3:
        solemate = "";
        solemateButton = solemateButton + " selected-button";
        break;
    }

    return(
      <div>
        <div className="narrower-buttons">
          <div className="small-4 columns">
            <button className={youtabButton} onClick={() => this.handleSelect(1)}>YouTab</button>
          </div>
          <div className="small-4 columns">
            <button className={personalButton} onClick={() => this.handleSelect(2)}>Personal Website</button>
          </div>
          <div className="small-4 columns">
            <button className={solemateButton} onClick={() => this.handleSelect(3)}>SoleMate</button>
          </div>
        </div>
        <div className="main-area">
          <div className={youtab}>YouTab</div>
          <div className={personal}>Personal</div>
          <div className={solemate}>Solemate</div>
        </div>
      </div>
    );
  }
};

export default Projects;
