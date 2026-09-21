import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Education.css';

const Education = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="education" className="section education" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education-card" data-reveal data-reveal-delay="1">
          <div className="education-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              <path d="M5 13.18v4L12 21l7-3.82v-4" />
            </svg>
          </div>
          <div className="education-info">
            <h3 className="education-degree">B.Tech in Computer Science Engineering</h3>
            <p className="education-school">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
            <div className="education-meta">
              <span>2023 &ndash; 2027</span>
              <span className="education-divider">&bull;</span>
              <span>CGPA: 8.05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
