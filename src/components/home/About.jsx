import React from "react";

export default function About() {
  return (
    <div className="about">
      <h2 className="header-mb-primary">About</h2>
      <div className="para-primary">
        <p>
          An Enthusiast learner. Fourth-year student with specialization in Full
          Stack Web Development and Data Integration. IT fundamentals, always
          keen on learning new technologies. Currently working on Fitness App
          using React Native.
        </p>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="card-primary">
            <i className="fab fa-react"></i>
            <p>React JS</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="card-primary">
            <i className="fas fa-code"></i>
            <p>Programming</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="card-primary">
            <i className="fas fa-address-card"></i>
            <p>UX Design</p>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <div className="card-primary">
            <i className="fas fa-mobile-alt"></i>
            <p>Native Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
