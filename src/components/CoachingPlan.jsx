import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOSWrapper from './AOSWrapper';
import './CoachingPlan.css';

const sliderImages = [
  "https://framerusercontent.com/images/X5G4Flezr8TgjFaI5xhPVmlXA.jpg", // Slide 1
  "https://framerusercontent.com/images/urF7n2pTdsXaAIvrk9xulmQqaI.jpg", // Slide 2
  "https://framerusercontent.com/images/3z4JNWCjW6gGiL38bEfDtAsJy4.jpg"  // Slide 3
];

const CoachingPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const handleBackClick = () => {
    navigate('/'); // This will take you back to the home page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <div className="coaching-plan-container">
      <div className="coaching-plan-content">
        {/* Left Section - Form */}
        <div className="form-section">
          <button type="button" className="back-link" onClick={handleBackClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Go Back
          </button>

          <h2 className="form-title">
            Get Your <span className="highlight">Personalized</span> Coaching Plan.
          </h2>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div className="input-group">
              <input type="text" placeholder="Full Name*" className="input-field" required />
              <input type="email" placeholder="Email Address*" className="input-field" required />
            </div>

            <select className="select-field" defaultValue="" required>
              <option value="" disabled>What's your primary goal?</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="flexibility">Flexibility & Mobility</option>
              <option value="overall-health">Overall Health</option>
            </select>

            <div className="checkbox-group">
              <input type="checkbox" id="newsletter" name="newsletter" />
              <label htmlFor="newsletter">
                I consent to receiving emails from FitFlow.
                We send a brief newsletter once a month, which includes tips, articles, offers and news. Our emails always contain an unsubscribe link.
              </label>
            </div>

            <button type="submit" className="submit-button">
              Start Your Journey
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section - Image Slider */}
        <div className="image-slider-section">
          <img
            src={sliderImages[currentSlide]}
            alt="Fitness"
            className="slider-image"
          />
          <button className="slider-nav-arrow left" onClick={prevSlide}>&lt;</button>
          <button className="slider-nav-arrow right" onClick={nextSlide}>&gt;</button>
        </div>
      </div>
    </div>
    </AOSWrapper>
  );
};

export default CoachingPlan;
