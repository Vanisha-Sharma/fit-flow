import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import About from './components/About';
import TrainingPrograms from './components/TrainingPrograms';
import QuoteSection from './components/QuoteSection';
import FeaturedBlog from './components/FeaturedBlog';
import ChoosePlan from './components/PricingPlans';
import LifeChanging from './components/LifeChanging';
import Testimonials from './components/Testimonials';
import TestimonialCarousel from './components/TestimonialCarousel';
import TrustPointBadge from './components/TrustPointBadge';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import CoachingPlan from './components/CoachingPlan';
import Blog from './components/Blog';
import CrushYourCore from './components/CrushYourCore'; // <-- ✅ Add this line
import FuelYourGains from './components/FuelYourGains';

// Animation wrapper
const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

function HomePage() {
  const navigate = useNavigate();
  const handleStartJourney = () => navigate('/get-started');

  return (
    <>
      <Hero onStartJourney={handleStartJourney} />
      <About />
      <TrainingPrograms />
      <QuoteSection />
      <FeaturedBlog />
      <ChoosePlan />
      <Features />
      <LifeChanging />
      <FAQ />
      <Testimonials />
      <TestimonialCarousel />
      <TrustPointBadge />
      <CTA />
    </>
  );
}

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path="/programs" element={<AnimatedPage><TrainingPrograms /></AnimatedPage>} />
          <Route path="/get-started" element={<AnimatedPage><CoachingPlan /></AnimatedPage>} />
          <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicy /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Footer /></AnimatedPage>} />
          <Route path="/blog/stronger-every-day-copy" element={<AnimatedPage><Blog /></AnimatedPage>} />
          <Route path="/blog/stronger-every-day" element={<AnimatedPage><Blog /></AnimatedPage>} />
          <Route path="/blog/crush-your-core" element={<AnimatedPage><CrushYourCore /></AnimatedPage>} />
          <Route path="/blog/fuel-your-gains" element={<AnimatedPage><FuelYourGains /></AnimatedPage>} />
          
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
