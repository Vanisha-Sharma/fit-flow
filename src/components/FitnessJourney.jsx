import React from 'react';
import './FitnessJourney.css';
import AOSWrapper from './AOSWrapper';

const FitnessJourney = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <div className="fitness-section">
      <div className="grid-container">
        {/* Card 1 */}
        <div className="card pink">
          <h3>Choose<br />Your Program</h3>
          <p>Select the plan that fits your goals—whether it’s strength, weight loss, or mobility.</p>
          <img src="https://framerusercontent.com/images/94aw7fEsGa8y9rC3iycUZCdd5A0.png" alt="Dumbbells" className="floating-image top-img" />
        </div>

        {/* Card 2 */}
        <div className="card purple">
          <h3>Get Your Personalized Plan</h3>
          <p>Your coach will design a custom training and nutrition plan tailored to your needs.</p>
          <img src="https://framerusercontent.com/images/cECRVwiW14T7KUikJFEYUXUL0Dg.png" alt="Trainer" className="floating-image right-img" />
        </div>

        {/* Card 3 */}
        <div className="card violet">
          <h3>Train Anytime, Anywhere</h3>
          <p>Follow your plan with video-guided workouts, progress tracking, and full coach support.</p>
          <img src="https://framerusercontent.com/images/ahziV7aGbiAdl2lQYG7wSJJ3Q.png" alt="Water Bottle" className="floating-image left-img" />
        </div>

        {/* Card 4 */}
        <div className="card blue">
          <h3>See &amp; Feel the Results</h3>
          <p>Stay consistent, track your improvements, and celebrate your transformation!</p>
        </div>
      </div>
    </div>
    </AOSWrapper>
  );
};

export default FitnessJourney;
