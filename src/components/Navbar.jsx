import React, { useEffect, useState } from 'react';
import navLinks from '../data/navLinks';
import useActiveSection from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span className="navbar-logo-bracket">&lt;</span>
          Priyanshu
          <span className="navbar-logo-bracket">/&gt;</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-mobile-actions">
            <a href="#contact" className="btn btn-primary btn-sm" onClick={handleLinkClick}>
              Let's Talk
            </a>
          </div>
        </nav>

        <div className="navbar-actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-sm navbar-cta">
            Let's Talk
          </a>
          <button
            className={`navbar-burger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
