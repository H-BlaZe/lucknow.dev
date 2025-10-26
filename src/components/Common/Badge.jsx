import React from 'react';
import './common.css';

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <div className={`badge badge-${variant} ${className}`}>
      {children}
    </div>
  );
};

export default Badge;
