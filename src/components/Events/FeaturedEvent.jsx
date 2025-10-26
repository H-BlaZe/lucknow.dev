import React, { useState, useEffect } from "react";
import { FEATURED_EVENT_TAGS } from "../../data/constants";
import Countdown from "./Countdown";

const IMAGES = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
  "/slide5.jpg",
  "/slide6.jpg",
];

const FeaturedEvent = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="featured-event animate-on-scroll">
      <div className="featured-event-grid">
        {/* --- LEFT SECTION: SLIDESHOW --- */}
        <div className="featured-event-visual">
          <div className="slideshow">
            {IMAGES.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`DevFest Slide ${idx + 1}`}
                className={`slide ${idx === current ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* --- RIGHT SECTION: DETAILS --- */}
        <div className="featured-event-details">
          <div className="event-badge">FLAGSHIP EVENT</div>

          <h3 className="event-title">
            <span className="event-title-green">DevFest</span>
            <br />
            Lucknow 2025
          </h3>
      <div
        style={{ marginBottom:"1rem", display: "flex", justifyContent: "left" }}
      >
        <Countdown />
      </div>

          <p className="event-description">
            The biggest developer conference in Lucknow! Join 500+ developers
            for cutting-edge tech talks, hands-on workshops, and meaningful
            networking.
          </p>

          <div className="event-tags">
            {FEATURED_EVENT_TAGS.map((tag, idx) => (
              <span key={idx} className="event-tag">
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://www.commudle.com/communities/gdg-lucknow/events/devfest-lucknow-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="event-cta"
          >
            REGISTER NOW →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
