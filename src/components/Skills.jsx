import React from 'react';
import skills from '../data/skills';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Skills.css';

const icons = {
  layout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  server: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="14" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 17.5h.01" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 015 5l-6.6 6.6a2 2 0 01-2.8 0L4.1 11.7a2 2 0 010-2.8L10.7 2.3" />
      <path d="M9 12l3 3" />
    </svg>
  ),
};

const Skills = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="skills" className="section skills" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            A practical, hands-on toolkit built through coursework, training and projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div
              className="skill-card"
              key={group.category}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              <div className="skill-icon">{icons[group.icon]}</div>
              <h3 className="skill-card-title">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
