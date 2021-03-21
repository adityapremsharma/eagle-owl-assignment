import React from 'react'
import dp from "../../media/images/dp.jpg"

export default function Navbar() {
    return (
        <>
        <input type="checkbox" class="navbar_checkbox" id="navbar-btn" />
        <label for="navbar-btn" class="navbar_btn"><i class="fas fa-bars"></i></label>
        <navbar className="navbar">
            <div className="navbar_profile">
                <img className="navbar_profile-img" alt="logo" src={dp} />
            </div>
            <h1 className="header-1">Aditya Prem Sharma</h1>
            <div className="navbar_contact">
                <i class="fab fa-instagram"></i>
                <a href="https://www.linkedin.com/in/aditya-prem-sharma/"><i class="fab fa-linkedin-in"></i></a>
                <a href="mailto:adityapremsharma@gmail.com"><i class="far fa-envelope"></i></a>
            </div>
            <ul className="navbar_list">
                <li className="navbar_list-link"><i class="fa fa-home"></i><a href="#">Home</a></li>
                <li className="navbar_list-link"><i class="fa fa-user"></i><a href="#">About</a></li>
                <li className="navbar_list-link"><i class="fa fa-file-code"></i><a href="#">Projects</a></li>
                <li className="navbar_list-link"><i class="fa fa-phone-square"></i><a href="#">Contact</a></li>
            </ul>
        </navbar>
        </>
    )
}
