'use client';

import { useEffect, useState } from 'react';
import './HolographicUI.css';

export default function HolographicUI() {
  const [isActive, setIsActive] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };

  // Error boundary for this component
  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Interactive Demo Unavailable
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Please contact us to see a live demonstration of our AI automation capabilities.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className={`holo-ui-section ${isActive ? 'active' : ''}`}>
      <div className="grid-plane"></div>
      <div className="stars-container">
        <div className="star-layer"></div>
        <div className="star-layer"></div>
        <div className="star-layer"></div>
      </div>
      
      <div className="nebula"></div>
      
      <div className="checkbox-container">
        <input 
          className="holo-checkbox-input" 
          id="holo-check" 
          type="checkbox"
          onChange={handleToggle}
        />
        <label className="holo-checkbox" htmlFor="holo-check">
          <div className="holo-box">
            <div className="holo-inner"></div>
            <div className="scan-effect"></div>
            <div className="holo-particles">
              <div className="holo-particle"></div>
              <div className="holo-particle"></div>
              <div className="holo-particle"></div>
              <div className="holo-particle"></div>
              <div className="holo-particle"></div>
              <div className="holo-particle"></div>
            </div>

            <div className="activation-rings">
              <div className="activation-ring"></div>
              <div className="activation-ring"></div>
              <div className="activation-ring"></div>
            </div>

            <div className="cube-transform">
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
              <div className="cube-face"></div>
            </div>
          </div>

          <div className="corner-accent"></div>
          <div className="corner-accent"></div>
          <div className="corner-accent"></div>
          <div className="corner-accent"></div>

          <div className="holo-glow"></div>
        </label>

        <div className="status-text"></div>
        <div className="holo-label">HOLO-UI v2.1</div>

        <div className="frequency-spectrum">
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
          <div className="frequency-bar"></div>
        </div>

        <div className="data-chips">
          <div className="data-chip">STATUS: IDLE [0x4F]</div>
          <div className="data-chip">QUANTUM VERIFY: 82.6%</div>
          <div className="data-chip">SYNCH: PENDING</div>
          <div className="data-chip">0x7A2C8B9F</div>
        </div>
      </div>
    </div>
  );
}