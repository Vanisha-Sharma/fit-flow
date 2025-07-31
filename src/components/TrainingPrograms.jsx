import React from 'react';
import './TrainingPrograms.css';
import AOSWrapper from './AOSWrapper';

const TrainingPrograms = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <div className="training-programs-container">
      <div className="header">
        <p className="subtitle">TRAINING PROGRAMS</p>
        <h1 className="main-title">
          Your Goals, <span className="highlight">Your Plan.</span>
        </h1>
        <p className="description">
          At FitFlow, we believe that fitness isn’t one-size-fits-all. Whether you want to build strength,
          lose weight, improve mobility, or simply feel better in your body, our expert-designed programs provide
          structured, personalized training to help you reach your goals.
        </p>
      </div>

      {/* Strength & Muscle Building */}
      <section className="program-card strength">
        <div className="content">
          <h2>Strength & Muscle Building.</h2>
          <p>
            Build strength, endurance, and lean muscle with expert-designed workouts. Increase strength,
            build lean muscle, and improve endurance with structured training. Your coach will design
            progressive workouts tailored to your fitness level and goals.
          </p>
          <ul>
            <li>Custom strength programs</li>
            <li>Progressive overload training</li>
            <li>Focus on technique & injury prevention</li>
          </ul>
        </div>
        <img src="/assets/dumbbell.png" alt="Dumbbell" className="floating-image" />
      </section>

      {/* Mobility & Recovery */}
      <section className="program-card mobility">
        <img src="/assets/water-bottle.png" alt="Water Bottle" className="floating-image" />
        <div className="content">
          <h2>Mobility & Recovery.</h2>
          <p>
            Improve flexibility, prevent injuries, and move better every day. Enhance flexibility,
            prevent injuries, and optimize movement with mobility-focused training.
          </p>
          <ul>
            <li>Personalized mobility drills</li>
            <li>Post-workout recovery plans</li>
            <li>Injury prevention techniques</li>
          </ul>
        </div>
      </section>

      {/* Weight Loss & Fat Burn */}
      <section className="program-card weight-loss">
        <div className="content">
          <h2>Weight Loss & Fat Burn.</h2>
          <p>
            Shed excess weight and boost metabolism with a balanced fitness approach. Burn fat, boost metabolism,
            and achieve sustainable weight loss with a mix of strength, cardio, and expert nutrition guidance.
          </p>
          <ul>
            <li>Fat-burning workout plans</li>
            <li>Sustainable nutrition strategies</li>
            <li>Weekly progress tracking</li>
          </ul>
        </div>
        <img src="/assets/pink-dumbbells.png" alt="Pink Dumbbells" className="floating-image" />
      </section>
    </div>
    </AOSWrapper>
  );
};

export default TrainingPrograms;
