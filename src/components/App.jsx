import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import firebase from "firebase"
import "../scss/main.scss"

import Home from "./home/Home";
import Navbar from './home/Navbar'
import ContactHome from "./userData/ContactHome";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig)
}else {
   firebase.app();
}


function App() {
  return (
    <>
    <Navbar />
    <div className="navbar-toggle">
    <BrowserRouter>
    <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contacthome" component={ContactHome} />
      </Switch>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;