import React from "react";

const CampusCard = ({ name, full, url, index, icon }) => {
  return (
    <div className={`campus-card campus-card-${index + 1} animate-on-scroll`}>
      <div className="campus-header">
        <div className="campus-icon">
          <img src={icon} alt={`${name} logo`} className="campus-logo" />
        </div>
        <h4 className="campus-name">{name}</h4>
      </div>
      <p className="campus-full">{full}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="campus-link"
      >
        VIEW CHAPTER →
      </a>
    </div>
  );
};

export default CampusCard;
