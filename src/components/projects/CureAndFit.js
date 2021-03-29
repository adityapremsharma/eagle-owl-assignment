import React from "react";
import Video from "../extras/Video";
import cureandfitlanding from "../../media/videos/cure-and-fit-landing.mp4";
import cureandfitworkouttracker from "../../media/videos/cure-and-fit-workout-tracker.mp4";
import cureandfitusertracker from "../../media/videos/cure-and-fit-user-tracker.mp4";

export default function CureAndFit() {
  return (
    <div className="cure-and-fit">
      <h2 className="header-mb-primary">Cure & Fit</h2>
      <div className="details-container row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="video-container mb-s">
            <Video src={cureandfitlanding} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mb-s">
          <h2 className="header-secondary mb-s">What is this app all about?</h2>
          <p className="para-primary mb-xs">
            The idea behind this app is to make it multi-purpose and
            user-friendly. From features like tracking the workout to mental
            health guidance, all the way to social media especially for workout
            freaks. Our goal is to provide all this in one single app and
            implement a simplistic, straight-forward UI to make it really easy
            for our users to understand.
          </p>
          <h2 className="header-secondary mb-s">
            Skills and Technologies used
          </h2>
          <ul className="details-container">
            <div className="list-container">
              <h3 className="para-tertiary">Frontend</h3>
              <li>React Native</li>
              <li>Expo</li>
              <li>Components & Hooks</li>
              <li>Context-API</li>
              <li>HTML, Styling, JS</li>
              <li>Canva</li>
            </div>
            <div className="list-container">
              <h3 className="para-tertiary">Backend</h3>
              <li>JSON based Database</li>
              <li>Firebase & Firestore</li>
              <li>Working with APIs</li>
            </div>
          </ul>
          <ul className="details-container">
            <div className="list-container">
              <h3 className="para-tertiary">Navigation Layout</h3>
              <li>Stack Navigation For navigating in linear order.</li>
              <li>
                Bottom Tab Navigation 4 Sections at the bottom of screen: Feed,
                Live, Profile & Blog
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="details-container row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mb-s">
          <h2 className="header-secondary mb-s">Authentication</h2>
          <p className="para-primary mb-xs">
            Landing, Log In, Sign Up page. That's all we need for
            authentication. Sign In by creating an account or using third party
            like Google & Facebook.
          </p>
          <h2 className="header-secondary mb-s">
            Live Section (Live WorkoutTracker)
          </h2>
          <p className="para-primary mb-xs">
            Tracks person's coordinates (latitude, longitude) using expo
            location, timestamp to get th distance, speed, time and calories
            burned in kcal. Switch between three cardio workout (till now) i.e.
            Run, walk, and bicycle.
          </p>
          <h2 className="header-secondary mb-s">
            Things to implement (pending)...
          </h2>
          <h3 className="para-tertiary">Social Media</h3>
          <p className="para-primary mb-xs">
            An interface where people can share things and learn from others.
            Implementation will contain feed, post option, use of camera or
            gallery, short video (reels), etc. NOTE: These are subject to
            change.
          </p>

          <h3 className="para-tertiary">User information</h3>
          <p className="para-primary mb-xs">
            Here, user will enter the information about their daily progress.
            Things like daily calorie, water intake, current weight, height,
            etc. In addition, there will be BMI calculator and some fitness
            calculation.
          </p>

          <h3 className="para-tertiary">
            Study resources for mental health and related things
          </h3>
          <p className="para-primary mb-xs">
            This section wil include some blogposts, audio, video clip, etc,
            related to mental health, yoga, meditation, just to name a few.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="video-container mb-s">
            <Video src={cureandfitworkouttracker} />
          </div>
        </div>
      </div>

      <div className="details-container row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div className="video-container mb-s">
            <Video src={cureandfitusertracker} />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mb-s">
          <h2 className="header-secondary mb-s">Life Cycle</h2>

          <h3 className="para-tertiary">
            1. Identifying your target customer.
          </h3>
          <p className="para-primary mb-xs">
            Use methodologies like qualitative and card sort. No need to be
            precise.
          </p>

          <h3 className="para-tertiary">2. Study similar apps.</h3>
          <p className="para-primary mb-xs">
            Apps like Samsung health, 8fit, and FitOn.
          </p>

          <h3 className="para-tertiary">3. Find requirements of the app.</h3>
          <p className="para-primary mb-xs">
            What to do, how to implement. Find the appropriate resources to get
            started.
          </p>
          <h3 className="para-tertiary">4. Problem & it's solution.</h3>
          <p className="para-primary mb-xs">
            As further the project goes, as much problem will arise. Finding the
            solution and get on track is the only mantra.
          </p>

          <h3 className="para-tertiary">5. Make continuous progress.</h3>
          <p className="para-primary mb-xs">
            Adding more elements as much as possible. Keep moving in order to
            implement more functionalities in the app.
          </p>

          <h3 className="para-tertiary">6. Test it out on your customers.</h3>
          <p className="para-primary mb-xs">
            Test it again. Find solution, implement, Test and repeat again if
            required.
          </p>
        </div>
      </div>
      <div className="btn-container">
        <a
          href="https://github.com/adityapremsharma/fitness-app-react-native"
          className="btn-primary"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}
