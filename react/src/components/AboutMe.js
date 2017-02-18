import React from 'react';

const AboutMe  = props => {

  return(
    <div className="about-me">
      <div className="small-6 columns">
        <img src={"https://launchpass-production.s3.amazonaws.com/uploads/user/profile_photo/828/Dino_Dourountoudakis.jpg"}/>
      </div>
      <p className="small-6 columns">
        Background, objective
      </p>
      <br/>
    </div>
  );
};

export default AboutMe;
