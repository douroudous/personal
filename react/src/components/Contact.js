import React from 'react';

const Contact  = props => {

  return(
    <div>
      <div className="narrower-buttons">
        <div className="small-4 columns">
          <a href={"mailto:cdourountoudakis@gmail.com"}>
            <button className="button">Email</button>
          </a>
        </div>
        <div className="small-4 columns">
          <a href={"https://www.linkedin.com/in/ddourountoudakis/"} target="_blank">
            <button className="button">LinkedIn</button>
          </a>
        </div>
        <div className="small-4 columns">
          <a href={"https://github.com/douroudous"} target="_blank">
            <button className="button">GitHub</button>
          </a>
        </div>
      </div>
      <h3>cdourountoudakis@gmail.com</h3>

    </div>
  );
};

export default Contact;
