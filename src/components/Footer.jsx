import React from 'react';
import './Footer.css';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fitflow-footer">
      <div className="footer-left">
        <h2>
          <span>Join our newsletter</span>
          <br />
          for tips, advice
          <br />
          and offers!
        </h2>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">
            Subscribe <FaPaperPlane />
          </button>
        </form>

        <p className="privacy-text">
          By signing up to receive emails from FitFlow, you agree to our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. We treat your info
          responsibly. Unsubscribe anytime.
        </p>

        <p className="contact-text">
          Contact us: <a href="mailto:hello@fitflow.com">hello@fitflow.com</a>
        </p>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <h4>SITEMAP</h4>
        <ul>
          <li><Link to="/">Home Page <span>↗</span></Link></li>
          <li><Link to="/about">About Us <span>↗</span></Link></li>
          <li><Link to="/programs">Training Programs <span>↗</span></Link></li>
          <li><Link to="/get-started">Get Started <span>↗</span></Link></li>
          <li><Link to="/blog">Our Blog <span>↗</span></Link></li>
          <li><Link to="/blog/stronger-every-day">Blog Article <span>↗</span></Link></li>
          <li><Link to="/privacy-policy">Privacy Policy <span>↗</span></Link></li>
          <li><Link to="/404">404 Page Not Found <span>↗</span></Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          <span className="template-credit">
            <span className="logo">🌀</span> Framer Template handcrafted by{' '}
            <a href="https://dribbble.com/drukarov" target="_blank" rel="noopener noreferrer">
              Anton Drukarov
            </a>
          </span>
        </p>
        <p>Copyright 2025 FitFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
