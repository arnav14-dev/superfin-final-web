import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  placeholder, 
  alt = '', 
  className = '', 
  style = {},
  onLoad,
  onError 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
      onLoad?.();
    };
    
    img.onerror = () => {
      setImageError(true);
      onError?.();
    };
    
    img.src = src;
  }, [src, onLoad, onError]);

  return (
    <div className={`optimized-image-container ${className}`} style={style}>
      {/* Placeholder/Low-quality image */}
      <div 
        className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}
        style={{
          backgroundImage: placeholder ? `url(${placeholder})` : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      
      {/* High-quality image */}
      {!imageError && (
        <div 
          className={`image-main ${imageLoaded ? 'loaded' : ''}`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      )}
      
      {/* Loading indicator */}
      {!imageLoaded && !imageError && (
        <div className="image-loading">
          <div className="loading-spinner-small"></div>
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="image-error">
          <p>Failed to load image</p>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
