import React, { useState } from "react";
import "./TestimonialSlider.css";
import AOSWrapper from "./AOSWrapper";

const images = [
  "https://framerusercontent.com/images/zOwf7BZOj8wuFl3sQN2sWMDSvRU.jpg",
  "https://framerusercontent.com/images/yvPUpUvXGwX73TrLFb6SODozqmw.jpg",
  "https://framerusercontent.com/images/LkwFAkiQTwD0OTtITL39ivgPSzc.jpg",
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-text">
          <h2>
            <span className="highlight">Real People.</span>
            <br />
            Real Results.
          </h2>
          <p>
            See how FitFlow has helped clients transform their bodies, boost their
            confidence, and achieve their fitness goals. From building muscle and
            shedding weight to improving mobility and well-being — real, lasting
            changes for people just like you.
          </p>
        </div>

        <div className="testimonial-carousel">
          <img
            src={images[current]}
            alt={`Before and After ${current + 1}`}
            className="testimonial-image"
            loading="lazy"
          />

          <button className="arrow left" onClick={prevSlide} aria-label="Previous Slide">
            &#10094;
          </button>
          <button className="arrow right" onClick={nextSlide} aria-label="Next Slide">
            &#10095;
          </button>

          <div className="dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
                role="button"
                aria-label={`Go to slide ${index + 1}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </AOSWrapper>
  );
};

export default TestimonialSlider;
