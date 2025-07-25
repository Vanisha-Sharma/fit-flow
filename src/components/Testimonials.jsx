import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-header">
        <h5 className="subtitle">Testimonials</h5>
        <h2 className="title">
          <span>What Our </span>
          <span className="highlight">Clients Say.</span>
        </h2>
        <p className="description">
          Don’t just take our word for it — see what our clients have to say about their FitFlow experience.
        </p>
      </div>

      {/* Existing text testimonials or image slider could go here */}

      {/* ---- VIDEO TESTIMONIAL SECTION ---- */}
      <div className="video-testimonials">
        <div className="video-card">
          <div className="video-wrapper">
            <video
              controls
              poster="https://framerusercontent.com/images/dB3TDCW4J4No4TauEigQfhNhVOg.jpg"
              className="video"
            >
              <source src="https://framerusercontent.com/assets/ajMTWtT2oL6i22Pdnj5bnsk.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="video-card">
          <div className="video-wrapper">
            <video
              controls
              poster="https://framerusercontent.com/images/isTkt92XgZZplueHb6brGPhvJw.jpg"
              className="video"
            >
              <source src="https://framerusercontent.com/assets/MyFIPA0lJD8NTUwTO1aishKNyDM.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="video-card">
          <div className="video-wrapper">
            <video
              controls
              poster="https://framerusercontent.com/images/UEv21mNOLqF2I9OYqbq4gqwh46A.jpg"
              className="video"
            >
              <source src="https://framerusercontent.com/assets/0Vlbu5A7BQ9oA3LpHhHyquRvmwc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
