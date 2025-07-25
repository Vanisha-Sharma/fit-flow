import React, { useState } from 'react';
import './PricingPlans.css';

const PricingPlans = () => {
  const [yearly, setYearly] = useState(false);

  const toggleBilling = () => setYearly(!yearly);

  const formatPrice = (monthly) => yearly ? Math.round(monthly * 12 * 0.8) : monthly;

  return (
    <section className="pricing-section">
      <h1 className="pricing-title">
        <span>Choose the Plan That <br /></span>
        <span className="highlight">Moves You Forward</span>
      </h1>

      <p className="pricing-subtext">
        No matter where you are on your fitness journey, we have the right plan to help you reach your goals.
        Get expert coaching, structured workouts, and the support you need to stay on track.
      </p>

      <div className="billing-toggle">
        <span className={!yearly ? 'active' : ''}>Monthly Billing</span>
        <div className={`switch ${yearly ? 'yearly' : ''}`} onClick={toggleBilling}>
          <div className="circle"></div>
        </div>
        <span className={yearly ? 'active' : ''}>Yearly Billing</span>
      </div>

      <p className="save-text">Switch to Yearly to <span>save 20%</span>!</p>

      <div className="plan-cards">
        {/* BASIC */}
        <div className="plan-card">
          <h4>BASIC</h4>
          <h2>${formatPrice(29)}<span>/month</span></h2>
          <p>Perfect for those starting out or looking for a fitness plan with guidance.</p>
          <ul>
            <li>✅ Customized workout plans</li>
            <li>✅ Weekly progress tracking</li>
            <li>✅ Access to group Q&A sessions</li>
            <li>✅ Community support</li>
          </ul>
          <button className="btn gray">Get Started ↗</button>
        </div>

        {/* PRO */}
        <div className="plan-card active">
          <div className="badge">BEST SELLER</div>
          <h4>PRO</h4>
          <h2>${formatPrice(49)}<span>/month</span></h2>
          <p>Step up your training with personalized coaching and expert feedback.</p>
          <ul>
            <li>✅ Everything in Basic</li>
            <li>✅ 1-on-1 check-ins with a coach</li>
            <li>✅ Personalized nutrition guidance</li>
            <li>✅ Video form reviews & feedback</li>
          </ul>
          <button className="btn pink">Get Started ↗</button>
        </div>

        {/* ELITE */}
        <div className="plan-card">
          <h4>ELITE</h4>
          <h2>${formatPrice(69)}<span>/month</span></h2>
          <p>For those who want a fully personalized experience with dedicated support.</p>
          <ul>
            <li>✅ Everything in Pro</li>
            <li>✅ Custom meal planning</li>
            <li>✅ Private coaching calls</li>
            <li>✅ Priority response from coaches</li>
          </ul>
          <button className="btn gray">Get Started ↗</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;

