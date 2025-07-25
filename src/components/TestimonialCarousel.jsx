import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css'; // Import the CSS file

const TestimonialCarousel = () => {
  // Array of testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Samantha M.",
      date: "February 12, 2024",
      rating: 5,
      platform: "TrustPoint",
      title: "FitFlow completely changed my fitness journey!",
      content: "The personalized coaching, support, and easy-to-follow programs helped me achieve real results. Highly recommend!",
      image: "https://framerusercontent.com/images/ulx2XywgGe38LMTreJMGQKe30.jpg"
    },
    {
      id: 2,
      name: "David S.",
      date: "March 5, 2024",
      rating: 5,
      platform: "TrustPoint",
      title: "Best Decision I've Made!",
      content: "Joining this program was a game-changer. The structured plan and expert advice kept me accountable, and I finally achieved the results I've been chasing for years!",
      image: "https://framerusercontent.com/images/PRpMzpDPwaGPNL2EWJzR4ykI69k.jpg"
    },
    {
      id: 3,
      name: "Sophia L.",
      date: "January 28, 2024",
      rating: 5,
      platform: "TrustPoint",
      title: "Finally, a Plan That Works!",
      content: "I've tried so many fitness programs before, but this one actually made a difference. The support and clear instructions helped me stay consistent and see real progress!",
      image: "https://framerusercontent.com/images/tJuasPLiD0XxpPsKmuvVFChe27c.jpg"
    },
    {
      id: 4,
      name: "Robert S.",
      date: "February 12, 2024",
      rating: 4,
      platform: "TrustPoint",
      title: "Life-Changing Experience!",
      content: "I never thought online coaching could be this effective! The guidance and personalized workouts helped me transform my routine. I feel stronger and more confident than ever.",
      image: "https://framerusercontent.com/images/fT5dlWOabcS492Iug2cyRHrkPYA.jpg"
    },
    {
      id: 5,
      name: "Michael T.",
      date: "February 20, 2024",
      rating: 5,
      platform: "TrustPoint",
      title: "Stronger and More Confident!",
      content: "This program didn't just improve my fitness—it changed my mindset. I feel more energetic, motivated, and in control of my health. Highly recommend!",
      image: "https://framerusercontent.com/images/Pvy64WeJ0JTJZ7WsdgalSxYMRk.jpg"
    },
    {
      id: 6,
      name: "Emily C.",
      date: "March 1, 2024",
      rating: 5,
      platform: "TrustPoint",
      title: "The Results Speak for Themselves!",
      content: "I started with zero experience, but the step-by-step guidance made everything easy to follow. Now, I feel fitter and more capable than I ever imagined!",
      image: "https://framerusercontent.com/images/xCQrMu6idE2tQQWCjMpIOkKvXPg.jpg"
    }
  ];

  // State to manage the current active testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  // States for touch events to implement swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance in pixels for a swipe to be registered
  const minSwipeDistance = 50;

  /**
   * Handles the touch start event, recording the initial X coordinate.
   * @param {TouchEvent} e - The touch event object.
   */
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  /**
   * Handles the touch move event, recording the current X coordinate.
   * @param {TouchEvent} e - The touch event object.
   */
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  /**
   * Handles the touch end event, determining if a swipe occurred and
   * navigating the carousel accordingly.
   */
  const handleTouchEnd = () => {
    // If touch start or end coordinates are not recorded, exit
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd; // Calculate the horizontal distance swiped
    const isLeftSwipe = distance > minSwipeDistance; // True if swiped left beyond threshold
    const isRightSwipe = distance < -minSwipeDistance; // True if swiped right beyond threshold

    if (isLeftSwipe) {
      nextSlide(); // Move to the next slide
    } else if (isRightSwipe) {
      prevSlide(); // Move to the previous slide
    }

    // Reset touch coordinates after processing the swipe
    setTouchStart(null);
    setTouchEnd(null);
  };

  /**
   * Advances the carousel to the next slide. Loops back to the beginning
   * if currently at the last slide.
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Moves the carousel to the previous slide. Loops to the end
   * if currently at the first slide.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Effect hook for auto-sliding functionality
  useEffect(() => {
    // Set up an interval to automatically advance slides every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean-up function: clear the interval when the component unmounts
    // or when currentIndex changes (to reset the timer for the new slide)
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency array: re-run effect when currentIndex changes

  /**
   * Functional component to render star ratings.
   * @param {object} props - The component props.
   * @param {number} props.rating - The number of filled stars (1-5).
   * @returns {JSX.Element} - A div containing star icons.
   */
  const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`} // Apply 'filled' or 'empty' class based on rating
        >
          ★ {/* Unicode star character for visual representation */}
        </span>
      );
    }
    return <div className="rating">{stars}</div>;
  };

  return (
    <div className="testimonial-carousel">
      <div className="carousel-container">
        {/* Previous slide navigation button */}
        <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous testimonial">
          &lt;
        </button>

        {/* The main carousel track that holds all testimonial cards */}
        <div
          className="carousel-track"
          // Dynamically set transform to slide the track horizontally
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          // Attach touch event listeners for swipe functionality
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Map through testimonials array to render each testimonial card */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-content">
                <div className="user-image-container">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="user-image"
                    // Fallback image in case the original image fails to load
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/64x64/cccccc/333333?text=User"; }}
                  />
                </div>
                <div className="user-info">
                  <h3 className="user-name">{testimonial.name}</h3>
                  <Rating rating={testimonial.rating} /> {/* Render star rating */}
                </div>
                <div className="review-meta">
                  <span className="review-date">{testimonial.date}</span>
                  <span className="review-platform">
                    <span className="on-text"> on </span>
                    <span className="platform-name">{testimonial.platform}</span>
                  </span>
                </div>
                <div className="review-content">
                  <h4 className="review-title">{testimonial.title}</h4>
                  <p className="review-text">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next slide navigation button */}
        <button className="carousel-button next" onClick={nextSlide} aria-label="Next testimonial">
          &gt;
        </button>
      </div>

      {/* Carousel indicators (dots) at the bottom */}
      <div className="carousel-indicators">
        {/* Map through testimonials to create an indicator for each */}
        {testimonials.map((_, index) => (
          <button
            key={index}
            // Apply 'active' class if the indicator corresponds to the current slide
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            // On click, set the current index to navigate to that slide
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`} // Accessibility label
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;