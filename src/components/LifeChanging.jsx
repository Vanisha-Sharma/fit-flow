import React from "react";
import "./LifeChanging.css";
import AOSWrapper from "./AOSWrapper";

const LifeChanging = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <section className="life-section">
      <div className="life-container">
        <h2 className="life-heading">
          Simple. Effective. <span className="highlight">Life-Changing.</span>
        </h2>
        <p className="life-subtext">
          Forget cookie-cutter programs and complicated fitness advice — at
          FitFlow, we simplify success. Our method is built on three pillars
          that maximize results while fitting into your life:
        </p>

        <div className="life-points">
          <p>
            <strong>Personalized Training.</strong> No two bodies are the same,
            so why follow a one-size-fits-all plan? Your training program is
            built around your goals, schedule, and fitness level, ensuring
            progress that feels natural and sustainable.
          </p>

          <p>
            <strong>Smart Nutrition.</strong> Forget extreme diets or counting
            every calorie. We teach flexible, balanced nutrition that fits into
            your lifestyle, so you can enjoy food while making real progress.
          </p>

          <p>
            <strong>Continuous Support.</strong> The difference between success
            and burnout? Guidance and accountability. Our coaches and community
            are here to support you every step of the way, keeping you motivated
            and on track.
          </p>
        </div>
      </div>
    </section>
    </AOSWrapper>
  );
};

export default LifeChanging;
