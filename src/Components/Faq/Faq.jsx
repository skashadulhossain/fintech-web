import React, { useState } from 'react';
import './Faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq1 = () => (
  <div className="Faq1-content">
    <p>No, you do not need special equipment to use PN SOFTWARE TECH's services. While using VR-enabled devices such as VR headsets provides the most immersive experience, many of our solutions can also be accessed via smartphones and web browsers.</p>
  </div>
);

const Faq2 = () => (
  <div className="Faq1-content">
    <p>PN SOFTWARE TECH provides a wide range of services, including API integrations, IT solutions, fintech services, and custom software development. Our offerings are designed to help businesses optimize their operations and provide enhanced services to their customers.</p>
  </div>
);

const Faq3 = () => (
  <div className="Faq1-content">
    <p>Our services can be accessed through web platforms, mobile apps, or by integrating our APIs into your existing systems. We offer flexible solutions to suit various business needs and ensure a seamless user experience across all devices.</p>
  </div>
);

const Faq4 = () => (
  <div className="Faq1-content">
    <p>We have successfully worked with clients across different industries, including banking, fintech, travel, and utilities. Some of our notable projects include custom API integrations, multi-recharge systems, and IT solutions for business growth.</p>
  </div>
);

const Faq5 = () => (
  <div className="Faq1-content">
    <p>Our services benefit industries such as finance, banking, travel, retail, and utilities. We provide tailored solutions to meet the unique needs of each industry, helping businesses streamline their operations and enhance customer satisfaction.</p>
  </div>
);

const Faq6 = () => (
  <div className="Faq1-content">
    <p>Getting started with our services is easy! Simply reach out to our team through the contact form or call us directly. We will assess your business needs and recommend the best solutions to help you achieve your goals efficiently.</p>
  </div>
);

const Faq = () => {
  const [activeTab, setActiveTab] = useState('Faq1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Faq1':
        return <Faq1 />;
      case 'Faq2':
        return <Faq2 />;
      case 'Faq3':
        return <Faq3 />;
      case 'Faq4':
        return <Faq4 />;
      case 'Faq5':
        return <Faq5 />;
      case 'Faq6':
        return <Faq6 />;
      default:
        return null;
    }
  };

  return (
    <section className="Faq-section">
      <div className="Faq-container">
        <div className="Faq-title-container">
          <h1>Your Questions Answered</h1>
          <p>
            We understand that you may have some questions. Here are answers to the most frequently asked questions to help you better understand our services and how we can assist you.
          </p>
        </div>
        <div className="Faq-tab-container">
          <div className="Faq-tab-btn-container">
            {[
              { id: 'Faq1', text: "Do I need special equipment to use PN SOFTWARE TECH's services?" },
              { id: 'Faq2', text: 'What services does PN SOFTWARE TECH offer?' },
              { id: 'Faq3', text: 'How can I access PN SOFTWARE TECH’s services?' },
              { id: 'Faq4', text: 'Can you provide examples of your previous work?' },
              { id: 'Faq5', text: 'What industries benefit from PN SOFTWARE TECH’s services?' },
              { id: 'Faq6', text: 'How do I get started with PN SOFTWARE TECH?' },
            ].map((faq) => (
              <button
                key={faq.id}
                className={`Faq-tab-btn-box ${activeTab === faq.id ? 'active' : ''}`}
                onClick={() => handleTabChange(faq.id)}
              >
                <span>{faq.text}</span>
                <div className="Faq-tab-btn-icon">
                  {activeTab === faq.id ? <FaMinus /> : <FaPlus />}
                </div>
              </button>
            ))}
          </div>
          <div className="Faq-tab-content-box">
            <div className="Faq-tab-title-box">
              <h2>Question Answer:</h2>
            </div>
            <div>{renderActiveComponent()}</div>
            <div className="Faq-tab-btn">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
