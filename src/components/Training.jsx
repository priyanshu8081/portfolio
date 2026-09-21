import React from 'react';
import trainings from '../data/trainings';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Training.css';

const Training = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="training" className="section training" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">Training</p>
          <h2 className="section-title">Practical training programs</h2>
        </div>

        <div className="training-list">
          {trainings.map((program, i) => (
            <div
              className="training-card"
              key={program.id}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              <div className="training-card-main">
                <div className="training-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 10l-10-5L2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="training-title">{program.title}</h3>
                  <p className="training-company">{program.company}</p>
                </div>
                <span className="training-duration">{program.duration}</span>
              </div>

              <ul className="training-list-points">
                {program.points.map((point) => (
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

export default Training;
