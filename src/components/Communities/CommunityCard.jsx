import React from "react";

const CommunityCard = ({
  name,
  icon,
  description,
  url,
  buttonText,
  iconClass,
}) => {
  return (
    <div className="community-card animate-on-scroll">
      <img
        src={icon}
        className={`community-icon ${iconClass}`}
        alt={name || "Community Icon"}
      />
      <h3 className="community-title">
        {name.split("\n").map((line, idx) => (
          <React.Fragment key={idx}>
            {line}
            {idx < name.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      <p className="community-desc">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="community-link"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CommunityCard;
