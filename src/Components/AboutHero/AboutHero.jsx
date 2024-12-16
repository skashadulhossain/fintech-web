import React from 'react';
import './AboutHero.css';
import herobg from './Image/Ellipse 9 (3).png';

const AboutHero = () => {
  return (
    <>

    <section className="AboutHero-sectiion">
        <div className="AboutHero-bg">
            <img src={herobg} alt="Background" />
        </div>
        <div className="AboutHero-main-container">
          <div className="AboutHero-container">
            <div className="AboutHero-title-box">
                <h4>About our company</h4>
                <h1>The <span>first</span> decentralized <span>dynamic 
                marketplace</span> for institutional unsecured capital.</h1>
            </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default AboutHero;