import React from 'react'

export default function Projects() {
    return (
        <div className="projects">
            <h2 className="header-mb-primary">Projects</h2>
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="card-primary">
                    <i class="fab fa-react"></i>
                    <p>To Do List using React JS</p>
                </div>
                    
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div className="card-primary">
                    <i class="fas fa-mobile-alt"></i>
                    <p>Cure & Fit app using React Native</p> 
                </div>
                     
                </div>
            </div>

            <div className="para-primary">
                <p>As they say, if your company is not on the internet, Your company doesn't exist. Don't worry, I got ya. 
                Take your business online now with the most popular web application framework out there (React JS), 
                that is used by the companies like Facebook, Instagram, Netflix, New York Times, just to name a few.</p>
            </div>
            <div className="projects_btn">
                <a href="www.test.com"><button className="btn-primary">Book Now</button></a>
                <a href="www.test.com"><button className="btn-primary">Learn More</button></a>
                </div>
        </div>
    )
}
