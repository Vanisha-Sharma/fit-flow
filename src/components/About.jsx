import React from "react";
import "../components/About.css";
import Team from "../components/Team";
import Stats from "../components/Stats";
import TestimonialSlider from "../components/TestimonialSlider";
import AOSWrapper from './AOSWrapper';

const About = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <div className="about-wrapper">
      
      <Team />
      <Stats />
      <TestimonialSlider />
      
    </div>
    </AOSWrapper>
  );
};

export default About;
