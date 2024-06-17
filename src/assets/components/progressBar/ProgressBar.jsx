import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (progress > 0) {
      const timer = setTimeout(() => {
        setWidth(progress);
      }, 300); 
      return () => clearTimeout(timer); 
    }
  }, [progress]);

  return (
    <div className="progress-bar-container" style={{ width: '100%', backgroundColor: '#2e3b55', borderRadius: '5px', position: 'relative' }}>
      <div
        className="progress-bar"
        style={{
          width: `${width}%`,
          height: '14px',
          borderRadius: '5px',
          transition: 'width 1s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        <span className="progress-text" style={{ position: 'absolute', width: '100%', textAlign: 'center' }}>
          {`${width}%`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
