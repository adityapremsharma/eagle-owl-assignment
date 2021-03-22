import React from "react"
import "../scss/main.scss"

import Home from "./home/Home";
import Navbar from './home/Navbar'


function App() {
  return (
    <>
    <Navbar />
    <div className="navbar-toggle">
      <Home />
      </div>
    </>
  );
}

export default App;