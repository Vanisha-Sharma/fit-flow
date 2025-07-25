import React from 'react';
import './BlogArticle.css';

const BlogArticle = () => {
  return (
    <section className="blog-article">
      <div className="blog-meta">
        <span className="episode">S01-E05</span>
        <span className="divider">|</span>
        <span className="date">MARCH 28, 2025</span>
      </div>
      <h2 className="blog-title">Building Consistency in Your Routine</h2>
      <p className="blog-paragraph">
        Consistency is the backbone of progress in fitness. Without a dedicated routine,
        even the most effective training plans will fall short. To achieve lasting results,
        it’s essential to create a schedule that fits your lifestyle and stick to it.
      </p>
      <p className="blog-paragraph">
        Start by setting clear, realistic goals that you can build upon over time.
        Whether you want to increase muscle mass, boost endurance, or lose weight,
        having a defined target will keep you focused and motivated. Breaking down your
        larger goals into smaller milestones makes the journey feel more manageable and
        rewarding.
      </p>
      <p className="blog-paragraph">
        Tracking your progress is equally important. Documenting your workouts,
        noting improvements in strength or stamina, and celebrating small wins will
        reinforce your commitment. Consistency doesn’t mean perfection; it means
        showing up and giving your best effort on a regular basis, even on days when
        motivation is low.
      </p>
    </section>
  );
};

export default BlogArticle;
