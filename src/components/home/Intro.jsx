import React from 'react'
import Typewriter from "typewriter-effect"; 

export default function Intro() {
    return (
        <header className="intro">
            <div className="bg-dim">
            <div className="intro_container">
            <div className="intro_title">
                <h2>Hi there! I'm Aditya. I'm a</h2>
                <h1><Typewriter 
                options={{
                    strings: ['Web Developer.', 'Freelancer.', "Native Developer.", "UX Designer.", "Music Producer."],
                    autoStart: true,
                    loop: true,
                }}
                /></h1>
                </div>
            
            <div>
                <a href="www.test.com"><button className="btn-primary">Get Started</button></a>
                <a href="www.test.com"><button className="btn-primary">Learn More</button></a>
                </div>
                </div>
            </div>

        </header>
    )
}
