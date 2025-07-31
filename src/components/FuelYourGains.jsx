import React from "react";
import { Link } from "react-router-dom";
import "./FuelYourGains.css";
import FYGSection from "./FYGSection";
import FYGImage from "./FYGImage";
import FYGArticle from "./FYGArticle";
import "./Blog.css";
import AOSWrapper from "./AOSWrapper";

const FuelYourGains = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <>
    <AOSWrapper animation="zoom-out" delay={100}>
      <a href="/blog/crush-your-core" className="featured-blog">
        <div className="blog-overlay">
          <div className="blog-content">
            <p className="blog-label">S01-E03</p>
            <h2 className="blog-title">Fuel Your Gains.</h2>
            <p className="blog-desc">
              Are you eating for performance? Coach Emma walks through simple
              nutrition hacks to fuel workouts, boost recovery, and stay on
              track.
            </p>
            <span className="read-more">Read Article →</span>
          </div>
        </div>
      </a>
      </AOSWrapper>

      <FYGSection />
      <FYGImage />
      <FYGArticle />

      <section className="articles-section">
        <div className="articles-header">
          <p className="articles-subheading">MORE ARTICLES</p>
          <h2 className="articles-heading">
            <span className="highlight">Train Smarter,</span>
            <br />
            Stay Motivated!
          </h2>
        </div>

        <div className="articles-grid">
          <Link
            to="/blog/crush-your-core"
            className="article-card"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/s66q8qMof7Qdzw49YvAJyOtGj4.jpg')`,
            }}
          >
            <div className="article-overlay">
              <h3 className="article-title">Stronger Every Day.</h3>
              <p className="article-desc">
                Push past limits, build strength, and stay consistent. In this
                article, Coach Anna breaks down key exercises to improve form,
                avoid injuries, and maximize gains.
              </p>
              <span className="read-link">Read Article ↗</span>
            </div>
          </Link>

          <Link
            to="/blog/crush-your-core"
            className="article-card"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/G3YCIaItF00AXyHipB2DbQl4.jpg')`,
            }}
          >
            <div className="article-overlay">
              <h3 className="article-title">Crush Your Core.</h3>
              <p className="article-desc">
                Build rock-solid abs with these game-changing moves! Coach
                Daniel shares a no-equipment core routine designed to improve
                strength and stability.
              </p>
              <span className="read-link">Read Article ↗</span>
            </div>
          </Link>
        </div>
      </section>
    </>
    </AOSWrapper>
  );
};

export default FuelYourGains;
