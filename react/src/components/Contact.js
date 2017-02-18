import React from 'react';

const Contact  = props => {

  return(
    <div>
      <h2>Contact</h2>
      <h3>cdourountoudakis@gmail.com</h3>
      <div className="project-buttons">
        <div className="small-6 columns">
          <a href={"https://www.linkedin.com/in/ddourountoudakis/"} target="_blank">
            <button className="button">LinkedIn</button>
          </a>
        </div>
        <div className="small-6 columns">
          <a href={"https://github.com/douroudous"} target="_blank">
            <button className="button">GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
