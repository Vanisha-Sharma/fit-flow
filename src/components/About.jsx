import React from "react";
import "../components/About.css";
import Team from "../components/Team";
import Stats from "../components/Stats";
import TestimonialSlider from "../components/TestimonialSlider";

const About = () => {
  return (
    <div className="about-wrapper">
      <Team />
      <Stats />
      <TestimonialSlider />
    </div>
  );
};

export default About;
