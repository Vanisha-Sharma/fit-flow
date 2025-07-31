import React from "react";
import { Link } from "react-router-dom";
import "./CrushYourCore.css";
import CYCSection from "./CYCSEction";
import CYCImage from "./CYCImage";
import CYCArticle from "./CYCArticle"; 
import "./Blog.css";

const CrushYourCore = () => {
  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <>
      <a href="/blog/crush-your-core" className="featured-blog">
      <AOSWrapper animation="zoom-out" delay={100}>
        <div className="blog-overlay">
          <div className="blog-content">
            <p className="blog-label">S01-E04</p>
            <h2 className="blog-title">Crush Your Core.</h2>
            <p className="blog-desc">
              Build rock-solid abs with these game-changing moves! Coach Daniel
              shares a no-equipment core routine designed to improve strength
              and stability.
            </p>
            <span className="read-more">Read Article →</span>
          </div>
        </div>
        </AOSWrapper>
      </a>

      <CYCSection />
      <CYCImage />
      <CYCArticle />

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
            to="/blog/fuel-your-gains"
            className="article-card"
            style={{
              backgroundImage: `url('https://framerusercontent.com/images/xNfRNVcFHBxj1Ir0MnuEmfxBZhY.jpg')`,
            }}
          >
            <div className="article-overlay">
              <h3 className="article-title">Fuel Your Gains</h3>
              <p className="article-desc">
                Are you eating for performance? Coach Emma walks through simple
                nutrition hacks to fuel workouts, boost recovery, and stay on
                track.
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

export default CrushYourCore;
