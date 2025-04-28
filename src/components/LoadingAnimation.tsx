import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p className="loading-text">加载中...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation; 