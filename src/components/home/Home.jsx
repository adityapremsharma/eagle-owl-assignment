import React from "react";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
