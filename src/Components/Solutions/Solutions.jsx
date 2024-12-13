import React, { useState } from 'react';
import './Solutions.css';
import btnimg from './Image/btn image.png';
import playicon from './Image/play icon.svg';
import { PiArrowBendDoubleUpRightBold } from 'react-icons/pi';

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="Solutions-section">
      <div className="Solutions-title-container">
        <div className="Solutions-title--box">
          <h1>Future of Virtual Reality with Cutting- Edge Solutions.</h1>
          <p>
            Our platform provides diverse VR solutions, including immersive
            virtual tours, interactive training simulations, and social VR
            experiences
          </p>
        </div>
        <div className="Solutions-title-btn-box">
          <button>
            More About Us <PiArrowBendDoubleUpRightBold />
          </button>
        </div>
      </div>

      <div className="Solutions-img-container">
        <div className="Solutions-img-box">
          <a href="#">
            <img src={btnimg} alt="Button" className="btn-img" />
            <img src={playicon} alt="Play Icon" className="play-icon" />
          </a>
        </div>
      </div>

      <div className="Solutions-accordion-container">
        {['Our Mission', 'Pioneers in VR', 'Our Vision'].map((title, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <span>{title}</span>
              <span className="accordion-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>
                  {`Details about ${title}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;