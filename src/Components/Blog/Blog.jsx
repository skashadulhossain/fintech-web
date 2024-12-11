import React, { useState } from 'react';
import '../Blog/Blog.css';
import Blog1img from './Image/Blog1 img.png';
import Blog2img from './Image/Blog2 img.png';
import Blog3img from './Image/Blog3 img.png';
import Blog4img from './Image/Saly-1.png';
import Blog5img from './Image/Saly-2.png';
import Blog6img from './Image/Saly-3.png';
import Blog7img from './Image/Blog2 img.png';

// Blog Components
const Blog1 = () => (
  <div className="Blog1-content">
    <img src={Blog1img} alt="Blog 1 Illustration" />
  </div>
);
const Blog2 = () => (
  <div className="Blog2-content">
    <img src={Blog2img} alt="Blog 2 Illustration" />
  </div>
);
const Blog3 = () => (
  <div className="Blog3-content">
    <img src={Blog3img} alt="Blog 3 Illustration" />
  </div>
);
const Blog4 = () => (
  <div className="Blog4-content">
    <img src={Blog4img} alt="Blog 4 Illustration" />
  </div>
);
const Blog5 = () => (
  <div className="Blog5-content">
    <img src={Blog5img} alt="Blog 5 Illustration" />
  </div>
);
const Blog6 = () => (
  <div className="Blog6-content">
    <img src={Blog6img} alt="Blog 6 Illustration" />
  </div>
);
const Blog7 = () => (
  <div className="Blog7-content">
    <img src={Blog7img} alt="Blog 7 Illustration" />
  </div>
);

const Blog = () => {
  const [activeTab, setActiveTab] = useState('Blog1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Blog1':
        return <Blog1 />;
      case 'Blog2':
        return <Blog2 />;
      case 'Blog3':
        return <Blog3 />;
      case 'Blog4':
        return <Blog4 />;
      case 'Blog5':
        return <Blog5 />;
      case 'Blog6':
        return <Blog6 />;
      case 'Blog7':
        return <Blog7 />;
      default:
        return <Blog1 />;
    }
  };

  return (
    <div className='Blog'>
      <div className="Blog-box">
        <div className="Blog-left">
          <div className="Blog-left-round">
            {renderActiveComponent()}
          </div>
        </div>
        <div className="Blog-right">
          <div className="Blog-right-main">
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog1' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog1')}
            >
              1. Focus on Quality 
              <p>Complete assurance of work quality and timely project execution.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog2' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog2')}
            >
              2. Customer Satisfaction
              <p>Developing applications with the latest technology to meet customer expectations and satisfaction.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog3' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog3')}
            >
              3. Experience
              <p>Over 10+ years of expertise in the Telecom and Fintech industries.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog4' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog4')}
            >
              4. Achievements
              <p>Successfully delivered 1000+ software solutions in the last decade.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog5' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog5')}
            >
              5. Comprehensive Services
              <p>All supporting services for Fintech and Recharge industries under one roof.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog6' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog6')}
            >
              6. 24/7 Support and Services
              <p>Round-the-clock support for billing, recharge bill payment, and money transfer services.</p>
            </button>
            <button 
              className={`Blog-Hidden-box ${activeTab === 'Blog7' ? 'active' : ''}`} 
              onClick={() => handleTabChange('Blog7')}
            >
              7. Industry Leadership
              <p>Offering the best revenue-sharing model in the industry.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
