import React from "react";
import Card from '../extras/Card'

export default function About() {
  return (
    <div className="about">
      <h2 className="header-mb-primary">About</h2>
      <div className="para-primary">
        <p>
          An Enthusiast learner. Degree in Information Technology with specialization in Full
          Stack Web Development and Data Integration. IT fundamentals. Always
          keen on learning new technologies. Currently working on Fitness App
          using React Native.
        </p>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fab fa-react" name="React JS" />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-code" name="Programming" />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-address-card" name="UX Design" />
        </div>
        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <Card icon="fas fa-mobile-alt" name="Native Apps" />
        </div>
      </div>
    </div>
  );
}
