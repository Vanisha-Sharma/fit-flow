import React from 'react';
import './TrustPointBadge.css';

const TrustPointBadge = () => {
  return (
    <a
      className="trustpoint-badge"
      href="https://framer.link/drukarov"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="trustpoint-content">
        <div className="trustpoint-header">
          <div className="star-icon" />
          <p className="trustpoint-text"><strong>TrustPoint</strong></p>
        </div>
        <div className="trustpoint-rating">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="rating-star" />
          ))}
        </div>
        <p className="trustpoint-score"><strong>Excellent 4.9</strong> out of 5</p>
      </div>
    </a>
  );
};

export default TrustPointBadge;
