import React, { useEffect, useState } from 'react';
import './Stats.css';

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K+';
  return num + '+';
};

const StatsCounter = ({ target, label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 1000;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div className="stat-box">
      <h2 className="stat-number">{formatNumber(Math.floor(count))}</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Stats = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stats = document.querySelector('.stats-section');
      if (stats) {
        const top = stats.getBoundingClientRect().top;
        if (top < window.innerHeight) {
          setStart(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="stats-section">
      <StatsCounter target={420} label="ACTIVE MEMBERS" start={start} />
      <StatsCounter target={3200} label="SESSIONS COMPLETED" start={start} />
      <StatsCounter target={27000000} label="CALORIES BURNT" start={start} />
    </section>
  );
};

export default Stats;
