// src/components/Features.jsx
import React from "react";
import "./Features.css";
import AOSWrapper from "./AOSWrapper";

const Features = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <section className="features-section" id="features">
      <div className="features-header">
        <h5>How It Works</h5>
        <h2>Your Fitness Journey.</h2>
        <p>
          Getting started with FitFlow is easy. Follow these simple steps, and
          let’s build the best version of you — together!
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card pink">
          <h3>Choose<br />Your Program</h3>
          <p>
            Select the plan that fits your goals—whether it’s strength, weight
            loss, or mobility.
          </p>
        </div>

        <div className="feature-card pink2">
          <h3>Get Your<br />Personalized Plan</h3>
          <p>
            Your coach will design a custom training and nutrition plan tailored
            to your needs.
          </p>
          <img src="/assets/woman.png" alt="Trainer" className="woman-img" />
        </div>

        <div className="feature-card purple">
          <h3>Train Anytime,<br />Anywhere</h3>
          <p>
            Follow your plan with video-guided workouts, progress tracking, and
            full coach support.
          </p>
        </div>

        <div className="feature-card blue">
          <h3>See & Feel<br />the Results</h3>
          <p>
            Stay consistent, track your improvements, and celebrate your
            transformation!
          </p>
        </div>

        <img src="/assets/dumbbell.png" alt="dumbbell" className="float-dumbbell" />
        <img src="/assets/water-bottle.png" alt="bottle" className="float-bottle" />
      </div>
    </section>
    </AOSWrapper>
  );
};

export default Features;
