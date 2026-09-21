import React, { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/About.css';

const stats = [
  { label: 'CGPA', target: 8.05, decimals: 2, suffix: '' },
  { label: 'Training', target: 6, decimals: 0, suffix: ' mo.' },
  { label: 'Projects Built', target: 4, decimals: 0, suffix: '+' },
];

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const About = () => {
  const containerRef = useScrollReveal();
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setCounts(stats.map((s) => s.target));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated.current) return;
          hasAnimated.current = true;

          const duration = 2000;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = easeOutQuart(progress);
            setCounts(stats.map((s) => s.target * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCounts(stats.map((s) => s.target));
            }
          };

          requestAnimationFrame(tick);
          observer.unobserve(node);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
          <div className="about-stats" ref={statsRef}>
            {stats.map((s, i) => (
              <div className="about-stat" key={s.label}>
                <p className="about-stat-value">
                  {counts[i].toFixed(s.decimals)}
                  {s.suffix}
                </p>
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
