import React from 'react';

const CYCImage = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  };

  const contentStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  };

  const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    overflow: 'hidden',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const textContentStyle = {
    padding: '2rem',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={imageWrapperStyle}>
          <img
            src="https://framerusercontent.com/images/G3YCIaItF00AXyHipB2DbQl4.jpg"
            alt="Core exercise demonstration"
            style={imageStyle}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CYCImage;