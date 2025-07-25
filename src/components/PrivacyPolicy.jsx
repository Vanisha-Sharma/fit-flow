import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PrivacyPolicy.css";
import { FaCheckCircle } from "react-icons/fa";

const PinkCheckIcon = () => (
  <svg
    className="pink-check-icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#FF4FA0" strokeWidth="2" />
    <path d="M8 12L11 15L16 9" stroke="#FF4FA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-intro">
          At FitFlow, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.
        </p>

        <section className="privacy-section">
          <h2>What Information We Collect</h2>
          <p>We collect personal data you provide when you:</p>
          <ul>
            <li><PinkCheckIcon /> Sign up for our services (e.g., name, email, payment details).</li>
            <li><PinkCheckIcon /> Share fitness data (e.g., weight, workout progress, nutrition details).</li>
            <li><PinkCheckIcon /> Communicate with us through forms, emails, or social media.</li>
            <li><PinkCheckIcon /> Visit our website (e.g., IP address, browsing activity via cookies).</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>Your data is used to:</p>
          <ul>
            <li><PinkCheckIcon /> Create and manage your account.</li>
            <li><PinkCheckIcon /> Provide customized training programs and track your progress.</li>
            <li><PinkCheckIcon /> Process payments and keep records.</li>
            <li><PinkCheckIcon /> Improve our services through feedback and analytics.</li>
            <li><PinkCheckIcon /> Send marketing communications if you've opted in.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>Data Security & Retention</h2>
          <p>
            We implement technical and organizational measures to protect your data. Personal data is stored only for as long as necessary to provide our services or comply with legal obligations.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>
            You can request access, correction, or deletion of your personal data at any time. You may also object to processing or withdraw consent where applicable.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for payments and analytics. These providers follow their own privacy policies which we encourage you to review.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about your privacy, please contact us at:
            <br />
            <a href="mailto:support@fitflow.com" className="email-link">support@fitflow.com</a>
          </p>
        </section>

        <footer className="privacy-footer">
          Last updated: March 31, 2025
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
