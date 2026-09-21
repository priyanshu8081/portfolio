import React from 'react';
import experience from '../data/experience';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Experience.css';

const Experience = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="experience" className="section experience" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="experience-list">
          {experience.map((job, i) => (
            <div
              className="experience-card"
              key={job.company}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              <div className="experience-card-main">
                <div className="experience-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">{job.company}</p>
                </div>
                <span className="experience-duration">{job.duration}</span>
              </div>

              <ul className="experience-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
