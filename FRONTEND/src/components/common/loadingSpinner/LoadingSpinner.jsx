import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size, color = '#fff' }) => {
  return (
    <div
      className="spinner"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    ></div>
  );
};

export default LoadingSpinner;