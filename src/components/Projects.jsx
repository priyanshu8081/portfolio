import React, { useMemo, useState } from 'react';
import projects from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/Projects.css';

const ALL = 'All';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(ALL);
  // Re-run the reveal observer whenever the filter changes, so newly
  // shown cards (which start at opacity 0) get observed and revealed.
  const containerRef = useScrollReveal([activeFilter]);

  const filters = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === ALL) return projects;
    return projects.filter((p) => p.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section projects" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of full-stack and frontend projects. Filter by technology.
          </p>
        </div>

        <div className="projects-filters" data-reveal>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <article
              className="project-card"
              key={project.id}
              data-reveal
              data-reveal-delay={String((i % 4) + 1)}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M10 13a5 5 0 007.07 0l1.93-1.93a5 5 0 00-7.07-7.07L10.5 5.5" />
                    <path d="M14 11a5 5 0 00-7.07 0L5 12.93a5 5 0 007.07 7.07L13.5 18.5" />
                  </svg>
                </div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="project-tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
