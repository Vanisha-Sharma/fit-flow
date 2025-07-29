import React from "react";
import "./BlogArticle.css";

const FYGSEction = () => {
  return (
    <section className="blog-article">
      <div className="blog-meta">
        <span className="episode">S01-E03</span>
        <span className="divider">|</span>
        <span className="date">MARCH 14, 2025</span>
      </div>
      <h2 className="blog-title">Balancing Your Macros for Performance</h2>
      <p className="blog-paragraph">
        Proper nutrition is the cornerstone of fitness success. Understanding
        your macronutrient needs—proteins, fats, and carbohydrates—can
        significantly impact your performance, recovery, and overall progress.
        Proteins are essential for muscle repair and growth, especially after
        intense training sessions. Incorporating lean meats, fish, eggs,
        legumes, and plant-based proteins helps rebuild muscle tissue and
        support recovery
      </p>
      <p className="blog-paragraph">
        Fats, often misunderstood, are crucial for sustained energy and hormone
        production. Healthy sources such as avocados, nuts, and olive oil
        provide essential fatty acids that contribute to overall health and
        performance.
      </p>
      <p className="blog-paragraph">
        Carbohydrates serve as the body’s primary energy source, particularly
        during high-intensity training. Incorporating complex carbs like whole
        grains, vegetables, and fruits ensures consistent energy levels and
        improved endurance. Balancing your intake of these macronutrients
        according to your fitness goals is key to maximizing results.
      </p>
    </section>
  );
};

export default FYGSEction;
