import React from 'react';
import './Hero.css';
import herobg from './Image/Ellipse 9 (3).png';
import heroimg from './Image/Group 35 (1).png';

const Hero = () => {
  return (
    <section className="hero-hero-section">
      <div className="hero-hero-bg">
        <img src={herobg} alt="Background" />
      </div>
      <div className="hero-hero-container">
        <div className="hero-hero-left-container">
          <div className="hero-hero-left-title-box">
            <div></div>
            <span>---</span>
          </div>
          <h1>We turn ideas </h1>
          <h2>into reality</h2>
          <p>
            Every target requires execution. ******** develops high-quality apps, websites, and systems.
          </p>
          <div className="hero-hero-btn-box">
            <button>Lets Connect</button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="hero-hero-right-container">
          <img src={heroimg} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
