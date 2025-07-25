import React from 'react';
import './Hero.css';

export default function Hero({ onStartJourney }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-left">
          <div className="trust"> Excellent <strong>4.9</strong> out of 5 ⭐ TrustPoint</div>
          <h1>
            <span>Stronger</span>
            <span>Healthier</span>
            <span>You.</span>
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <p>
              Transform your body and mindset with expert online coaching.
              Personalized training, real results, and full support — wherever
              you are.
            </p>
            <button className="hero-btn" onClick={onStartJourney}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}