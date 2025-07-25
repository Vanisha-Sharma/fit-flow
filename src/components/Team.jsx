import React, { useState } from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Mark Thompson",
    title: "Weight Loss Coach",
    bio: "Mark helps people shed fat and maintain a healthy lifestyle with tailored programs.",
    image: "/assets/About1.jpg",
  },
  {
    name: "Sophie Turner",
    title: "Nutrition Expert",
    bio: "Sophie crafts personalized nutrition plans for optimal fitness and health.",
    image: "/assets/About2.jpg",
  },
  {
    name: "David Warner",
    title: "HIIT Specialist",
    bio: "David pushes clients through high-intensity interval training for maximum results.",
    image: "/assets/About3.jpg",
  },
];

const Team = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handlePrev = () => {
    setFlipped(false);
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFlipped(false);
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const toggleFlip = () => setFlipped((f) => !f);

  return (
    <section className="team-section">
      <h2 className="team-heading">
        <span>Your Fitness, <br /></span> <span className="highlight">Your Flow.</span>
      </h2>
      <p className="team-subtext">
        At FitFlow, we believe fitness is more than just training — it’s a
        lifestyle, a mindset, and a journey that should be tailored to you.
        Whether you’re looking to build strength, lose weight, or improve
        overall health, our expert coaches are here to guide you every step of
        the way.
      </p>

      <div className="team-slider">
        <button className="arrow left" onClick={handlePrev}>
          ‹
        </button>

        <div className="card-stack">
          {teamMembers.map((member, idx) => {
            const isActive = idx === current;
            const isPrev =
              idx === (current - 1 + teamMembers.length) % teamMembers.length;
            const isNext = idx === (current + 1) % teamMembers.length;

            const cls = isActive
              ? "active"
              : isPrev
              ? "prev"
              : isNext
              ? "next"
              : "hidden";

            return (
              <div key={idx} className={`card ${cls}`}>
                <div
                  className={`card-inner ${
                    isActive && flipped ? "rotate" : ""
                  }`}
                >
                  <div
                    className="card-front"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    {isActive && (
                      <button className="flip-btn" onClick={toggleFlip}>
                        +
                      </button>
                    )}
                    <div className="info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    {isActive && (
                      <button className="flip-btn" onClick={toggleFlip}>
                        ×
                      </button>
                    )}
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <p className="desc">{member.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={handleNext}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Team;
