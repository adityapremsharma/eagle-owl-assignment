import React from "react";
import dpabout from "../../media/images/dp-about.jpg";

export default function About() {
  return (
    <div className="about-main">
      <h2 className="header-mb-primary">About</h2>
      <div className="details-container row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="img-container">
            <img src={dpabout} alt="dp" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 pl-s">
          <h2 className="header-secondary pb-s">Bio</h2>
          <h3 className="para-secondary">Aditya Prem Sharma</h3>
          <p className="para-tertiary">Age: 22 yrs</p>
          <p className="para-tertiary">Location: Patna, India</p>
          <p className="para-tertiary">
            Profession: Frontend Dev (Primary), Full-Stack Dev, UX Design, Sound
            Design
          </p>
          <p className="para-tertiary">
            Technologies: React JS, React Native, Node JS, Mongo DB, Firebase,
            FL Studio
          </p>
          <p className="para-tertiary">Hobbies: Music, Travelling, Food</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
