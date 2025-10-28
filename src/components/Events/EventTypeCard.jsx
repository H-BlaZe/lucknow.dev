import React from 'react';

const EventTypeCard = ({
  image,
  category,
  title,
  location,
  dateInfo,
  timeLeft,
  description,
  tags,
  registerLink,
  badge,
}) => {
  return (
    <div className={`event-type-card animate-on-scroll`}>
      {image && (
        <div className="event-type-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="event-type-content">
        <div className="event-type-header">
          <span className="event-type-category">{category}</span>
          {badge && <span className="event-type-badge">{badge}</span>}
        </div>

        <h3 className="event-type-title">{title}</h3>

        <div className="event-type-meta">
          <p><strong>📍</strong> {location}</p>
          <p><strong>🗓️</strong> {dateInfo}</p>
        </div>

        <p className="event-type-desc">{description}</p>

        {tags && (
          <div className="event-type-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="event-type-tag">{tag}</span>
            ))}
          </div>
        )}

        {registerLink && (
          <a href={registerLink} target="_blank" rel="noopener noreferrer" className="event-register-btn">
            Register Now →
          </a>
        )}
      </div>
    </div>
  );
};

export default EventTypeCard;
