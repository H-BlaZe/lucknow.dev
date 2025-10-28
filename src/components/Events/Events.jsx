import React, { useEffect } from 'react';
import Badge from '../Common/Badge';
import FeaturedEvent from './FeaturedEvent';
import EventTypeCard from './EventTypeCard';
import { EVENT_TYPES } from '../../data/constants';
import './Events.css';

const Events = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="events-section" id="events">
      <div className="container">
        <div className="section-header">
          <Badge variant="default">📅 UPCOMING</Badge>
          <h2 className="section-title">
            Tech <span className="title-highlight">Events</span>
          </h2>
          <p className="section-subtitle">
            Join us in shaping the future of tech in Lucknow
          </p>
        </div>

        <FeaturedEvent />

        <div className="event-types-grid">
          {EVENT_TYPES.map(event => (
            <EventTypeCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
