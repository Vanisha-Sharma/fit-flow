import React, { useState, useRef, useEffect } from 'react';
import AOSWrapper from './AOSWrapper';
import './FAQ.css';

const faqData = [
  {
    question: "What is FitFlow?",
    answer:
      "FitFlow is an online coaching platform designed to help you reach your fitness goals with expert guidance, personalized training programs, and a supportive community.",
  },
  {
    question: "Who are the coaches?",
    answer:
      "Our certified trainers specialize in various fitness areas, including strength training, weight loss, mobility, and recovery. Each program is tailored to your individual needs.",
  },
  {
    question: "How does online coaching work?",
    answer:
      "Once you sign up, you’ll get a personalized training plan, access to workout guides, and direct support from your coach. You can train anytime, anywhere, at your own pace.",
  },
  {
    question: "Do I need equipment?",
    answer:
      "It depends on your chosen program. Some workouts use bodyweight exercises, while others incorporate gym equipment. Your coach will adjust your plan based on what you have available.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely! Whether you’re just starting or looking to level up your training, our programs cater to all fitness levels, from beginners to advanced athletes.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just choose a plan, sign up, and your coach will guide you through the next steps. You’ll receive everything you need to begin your fitness journey right away.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can switch or upgrade your plan anytime to fit your goals.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.maxHeight = openIndex === i ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AOSWrapper animation="fade-up" delay={100}>
    <section className="faq-section">
      {/* Left side image */}
      <div className="faq-image-container">
        <img src="/assets/FAQ-woman.png" alt="FAQ woman" className="faq-image" />
      </div>

      {/* Right side content */}
      <div className="faq-content">
        <h2 className="faq-title">
          Questions?<br /><span className="highlight">We've got answers.</span>
        </h2>
        <p className="faq-subtext">
          Find answers to the most common questions about FitFlow, including features, pricing, and how to get started.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {item.question}
              </div>
              <div
                className="faq-answer"
                ref={(el) => (contentRefs.current[index] = el)}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AOSWrapper>
  );
};

export default FAQ;
