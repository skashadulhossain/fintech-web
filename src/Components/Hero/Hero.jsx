import React, { useState, useEffect } from 'react';
import './Hero.css';
import herobg from './Image/hero bg.png';
import heroimg from './Image/heroimage1.png';
import SubscribePopup from '../SubscribePopup/SubscribePopup';

const Hero = () => {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);

  useEffect(() => {
    setShowSubscribePopup(true);
  }, []);

  const handleOpenPopup = () => {
    setShowSubscribePopup(true);
  };

  const handleClosePopup = () => {
    setShowSubscribePopup(false);
  };

  return (
    <>
      <section className="hero-hero-section">
        <div className="hero-hero-bg">
          <img src={herobg} alt="Background" />
        </div>
        <div className="hero-hero-container">
          <div className="hero-hero-left-container">
            <h1>We turn ideas </h1>
            <h2>into reality</h2>
            <p>
              Every target requires execution. PN SOFTWARE TECH PVT. LTD develops high-quality apps, websites, and systems.
            </p>
            <div className="hero-hero-btn-box">
              <button onClick={handleOpenPopup} aria-label="Open subscription popup">Let's Connect</button>
              <button aria-label="Learn more about us">Learn more</button>
            </div>
          </div>
          <div className="hero-hero-right-container">
            <img src={heroimg} alt="Hero" />
          </div>
        </div>
      </section>
      {showSubscribePopup && <SubscribePopup onClose={handleClosePopup} />}
    </>
  );
};

export default Hero;