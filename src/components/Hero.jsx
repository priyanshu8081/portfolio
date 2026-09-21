import React, { useRef, useCallback } from 'react';
import '../styles/Hero.css';

const TECH_ORBIT = ['React', 'Node.js', 'Express', 'MongoDB', 'JS'];

const Hero = () => {
  const sceneRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const node = sceneRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      node.style.setProperty('--tiltX', `${(-py * 16).toFixed(2)}deg`);
      node.style.setProperty('--tiltY', `${(px * 16).toFixed(2)}deg`);
      node.style.setProperty('--glowX', `${(px * 100 + 50).toFixed(1)}%`);
      node.style.setProperty('--glowY', `${(py * 100 + 50).toFixed(1)}%`);
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const node = sceneRef.current;
    if (!node) return;
    node.style.setProperty('--tiltX', '0deg');
    node.style.setProperty('--tiltY', '0deg');
    node.style.setProperty('--glowX', '50%');
    node.style.setProperty('--glowY', '50%');
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content-grid">
      <div className="hero-inner">
        <div className="hero-left-decor" aria-hidden="true">
          <div className="decor-shape decor-square" />
          <div className="decor-shape decor-orb" />
          <span className="decor-badge decor-badge-1">{'</>'}</span>
          <span className="decor-badge decor-badge-2">{'{ }'}</span>
          <div className="decor-dot d1" />
          <div className="decor-dot d2" />
          <div className="decor-dot d3" />

          <div className="decor-ping-wrap">
            <span className="decor-ping" />
            <span className="decor-ping ping-delay" />
            <span className="decor-ping-core" />
          </div>

          <div className="decor-terminal">
            <span className="decor-terminal-line">
              const dev = <em>"ready"</em>;
            </span>
            <span className="decor-cursor" />
          </div>

          <div className="decor-orbit-mini">
            <span className="mini-core" />
            <div className="decor-mini-ring ring-a">
              <span className="mini-chip-holder" style={{ '--angle': '0deg' }}>
                <span className="mini-chip">UI</span>
              </span>
              <span className="mini-chip-holder" style={{ '--angle': '180deg' }}>
                <span className="mini-chip">UX</span>
              </span>
            </div>
            <div className="decor-mini-ring ring-b">
              <span className="mini-chip-holder outer" style={{ '--angle': '90deg' }}>
                <span className="mini-chip">Git</span>
              </span>
            </div>
          </div>
        </div>

        <p className="hero-greeting" data-reveal>
          <span className="hero-dot" /> Available for opportunities
        </p>

        <h1 className="hero-title" data-reveal data-reveal-delay="1">
          Hi, I'm <span className="gradient-text">Priyanshu Chauhan</span>
          <br />
          MERN Stack Developer
        </h1>

        <p className="hero-subtitle" data-reveal data-reveal-delay="2">
          B.Tech CSE student from Lucknow building fast, reliable full-stack
          web applications with <strong>React</strong>, <strong>Node.js</strong>,{' '}
          <strong>Express</strong> and <strong>MongoDB</strong> — from REST
          APIs and authentication to polished, production-ready interfaces.
        </p>

        <div className="hero-cta" data-reveal data-reveal-delay="3">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="hero-socials" data-reveal data-reveal-delay="4">
          <a
            href="https://github.com/priyanshu8081"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hero-social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/priyanshu-chauhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hero-social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a href="mailto:pc0749711189@gmail.com" aria-label="Email" className="hero-social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 6 10-6" />
            </svg>
          </a>
        </div>

        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
          <span />
        </a>
      </div>

      <div
        className="hero-visual"
        ref={sceneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      >
        <div className="hero-3d-stage">
          <div className="hero-3d-glow" />

          <div className="orbit-core" />

          <div className="orbit-ring ring-inner">
            {TECH_ORBIT.slice(0, 3).map((label, i) => (
              <span
                className="orbit-chip-holder"
                key={label}
                style={{ '--angle': `${i * 120}deg` }}
              >
                <span className="orbit-chip">{label}</span>
              </span>
            ))}
          </div>

          <div className="orbit-ring ring-outer">
            {TECH_ORBIT.slice(3).map((label, i) => (
              <span
                className="orbit-chip-holder"
                key={label}
                style={{ '--angle': `${i * 180 + 45}deg` }}
              >
                <span className="orbit-chip">{label}</span>
              </span>
            ))}
          </div>

          <div className="hero-3d-particle p1" />
          <div className="hero-3d-particle p2" />
          <div className="hero-3d-particle p3" />
          <div className="hero-3d-particle p4" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
