import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./NotFound.css";
import AOSWrapper from "./AOSWrapper";

const NotFound = () => {
  const imgRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const offsetX = mouseX - rect.width / 2;
    const offsetY = mouseY - rect.height / 2;

    x.set(offsetX / 10); // smaller divisor = more movement
    y.set(offsetY / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <AOSWrapper animation="fade-up" delay={100}>
      <>
        <div className="notfound-container">
          <div className="notfound-hero">
            <h1 className="notfound-code">4</h1>

            <motion.div
              ref={imgRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="notfound-kettle-wrapper"
            >
              <img
                src="/assets/kettlebell.png"
                alt="Kettlebell"
                className="notfound-img"
              />
            </motion.div>

            <h1 className="notfound-code">4</h1>
          </div>

          <p className="notfound-message">
            The page you are looking for could not be found.
          </p>
          <Link to="/" className="notfound-btn">
            Back to Homepage
          </Link>
        </div>
      </>
    </AOSWrapper>
  );
};

export default NotFound;
