import React, { useEffect, useRef, useState } from 'react';
import Button from '../Common/Button';
import Badge from '../Common/Badge';
import { smoothScrollTo } from '../../utils/helpers';
import { STATS } from '../../data/constants';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  // Calculate parallax values
  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(1 - scrollY / 600, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.95);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Animated Background Elements */}
      <div className="hero-bg-wrapper" style={{ transform: `translateY(${parallaxY}px)` }}>
        <div className="hero-grid-bg" />
        <div className="hero-gradient-orb hero-gradient-orb-1" />
        <div className="hero-gradient-orb hero-gradient-orb-2" />
        <div className="hero-gradient-orb hero-gradient-orb-3" />
      </div>
      
      {/* Floating Shapes with Parallax */}
      <div 
        className="hero-shape hero-shape-1" 
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
      />
      <div 
        className="hero-shape hero-shape-2" 
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${45 + scrollY * 0.15}deg)` }}
      />
      <div 
        className="hero-shape hero-shape-3" 
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div 
        className="hero-shape hero-shape-4" 
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * -0.1}deg)` }}
      />

      {/* Main Content */}
      <div className="container hero-content">
        <div 
          className={`hero-card ${isVisible ? 'hero-card-visible' : ''}`}
          style={{ 
            opacity: opacity,
            transform: `scale(${scale})`
          }}
        >
          <div className="hero-card-content">
            <Badge variant="dark" className="hero-badge-animated">
            THE NAWAB ECOSYSTEM
            </Badge>

            <h1 className="hero-title">
              <span className="hero-title-line hero-title-line-1">Built For & By</span>
              <span className="hero-title-line hero-title-line-2">
                the <span className="hero-highlight">Developers</span>
              </span>
              <span className="hero-title-line hero-title-line-3">
                of <span className="hero-city">Lucknow</span>
              </span>
            </h1>

            <p className="hero-description">
              Your premier hub for tech events, learning, and building meaningful 
              connections in Lucknow's thriving developer ecosystem.
            </p>

            <div className="hero-buttons">
              <Button 
                variant="primary" 
                onClick={(e) => handleClick(e, '#events')}
                className="hero-btn-animated"
              >
                Explore Events →
              </Button>
              <Button 
                variant="secondary" 
                onClick={(e) => handleClick(e, '#communities')}
                className="hero-btn-animated hero-btn-delay"
              >
                Join Community
              </Button>
            </div>

            <div className="hero-stats">
              {STATS.map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`stat-card ${stat.type} stat-card-animated`}
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="hero-card-corner hero-card-corner-tl" />
          <div className="hero-card-corner hero-card-corner-tr" />
          <div className="hero-card-corner hero-card-corner-bl" />
          <div className="hero-card-corner hero-card-corner-br" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" style={{ opacity: opacity }}>
        <div className="scroll-indicator-line" />
        <span className="scroll-indicator-text">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;