import React from "react";
import { Link } from "react-router-dom";
import FeaturedBlog from "./FeaturedBlog";
import FormTipsSection from "./FormTipsSection";
import ImageCarousel from "./ImageCarousel";
import BlogArticle from "./BlogArticle";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <FeaturedBlog />
      <BlogArticle />
      <ImageCarousel />
      <FormTipsSection />
      
      <section className="articles-section">
        <div className="articles-header">
          <p className="articles-subheading">MORE ARTICLES</p>
          <h2 className="articles-heading">
            <span className="highlight">Train Smarter,</span><br />
            Stay Motivated!
          </h2>
        </div>

        <div className="articles-grid">
          <Link to="/blog/crush-your-core" className="article-card" style={{ backgroundImage: `url('https://framerusercontent.com/images/G3YCIaItF00AXyHipB2DbQl4.jpg')` }}>
            <div className="article-overlay">
              <h3 className="article-title">Crush Your Core.</h3>
              <p className="article-desc">
                Build rock-solid abs with these game-changing moves! Coach Daniel shares a no-equipment core routine designed to improve strength and stability.
              </p>
              <span className="read-link">Read Article ↗</span>
            </div>
          </Link>

          <Link to="/blog/fuel-your-gains" className="article-card" style={{ backgroundImage: `url('https://framerusercontent.com/images/xNfRNVcFHBxj1Ir0MnuEmfxBZhY.jpg')` }}>
            <div className="article-overlay">
              <h3 className="article-title">Fuel Your Gains</h3>
              <p className="article-desc">
                Are you eating for performance? Coach Emma walks through simple nutrition hacks to fuel workouts, boost recovery, and stay on track.
              </p>
              <span className="read-link">Read Article ↗</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;