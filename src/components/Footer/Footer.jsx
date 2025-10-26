import React from 'react';
import { smoothScrollTo } from '../../utils/helpers';
import { SOCIAL_LINKS } from '../../data/constants';
import './Footer.css';

const Footer = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              {/* <div className="logo-box">
                <span>L</span>
              </div> */}
              <span className="logo-text">
                Lucknow<span className="logo-accent">.dev</span>
              </span>
            </div>
            <p className="footer-tagline">
              Building the future of tech in Lucknow
            </p>
          </div>

          <div>
            <h4 className="footer-heading">QUICK LINKS</h4>
            <div className="footer-links">
              <a href="#events" onClick={(e) => handleClick(e, '#events')} className="footer-link">
                Events
              </a>
              <a href="#communities" onClick={(e) => handleClick(e, '#communities')} className="footer-link">
                Communities
              </a>
              <a 
                href="https://gdg.community.dev/gdg-lucknow/" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GDG Chapter
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">CONNECT</h4>
            <div className="social-links">
              {SOCIAL_LINKS.map((link, idx) => (
                <a key={idx} href={link.url} className="social-link">
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Lucknow.dev • Made with <span className="footer-heart">💚</span> in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
