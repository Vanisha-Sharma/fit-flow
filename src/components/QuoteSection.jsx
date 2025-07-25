// src/components/QuoteSection.jsx
import React from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  return (
    <div className="quote-container">
      <section className="quote-spacer" />
      <div className="quote-content">
        <div className="quote-text">
          <h4 className="quote-subtitle">No matter your fitness level, we&nbsp;have a&nbsp;program</h4>
          <h2 className="quote-title">Designed for&nbsp;you.</h2>
        </div>
        <div className="quote-text-button">
          <p className="quote-description">
            Choose the plan that fits your goals, and let our expert coaches guide you every step of the&nbsp;way.
          </p>
          <a href="./registration" className="quote-button">
            <strong>Get Started</strong>
            <span className="quote-button-icon">
              {/* SVG arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" width="24" height="24" fill="currentColor">
                <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <section className="quote-spacer" />
    </div>
  );
};

export default QuoteSection;
