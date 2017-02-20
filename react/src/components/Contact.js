import React from 'react';

const Contact  = props => {

  return(
    <div>
      <span className="selected-link selected-contact">Contact Me</span><br/>
      <a className="link section" href={"mailto:cdourountoudakis@gmail.com"}>cdourountoudakis@gmail.com</a><br/>
      <a className="link section" href={"https://www.linkedin.com/in/ddourountoudakis/"} target="_blank">LinkedIn</a><br/>
      <a className="link section" href={"https://github.com/douroudous"} target="_blank">GitHub</a>
    </div>
  );
};

export default Contact;
