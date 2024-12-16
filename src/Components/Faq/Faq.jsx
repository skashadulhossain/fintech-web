import React, { useState } from 'react';
import './Faq.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faq1 = () => (
  <div className="Faq1-content">
    <p>No, you do not need special equipment to use VR FZ's services. While using VR-enabled 
      devices such as VR headsets provides the most immersive experience, many of our VR 
      solutions can also be accessed via smartphones and web browsers.</p>
  </div>
);
const Faq2 = () => (
  <div className="Faq1-content">
    <p>A VR website is an online platform designed to provide an immersive, interactive 
      experience using Virtual Reality technology. You can navigate, explore, and interact 
      with content in 3D environments.</p>
  </div>
);
const Faq3 = () => (
  <div className="Faq1-content">
    <p>For the best experience, you’ll need a VR headset (e.g., Oculus, HTC Vive, or 
      PlayStation VR). However, many VR websites also support desktop and mobile devices 
      with limited interactive features.</p>
  </div>
);
const Faq4 = () => (
  <div className="Faq1-content">
    <p>VR websites work best with browsers supporting Web XR or Web VR, such as Chrome, 
      Firefox Reality, or Edge. Some features may be limited in other browsers.</p>
  </div>
);
const Faq5 = () => (
  <div className="Faq1-content">
    <p>Ensure that your browser supports VR. You may need to enable Web XR settings or use 
      a browser extension. While using VR-enabled devices such as VR headsets provides the
       most immersive experience, many of our VR solutions can also be accessed via 
       smartphones and web browsers.</p>
  </div>
);
const Faq6 = () => (
  <div className="Faq1-content">
    <p>No, you do not need special equipment to use VR FZ's services. While using VR-enabled 
      devices such as VR headsets provides the most immersive experience, many of our VR 
      solutions can also be accessed via smartphones and web browsers.</p>
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
            Addresses common queries to provide quick answers and support for
            better understanding of our services and offerings.
          </p>
        </div>
        <div className="Faq-tab-container">
          <div className="Faq-tab-btn-container">
            {[
              { id: 'Faq1', text: "Do I need special equipment to use VR FZ's?" },
              { id: 'Faq2', text: 'What services does VR FZ offer?' },
              { id: 'Faq3', text: "How can I access VR FZ's VR experiences?" },
              { id: 'Faq4', text: 'Can you provide examples of your previous?' },
              { id: 'Faq5', text: "What industries benefit from VR FZ's services?" },
              { id: 'Faq6', text: 'How do I get started with VR FZ?' },
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