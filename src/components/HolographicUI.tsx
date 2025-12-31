'use client';

import { useEffect, useState } from 'react';
import './HolographicUI.css';

export default function HolographicUI() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };

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