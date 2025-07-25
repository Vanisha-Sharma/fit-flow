// CTA.jsx component
import React from 'react';
import './CTA.css';

export default function CTA() {
   return (
    <section className="transformation-section">
      <div className="transformation-container">
        <h2 className="transformation-heading">
          More Than Workouts — <br />
          <span className="highlight">A Lifestyle Transformation.</span>
        </h2>
        <p className="transformation-para">
          Fitness isn’t just about pushing through workouts or following strict meal plans — 
          it’s about creating a healthier, stronger version of yourself that lasts a lifetime. 
          At FitFlow, we take a holistic approach to fitness, combining expert guidance, 
          personalized training, and real-world strategies to help you build habits that stick.
        </p>
        <p className="transformation-para">
          Our coaching isn’t just about lifting weights or hitting a number on the scale. 
          It’s about confidence, energy, and becoming the best version of yourself — 
          mentally and physically. Whether you’re starting fresh or pushing past a plateau, 
          we provide the structure, accountability, and motivation to make progress feel natural.
        </p>
      </div>
    </section>
  );
}
