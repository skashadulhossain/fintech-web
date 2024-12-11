import React from 'react';
import './AboutUs.css';
import aboutimg1 from './img/man1.png';


const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <section className="about-us">
        <div className="about-us-content">
          <h1 className="about-us-title">About Us</h1>
          <h2 className="about-us-subtitle">
            We Are happy to <br />
            <span> introduce you to  <span className="highlight">Pn Software</span></span>
            <br />
           
          </h2>
          <p className="about-us-description1">
            Pn Software is an IT and Recharge services provider company that
            deals with IT market requirements and custom software.
          </p>
          <p className="about-us-description">
          We are the foremost Recharge API provider in India and issue Multi Recharge API to our great consumers. We have a team of specialists and crackerjack professionals. Our panel of experts is proficient to serve excellence to accomplish your business objectives. We the team of Roundpay are here to aid you in meeting the demanding time limit more productively and economically. We have many years of experience and a dependable delivery structure that promises growth and diminishes hurdles. As the preeminent Multi Recharge Company in Lucknow, we've built a reputation for trustworthiness and reliability.
          </p>
          <button className="about-us-button">more</button>
        </div>
        <div className="about-us-image">
          <img
            src={aboutimg1}
            alt="Team working"
            className="image-main"
          />
          <div className="image-overlay">
            <p>✔ Get 30% off on every 1st month</p>
            <p>✔ Expert teachers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
