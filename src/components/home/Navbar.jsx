import React from "react";
import dp from "../../media/images/dp.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <input type="checkbox" className="navbar_checkbox" id="navbar-btn" />
      <label htmlFor="navbar-btn" className="navbar_btn">
        <i className="fas fa-bars"></i>
      </label>
      <nav className="navbar">
        <div>
          <div className="navbar_profile">
            <img className="navbar_profile-img" alt="logo" src={dp} />
          </div>
          <h1 className="navbar_name">Aditya Prem Sharma</h1>
          <div className="navbar_contact">
            <a href="https://www.instagram.com/adityaprem99/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-prem-sharma/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:adityapremsharma@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </div>
          <ul className="navbar_list">
            <Link to="/">
              <li className="navbar_list-link">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/about">
              <li className="navbar_list-link">
                <i className="fa fa-user"></i>
                <span>About</span>
              </li>
            </Link>
            <Link to="/projects">
              <li className="navbar_list-link">
                <i className="fa fa-file-code"></i>
                <span>Projects</span>
              </li>
            </Link>
            <li className="navbar_list-link">
              <i className="fa fa-phone-square"></i>
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
