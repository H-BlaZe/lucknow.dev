import React, { useState, useEffect } from 'react';
import { smoothScrollTo } from '../../utils/helpers';
import { NAV_LINKS } from '../../data/constants';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <nav className="navbar-content">
            {/* Logo */}
            <a 
              href="#home" 
              className="navbar-logo"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <div className="logo-icon">
                <span>L</span>
              </div>
              <span className="logo-text">
                Lucknow<span className="logo-accent">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {NAV_LINKS.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`hamburger ${mobileMenuOpen ? 'hamburger-active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-overlay-active' : ''}`}>
        <div className="mobile-menu-content">
          {/* Mobile Logo */}
          <div className="mobile-menu-header">
            <a 
              href="#home" 
              className="mobile-logo"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              {/* <div className="logo-icon">
                <span>L</span>
              </div>
              <span className="logo-text">
                Lucknow<span className="logo-accent">.dev</span>
              </span> */}
            </a>
            {/* <button 
              className="mobile-close"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}
          </div>

          {/* Mobile Navigation */}
          <nav className="mobile-nav">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="mobile-nav-number">0{idx + 1}</span>
                <span className="mobile-nav-text">{link.name}</span>
                <span className="mobile-nav-arrow">→</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="mobile-menu-footer">
            <div className="mobile-footer-text">Built with 💚 in Lucknow</div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;