import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="header-mb-primary">Projects</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <Link style={{ textDecoration: "none" }} to="/noteme">
            <div className="card-primary">
              <i className="fab fa-react"></i>
              <p>Note Me app using React JS</p>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <Link style={{ textDecoration: "none" }} to="/cureandfit">
            <div className="card-primary">
              <i className="fas fa-mobile-alt"></i>
              <p>Cure & Fit app using React Native</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="para-primary">
        <p>
          As they say, if your company is not on the internet, Your company
          doesn't exist. Don't worry, I got ya. Take your business online now
          with the most popular web application framework out there (React JS),
          that is used by the companies like Facebook, Instagram, Netflix, New
          York Times, just to name a few.
        </p>
      </div>
      <div className="btn-container">
        <a href="www.test.com">
          <button className="btn-primary">Book Now</button>
        </a>
        <a href="www.test.com">
          <button className="btn-primary">Services</button>
        </a>
      </div>
    </div>
  );
}
