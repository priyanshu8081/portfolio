import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/About.css';

const stats = [
  { label: 'CGPA', value: '8.05' },
  { label: 'Training', value: '6 mo.' },
  { label: 'Projects Built', value: '4+' },
];

const About = () => {
  const containerRef = useScrollReveal();

  return (
    <section id="about" className="section about" ref={containerRef}>
      <div className="container about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-card">
            <div className="about-card-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="about-card-filename">about.js</span>
            </div>
            <pre className="about-code">
{`const developer = {
  name: 'Priyanshu Chauhan',
  role: 'MERN Stack Developer',
  education: 'B.Tech CSE, AKTU',
  based: 'Lucknow, India',
  stack: ['React', 'Node.js',
    'Express', 'MongoDB'],
  focus: 'Full-stack web apps',
};`}
            </pre>
          </div>
          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <p className="about-stat-value">{s.value}</p>
                <p className="about-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content" data-reveal data-reveal-delay="1">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">
            Turning ideas into <span className="gradient-text">full-stack products</span>
          </h2>
          <p className="about-text">
            I'm a B.Tech Computer Science Engineering student and an aspiring
            full-stack developer, currently building my skills through
            hands-on MERN stack development. I enjoy working across the
            entire application — from designing clean, responsive interfaces
            in React to building secure REST APIs with Node.js and Express,
            backed by MongoDB and MySQL.
          </p>
          <p className="about-text">
            Through project work and a structured apprenticeship, I've gained
            practical experience with authentication (JWT), version control
            with Git and GitHub, and writing maintainable, production-style
            code. I'm currently looking for opportunities where I can
            contribute as a full-stack developer and keep growing.
          </p>
          <a href="/resume.pdf" download className="btn btn-outline about-resume-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
