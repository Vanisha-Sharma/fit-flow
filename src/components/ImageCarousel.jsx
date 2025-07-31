import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import AOSWrapper from './AOSWrapper';

const slides = [
  '/assets/slide1.jpg',
  '/assets/slide2.jpg',
  '/assets/slide3.jpg'
];

const ImageCarousel = () => {
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
    <AOSWrapper animation="fade-up" delay={100}>
    <div className="carousel-container">
      <img src={slides[current]} alt={`slide-${current}`} className="carousel-image" />
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
    </AOSWrapper>
  );
};

export default ImageCarousel;
