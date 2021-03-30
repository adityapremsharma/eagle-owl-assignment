import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./extras/ScrollToTop";
import firebase from "firebase";
import "../scss/main.scss";

import Home from "./home/Home";
import Navbar from "./home/Navbar";
import ContactHome from "./userData/ContactHome";
import CureAndFit from "./projects/CureAndFit";
import About from "./about/About";
import Projects from "./projects/Projects";
import NoteMe from "./projects/NoteMe";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="navbar-toggle">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contacthome" component={ContactHome} />
              <Route exact path="/cureandfit" component={CureAndFit} />
              <Route exact path="/noteme" component={NoteMe} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </ScrollToTop>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
