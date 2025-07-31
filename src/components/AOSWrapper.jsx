import React from 'react';

/**
 * AOSWrapper is a reusable component that applies AOS scroll animation
 * to any wrapped content.
 *
 * Props:
 * - animation: string (e.g. "fade-up", "zoom-in", "flip-left")
 * - delay: number (ms) – delay before animation starts
 * - duration: number (ms) – duration of the animation
 * - offset: number – how far from the top before animation triggers
 * - easing: string – easing function
 * - anchorPlacement: string – trigger point relative to viewport
 */
const AOSWrapper = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  offset = 120,
  easing = 'ease-in-out',
  anchorPlacement = 'top-bottom',
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-anchor-placement={anchorPlacement}
    >
      {children}
    </div>
  );
};

export default AOSWrapper;
