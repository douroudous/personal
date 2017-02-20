import React from 'react';

const About  = props => {

  return(
    <div>
      <span className="selected-link selected-about">About Me</span>
      <div className="section">
        <span className="small-6 columns">Background, objective</span>
        <div className="small-6 columns">
          <img className="main-pic" src={"https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/828/Dino_Dourountoudakis.jpg"}/>
        </div>
      </div>
    </div>
  );
};

export default About;
