import React from "react";
import "./FeaturedBlog.css";
import AOSWrapper from "./AOSWrapper";

const FeaturedBlog = () => {
  return (
    <AOSWrapper animation="zoom-out" delay={100}>
    <a href="/blog/stronger-every-day-copy" className="featured-blog">
      <div className="blog-overlay">
        <div className="blog-content">
          <p className="blog-label">LATEST ARTICLE</p>
          <h2 className="blog-title">Stronger Every Day.</h2>
          <p className="blog-desc">
            Push past limits, build strength, and stay consistent. In this
            article, Coach Anna breaks down key exercises to improve form, avoid
            injuries, and maximize gains.
          </p>
          <span className="read-more">Read Article →</span>
        </div>
      </div>
    </a>
    </AOSWrapper>
  );
};

export default FeaturedBlog;
