import React from "react";
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import Services from "../services";
import Qualification from "../qualification";
import Work from "../work";
import Contact from "../contact";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
};

export default Main;
