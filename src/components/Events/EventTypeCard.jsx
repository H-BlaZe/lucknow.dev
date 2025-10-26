import React from 'react';

const EventTypeCard = ({ icon, title, description, badge, type }) => {
  return (
    <div className={`event-type-card ${type} animate-on-scroll`}>
      <div className="event-type-icon">{icon}</div>
      <h4 className="event-type-title">
        {title.split('\n').map((line, idx) => (
          <React.Fragment key={idx}>
            {line}{idx < title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h4>
      <p className="event-type-desc">{description}</p>
      <div className="event-type-badge">{badge}</div>
    </div>
  );
};

export default EventTypeCard;
