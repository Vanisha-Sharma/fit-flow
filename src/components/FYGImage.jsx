import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const slides = [
  'https://framerusercontent.com/images/X5G4Flezr8TgjFaI5xhPVmlXA.jpg', // Slide 0
  'https://framerusercontent.com/images/X7IEm9J2cKtAN2cZIq0KpfRXRqU.jpg', // Slide 1
  'https://framerusercontent.com/images/HYAbOqNzyPNM7Yr3UYlatR8wfWU.jpg'  // Slide 2
];

const FYGImage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <img
        src={slides[current]}
        alt={`slide-${current}`}
        className="carousel-image"
      />
      <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
      <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FYGImage;
