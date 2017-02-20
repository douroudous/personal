import React from 'react';

const About  = props => {

  return(
    <div>
      <span className="selected selected-about">About Me</span>
      <div className="section">
        <div className="small-4 columns">
          <img className="main-pic" src={"https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/828/Dino_Dourountoudakis.jpg"}/>
        </div>
        <div className="small-8 columns">Background, objective</div>
      </div>
    </div>
  );
};

export default About;
